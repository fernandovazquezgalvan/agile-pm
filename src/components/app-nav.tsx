'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ExternalLink } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'

import { cn } from '@/lib/utils'

export function AppNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/dashboard" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Agile PM</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/dashboard"
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/dashboard' ? 'text-foreground' : 'text-foreground/60',
              )}
            >
              Dashboard
            </Link>
            <Link
              href="/projects"
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/projects' ? 'text-foreground' : 'text-foreground/60',
              )}
            >
              Projects
            </Link>
            <Link
              href="/tasks"
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/tasks' ? 'text-foreground' : 'text-foreground/60',
              )}
            >
              Tasks
            </Link>
            <Link
              href="/admin"
              className={cn(
                'flex items-center transition-colors hover:text-foreground/80',
                pathname === '/admin' ? 'text-foreground' : 'text-foreground/60',
              )}
              target="_blank"
            >
              Admin <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: 'w-8 h-8',
                },
              }}
            />
          </nav>
        </div>
      </div>
    </header>
  )
}
