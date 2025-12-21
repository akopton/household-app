import { Card } from "@/components/ui/card"
import { Grid, GridElement } from "@/components/ui/grid"

export default function TasksPage() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2 h-full">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 h-full">
        <div className="px-4 lg:px-6 h-full">
          <Grid
            columns={6}
            rows={5}
            gap={5}
          >
            <GridElement
              column={1}
              row={1}
              columnSpan={2}
              rowSpan={5}
            >
              <Card className="h-full"></Card>
            </GridElement>
            <GridElement
              column={3}
              row={1}
              columnSpan={2}
              rowSpan={5}
            >
              <Card className="h-full"></Card>
            </GridElement>
          </Grid>
        </div>
      </div>
    </div>
  )
}
