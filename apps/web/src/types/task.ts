import { Household } from "@/types/household"

export type Task = {
  id: string
  name: string
  householdId: string
  household: Household
  createdAt: Date
  updatedAt: Date
  dueDate: Date
}
