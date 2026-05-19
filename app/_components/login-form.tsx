"use client"

import { Input } from "./ui/input"

type LoginFormProps = {
  email: string
  password: string
  loginError: boolean

  setEmail: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
}

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  loginError,
}: LoginFormProps) => {
  return (
    <div className="flex flex-col gap-5 px-4 pb-5">
      <div className="flex flex-col gap-2">
        <p>Email</p>
        <Input
          placeholder="Digite seu email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={loginError ? "border-red-500" : ""}
        ></Input>
      </div>
      <div className="flex flex-col gap-2">
        <p>Senha</p>
        <Input
          placeholder="Digite sua senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={loginError ? "border-red-500" : "border-none"}
        ></Input>
      </div>
    </div>
  )
}

export default LoginForm
