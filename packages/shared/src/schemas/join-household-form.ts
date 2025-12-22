import { z } from "zod"

export const joinHouseholdFormSchema = z.object({
  code: z.string().min(1).max(10),
})
