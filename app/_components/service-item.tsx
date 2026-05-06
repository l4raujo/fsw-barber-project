import Image from "next/image"
import { BaberShopService } from "../generated/prisma/client"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

interface ServiceItemProps {
  service: BaberShopService
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card key={service.id}>
      <CardContent className="flex items-center gap-5">
        <div className="relative min-h-[110px] max-w-[110px] min-w-[110px]">
          <Image
            src={service.imageUrl}
            alt={service.name}
            width={110}
            height={110}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full space-y-3">
          <h2 className="text-md text-white">{service.name}</h2>
          <p className="text-gray-400">{service.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-[#8162FF]">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>
            <Button variant="secondary">Reservar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceItem
