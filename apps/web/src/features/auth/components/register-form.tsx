"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"
import { useTranslations } from "next-intl"
import { GoogleLoginButton } from "./google-login-button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form"
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"
import { cn } from "@/lib/utils"
import { FieldDescription, FieldSeparator } from "../../../components/ui/field"
import { useRegisterForm } from "@/features/auth/hooks/use-register-form"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useState } from "react"
import Link from "next/link"

type RegisterFormProps = {
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

export const RegisterForm = ({ className, ...props }: RegisterFormProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const t = useTranslations("register")
  const { form, onSubmit } = useRegisterForm()

  return (
    <div
      className={cn(
        "flex flex-col gap-10 h-screen items-center justify-center",
        className
      )}
      {...props}
    >
      <Card className="px-5 w-md py-10">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">{t("title")}</CardTitle>
          <CardDescription>{t("subtitle")}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-10">
          <Form {...form}>
            <form
              autoComplete="off"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 flex flex-col"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.email")}</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="email"
                        placeholder="example@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.password")}</FormLabel>
                    <FormControl>
                      <div className="flex relative">
                        <Input
                          autoComplete="new-password"
                          type={showPassword ? "text" : "password"}
                          {...field}
                        />
                        <Button
                          onClick={() => setShowPassword((prev) => !prev)}
                          type="button"
                          style={{
                            height: "fit-content",
                            padding: 0,
                            cursor: "pointer",
                          }}
                          variant="ghost"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                        >
                          {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.confirmPassword")}</FormLabel>
                    <FormControl>
                      <div className="flex relative">
                        <Input
                          autoComplete="new-password"
                          type={showConfirmPassword ? "text" : "password"}
                          {...field}
                        />
                        <Button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword((prev) => !prev)
                          }
                          style={{
                            height: "fit-content",
                            padding: 0,
                            cursor: "pointer",
                          }}
                          variant="ghost"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                        >
                          {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">{t("form.register")}</Button>
            </form>
          </Form>
          <FieldSeparator>{t("separator")}</FieldSeparator>
          <GoogleLoginButton />
        </CardContent>

        <CardFooter></CardFooter>
      </Card>
      <FieldDescription className="flex gap-1">
        {t("description.text")}
        <Link href="/auth/login">{t("description.link")}</Link>
      </FieldDescription>
    </div>
  )
}
