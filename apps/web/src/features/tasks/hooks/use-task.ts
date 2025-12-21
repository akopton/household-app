import { useState } from "react"

import { Edit, Trash, BadgeCheck } from "lucide-react"
import { Task, TaskAction } from "@/features/tasks/types"
import { useTranslations } from "next-intl"

export const useTask = (task: Task) => {
  const t = useTranslations("tasks")
  const [showDialog, setShowDialog] = useState(false)

  const editFormValues = { ...task }

  const onTaskEdit = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowDialog(true)
  }

  const onTaskDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    alert("delete")
  }

  const onTaskDone = (e: React.MouseEvent) => {
    e.stopPropagation()
    alert("done")
  }

  const taskActions: TaskAction[] = [
    {
      icon: BadgeCheck,
      label: t("dashboardCard.list.dropdown.markDone"),
      action: onTaskDone,
      group: 1,
    },
    {
      icon: Edit,
      label: t("dashboardCard.list.dropdown.edit"),
      action: onTaskEdit,
      group: 1,
    },
    {
      icon: Trash,
      label: t("dashboardCard.list.dropdown.delete"),
      action: onTaskDelete,
      color: "destructive",
    },
  ]

  return { showDialog, setShowDialog, taskActions, editFormValues }
}
