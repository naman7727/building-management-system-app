"# Building Management System

A full-stack building management system organized as independently deployable microservices and dashboards.

## Repository Structure

```text
apps/
  admin-dashboard/       # Admin and property manager web application
  user-dashboard/        # Resident web application
services/
  auth-service/           # JWT, refresh tokens, Argon2, identity boundary
  content-service/        # Buildings, units, residents, maintenance, announcements
packages/
  contracts/              # Shared API types and service contracts
```

The services use one PostgreSQL instance in development, but each service owns its
tables and business logic. Redis is reserved for queues and caching.

This commit provides the independently runnable service and dashboard boundaries,
health endpoints, typed contracts, local PostgreSQL/Redis infrastructure, and
production-oriented package separation. Domain persistence, JWT token issuance,
queues, file storage, payments, and end-to-end workflows should be implemented
inside their owning service as the product requirements are finalized.

## Local Development

```bash
pnpm install
docker compose up -d
pnpm dev
```

- Admin dashboard: `http://localhost:5173`
- User dashboard: `http://localhost:5174`
- Auth service: `http://localhost:3001`
- Content service: `http://localhost:3002`

## Technology Stack

### Frontend

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- TanStack Query
- React Hook Form
- Zod

### Backend

- NestJS
- TypeScript
- Prisma
- PostgreSQL
- Redis
- BullMQ

### Authentication

- JWT
- Refresh tokens
- Argon2

### Testing

- Jest
- Supertest
- Playwright

### Infrastructure

- Docker
- Docker Compose
- GitHub Actions

### Storage

- S3 / Cloudinary

### Payments

- Razorpay

## Deployment

- **Frontend:** Vercel
- **Backend:** Render / AWS / Railway
- **Database:** Neon PostgreSQL
- **Redis:** Upstash / Redis"
