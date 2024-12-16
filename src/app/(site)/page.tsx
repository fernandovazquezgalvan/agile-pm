import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center py-16">
      <div className="container flex items-center justify-center">
        <div className="flex flex-col items-center space-y-8 text-center max-w-[700px]">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to Agile PM
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            A modern project management tool built with Next.js and Payload CMS
          </p>
          <div className="flex gap-4">
            <Link href="/projects">
              <Button size="lg" className="min-w-[140px] px-8 font-medium">
                View Projects
              </Button>
            </Link>
            <Link href="/admin">
              <Button variant="outline" size="lg" className="min-w-[140px] px-8 font-medium">
                Admin Panel
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
