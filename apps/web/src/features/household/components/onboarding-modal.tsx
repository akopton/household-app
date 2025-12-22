"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreateForm } from "@/features/household/components/create-form"
import { InvitesList } from "@/features/household/components/invites-list"
import { useState } from "react"

export const OnboardingModal = ({
  receivedInvites,
}: {
  receivedInvites: unknown[]
}) => {
  const [open, setOpen] = useState(true)
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogContent
        aria-describedby={undefined}
        showCloseButton={false}
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Welcome! Let&apos;s set up your household</DialogTitle>
          <DialogDescription>
            Create a new household or join an existing one to get started.
          </DialogDescription>
        </DialogHeader>

        <Tabs
          defaultValue="create"
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="create">Create Household</TabsTrigger>
            <TabsTrigger value="join">
              Join Household{" "}
              {receivedInvites.length > 0
                ? "(" + receivedInvites.length + ")"
                : ""}
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="create"
            className="space-y-4 flex flex-col"
          >
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Create a new household and invite family members to join.
              </p>
            </div>
            <CreateForm id="household-create-form" />
            <Button
              type="submit"
              form="household-create-form"
              className="self-center"
            >
              Create
            </Button>
          </TabsContent>

          <TabsContent
            value="join"
            className="space-y-4"
          >
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Enter an invitation code to join an existing household.
              </p>
              {/* Add your join household form here */}
            </div>
            <InvitesList />
          </TabsContent>
        </Tabs>

        <DialogFooter>{/* Add action buttons here */}</DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
