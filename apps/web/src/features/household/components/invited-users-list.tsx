"use client"

import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

export const InvitedUsersList = ({
  data,
  onDelete,
}: {
  data?: string[]
  onDelete: (index: number) => void
}) => {
  return (
    <ul className="mt-2 space-y-2">
      {data?.map((email, index) => (
        <li
          key={index}
          className="flex items-center justify-between gap-2 p-2 rounded-md bg-muted/50"
        >
          <span className="text-sm truncate">{email}</span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-destructive"
            onClick={() => onDelete(index)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </li>
      ))}
    </ul>
  )
}
