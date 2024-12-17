import { type ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <>{children}</> // Payload handles admin layout
}
