# Agile-PM App Incremental Plan

This plan outlines the phases for building out the Agile-PM application. Each phase focuses on integrating non-functional requirements (NFR) first, followed by functional requirements (FR). After completing each phase, the app will be deployed to Vercel. Checkboxes indicate deliverables that can be marked off as completed.

## Phase 1: Foundation Setup with Payload CMS (NFR)

**Goal:** Set up the project foundation with Payload CMS 3.0, database integration, and basic UI.

**Technologies Added:**
- Payload CMS 3.0
- Next.js 15 (App Router)
- React 19
- Neon Postgres (Database)
- Drizzle ORM
- shadcn UI

**Deliverables:**
- [ ] Initial Payload CMS setup using `create-payload-app`
- [ ] Database configuration with Neon Postgres
- [ ] Basic admin interface working locally
- [ ] Homepage `/` with navigation using shadcn UI
- [ ] `/projects` page fetching data from Payload CMS
- [ ] GitHub repository setup
- [ ] Deployed to Vercel

---

## Phase 2: Authentication (NFR)

**Goal:** Implement user authentication and protect certain routes.

**Technologies Added:**
- Clerk

**Deliverables:**
- [ ] Sign-in/sign-up pages using Clerk
- [ ] `/dashboard` page protected by authentication
- [ ] Deployed to Vercel

---

## Phase 3: File Upload (NFR)

**Goal:** Enable file uploads for project-related documents.

**Technologies Added:**
- UploadThing

**Deliverables:**
- [ ] File upload form on `/projects/[id]` page
- [ ] File metadata stored in the database
- [ ] Deployed to Vercel

---

## Phase 4: Payments & Billing (NFR)

**Goal:** Add subscription and payment functionality.

**Technologies Added:**
- Stripe

**Deliverables:**
- [ ] `/billing` page with "Subscribe" button linking to Stripe Checkout
- [ ] On successful payment, display "Premium Features" on `/dashboard`
- [ ] Deployed to Vercel

---

## Phase 5: Analytics & Monitoring (NFR)

**Goal:** Integrate analytics and error tracking.

**Technologies Added:**
- PostHog (Analytics)
- Sentry (Error Tracking)

**Deliverables:**
- [ ] Event tracking (e.g., "Created Project") visible in PostHog
- [ ] Test error logged in Sentry
- [ ] Deployed to Vercel

---

## Phase 6: Refinements, Polishing & CI/CD (NFR)

**Goal:** Finalize the base environment, ensure code quality, and automate testing.

**Enhancements:**
- GitHub Actions (CI/CD)
- TypeScript strict mode
- UI and code polish

**Deliverables:**
- [ ] GitHub Actions workflow for tests, linting, and builds on PRs
- [ ] Build status badge on homepage
- [ ] Strict TypeScript checks and improved code quality
- [ ] Deployed to Vercel

---

## Phase 7: Core Functional Requirements (FR)

**Goal:** Implement the essential Agile-PM features.

**Core Features:**
- Project creation, editing, and archiving
- Sprints and tasks (CRUD operations)
- Task status tracking (e.g., To Do, In Progress, Done)
- User roles & permissions

**Deliverables:**
- [ ] Enhanced `/projects` page to create/edit projects
- [ ] `/projects/[id]/sprints` page for managing sprints and tasks
- [ ] Kanban board or list view for tasks
- [ ] Permissions enforced by user roles
- [ ] Deployed to Vercel

---

## Phase 8: Advanced/Nice-to-Have Functional Requirements (FR)

**Goal:** Add advanced features to enhance user productivity and experience.

**Advanced Features:**
- Reporting & analytics (e.g., burndown charts, velocity reports)
- Collaboration tools (comments, notifications)
- Integrations (Slack, GitHub, JIRA)
- Customizations (fields, labels, themes)

**Deliverables:**
- [ ] `/reports` page with a burndown chart
- [ ] Task commenting feature (real-time updates)
- [ ] Optional integrations (e.g., Slack notifications)
- [ ] Customizable fields or labels in projects
- [ ] Deployed to Vercel

---

# Tracking Completion

As you progress, check off the deliverables under each phase to keep track of what's done and what remains.
