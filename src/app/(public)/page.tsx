import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <>
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[64rem] flex-col items-center space-y-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Project Management for Agile Teams
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Streamline your agile workflow with our powerful project management tool. Built for
            modern teams.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/dashboard">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Everything you need to manage your projects effectively.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative overflow-hidden rounded-lg border bg-background p-2"
            >
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

const features = [
  {
    title: 'Project Management',
    description: 'Create and manage projects with ease. Track progress and milestones.',
  },
  {
    title: 'Task Tracking',
    description: 'Keep track of tasks and their progress. Assign and prioritize work.',
  },
  {
    title: 'Team Collaboration',
    description: 'Work together seamlessly with your team. Real-time updates and discussions.',
  },
  {
    title: 'Agile Workflows',
    description: 'Built for agile teams with sprint planning and backlog management.',
  },
  {
    title: 'Analytics & Reports',
    description: "Get insights into your team's performance with detailed analytics.",
  },
  {
    title: 'Integrations',
    description: 'Connect with your favorite tools and streamline your workflow.',
  },
]
