"use client"

import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TasksList } from "./tasks-list"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { ArrowRightCircle } from "lucide-react"

const tasks = [
  {
    id: "1",
    title: "Task 1",
    description: "Description 1",
    date: new Date(),
  },
  {
    id: "2",
    title: "Task 2",
    description: "Description 2",
    date: new Date(),
  },
  {
    id: "3",
    title: "Task 3",
    description: "Description 3",
    date: new Date(),
  },
]

const overDueTasks = [
  {
    id: "1",
    title: "overdue Task 1",
    description: "Description 1",
    date: new Date(),
  },
  {
    id: "2",
    title: "overdue Task 2",
    description: "Description 2",
    date: new Date(),
  },
]

export const TasksDashboardCard = () => {
  const t = useTranslations("tasks")

  return (
    <Card className="h-full w-full flex flex-col gap-2">
      <CardHeader>
        <CardTitle>{t("dashboardCard.title")}</CardTitle>
        <CardAction>
          <Link
            href="/tasks"
            className="flex gap-2 items-center"
          >
            {t("dashboardCard.viewAll")}
            <ArrowRightCircle />
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent className="flex items-start justify-around h-full gap-5">
        <div className="w-full flex flex-col gap-2">
          <p>{t("dashboardCard.list.coming")}</p>
          <TasksList tasks={tasks} />
        </div>
        <div className="w-full flex flex-col gap-2">
          <p>{t("dashboardCard.list.overdue")}</p>
          <TasksList tasks={overDueTasks} />
        </div>
      </CardContent>
    </Card>
  )
}
