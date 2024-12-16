/**
 * Project Details Page
 *
 * Displays detailed information about a specific project.
 */

import { notFound } from 'next/navigation'
import { getPayloadClient } from '@/lib/payload'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ProjectPageProps {
  params: {
    id: string
  }
}

async function getProject(id: string) {
  try {
    const payload = await getPayloadClient()
    const project = await payload.findByID({
      collection: 'projects',
      id,
    })
    return project
  } catch (error) {
    console.error('Error fetching project:', error)
    return null
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
        <Link href="/projects">
          <Button variant="outline">Back to Projects</Button>
        </Link>
      </div>

      <div className="grid gap-6">
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold mb-4">Project Details</h2>
          <dl className="grid gap-3">
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Status</dt>
              <dd className="mt-1">
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground">
                  {project.status}
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Description</dt>
              <dd className="mt-1 text-sm">{project.description || 'No description provided.'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-muted-foreground">Start Date</dt>
              <dd className="mt-1 text-sm">{new Date(project.startDate).toLocaleDateString()}</dd>
            </div>
            {project.endDate && (
              <div>
                <dt className="text-sm font-medium text-muted-foreground">End Date</dt>
                <dd className="mt-1 text-sm">{new Date(project.endDate).toLocaleDateString()}</dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>
  )
}
