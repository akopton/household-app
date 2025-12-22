import { Grid, GridElement } from "@/components/ui/grid"
import { OnboardingModal } from "@/features/household/components/onboarding-modal"
import { TasksDashboardCard } from "@/features/tasks"
import { getCurrentUser } from "@/lib/auth"

export default async function DashboardPage() {
  const receivedInvites = [{ id: "123" }]
  const user = await getCurrentUser()

  return (
    <div className="@container/main flex flex-1 flex-col gap-2 h-full">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 h-full">
        <div className="px-4 lg:px-6 h-full">
          {user?.householdId ? (
            <Grid
              columns={5}
              rows={5}
              gap={5}
            >
              <GridElement
                column={1}
                row={1}
                columnSpan={2}
                rowSpan={2}
              >
                <TasksDashboardCard />
              </GridElement>
            </Grid>
          ) : (
            <OnboardingModal receivedInvites={receivedInvites} />
          )}
        </div>
      </div>
    </div>
  )
}
