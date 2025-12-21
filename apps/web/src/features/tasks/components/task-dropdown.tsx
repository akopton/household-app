import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { groupTaskActions } from "@/features/tasks/lib/group-task-actions"
import { TaskAction } from "@/features/tasks/types"
import { EllipsisVertical } from "lucide-react"
import { Fragment } from "react/jsx-runtime"

export const TaskDropdown = ({ options }: { options: TaskAction[] }) => {
  const sortedGroups = groupTaskActions(options)

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        asChild
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
      >
        <Button
          variant="ghost"
          size="sm"
          className="cursor-pointer"
        >
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg">
        {sortedGroups.map(([group, options], idx, arr) => {
          return (
            <Fragment key={group}>
              <DropdownMenuGroup>
                {options.map((opt) => (
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={opt.action}
                    key={opt.label}
                    variant={opt?.color}
                  >
                    {opt.icon && <opt.icon />}
                    {opt.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              {idx < arr.length - 1 && <DropdownMenuSeparator />}
            </Fragment>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
