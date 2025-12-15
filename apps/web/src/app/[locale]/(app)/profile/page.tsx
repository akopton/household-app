import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ChangePasswordForm } from "@/components/user-profile/change-password-form"
import { UserAvatar } from "@/components/user-profile/user-avatar"
import { UserDetailsCard } from "@/components/user-profile/user-details-card"
import { getCurrentUser } from "@/lib/auth"

export default async function Profile() {
  const user = await getCurrentUser()

  return (
    <div className="@container/main flex flex-1 flex-col gap-2 h-full">
      <div className="h-full py-4 md:py-6">
        <div className="px-4 lg:px-6 gap-10 flex flex-col h-full">
          <div className="grid grid-cols-3 grid-rows-4 gap-5 h-full min-h-0">
            <Card className="row-span-3 flex flex-col gap-2">
              <CardHeader>
                <h1 className="text-2xl font-bold">Profile</h1>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-12">
                <UserAvatar
                  url={user?.avatarUrl || undefined}
                  alt={`${user?.firstName}-${user?.lastName}`}
                  fallback={`${user?.firstName?.[0]}${user?.lastName?.[0]}`}
                  className="h-30 w-30 rounded-3xl"
                  editable
                />
                <UserDetailsCard user={user} />
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
            <Card className="row-start-4 col-start-1">
              <CardHeader></CardHeader>
              <CardContent></CardContent>
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
              <CardHeader>
                <h3 className="text-lg font-semibold">Change password</h3>
              </CardHeader>
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
