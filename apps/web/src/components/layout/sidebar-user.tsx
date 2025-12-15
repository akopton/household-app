"use client"

import { BadgeCheck, Bell, ChevronsUpDown, LogOut } from "lucide-react"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@components/ui/sidebar"
import { TUser } from "@app-types/user"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { UserAvatar } from "@features/profile"
import { UserDetails } from "@features/profile"

export const SidebarUser = ({ user }: { user?: TUser }) => {
  const router = useRouter()
  const { isMobile } = useSidebar()
  const alt = `${user?.firstName}-${user?.lastName}`
  const fallback = `${user?.firstName?.[0]}${user?.lastName?.[0]}`

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
            >
              <UserAvatar
                url={user?.avatarUrl || ""}
                alt={alt}
                fallback={fallback}
              />
              <UserDetails user={user} />
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <UserAvatar
                  url={user?.avatarUrl || ""}
                  alt={alt}
                  fallback={fallback}
                  editable={false}
                />
                <UserDetails user={user} />
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => router.push("/profile")}
              >
                <BadgeCheck />
                Account
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer">
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => signOut({ callbackUrl: "/" })}
              className="cursor-pointer"
            >
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
