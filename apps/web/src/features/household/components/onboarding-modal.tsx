"use client"

import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { HouseholdInvite } from "@/features/household/types"
import { CreateHouseholdTab } from "@/features/household/components/create-household-tab"
import { JoinHouseholdTab } from "@/features/household/components/join-household-tab"

const translationPath = "dashboardPage.onboardingModal"

export const OnboardingModal = ({
  invites,
}: {
  invites: HouseholdInvite[]
}) => {
  const t = useTranslations(translationPath)
  const [open, setOpen] = useState(true)

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogContent
        aria-describedby={undefined}
        showCloseButton={false}
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>{t("title")}</DialogTitle>
          <DialogDescription>{t("subtitle")}</DialogDescription>
        </DialogHeader>

        <Tabs
          defaultValue="create"
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="create">
              {t("tabs.createHousehold.title")}
            </TabsTrigger>
            <TabsTrigger
              value="join"
              className="flex items-center gap-3"
            >
              {t("tabs.joinHousehold.title")}
              {invites && invites.length > 0 && (
                <Badge variant="default">{invites.length}</Badge>
              )}
            </TabsTrigger>
          </TabsList>
          <CreateHouseholdTab />
          <JoinHouseholdTab invites={invites} />
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
