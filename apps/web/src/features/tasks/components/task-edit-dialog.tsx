import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export const TaskEditDialog = ({
  open,
  onOpen,
  title,
  children,
}: {
  open: boolean
  onOpen: (open: boolean) => void
  title: string
  children: React.ReactNode
}) => {
  const t = useTranslations("tasks")
  return (
    <Dialog
      open={open}
      onOpenChange={onOpen}
    >
      <DialogContent
        aria-describedby={undefined}
        className="flex flex-col gap-5"
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="outline"
              className="cursor-pointer"
            >
              {t("dashboardCard.editForm.cancel")}
            </Button>
          </DialogClose>
          <Button
            type="submit"
            form="myForm"
            className="cursor-pointer"
          >
            {t("dashboardCard.editForm.submit")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
