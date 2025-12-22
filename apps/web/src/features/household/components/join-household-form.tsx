"use client"

import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useJoinHouseholdForm } from "@/features/household/hooks/use-join-household-form"
import { useTranslations } from "next-intl"

const translationPath = "dashboardPage.onboardingModal.tabs.joinHousehold.form"

export const JoinHouseholdForm = () => {
  const { form, onSubmit } = useJoinHouseholdForm()
  const t = useTranslations(translationPath)

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <Input {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="self-center">{t("join")}</Button>
      </form>
    </Form>
  )
}
