import { Card } from "@/components/ui/card"

export default function DashboardPage() {
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
