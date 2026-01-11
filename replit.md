# Lumiere Pilates Studio

## Overview

A Korean-language Pilates studio website built with React, Express, and MySQL. The application showcases studio programs, instructor profiles, and provides a contact form for prospective clients. It features a premium, calming aesthetic with smooth scroll animations using Framer Motion and a Sage Green/Soft Sand color palette.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for scroll animations and reveal effects
- **Smooth Scrolling**: react-scroll for navigation links
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful endpoints defined in shared/routes.ts with Zod schemas
- **Database ORM**: Drizzle ORM configured for MySQL
- **Build System**: Custom esbuild script for server bundling, Vite for client

### Data Storage
- **Database**: MySQL (configured via mysql2 driver)
- **Schema Definition**: Drizzle ORM schemas in shared/schema.ts
- **Tables**: instructors, programs, contactMessages
- **Note**: drizzle.config.ts shows PostgreSQL dialect but server/db.ts uses MySQL - the application currently runs on MySQL

### Shared Code Pattern
- Schema definitions and API route contracts live in the `shared/` directory
- Both client and server import from `@shared/*` for type safety
- Zod schemas provide runtime validation on both ends

### Build and Development
- Development: Vite dev server with HMR proxying to Express backend
- Production: Vite builds static files to dist/public, esbuild bundles server code
- Database migrations: `npm run db:push` using drizzle-kit

## External Dependencies

### Database
- MySQL database accessed via DATABASE_URL environment variable
- Uses mysql2 connection pooling

### UI Component Library
- shadcn/ui components (Radix UI primitives)
- Full component set in client/src/components/ui/

### External Fonts
- Google Fonts: Cormorant Garamond (headings), Lato (body text)

### Image Assets
- Unsplash for placeholder/hero images

### Docker Support
- Docker Compose configuration available for containerized deployment
- Includes MySQL service with preconfigured credentials

## Deployment Notes

### Docker 배포 (권장)
이 프로젝트는 Docker를 통한 MySQL 배포용으로 설정되어 있습니다.
배포 가이드: `DOCKER_README.md` 참조

### 배포 전 필수 수정사항
`drizzle.config.ts` 파일에서:
```typescript
dialect: "mysql"  // "postgresql"에서 변경 필요
```

### Replit 환경
Replit은 PostgreSQL만 지원하므로 이 MySQL 버전은 Replit에서 실행되지 않습니다.
Docker 환경에서만 실행 가능합니다.