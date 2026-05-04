import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Calendar, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/_components/ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.png" height={18} width={120} alt="Logo" />
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex items-center gap-3 border-b border-solid p-3">
              <Avatar>
                <AvatarImage src="http://github.com/l4raujo.png" />
              </Avatar>
              <div>
                <p className="font-bold">Lucas Carvalho</p>
                <p className="text-xs">Lucas@gmail.com</p>
              </div>
            </div>
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
              <Button
                className="justify-start gap-2 p-6 text-white"
                variant="ghost"
              >
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
              <Button className="justify-start gap-2 p-6" variant="ghost">
                <LogOutIcon size={18} />
                Sair da conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
