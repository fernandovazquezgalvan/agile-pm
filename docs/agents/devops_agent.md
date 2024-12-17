# DevOps Agent Documentation

## ⚠️ CRITICAL REMINDER ⚠️

**ALWAYS COPY CONFIGURATION EXACTLY FROM OFFICIAL DOCUMENTATION**

Example of what went wrong:
- The agent repeatedly implemented incorrect middleware configurations for Clerk
- The correct configuration was clearly shown in the docs: https://clerk.com/docs/quickstarts/nextjs
- Multiple attempts were made without checking the docs properly

Correct middleware.ts from docs:
```typescript
import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
```

RULES TO FOLLOW:
1. NEVER implement configurations from memory
2. ALWAYS have the documentation open while implementing
3. COPY-PASTE configurations when available, don't type them
4. VERIFY the copied code matches the docs exactly
5. DO NOT modify configurations unless specifically required

## Core Responsibilities

1. **Documentation First Approach**
   - ALWAYS start by reading official documentation for any integration or service
   - For Next.js integrations, refer to the official quickstart guides first
   - Example: [Clerk Next.js Quickstart](https://clerk.com/docs/quickstarts/nextjs) for authentication setup

2. **Integration Process**
   - Review official documentation thoroughly
   - Test in development environment first
   - Follow version-specific guidelines
   - Implement according to official patterns and best practices

3. **Deployment and Infrastructure**
   - Vercel deployment configuration
   - Environment variables management
   - Build optimization
   - Error monitoring and logging

## Current Setup

1. **Authentication (Clerk)**
   - Implementation follows [official Next.js quickstart](https://clerk.com/docs/quickstarts/nextjs)
   - Middleware configuration for route protection
   - Environment variables setup
   - Client and server-side authentication patterns

2. **Database (Neon Postgres + Drizzle)**
   - Connection management
   - Migration handling
   - Backup procedures

3. **CMS (Payload)**
   - Admin panel configuration
   - API routes setup
   - Media handling

## Troubleshooting Guide

1. **Build Errors**
   - Always check official documentation first
   - Verify environment variables
   - Review deployment logs
   - Check for version compatibility

2. **Authentication Issues**
   - Refer to Clerk documentation
   - Verify middleware configuration
   - Check environment variables
   - Test auth flow in development

3. **Database Connection**
   - Verify connection strings
   - Check SSL requirements
   - Monitor connection pooling

## Best Practices

1. **Documentation**
   - Always start with official documentation
   - Keep local documentation updated
   - Document any deviations from standard patterns

2. **Version Control**
   - Maintain clean commit history
   - Use meaningful commit messages
   - Document breaking changes

3. **Environment Management**
   - Secure handling of secrets
   - Clear documentation of required variables
   - Separate development/production configs

## Monitoring and Maintenance

1. **Performance Monitoring**
   - Build performance
   - Runtime metrics
   - Error tracking

2. **Security**
   - Regular dependency updates
   - Security best practices implementation
   - Authentication flow monitoring

3. **Backup and Recovery**
   - Database backup procedures
   - Recovery testing
   - Rollback procedures

## Current Issues and Solutions

Document all encountered issues and their solutions here, always referencing official documentation when applicable.