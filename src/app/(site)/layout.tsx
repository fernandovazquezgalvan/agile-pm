import { MainNav } from '@/components/MainNav'
import { Toaster } from '@/components/ui/toaster'
import '@/app/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
              <MainNav />
            </div>
          </header>
          <main className="container py-6">{children}</main>
          <Toaster />
        </div>
      </body>
    </html>
  )
}
