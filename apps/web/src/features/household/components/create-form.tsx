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
import { useHouseholdCreateForm } from "@/features/household/hooks/use-household-create-form"
import { useTranslations } from "next-intl"

const translationPath =
  "dashboardPage.onboardingModal.tabs.createHousehold.form"

export const CreateForm = ({ id }: { id?: string }) => {
  const t = useTranslations(translationPath)
  const { form, onSubmit } = useHouseholdCreateForm()

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
              <FormLabel>{t("name")}</FormLabel>
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
              <FormLabel htmlFor="invited-users">{t("invitedUsers")}</FormLabel>

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
                onDelete={(email) =>
                  field.onChange(field.value?.filter((el) => el !== email))
                }
              />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
