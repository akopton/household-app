import { z } from "zod"

export const createTaskSchema = z.object({
  title: z.string().min(1),
  dueDate: z.iso.datetime().optional(),
})
