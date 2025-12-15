import { createClient } from "@supabase/supabase-js"

export function createSupabaseClient() {
  const url = process.env.SUPABASE_PROJECT_URL
  const apiKey = process.env.SUPABASE_API_KEY

  if (!url || !apiKey) {
    throw new Error("Missing Supabase environment variables")
  }

  return createClient(url, apiKey, { auth: { persistSession: false } })
}
