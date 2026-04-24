import Header from "@/components/header"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarberShopItem from "@/components/barbershop-item"

interface QuickSearchOption {
  imageUrl: string
  title: string
}

const quickSearchOptions: QuickSearchOption[] = [
  {
    imageUrl: "/scissors.svg",
    title: "Cabelo",
  },
  {
    imageUrl: "/beard.svg",
    title: "Barba",
  },
  {
    imageUrl: "/finish.svg",
    title: "Acabamento",
  },
  {
    imageUrl: "/sobrancelha.svg",
    title: "Sobrancelha",
  },
  {
    imageUrl: "/massagem.svg",
    title: "Massagem",
  },
  {
    imageUrl: "/hidratacao.svg",
    title: "Hidratação",
  },
]

const Home = async () => {
  // chamar meu banco de dados
  const barbershop = await db.baberShop.findMany({})
  const popularBarbershops = await db.baberShop.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })
  return (
    <div>
      {/* Header */}
      <Header />
      <div className="p-5">
        {/* Texto */}
        <h2 className="text-xl font-bold">Olá, Lucas!</h2>
        <p>Segunda-feira, 13 de abril</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button className="bg-[#8162FF] text-white">
            <SearchIcon />
          </Button>
        </div>

        {/* Busca Rapida */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="h-12 gap-2 p-5"
              variant="secondary"
              key={option.title}
            >
              <Image src={option.imageUrl} alt="icon" width={16} height={16} />
              {option.title}
            </Button>
          ))}
        </div>

        {/* Imagem */}
        <div className="relative min-h-[225px] w-full overflow-hidden">
          <Image
            src="/banner-01.png"
            alt="banner"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <h2 className="mt-6 mb-6 text-xs text-gray-400">AGENDAMENTOS</h2>
        <Card className="p-0">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit bg-[#8162FF] text-white">
                Confirmado
              </Badge>
              <h3>Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p>Barbearia fsw</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Fevereiro</p>
              <p className="text-2xl">05</p>
              <p>20:00</p>
            </div>
          </CardContent>
        </Card>
        <h2 className="mt-6 mb-6 text-xs text-gray-400 uppercase">
          recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershop.map((barbershop) => (
            <BarberShopItem barbershop={barbershop} key={barbershop.id} />
          ))}
        </div>
        <h2 className="mt-6 mb-6 text-xs text-gray-400 uppercase">populares</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarberShopItem barbershop={barbershop} key={barbershop.id} />
          ))}
        </div>
        <footer>
          <Card className="mt-6">
            <CardContent className="px-5 py-6 text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold">FSW Barber</span>
            </CardContent>
          </Card>
        </footer>
      </div>
    </div>
  )
}

export default Home
