import { FieldSeparator } from "@/components/ui/field"
import { TabsContent } from "@/components/ui/tabs"
import { InvitesList } from "@/features/household/components/invites-list"
import { JoinHouseholdForm } from "@/features/household/components/join-household-form"
import { HouseholdInvite } from "@/features/household/types"
import { useTranslations } from "next-intl"

const translationPath = "dashboardPage.onboardingModal.tabs.joinHousehold"

export const JoinHouseholdTab = ({
  invites,
}: {
  invites: HouseholdInvite[]
}) => {
  const t = useTranslations(translationPath)
  return (
    <TabsContent
      value="join"
      className="space-y-4 flex flex-col gap-5"
    >
      <div>
        <p className="text-sm text-muted-foreground">{t("description")}</p>
      </div>
      <InvitesList invites={invites} />
      <FieldSeparator labelClassName="bg-background" />
      <JoinHouseholdForm />
    </TabsContent>
  )
}
