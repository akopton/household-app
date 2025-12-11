import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"
import { prisma } from "@/lib/prisma"

export async function PATCH(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { username, name } = await req.json()

    if (!username && !name) {
      return NextResponse.json(
        { error: "At least one field (username or name) is required" },
        { status: 400 }
      )
    }

    if (username) {
      const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/
      if (!usernameRegex.test(username)) {
        return NextResponse.json(
          {
            error:
              "Username must be 3-20 characters long and contain only letters, numbers, and underscores",
          },
          { status: 400 }
        )
      }

      const existingUser = await prisma.user.findUnique({
        where: { username },
      })

      if (existingUser && existingUser.id !== session.user.id) {
        return NextResponse.json(
          { error: "Username is already taken" },
          { status: 409 }
        )
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        ...(username && { username }),
        ...(name && { name }),
      },
      select: {
        id: true,
        email: true,
        username: true,
        name: true,
        updatedAt: true,
      },
    })

    return NextResponse.json({
      message: "Profile updated successfully",
      user: updatedUser,
    })
  } catch (error) {
    console.error("Profile update error:", error)
    return NextResponse.json(
      { error: "An error occurred while updating profile" },
      { status: 500 }
    )
  }
}
