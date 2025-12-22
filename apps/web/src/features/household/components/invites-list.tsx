"use client"

import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Item, ItemActions, ItemContent } from "@/components/ui/item"
import { HouseholdInvite } from "@/features/household/types"
import { useTranslations } from "next-intl"

const translationPath = "dashboardPage.onboardingModal.tabs.joinHousehold.form"

export const InvitesList = ({ invites }: { invites: HouseholdInvite[] }) => {
  const t = useTranslations(translationPath)
  return invites && invites.length > 0 ? (
    <ul className="flex flex-col gap-3">
      {invites.map((item, index) => (
        <li key={index}>
          <Item
            variant="muted"
            className="py-2"
          >
            <ItemContent className="flex flex-row">
              <Field className="flex flex-col w-full">
                <span>{item.invitingUser}</span>
              </Field>
              <Field className="flex flex-col w-full">
                <span>{item.householdName}</span>
              </Field>
              <Field className="flex flex-col w-full">
                <span>{item.expirationDate.toLocaleDateString()}</span>
              </Field>
            </ItemContent>
            <ItemActions>
              <Button variant="outline">{t("listJoin")}</Button>
            </ItemActions>
          </Item>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-center text-muted-foreground">{t("noInvites")}</p>
  )
}
