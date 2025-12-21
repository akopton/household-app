import { TaskAction } from "@/features/tasks/types"

export const groupTaskActions = (actions: TaskAction[]) => {
  const groups = [...actions].reduce(
    (acc: Record<string | number, TaskAction[]>, opt) => {
      if (!opt.group) {
        acc["ungrouped"] = acc["ungrouped"] || []
        acc["ungrouped"].push(opt)
        return acc
      }
      if (opt.group) {
        acc[opt.group] = acc[opt.group] || []
        acc[opt.group].push(opt)
      }

      return acc
    },
    {} as Record<string | number, TaskAction[]>
  )

  const sortedGroups = Object.entries(groups).sort(([keyA], [keyB]) => {
    if (keyA === "ungrouped") return 1
    if (keyB === "ungrouped") return -1
    return 0
  })

  return sortedGroups
}
