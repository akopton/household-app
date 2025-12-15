"use client"

import { cn } from "@/lib/utils"
import { ClassValue } from "clsx"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { Input } from "../ui/input"

export const UserAvatar = ({
  url,
  alt,
  fallback,
  className,
  editable = false,
}: {
  url?: string
  alt?: string
  fallback?: string
  className?: ClassValue
  editable?: boolean
}) => {
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>()

  const upload = (img: File | null | undefined) => {
    if (img) {
      const formData = new FormData()
      formData.append("file", img)
      fetch("/api/user/avatar", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setAvatarUrl(data.avatarUrl)
          cookieStore.set("avatarUrl", data.avatarUrl)
        })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    upload(file)
  }

  useEffect(() => {
    setAvatarUrl(url)
  }, [url])

  return (
    <label
      htmlFor={editable ? "avatar-upload" : "undefined"}
      className={editable ? "cursor-pointer" : ""}
    >
      <Avatar
        className={cn(
          "relative h-8 w-8 rounded-lg group overflow-visible",
          className
        )}
      >
        <AvatarImage
          src={avatarUrl || undefined}
          alt={alt}
          className={cn("rounded-lg", className)}
        />

        <AvatarFallback className="rounded-lg">{fallback}</AvatarFallback>

        {editable && (
          <div
            className="
          absolute -right-1 -bottom-1
          flex items-center justify-center
          size-8 rounded-full
          bg-primary text-primary-foreground
        "
          >
            <Plus className="size-6" />
          </div>
        )}
      </Avatar>
      {editable && (
        <Input
          id="avatar-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
      )}
    </label>
  )
}
