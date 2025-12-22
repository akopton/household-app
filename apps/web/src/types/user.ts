export type User = {
  id?: string
  email?: string
  username?: string | null
  firstName?: string | null
  lastName?: string | null
  avatarUrl?: string | null
  createdAt: Date
  updatedAt: Date
  householdId?: string
}
