import { z } from "zod"

export const createUserSchema = z.object({
  name: z.string().min(1).optional(),
  username: z.string().min(1).nullable().optional(),
  email: z.email(),
  password: z.string().min(8),
})

export const updateUserSchema = z.object({
  name: z.string().min(1).optional(),
  username: z.string().min(1).nullable().optional(),
})
