import { auth, currentUser } from '@clerk/nextjs/server'

export default async function DashboardPage() {
  // const { userId } = await auth()
  const user = await currentUser()

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user?.firstName || 'User'}</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">Active Projects</h2>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">Tasks Due Today</h2>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">Team Members</h2>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold">Completed Projects</h2>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
      </div>
    </>
  )
}
