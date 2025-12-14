import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ChangePasswordForm } from "@/components/user-profile/change-password-form"
import { ChangeUserDetailsForm } from "@/components/user-profile/change-user-details-form"
import { UserAvatar } from "@/components/user-profile/user-avatar"
import { UserDetails } from "@/components/user-profile/user-details"
import { getCurrentUser } from "@/lib/auth"

export default async function Profile() {
  const user = await getCurrentUser()

  return (
    <div className="@container/main flex flex-1 flex-col gap-2 h-full">
      <div className="h-full py-4 md:py-6">
        <div className="px-4 lg:px-6 gap-10 flex flex-col h-full">
          <div className="grid grid-cols-3 grid-rows-4 gap-5 h-full min-h-0">
            <Card className="row-span-4">
              <CardHeader>Profile</CardHeader>
              <CardContent className="flex flex-col gap-15">
                <div className="flex items-center gap-2">
                  <UserAvatar
                    user={user}
                    className="h-10 w-10"
                    editable
                  />
                  <UserDetails user={user} />
                </div>
                <ChangeUserDetailsForm />
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
            <Card className="row-span-2 col-span-2">
              <CardHeader></CardHeader>
              <CardContent></CardContent>
              <CardFooter></CardFooter>
            </Card>
            <Card className="row-span-2">
              <CardHeader></CardHeader>
              <CardContent></CardContent>
            </Card>
            <Card className="row-start-3 col-start-3 row-span-2">
              <CardHeader>Change password</CardHeader>
              <CardContent>
                <ChangePasswordForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
