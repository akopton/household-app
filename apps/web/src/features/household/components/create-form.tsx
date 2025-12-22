"use client"

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { InvitedUsersInput } from "@/features/household/components/invited-users-input"
import { InvitedUsersList } from "@/features/household/components/invited-users-list"
import { zodResolver } from "@hookform/resolvers/zod"
import { createHouseholdFormSchema } from "@household/shared"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import z from "zod"

export const CreateForm = ({ id }: { id?: string }) => {
  const t = useTranslations("dashboardPage.householdCreate")
  const form = useForm<z.infer<typeof createHouseholdFormSchema>>({
    defaultValues: { name: "", invitedUsers: [] },
    resolver: zodResolver(createHouseholdFormSchema, {
      error: (issue) => {
        if (issue.code === "too_small") {
          if (issue.path && issue.path[0] === "name") {
            return t("error.nameRequired")
          }
        }

        return t("error.root")
      },
    }),
  })

  const onSubmit = async (data: z.infer<typeof createHouseholdFormSchema>) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form
        id={id}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-start"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>{t("form.name")}</FormLabel>
              <Input {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="invitedUsers"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel htmlFor="invited-users">
                {t("form.invitedUsers")}
              </FormLabel>

              <InvitedUsersInput
                id="invited-users"
                name="invitedUsers"
                placeholder="Email"
                value={field.value}
                onChange={field.onChange}
                onError={(error) =>
                  form.setError("invitedUsers", { message: error })
                }
                clearError={() => form.clearErrors("invitedUsers")}
              />
              <FormMessage />
              <InvitedUsersList
                data={field.value}
                onDelete={(index) =>
                  field.onChange(field.value?.filter((_, i) => i !== index))
                }
              />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
