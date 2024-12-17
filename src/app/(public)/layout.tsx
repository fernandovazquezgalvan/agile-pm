import { type ReactNode } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import { PublicNav } from '@/components/public-nav'
import { cn } from '@/lib/utils'

import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agile PM',
  description: 'Project Management for Agile Teams',
}

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}>
          <div className="relative flex min-h-screen flex-col bg-background">
            <PublicNav />
            <main className="flex-1">
              <div className="container px-4 md:px-6 mx-auto">{children}</div>
            </main>
            <footer className="border-t py-6 md:py-0">
              <div className="container px-4 md:px-6 mx-auto flex h-14 flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  Built with Next.js, Payload CMS, and shadcn/ui.
                </p>
                <p className="text-center text-sm text-muted-foreground md:text-right">
                  © 2024 Agile PM. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
