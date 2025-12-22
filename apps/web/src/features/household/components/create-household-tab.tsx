import { TabsContent } from "@/components/ui/tabs"
import { CreateForm } from "@/features/household/components/create-form"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"

const translationPath = "dashboardPage.onboardingModal.tabs.createHousehold"

export const CreateHouseholdTab = () => {
  const t = useTranslations(translationPath)
  return (
    <TabsContent
      value="create"
      className="space-y-4 flex flex-col"
    >
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">{t("description")}</p>
      </div>
      <CreateForm id="household-create-form" />
      <Button
        type="submit"
        form="household-create-form"
        className="self-center"
      >
        {t("form.create")}
      </Button>
    </TabsContent>
  )
}
