import ServiceItem from "@/app/_components/service-item"
import { Button } from "@/app/_components/ui/button"
import { Card, CardContent } from "@/app/_components/ui/card"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

async function BarbershopPage({ params }: BarbershopPageProps) {
  const { id } = await params
  const barbershop = await db.baberShop.findUnique({
    where: {
      id: id,
    },
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      {/* Imagem */}
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
          alt={barbershop?.name}
        />
        <Button
          size="icon-lg"
          variant="secondary"
          className="absolute top-4 left-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>
        <Button
          size="icon-lg"
          variant="secondary"
          className="absolute top-4 right-4"
        >
          <MenuIcon />
        </Button>
      </div>
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop?.name}</h1>
        <div className="mb-2 flex items-center gap-1">
          <MapPinIcon className="text-[#8162FF]" size={18} />
          <p>{barbershop?.address}</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="fill-[#8162FF] text-[#8162FF]" size={18} />
          <p>5,0 (490 avaliações)</p>
        </div>
      </div>

      {/* DECRIÇÃO */}
      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="text-xs text-gray-400 uppercase">SOBRE NÓS</h2>
        <p className="text-sm">{barbershop?.description}</p>
      </div>

      {/* SERVIÇOS */}
      <div className="space-y-5 border-b border-solid p-5">
        <h2 className="text-xs text-gray-400 uppercase">SERVIÇOS</h2>
        {barbershop.services.map((service) => (
          <ServiceItem service={service} key={service.id} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopPage
