import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Lucas!</h2>
        <p>Segunda-feira, 13 de abril</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button className="bg-[#8162FF] text-white">
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-2 h-[235px] w-full overflow-hidden">
          <Image
            src="/banner-01.png"
            alt="banner"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
