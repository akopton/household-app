import { Card } from "@/components/ui/card"
import { getCurrentUser } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/auth/login")
  }

  return (
    <div className="container mx-auto p-6">
      <Card></Card>

      <div className="grid grid-cols-2 grid-rows-1">
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  )
}
