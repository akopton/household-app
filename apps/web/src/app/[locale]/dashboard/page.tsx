import { getCurrentUser } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/auth/login")
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
        <div className="space-y-2">
          <p>
            <span className="font-medium">Email:</span> {user.email}
          </p>
          {user.name && (
            <p>
              <span className="font-medium">Name:</span> {user.name}
            </p>
          )}
          {user.username ? (
            <p>
              <span className="font-medium">Username:</span> {user.username}
            </p>
          ) : (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-yellow-800">
                You havent set a username yet.
                <a
                  href="/dashboard/settings"
                  className="font-medium underline hover:text-yellow-900"
                >
                  Set it now
                </a>
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Your Households</h3>
          <p className="text-gray-600">Manage your households here</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Settings</h3>
          <p className="text-gray-600 mb-4">Update your profile information</p>
          <a
            href="/dashboard/settings"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Go to Settings
          </a>
        </div>
      </div>
    </div>
  )
}
