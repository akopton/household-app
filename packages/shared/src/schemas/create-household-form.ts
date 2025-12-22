import { z } from "zod"

export const createHouseholdFormSchema = z.object({
  name: z.string().trim().min(3),
  invitedUsers: z.array(z.email()).optional(),
})
