import { type ReactNode } from 'react'
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import { AppNav } from '@/components/app-nav'
import { cn } from '@/lib/utils'

import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agile PM - Dashboard',
  description: 'Project Management for Agile Teams',
}

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}>
          <SignedIn>
            <div className="relative flex min-h-screen flex-col bg-background">
              <AppNav />
              <main className="flex-1">
                <div className="container px-4 md:px-6 mx-auto">{children}</div>
              </main>
            </div>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  )
}
