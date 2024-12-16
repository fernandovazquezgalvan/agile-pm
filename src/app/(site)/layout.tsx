import { MainNav } from '@/components/MainNav'
import { Toaster } from '@/components/ui/toaster'
import '@/app/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="relative flex min-h-screen flex-col bg-background">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex h-14 items-center">
                <MainNav />
              </div>
            </div>
          </header>
          <div className="flex-1 flex flex-col">
            <div className="container mx-auto px-4 md:px-6 flex-1">{children}</div>
          </div>
          <Toaster />
        </div>
      </body>
    </html>
  )
}
