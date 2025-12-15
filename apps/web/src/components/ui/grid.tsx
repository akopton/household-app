import { cn } from "@/lib/utils"

export const Grid = ({
  columns,
  rows,
  gap = 0,
  className,
  children,
  ...props
}: {
  columns: number
  rows: number
  gap?: number
  className?: string
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
      className={cn(`min-h-0 h-full w-full gap-${gap}`, className)}
      {...props}
    >
      {children}
    </div>
  )
}

export const GridElement = ({
  column,
  row,
  columnSpan,
  rowSpan,
  className,
  children,
  ...props
}: {
  column: number
  row: number
  columnSpan: number
  rowSpan: number
  className?: string
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      style={{
        gridColumn: `${column} / span ${columnSpan}`,
        gridRow: `${row} / span ${rowSpan}`,
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  )
}
