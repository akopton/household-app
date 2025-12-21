"use client"

import { registerFormSchema } from "@household/shared"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"

const errorInvalidFormat = (
  path?: PropertyKey[],
  errors?: Record<string, string>
) => {
  if (path && errors) {
    return errors[path[0] as string]
  }

  return "Something went wrong"
}

const errorTooSmall = (
  path?: PropertyKey[],
  errors?: Record<string, string>
) => {
  if (path && errors) {
    return errors[path[0] as string]
  }

  return "Something went wrong"
}
const errorCustom = (path?: PropertyKey[], errors?: Record<string, string>) => {
  if (path && path[0] === "confirmPassword" && errors) {
    return errors["confirmPassword"]
  }

  return "Something went wrong"
}

const errorMap = (
  code: z.core.$ZodIssueCode,
  path?: PropertyKey[],
  errors?: Record<string, string>
) => {
  switch (code) {
    case "too_small":
      return errorTooSmall(path, errors)
    case "custom":
      return errorCustom(path, errors)
    case "invalid_format":
      return errorInvalidFormat(path, errors)
    default:
      return "Something went wrong"
  }
}

export const useRegisterForm = () => {
  const t = useTranslations("registerPage")
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema, {
      error: ({ code, path }) =>
        errorMap(code, path, {
          email: t("error.emailInvalid"),
          password: t("error.passwordMinLength"),
          confirmPassword: t("error.passwordsDoNotMatch"),
        }),
    }),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof registerFormSchema>) => {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })

    if (!response.ok) {
      throw new Error("Failed to register user")
    }

    const data = await response.json()

    if (data) {
      await signIn("credentials", {
        callbackUrl: "/dashboard",
        identifier: data.user.email,
        password: values.password,
      })
    }
  }

  return { form, onSubmit }
}
