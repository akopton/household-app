"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
} from "../ui/sidebar"
import Link from "next/link"

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>household maybe?</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenuItem>
            <Link href="/">Home</Link>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>user</SidebarFooter>
    </Sidebar>
  )
}
