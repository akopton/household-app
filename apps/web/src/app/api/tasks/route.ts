import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { createTaskSchema } from "@household/shared/schemas/task"
import { getCurrentUser } from "@/lib/auth"

export async function GET(req: Request) {
  const user = await getCurrentUser()

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const householdId = searchParams.get("householdId")

  if (!householdId) {
    return NextResponse.json(
      { error: "Household ID is required" },
      { status: 400 }
    )
  }

  const tasks = await prisma.task.findMany({
    where: { householdId },
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
