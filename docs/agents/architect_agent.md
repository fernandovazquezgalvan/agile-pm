# Architect Agent Logs

## Authentication Architecture Decision

### Context
The system requires two distinct types of users with different authentication needs:
1. Admin Users (Payload CMS)
2. Regular Users (Client Application)

### Proposed Architecture

#### Two-Tier Authentication System

1. **Admin Authentication (Payload CMS)**
   - Collection: `admins`
   - Purpose: System configuration, content management, approvals
   - Features:
     - Built-in Payload admin panel
     - JWT-based authentication
     - Role-based access control
     - Audit logging
   - Access:
     - `/admin/*` routes
     - Admin-specific API endpoints

2. **User Authentication (Clerk)**
   - Collection: `users` (synced with Clerk)
   - Purpose: Regular application users
   - Features:
     - Social login
     - MFA
     - User management
     - Session handling
   - Access:
     - `/dashboard`
     - `/projects`
     - User-specific features

### Integration Strategy

1. **Data Model**
```typescript
// Payload Collections
interface Admin {
  id: string
  email: string
  role: 'admin' | 'super_admin'
  permissions: string[]
}

interface User {
  id: string
  clerkId: string // Reference to Clerk user
  role: 'user' | 'manager'
  projects: Relation[]
}
```

2. **Authentication Flow**
- Admin routes (`/admin/*`): Payload authentication
- User routes: Clerk authentication
- API routes: Role-based middleware

3. **Security Considerations**
- Clear separation of admin/user concerns
- No cross-authentication between systems
- Distinct permission sets
- Audit trails for both systems

### Benefits
1. Clear separation of concerns
2. Leverages best features of both systems:
   - Payload: Admin panel, content management
   - Clerk: Modern auth features, social login
3. Simplified user experience for each user type
4. Better security through separation

### Risks and Mitigations
1. **Risk**: User confusion between systems
   - Mitigation: Clear UI separation and distinct login flows

2. **Risk**: Data synchronization
   - Mitigation: One-way sync from Clerk to Payload

3. **Risk**: Permission overlap
   - Mitigation: Strict role separation and middleware checks

### Implementation Guidelines
1. Rename current Users collection to Admins
2. Create new Users collection with Clerk integration
3. Implement role-based middleware
4. Set up clear routing structure
5. Document authentication flows

### Next Steps
1. [ ] Refactor Users collection to Admins
2. [ ] Create new Users collection schema
3. [ ] Implement Clerk authentication
4. [ ] Set up role-based middleware
5. [ ] Update API routes with proper auth checks
6. [ ] Document both authentication flows

### Decision
✅ Proceed with dual authentication system:
- Payload CMS for admin users
- Clerk for regular users

This approach provides the best balance of features, security, and user experience while maintaining clear separation of concerns. 

## Routing Architecture

### App Directory Structure
```
src/app/
├── (public)/           # Public pages (marketing, landing, etc.)
│   ├── page.tsx       # Landing page
│   ├── about/
│   ├── pricing/
│   └── layout.tsx     # Public layout with marketing nav
│
├── (app)/             # Main application (Clerk auth)
│   ├── dashboard/     # User dashboard
│   ├── projects/      # Project management
│   ├── tasks/         # Task management
│   ├── settings/      # User settings
│   └── layout.tsx     # App layout with authenticated nav
│
├── (admin)/           # Admin panel (Payload auth)
│   ├── [[...paths]]/ # Payload admin routes
│   └── layout.tsx    # Admin layout
│
├── api/              # API routes
│   ├── payload/     # Payload API routes
│   └── app/         # Application API routes
│
└── layout.tsx       # Root layout with providers
```

### Route Groups Explanation

1. **(public)/**
   - Purpose: Marketing and public content
   - Auth: None required
   - Features:
     - Landing page
     - Marketing pages
     - Public documentation
     - Contact forms

2. **(app)/**
   - Purpose: Main application features
   - Auth: Clerk authentication
   - Features:
     - User dashboard
     - Project management
     - Task tracking
     - Team collaboration

3. **(admin)/**
   - Purpose: Administrative functions
   - Auth: Payload authentication
   - Features:
     - Content management
     - User administration
     - System configuration
     - Analytics & reporting

### Authentication Boundaries

```typescript
// middleware.ts
import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: [
    '/',                  // Landing page
    '/about',            // Public pages
    '/pricing',
    '/api/payload/(.*)', // Payload API routes
    '/admin/(.*)',       // Admin panel
  ],
  ignoredRoutes: [
    '/api/payload/(.*)', // Bypass Clerk for Payload
    '/admin/(.*)',       // Bypass Clerk for Admin
  ],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
```

### Layout Strategy

1. **Root Layout** (`/app/layout.tsx`)
```typescript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <ThemeProvider>
          <ClerkProvider>{children}</ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
```

2. **Public Layout** (`/app/(public)/layout.tsx`)
```typescript
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PublicNav />
      <main>{children}</main>
      <PublicFooter />
    </>
  )
}
```

3. **App Layout** (`/app/(app)/layout.tsx`)
```typescript
export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AppNav />
      <main>{children}</main>
      <AppFooter />
    </>
  )
}
```

4. **Admin Layout** (`/app/(admin)/layout.tsx`)
```typescript
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</> // Payload handles admin layout
}
```

### Benefits of This Structure

1. **Clear Separation**
   - Each sub-site has its own layout and navigation
   - Authentication boundaries are explicit
   - Routes are logically grouped

2. **Maintainability**
   - Independent development of each section
   - Easier to manage access control
   - Clear import boundaries

3. **Performance**
   - Route groups enable better code splitting
   - Shared layouts reduce redundancy
   - Optimized bundle sizes per section

4. **Security**
   - Authentication clearly separated by route group
   - No accidental exposure of admin routes
   - Clear middleware boundaries

### Implementation Notes

1. **Public Routes**
   - No authentication required
   - Marketing-focused components
   - SEO optimization

2. **App Routes**
   - Protected by Clerk
   - User-specific features
   - Real-time capabilities

3. **Admin Routes**
   - Protected by Payload
   - Administrative features
   - Audit logging