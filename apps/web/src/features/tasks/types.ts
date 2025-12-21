export type TaskAction = {
  icon: React.ElementType
  label: string
  action: (e: React.MouseEvent) => void
  color?: "default" | "destructive"
  group?: number
}

export type Task = {
  id: string
  title: string
  description: string
  date?: Date
}
