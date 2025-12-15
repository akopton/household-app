import { TUser } from "@app-types/user"

export const UserDetails = ({ user }: { user?: TUser }) => {
  return (
    <div className="grid flex-1 text-left text-sm leading-tight">
      <span className="truncate font-medium">
        {user?.firstName} {user?.lastName}
      </span>
      <span className="truncate text-xs">{user?.email}</span>
    </div>
  )
}
