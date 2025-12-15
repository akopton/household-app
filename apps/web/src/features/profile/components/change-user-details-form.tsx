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
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TFormField } from "@/types/form-field"
import { TUser } from "@/types/user"

export const ChangeUserDetailsForm = ({
  data,
  onSubmit,
  onCancel,
}: {
  data?: TUser | null
  onSubmit: (data: Partial<TUser>) => void
  onCancel: () => void
}) => {
  const form = useForm()

  const fields: TFormField[] = [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      value: data?.firstName,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      value: data?.lastName,
    },
    { name: "email", label: "Email", type: "email", value: data?.email },
  ]

  return (
    <Form {...form}>
      <form
        className="w-full flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {fields.map((f) => (
          <FormField
            key={f.name}
            control={form.control}
            defaultValue={f.value}
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

        <div className="flex w-full items-center justify-between">
          <Button
            className="cursor-pointer"
            type="button"
            onClick={onCancel}
            variant="outline"
          >
            Cancel
          </Button>
          <Button className="cursor-pointer">Submit</Button>
        </div>
      </form>
    </Form>
  )
}
