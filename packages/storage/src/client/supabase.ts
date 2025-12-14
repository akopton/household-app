import { createClient } from "@supabase/supabase-js"

export function createSupabaseClient() {
  const url = process.env.SUPABASE_PROJECT_URL
  const anonKey = process.env.SUPABASE_API_KEY

  if (!url || !anonKey) {
    throw new Error("Missing Supabase environment variables")
  }

  return createClient(url, anonKey)
}
