import React from "react"
import { Button } from "./ui/button"

interface SearchServiceItemProps {
  name: string
  icon: React.ReactNode
}

const SearchServiceItem = ({ name, icon }: SearchServiceItemProps) => {
  return (
    <Button className="h-12 gap-2 p-5" variant="secondary">
      {icon}
      {name}
    </Button>
  )
}

export default SearchServiceItem
