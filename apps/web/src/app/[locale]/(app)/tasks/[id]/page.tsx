export default async function TaskPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return (
    <div className="@container/main flex flex-1 flex-col gap-2 h-full">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 h-full">
        <div className="px-4 lg:px-6 h-full">Task id: {id}</div>
      </div>
    </div>
  )
}
