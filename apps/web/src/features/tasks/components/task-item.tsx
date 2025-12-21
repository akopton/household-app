"use client"

import {
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  Item,
} from "@/components/ui/item"

import { TaskEditForm } from "./task-edit-form"
import Link from "next/link"
import { TaskDropdown } from "@/features/tasks/components/task-dropdown"
import { TaskEditDialog } from "@/features/tasks/components/task-edit-dialog"
import { useTask } from "@/features/tasks/hooks/use-task"
import { Task } from "@/features/tasks/types"
import { useTranslations } from "next-intl"

export const TaskItem = (task: Task) => {
  const t = useTranslations("tasks")
  const { taskActions, setShowDialog, showDialog, editFormValues } =
    useTask(task)

  const { id, title, date } = task

  const onSubmit = async (data: { title: string; description: string }) => {
    console.log("submit", data)
    const bool = true
    if (bool) {
      setShowDialog(false)
    }
  }

  return (
    <>
      <Item
        asChild
        className="p-2"
        variant="outline"
      >
        <Link
          href={`/tasks/${id}`}
          className="flex-1"
        >
          <ItemContent className="flex gap-0">
            <ItemTitle>{title}</ItemTitle>
            <ItemDescription>{date?.toLocaleDateString()}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <TaskDropdown options={taskActions} />
          </ItemActions>
        </Link>
      </Item>

      <TaskEditDialog
        open={showDialog}
        onOpen={setShowDialog}
        title={t("dashboardCard.editForm.title")}
      >
        <TaskEditForm
          id="myForm"
          onSubmit={onSubmit}
          defaultValues={editFormValues}
        />
      </TaskEditDialog>
    </>
  )
}
