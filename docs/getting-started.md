# Getting Started

## Prerequisites

- Node.js >= 20.9.0
- pnpm package manager
- PostgreSQL database (Vercel Postgres)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd agile-pm
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Required environment variables:
- `DATABASE_URL`: PostgreSQL connection string
- `PAYLOAD_SECRET`: Secret key for Payload CMS

4. Start the development server:
```bash
pnpm dev
```

5. Access the admin panel:
- Open http://localhost:3000/admin
- Create your first admin user

## Development Workflow

1. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit them:
```bash
git add .
git commit -m "feat: your feature description"
```

3. Push your changes:
```bash
git push origin feature/your-feature-name
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm generate:types` - Generate Payload types
- `pnpm lint` - Run linter 