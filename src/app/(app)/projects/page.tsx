import { getPayloadClient } from '@/lib/payload'
import { ProjectForm } from './_components/ProjectForm'
import type { Project } from '@/payload-types'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

async function getProjects(): Promise<Project[]> {
  try {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({
      collection: 'projects',
    })
    return docs
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col">
      <div className="container px-4 md:px-6 py-6 md:py-8 mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
              <p className="text-muted-foreground">Manage and track your projects</p>
            </div>
            <ProjectForm />
          </div>

          {projects.length === 0 ? (
            <div className="rounded-xl border bg-card p-12">
              <div className="flex flex-col items-center justify-center text-center gap-3">
                <p className="text-lg font-medium">No projects found</p>
                <p className="text-muted-foreground max-w-[500px]">
                  Create your first project to get started with managing your tasks and timelines.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-xl border bg-card p-6 transition-all hover:shadow-md"
                >
                  <div className="flex h-full flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <h2 className="text-xl font-semibold tracking-tight line-clamp-1">
                        {project.name}
                      </h2>
                      {project.description && (
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {project.description}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                        {project.status}
                      </span>
                      <Link href={`/projects/${project.id}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="group-hover:bg-secondary/50 transition-colors"
                        >
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
