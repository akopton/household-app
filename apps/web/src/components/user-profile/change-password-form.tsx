"use client"

import { useForm } from "react-hook-form"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Form,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { TFormField } from "@/types/form-field"

export const ChangePasswordForm = () => {
  const form = useForm()

  const fields: TFormField[] = [
    {
      name: "oldPassword",
      label: "Old Password",
      type: "password",
    },
    {
      name: "newPassword",
      label: "New Password",
      type: "password",
      description: "Password must containt at least 8 characters.",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
    },
  ]

  return (
    <Form {...form}>
      <form className="flex flex-col gap-5 items-start">
        {fields.map((f) => (
          <FormField
            key={f.name}
            control={form.control}
            name={f.name}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {f.label}
                    <span className="text-destructive">*</span>
                  </div>
                  {f.description && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="w-4 h-4" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{f.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    {...field}
                    type={f.type}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button className="cursor-pointer">Change password</Button>
      </form>
    </Form>
  )
}
