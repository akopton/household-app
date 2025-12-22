import { Task } from "@/types/task"
import { User } from "@/types/user"

export type Household = {
  id: string
  name: string
  ownerId: string
  owner: User
  createdAt: Date
  updatedAt: Date
  tasks: Task[]
}
