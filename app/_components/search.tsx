"use client"

import { SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { z } from "zod"
import { Field, FieldError } from "@/_components/ui/field"

const formSchema = z.object({
  search: z.string().trim().min(1, {
    message: "Digite algo para buscar",
  }),
})

const Search = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  })

  const router = useRouter()

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    router.push(`/barbershops?search=${data.search}`)
  }
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="flex gap-2">
      <Controller
        control={form.control}
        name="search"
        render={({ field, fieldState }) => (
          <Field className="w-full">
            <Input
              placeholder="Faça sua busca..."
              {...field}
              className="w-full"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button type="submit">
        <SearchIcon />
      </Button>
    </form>
  )
}

export default Search
