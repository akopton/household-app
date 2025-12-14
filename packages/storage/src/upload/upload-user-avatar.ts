import { createSupabaseClient } from "../client/supabase"

export const uploadUserAvatar = async (userId: string, file: File) => {
  const supabase = createSupabaseClient()

  const fileExt = file.name.split(".").pop()
  const filePath = `users/${userId}/avatar.${fileExt}`

  const { error } = await supabase.storage
    .from("avatars")
    .upload(filePath, file, { upsert: true, contentType: file.type })

  if (error) {
    throw error
  }

  const { data } = supabase.storage.from("avatars").getPublicUrl(filePath)

  return data.publicUrl
}
