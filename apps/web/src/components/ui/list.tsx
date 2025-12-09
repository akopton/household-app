"use client"

import { Task } from "@/generated/prisma/browser"
import { useEffect, useState } from "react"

export const List = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then(setTasks)
  }, [])

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  )
}
