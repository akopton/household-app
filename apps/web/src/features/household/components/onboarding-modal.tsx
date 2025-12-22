"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreateForm } from "@/features/household/components/create-form"
import { InvitesList } from "@/features/household/components/invites-list"
import { useTranslations } from "next-intl"
import { useState } from "react"

export const OnboardingModal = ({
  receivedInvites,
}: {
  receivedInvites: unknown[]
}) => {
  const t = useTranslations("dashboardPage.householdCreate")

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
            <TabsTrigger value="join">
              {t("tabs.joinHousehold.title")}
              {receivedInvites.length > 0
                ? "(" + receivedInvites.length + ")"
                : ""}
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="create"
            className="space-y-4 flex flex-col"
          >
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {t("tabs.createHousehold.description")}
              </p>
            </div>
            <CreateForm id="household-create-form" />
          </TabsContent>

          <TabsContent
            value="join"
            className="space-y-4"
          >
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {t("tabs.joinHousehold.description")}
              </p>
            </div>
            <InvitesList />
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button
            type="submit"
            form="household-create-form"
            className="self-center"
          >
            {t("form.create")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
