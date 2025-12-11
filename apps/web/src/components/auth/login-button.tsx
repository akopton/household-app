"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { HtmlHTMLAttributes } from "react"

type LoginButtonProps = {
  children: React.ReactNode
} & HtmlHTMLAttributes<HTMLButtonElement>

export const LoginButton = ({ children, ...props }: LoginButtonProps) => {
  return (
    <Button
      asChild
      {...props}
      variant="outline"
    >
      <Link href="/auth/login">{children}</Link>
    </Button>
  )
}
