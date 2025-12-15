import { NextResponse } from "next/server"
import { prisma } from "@lib/prisma"
import { createTaskSchema } from "@household/shared/schemas/task"

export async function GET() {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  })

  return NextResponse.json(tasks)
}

export async function POST(req: Request) {
  const body = await req.json()
  const parsed = createTaskSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 })
  }

  const task = await prisma.task.create({
    data: {
      name: parsed.data.title,
      dueDate: parsed.data.dueDate,
      householdId: "TEMP_HOUSEHOLD_ID",
    },
  })

  return NextResponse.json(task)
}
