import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { uploadUserAvatar } from "../../../../../../../packages/storage/src/upload/upload-user-avatar"
import { getCurrentUser } from "@/lib/auth"

export const POST = async (req: NextRequest) => {
  const user = await getCurrentUser()

  if (!user?.id) {
    return NextResponse.json("Unauthorized", { status: 401 })
  }

  const formData = await req.formData()

  const file = formData.get("file") as File

  if (!file) {
    return NextResponse.json("No file uploaded", { status: 400 })
  }

  const avatarUrl = await uploadUserAvatar(user.id, file)

  await prisma.user.update({
    where: { id: user.id },
    data: { avatarUrl },
  })

  return NextResponse.json({ avatarUrl })
}

export async function GET() {
  const user = await getCurrentUser()

  if (!user?.id) {
    return NextResponse.json("Unauthorized", { status: 401 })
  }

  const data = await prisma.user.findFirst({
    where: {
      id: user.id,
    },
    select: {
      avatarUrl: true,
    },
  })

  if (!data?.avatarUrl) {
    return NextResponse.json("No avatar found", { status: 404 })
  }

  return NextResponse.json({ avatarUrl: data.avatarUrl })
}
