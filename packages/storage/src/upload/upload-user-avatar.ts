import { createSupabaseClient } from "../client/supabase"
import sharp from "sharp"

export const uploadUserAvatar = async (userId: string, file: File) => {
  const supabase = createSupabaseClient()

  const fileExt = file.name.split(".").pop()
  const filePath = `users/${userId}/avatar.${fileExt}`
  const fileBuffer = await file.arrayBuffer()
  const buffer = await sharp(fileBuffer)
    .resize(256, 256)
    .webp({ quality: 80 })
    .toBuffer()

  const { error } = await supabase.storage
    .from("avatars")
    .upload(filePath, buffer, { upsert: true, contentType: file.type })

  if (error) {
    throw error
  }

  const { data } = supabase.storage.from("avatars").getPublicUrl(filePath)

  return data.publicUrl
}
