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
} from "../ui/sidebar"
import { useSession } from "next-auth/react"
import { SidebarUser } from "./sidebar-user"
import { HouseholdSwitcher } from "./household-switcher"

export const AppSidebar = () => {
  const { data } = useSession()

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
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href={"/"}>
                    <span>test</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <SidebarUser user={{ ...data?.user, avatarUrl: "" }} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
