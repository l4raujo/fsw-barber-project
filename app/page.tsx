import Image from "next/image"
import { db } from "./_lib/prisma"
import { quickSearchOptions } from "./_constants/search"
import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { Card, CardContent } from "./_components/ui/card"
import BarberShopItem from "./_components/barbershop-item"
import BookingItem from "./_components/booking-item"
import { SearchIcon } from "lucide-react"

const Home = async () => {
  // chama meu banco de dados
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

        {/* Agendamentos */}
        <BookingItem />

        {/* Recomendados */}
        <h2 className="mt-6 mb-6 text-xs text-gray-400 uppercase">
          recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershop.map((barbershop) => (
            <BarberShopItem barbershop={barbershop} key={barbershop.id} />
          ))}
        </div>

        {/* Populares */}
        <h2 className="mt-6 mb-6 text-xs text-gray-400 uppercase">populares</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarberShopItem barbershop={barbershop} key={barbershop.id} />
          ))}
        </div>

        {/* Footer */}
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
