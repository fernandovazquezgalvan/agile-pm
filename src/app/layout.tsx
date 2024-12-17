import { Inter } from 'next/font/google'
import { type Metadata } from 'next'

import { cn } from '@/lib/utils'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agile PM',
  description: 'Project Management for Agile Teams',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}>
        {children}
      </body>
    </html>
  )
}
