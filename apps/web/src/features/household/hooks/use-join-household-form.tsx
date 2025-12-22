"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { joinHouseholdFormSchema } from "@household/shared"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import z from "zod"

const translationPath = "dashboardPage.onboardingModal.tabs.joinHousehold.form"

export const useJoinHouseholdForm = () => {
  const t = useTranslations(translationPath)
  const form = useForm<z.infer<typeof joinHouseholdFormSchema>>({
    defaultValues: { code: "" },
    resolver: zodResolver(joinHouseholdFormSchema, {
      error: (issue) => {
        if (issue.code === "too_small") {
          if (issue.path && issue.path[0] === "code") {
            return t("error.codeRequired")
          }
        }

        return t("error.root")
      },
    }),
  })

  const onSubmit = (data: z.infer<typeof joinHouseholdFormSchema>) => {
    console.log(data.code)
  }

  return { form, onSubmit }
}
