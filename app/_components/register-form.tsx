import { Input } from "./ui/input"

const RegisterForm = () => {
  return (
    <div className="space-y-5 px-5 pb-5">
      <div className="flex flex-col gap-2">
        <p>Nome</p>
        <Input placeholder="Digite seu nome" type="email"></Input>
      </div>
      <div className="flex flex-col gap-2">
        <p>Email</p>
        <Input placeholder="Digite seu email" type="email"></Input>
      </div>
      <div className="flex flex-col gap-2">
        <p>Senha</p>
        <Input placeholder="Digite sua senha" type="email"></Input>
      </div>
    </div>
  )
}

export default RegisterForm
