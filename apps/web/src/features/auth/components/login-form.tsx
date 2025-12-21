"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { FieldDescription, FieldSeparator } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { GoogleLoginButton } from "@/features/auth"
import Link from "next/link"
import { useLoginForm } from "@/features/auth"
import { useTranslations } from "next-intl"

export const LoginForm = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const t = useTranslations("loginPage")
  const { form, onSubmit } = useLoginForm()

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
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 flex flex-col"
            >
              <FormField
                control={form.control}
                name="user"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.user")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.user && t("form.error.user")}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>{t("form.password")}</FormLabel>
                      <FormLabel>
                        <Link href="/auth/forgot-password">
                          {t("form.forgotPassword")}
                        </Link>
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.password &&
                        t("form.error.password")}
                    </FormMessage>
                  </FormItem>
                )}
              />
              {form.formState.errors.root && (
                <div className="text-destructive text-sm text-center p-3 bg-destructive/10 rounded-md">
                  {form.formState.errors.root.message}
                </div>
              )}
              <Button
                style={{
                  cursor: "pointer",
                }}
                type="submit"
              >
                {t("form.login")}
              </Button>
            </form>
          </Form>
          <FieldSeparator>{t("separator")}</FieldSeparator>
          <GoogleLoginButton />
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center flex items-center gap-1">
        {t("description.text")}
        <Link href="/auth/register">{t("description.link")}</Link>
      </FieldDescription>
    </div>
  )
}
