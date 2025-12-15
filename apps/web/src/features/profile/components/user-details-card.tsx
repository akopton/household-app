"use client"

import { TUser } from "@app-types/user"
import { Edit } from "lucide-react"
import { Button } from "@components/ui/button"
import { useState } from "react"
import { ChangeUserDetailsForm } from "@features/profile"

export const UserDetailsCard = ({ user }: { user?: TUser | null }) => {
  const [isEditing, setIsEditing] = useState(false)

  return isEditing ? (
    <ChangeUserDetailsForm
      onSubmit={(data: Partial<TUser>) => {
        console.log(data)
        setIsEditing(false)
      }}
      onCancel={() => setIsEditing(false)}
      data={user}
    />
  ) : (
    <UserDetailsCardView
      user={user}
      onClick={() => setIsEditing(true)}
    />
  )
}

const UserDetailsCardView = ({
  user,
  onClick,
}: {
  user?: TUser | null
  onClick: () => void
}) => {
  return (
    <div className="flex flex-col gap-2 w-full relative">
      <Button
        className="absolute top-0 right-0 cursor-pointer"
        onClick={onClick}
      >
        <Edit className="size-5" />
      </Button>
      <div className="w-full">
        <p>Fullname</p>
        <p>
          {user?.firstName} {user?.lastName}
        </p>
      </div>
      <div className="w-full">
        <p>Email</p>
        <p>{user?.email}</p>
      </div>
    </div>
  )
}
