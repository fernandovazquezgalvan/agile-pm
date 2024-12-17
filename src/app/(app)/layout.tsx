import { type ReactNode } from 'react'
import { AppNav } from '@/components/app-nav'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <AppNav />
      <main className="flex-1">{children}</main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Agile PM - Project Management for Agile Teams
          </p>
        </div>
      </footer>
    </div>
  )
}
