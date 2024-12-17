'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export function PublicNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 md:px-6 mx-auto flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Agile PM</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/about"
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/about' ? 'text-foreground' : 'text-foreground/60',
              )}
            >
              About
            </Link>
            <Link
              href="/pricing"
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/pricing' ? 'text-foreground' : 'text-foreground/60',
              )}
            >
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <SignedOut>
            <nav className="flex items-center gap-2">
              <SignUpButton mode="modal">
                <Button variant="ghost" size="sm">
                  Sign Up
                </Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button size="sm">Sign In</Button>
              </SignInButton>
            </nav>
          </SignedOut>
          <SignedIn>
            <nav className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  Dashboard
                </Button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </nav>
          </SignedIn>
        </div>
      </div>
    </header>
  )
}
