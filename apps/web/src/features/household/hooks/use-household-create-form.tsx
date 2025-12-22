import { zodResolver } from "@hookform/resolvers/zod"
import { createHouseholdFormSchema } from "@household/shared"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import z from "zod"

const translationPath =
  "dashboardPage.onboardingModal.tabs.createHousehold.form"

export const useHouseholdCreateForm = () => {
  const t = useTranslations(translationPath)

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

  return { form, onSubmit }
}
