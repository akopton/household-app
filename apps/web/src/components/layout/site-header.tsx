"use client"

import { SidebarTrigger } from "@components/ui/sidebar"
import { Separator } from "@components/ui/separator"
import { useLocale, useTranslations } from "next-intl"
import { useSession } from "next-auth/react"

export const SiteHeader = () => {
  const { data } = useSession()
  const locale = useLocale()
  const t = useTranslations("appHeader")
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
  })

  const formattedTime = currentDate.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <header className="p-2 flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-2 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1 cursor-pointer" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium flex items-center gap-2">
          👋 {t("greeting")}, {data?.user.firstName}
        </h1>
        <div className="ml-auto flex items-center gap-2">
          📅{formattedDate}, {formattedTime}
        </div>
      </div>
    </header>
  )
}
