import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Welcome to Agile PM
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
        A modern project management tool built with Next.js and Payload CMS
      </p>
      <div className="flex gap-4">
        <Link href="/projects">
          <Button size="lg">View Projects</Button>
        </Link>
        <Link href="/admin">
          <Button variant="outline" size="lg">
            Admin Panel
          </Button>
        </Link>
      </div>
    </div>
  )
}
