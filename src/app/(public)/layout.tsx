import { type ReactNode } from 'react'
import { PublicNav } from '@/components/public-nav'

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <PublicNav />
      <main className="flex-1">{children}</main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js, Payload CMS, and shadcn/ui.
          </p>
        </div>
      </footer>
    </div>
  )
}
