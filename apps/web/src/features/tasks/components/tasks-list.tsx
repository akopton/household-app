"use client"

import { TaskItem } from "@/features/tasks/components/task-item"
import { Task } from "@/features/tasks/types"

export const TasksList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <ul className="flex flex-col w-full gap-2">
      {tasks.map((t) => (
        <li key={t.id}>
          <TaskItem {...t} />
        </li>
      ))}
    </ul>
  )
}
