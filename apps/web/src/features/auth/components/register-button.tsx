"use client"

import Link from "next/link"
import { Button } from "../../../components/ui/button"
import { HtmlHTMLAttributes } from "react"

type RegisterButtonProps = {
  children: React.ReactNode
} & HtmlHTMLAttributes<HTMLButtonElement>

export const RegisterButton = ({ children, ...props }: RegisterButtonProps) => {
  return (
    <Button
      asChild
      {...props}
    >
      <Link href="/auth/register">{children}</Link>
    </Button>
  )
}
