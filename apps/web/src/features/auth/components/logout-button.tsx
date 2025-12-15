"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

type LogoutButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.CSSProperties

export const LogoutButton = ({ children, ...props }: LogoutButtonProps) => {
  return (
    <Button
      onClick={() => {
        signOut({ callbackUrl: "/" })
      }}
      {...props}
    >
      {children}
    </Button>
  )
}
