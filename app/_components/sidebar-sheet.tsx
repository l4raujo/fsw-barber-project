"use client"

import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/_components/ui/sheet"
import { HomeIcon, Calendar, LogOutIcon, LogInIcon } from "lucide-react"
import { quickSearchOptions } from "../_constants/search"
import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/_components/ui/dialog"
import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar, AvatarImage } from "./ui/avatar"

const SidebarSheet = () => {
  const { data } = useSession()
  const handleLoginWithGoogleClick = () => signIn("google")
  const handleLogoutClick = () => signOut()

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>
      {data?.user ? (
        <div className="flex items-center gap-2 border-b border-solid px-5 pb-5">
          <Avatar>
            <AvatarImage src={data?.user?.image ?? ""} />
          </Avatar>
          <div>
            <p className="font-bold">{data.user.name}</p>
            <p className="text-xs">{data.user.email}</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-3 border-b border-solid px-5 pb-5">
          <h2 className="text-lg">Olá faça seu login</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon-lg">
                <LogInIcon />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="p-5 text-center">
                <DialogTitle>Faça seu login na plataforma</DialogTitle>
                <DialogDescription>
                  Conecte-se usando sua conta do Google
                </DialogDescription>
              </DialogHeader>
              <Button
                variant="outline"
                className="gap-2"
                onClick={handleLoginWithGoogleClick}
              >
                <Image
                  src="/Google.svg"
                  width={24}
                  height={24}
                  alt="Login com o google"
                />
                Google
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      )}

      <div className="flex flex-col gap-2 border-b border-solid p-3">
        <SheetClose asChild>
          <Button
            className="justify-start gap-2 p-6 text-white"
            variant="ghost"
            asChild
          >
            <Link href="/">
              <HomeIcon size={20} />
              Inicio
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2 p-6 text-white" variant="ghost">
          <Calendar size={20} />
          Agendamentos
        </Button>
      </div>
      <div className="flex flex-col gap-2 border-b border-solid p-3">
        {quickSearchOptions.map((item) => (
          <Button
            key={item.title}
            className="justify-start gap-2 p-6 text-white"
            variant="ghost"
          >
            <Image
              src={item.imageUrl}
              height={18}
              width={18}
              alt={item.title}
            />
            {item.title}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-2 border-b border-solid p-5">
        <Button
          className="justify-start gap-2 p-6"
          variant="ghost"
          onClick={handleLogoutClick}
        >
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
