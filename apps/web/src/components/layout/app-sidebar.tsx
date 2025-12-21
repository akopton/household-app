"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { SidebarUser } from "@/components/layout/sidebar-user"
import { HouseholdSwitcher } from "@/components/layout/household-switcher"
import { TUser } from "@/types/user"
import Link from "next/link"

export const AppSidebar = ({ user }: { user?: TUser }) => {
  const routes = [
    { label: "Home", href: "/" },
    { label: "Tasks", href: "/tasks" },
  ]

  return (
    <Sidebar variant="inset">
      <SidebarHeader className="p-4">
        <HouseholdSwitcher />
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map((route) => (
                <SidebarMenuItem key={route.href}>
                  <SidebarMenuButton asChild>
                    <Link href={route.href}>{route.label}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <SidebarUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
