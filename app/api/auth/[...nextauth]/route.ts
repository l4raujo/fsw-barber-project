import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google"
import { db } from "@/app/_lib/prisma"
import { Adapter } from "next-auth/adapters"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcryptjs"

const handler = NextAuth({
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await db.user.findUnique({
          where: {
            email: credentials?.email,
          },
        })

        if (!credentials?.email || !credentials.password) {
          return null
        }

        if (!user) {
          return null
        }

        const isPassordValid = await compare(
          credentials?.password as string,
          user?.password as string,
        )

        if (!isPassordValid) {
          return null
        }

        return user
      },
    }),
  ],
})

export { handler as GET, handler as POST }
