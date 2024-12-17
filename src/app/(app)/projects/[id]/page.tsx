/**
 * Project Details Page
 *
 * Displays detailed information about a specific project.
 */

import { notFound } from 'next/navigation'
import { getPayloadClient } from '@/lib/payload'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const payload = await getPayloadClient()
  const project = await payload.findByID({
    collection: 'projects',
    id,
  })

  if (!project) {
    return notFound()
  }

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col">
      <div className="container px-4 md:px-6 py-6 md:py-8 mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
              <p className="text-muted-foreground">Project details and information</p>
            </div>
            <Link href="/projects">
              <Button variant="outline">Back to Projects</Button>
            </Link>
          </div>

          <div className="rounded-xl border bg-card">
            <div className="p-6 space-y-6">
              <h2 className="text-xl font-semibold tracking-tight">Project Details</h2>

              <dl className="grid gap-6">
                <div className="space-y-1">
                  <dt className="text-sm font-medium text-muted-foreground">Status</dt>
                  <dd>
                    <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                      {project.status}
                    </span>
                  </dd>
                </div>

                <div className="space-y-1">
                  <dt className="text-sm font-medium text-muted-foreground">Description</dt>
                  <dd className="text-sm">{project.description || 'No description provided.'}</dd>
                </div>

                <div className="space-y-1">
                  <dt className="text-sm font-medium text-muted-foreground">Start Date</dt>
                  <dd className="text-sm">
                    {new Date(project.startDate).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </dd>
                </div>

                {project.endDate && (
                  <div className="space-y-1">
                    <dt className="text-sm font-medium text-muted-foreground">End Date</dt>
                    <dd className="text-sm">
                      {new Date(project.endDate).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
