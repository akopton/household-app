import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Grid, GridElement } from "@/components/ui/grid"

export default async function DashboardPage() {
  const gridCards: {
    header: string
    content: string
    footer: string
    column: number
    row: number
    columnSpan: number
    rowSpan: number
  }[] = []

  return (
    <div className="@container/main flex flex-1 flex-col gap-2 h-full">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 h-full">
        <div className="px-4 lg:px-6 h-full">
          <Grid
            columns={5}
            rows={5}
            gap={5}
          >
            {gridCards.map((card, index) => (
              <GridElement
                column={card.column}
                row={card.row}
                columnSpan={card.columnSpan}
                rowSpan={card.rowSpan}
                key={index}
              >
                <Card className="h-full w-full">
                  <CardHeader>{card.header}</CardHeader>
                  <CardContent>{card.content}</CardContent>
                </Card>
              </GridElement>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  )
}
