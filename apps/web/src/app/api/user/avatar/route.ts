import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { uploadUserAvatar } from "../../../../../../../packages/storage/src/upload/upload-user-avatar"

export const POST = async (req: NextRequest) => {
  const session = await getServerSession()
  console.log(session)
  if (!session?.user.id) {
    return NextResponse.json("Unauthorized", { status: 401 })
  }

  const formData = await req.formData()

  const file = formData.get("file") as File

  if (!file) {
    return NextResponse.json("No file uploaded", { status: 400 })
  }

  const avatarUrl = await uploadUserAvatar(session.user.id, file)

  await prisma.user.update({
    where: { id: session.user.id },
    data: { avatarUrl },
  })

  return NextResponse.json({ avatarUrl })
}

export async function GET() {
  const session = await getServerSession()

  if (!session?.user.id) {
    return NextResponse.json("Unauthorized", { status: 401 })
  }

  const data = await prisma.user.findFirst({
    where: {
      id: session.user.id,
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
