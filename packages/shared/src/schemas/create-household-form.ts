import { z } from "zod"

export const createHouseholdFormSchema = z.object({
  //   id               String            @id @default(cuid())
  //   name             String
  //   ownerId          String
  //   owner            User              @relation(fields: [ownerId], references: [id])
  //   createdAt        DateTime          @default(now())
  //   updatedAt        DateTime          @updatedAt
  //   tasks            Task[]
  //   isDefault        Boolean           @default(false)
  //   householdInvites HouseholdInvite[]

  name: z.string().trim().min(3),
  invitedUsers: z.array(z.email()).optional(),
})
