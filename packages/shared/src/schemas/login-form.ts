import { z } from "zod"

export const loginFormSchema = z.object({
  user: z.string().trim().min(1),
  password: z.string().trim().min(1),
})
