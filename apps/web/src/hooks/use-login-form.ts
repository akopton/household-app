import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormSchema } from "@household/shared/schemas/login-form"
import { signIn } from "next-auth/react"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import z from "zod"

export const useLoginForm = () => {
  const router = useRouter()
  const t = useTranslations("login")

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema, {
      error: (issue) => {
        if (issue.code === "too_small") {
          if (issue.path && issue.path[0] === "user") {
            return t("form.error.user")
          }

          if (issue.path && issue.path[0] === "password") {
            return t("form.error.password")
          }
        }

        return t("form.error.root")
      },
    }),
    defaultValues: {
      user: "",
      password: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    try {
      console.log(values)
      const result = await signIn("credentials", {
        identifier: values.user,
        password: values.password,
        redirect: false,
      })

      if (!result?.ok) {
        throw new Error(t("form.error.root") || "Something went wrong")
      }

      router.push("/dashboard")
    } catch (error) {
      form.setError("root", {
        message: (error as { message: string }).message,
      })
    }
  }

  return {
    form,
    onSubmit,
  }
}
