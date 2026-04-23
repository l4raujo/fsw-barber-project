import { EyeIcon, FootprintsIcon } from "lucide-react"
import Image from "next/image"
import SearchServiceItem from "./search-service-item"

const SearchServiceList = () => {
  const services = [
    {
      name: "Cabelo",
      icon: <Image src="scissors.svg" alt="Cabelo" width={16} height={16} />,
    },
    {
      name: "Barba",
      icon: <Image src="beard.svg" alt="Cabelo" width={16} height={16} />,
    },
    {
      name: "Acabamento",
      icon: <Image src="finish.svg" alt="Cabelo" width={16} height={16} />,
    },
    {
      name: "Pezinho",
      icon: <FootprintsIcon size={16} />,
    },
    {
      name: "Sobrancelha",
      icon: <EyeIcon size={16} />,
    },
  ]

  return (
    <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      {services.map((service) => (
        <SearchServiceItem
          key={service.name}
          icon={service.icon}
          name={service.name}
        />
      ))}
    </div>
  )
}

export default SearchServiceList
