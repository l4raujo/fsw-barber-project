import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

// Todo receber agendamento como props
const BookingItem = () => {
  return (
    <>
      <h2 className="mt-6 mb-6 text-xs text-gray-400 uppercase">
        agendamentos
      </h2>
      <Card className="p-0">
        <CardContent className="flex justify-between p-0">
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit bg-[#8162FF] text-white">Confirmado</Badge>
            <h3>Corte de cabelo</h3>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage
                  src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
                  height={6}
                  width={6}
                />
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
    </>
  )
}

export default BookingItem
