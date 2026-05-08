import { db } from "@/app/_lib/prisma"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()

  const userExists = await db.user.findUnique({
    where: {
      email: body.email,
    },
  })

  if (userExists) {
    return NextResponse.json({ error: "Usuário já existe" }, { status: 400 })
  }

  const hashedPassword = await bcrypt.hash(body.password, 10)

  const user = await db.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: hashedPassword,
    },
  })

  return NextResponse.json(user)
}
