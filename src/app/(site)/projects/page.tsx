import { Button } from '@/components/ui/button'
import { getPayloadClient } from '@/lib/payload'
import type { Project } from '@/payload-types'

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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <Button>Create Project</Button>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-lg border bg-card p-8 text-card-foreground">
          <p className="text-muted-foreground">
            No projects found. Create your first project to get started.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="rounded-lg border bg-card p-6 text-card-foreground">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              {project.description && (
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              )}
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground">
                  {project.status}
                </span>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
