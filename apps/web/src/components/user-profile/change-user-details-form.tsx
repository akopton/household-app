"use client"

import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { TFormField } from "@/types/form-field"

export const ChangeUserDetailsForm = () => {
  const form = useForm()

  const fields: TFormField[] = [
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
  ]

  return (
    <Form {...form}>
      <form>
        {fields.map((f) => (
          <FormField
            key={f.name}
            control={form.control}
            name={f.name}
            render={({ field }) => (
              <FormItem {...field}>
                <FormLabel>{f.label}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type={f.type}
                  />
                </FormControl>
                <FormDescription>{f.description}</FormDescription>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          />
        ))}

        <Button className="cursor-pointer">Submit</Button>
      </form>
    </Form>
  )
}
