import z from "zod"

export const registerFormSchema = z
  .object({
    email: z.email().trim().min(1),
    password: z.string().trim().min(8),
    confirmPassword: z.string().trim().min(8),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      })
    }
  })
