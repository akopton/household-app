"use client"

import { cn } from "@/lib/utils"
import { ClassValue } from "clsx"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { TUser } from "@/types/user"
import { Input } from "../ui/input"

export const UserAvatar = ({
  user,
  className,
  editable,
}: {
  user?: TUser
  className?: ClassValue
  editable?: boolean
}) => {
  const [img, setImg] = useState<File | null | undefined>(null)
  const [url, setUrl] = useState<string>("")

  useEffect(() => {
    fetch("/api/user/avatar")
      .then((res) => res.json())
      .then((data) => setUrl(data.avatarUrl))
  }, [])

  useEffect(() => {
    if (img) {
      const formData = new FormData()
      formData.append("file", img)
      fetch("/api/user/avatar", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => setUrl(data.avatarUrl))
    }
  }, [img])

  return (
    <label htmlFor="avatar-upload">
      <Avatar
        className={cn(
          "relative h-8 w-8 rounded-lg cursor-pointer group overflow-visible",
          className
        )}
      >
        <AvatarImage
          src={url}
          alt={`${user?.firstName}-${user?.lastName}`}
        />

        <AvatarFallback className="rounded-lg">
          {user?.firstName?.[0]}
          {user?.lastName?.[0]}
        </AvatarFallback>

        {editable && (
          <div
            className="
          absolute -right-1 -bottom-1
          flex items-center justify-center
          size-4 rounded-full
          bg-primary text-primary-foreground
        "
          >
            <Plus className="size-3" />
          </div>
        )}
      </Avatar>
      <Input
        id="avatar-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => setImg(e.target.files?.[0])}
      />
    </label>
  )
}
