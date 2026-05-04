"use client"

import { Smartphone } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success("Telefone copiado com sucesso!", {
      position: "top-center",
    })
  }
  return (
    <div className="flex justify-between" key={phone}>
      <div className="flex items-center gap-2">
        <Smartphone />
        <p className="text-sm">{phone}</p>
      </div>
      <div>
        <Button variant="outline" onClick={() => handleCopyPhoneClick(phone)}>
          Copiar
        </Button>
      </div>
    </div>
  )
}

export default PhoneItem
