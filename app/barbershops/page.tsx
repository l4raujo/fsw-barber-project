import BarberShopItem from "../_components/barbershop-item"
import { db } from "../_lib/prisma"

interface BarbershopsPageProps {
  searchParams: Promise<{
    search?: string
  }>
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
  const search = (await searchParams)?.search
  const barbershops = await db.baberShop.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
  })
  return (
    <div>
      <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
        Resultado para &quot;{search}&quot;
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {barbershops.map((barbershop) => (
          <BarberShopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopsPage
