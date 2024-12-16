# System Architecture

## Overview

The application is built using a modern stack with Next.js 15 and Payload CMS 3.0, following a modular architecture pattern.

## Directory Structure

```
agile-pm/
├── app/
│   ├── (payload)/     # Payload CMS routes and admin panel
│   └── (site)/        # Frontend application routes
├── src/
│   ├── collections/   # Payload collections
│   ├── blocks/        # Reusable content blocks
│   └── fields/        # Custom field types
├── public/            # Static assets
└── docs/             # Documentation
```

## Key Components

### Backend (Payload CMS)

- **Collections**: Define data models and their relationships
- **Access Control**: Handle authentication and authorization
- **API**: GraphQL and REST endpoints
- **Admin Panel**: Content management interface

### Frontend (Next.js)

- **App Router**: Page routing and layout management
- **Server Components**: Server-side rendering
- **API Routes**: Backend functionality
- **Components**: Reusable UI components

### Database

- **Vercel Postgres**: Main data store
- **Schema**: Managed through Payload collections
- **Migrations**: Handled automatically by Payload

## Authentication Flow

1. User accesses admin panel
2. Payload handles authentication
3. JWT token issued
4. Token used for subsequent requests

## API Architecture

- GraphQL API (default)
- REST API (alternative)
- Server Actions for form submissions
- Real-time updates where needed 