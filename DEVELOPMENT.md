# Quizzera Development Guide

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20.x or higher
- **npm** 10.x or higher
- **PostgreSQL** 15.x or higher
- **Git** for version control

### Initial Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/shaahidsoomro/Email-Scrapper.git
   cd Email-Scrapper
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and fill in the required values:
   - `DATABASE_URL`: PostgreSQL connection string
   - `NEXTAUTH_SECRET`: Generate with `openssl rand -base64 32`
   - Other API keys as needed

4. **Set Up Database**
   ```bash
   # Run migrations
   npm run db:migrate
   
   # Generate Prisma Client
   npm run db:generate
   
   # (Optional) Seed database with sample data
   npm run db:seed
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
quizzera/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication routes
│   │   ├── (dashboard)/       # Dashboard routes
│   │   ├── (public)/          # Public pages
│   │   ├── api/               # API routes
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── ui/               # Shadcn UI components
│   │   ├── forms/            # Form components
│   │   ├── charts/           # Chart components
│   │   └── ...
│   ├── lib/                  # Utilities and helpers
│   │   ├── db/              # Database utilities
│   │   ├── auth/            # Auth utilities
│   │   ├── api/             # API clients
│   │   └── utils.ts         # General utilities
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript type definitions
│   ├── config/              # Configuration files
│   └── constants/           # Application constants
├── prisma/                  # Prisma ORM
│   ├── schema.prisma       # Database schema
│   ├── migrations/         # Database migrations
│   └── seed.ts             # Database seeding
├── public/                  # Static assets
├── tests/                   # Test files
├── docs/                    # Documentation
└── ...config files
```

---

## Development Workflow

### Creating a New Feature

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Implement the Feature**
   - Write code following the project's coding standards
   - Add tests for new functionality
   - Update documentation as needed

3. **Test Your Changes**
   ```bash
   npm run lint        # Check for linting errors
   npm run type-check  # Check TypeScript types
   npm test           # Run unit tests
   npm run test:e2e   # Run E2E tests (if applicable)
   ```

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push and Create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Style

- **ESLint**: Automatically enforces code style
- **Prettier**: Formats code consistently
- **TypeScript**: Ensures type safety

Run formatting:
```bash
npm run format
```

---

## Database Management

### Creating Migrations

```bash
# Create a new migration
npx prisma migrate dev --name your_migration_name

# Apply migrations
npx prisma migrate deploy

# Reset database (development only)
npx prisma migrate reset
```

### Prisma Studio

View and edit your database with Prisma Studio:
```bash
npm run db:studio
```

### Database Schema Updates

1. Edit `prisma/schema.prisma`
2. Create migration: `npm run db:migrate`
3. Generate client: `npm run db:generate`

---

## API Development

### Creating API Routes

API routes are located in `src/app/api/`. Example:

```typescript
// src/app/api/example/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // Handle GET request
  return NextResponse.json({ message: 'Success' })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  // Handle POST request
  return NextResponse.json({ data: body })
}
```

### API Authentication

Use middleware for protected routes:
```typescript
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  // Authenticated logic
}
```

---

## Component Development

### Creating UI Components

Use Shadcn UI as the base:

```tsx
// src/components/ui/button.tsx
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md font-semibold',
        variant === 'primary' && 'bg-primary text-white',
        variant === 'secondary' && 'bg-secondary text-white'
      )}
    >
      {children}
    </button>
  )
}
```

### Feature Components

```tsx
// src/components/quiz/QuizCard.tsx
import { Card } from '@/components/ui/card'

interface QuizCardProps {
  title: string
  description: string
}

export function QuizCard({ title, description }: QuizCardProps) {
  return (
    <Card>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-secondary">{description}</p>
    </Card>
  )
}
```

---

## Testing

### Unit Tests

```typescript
// tests/unit/utils.test.ts
import { describe, it, expect } from '@jest/globals'
import { calculatePercentage } from '@/lib/utils'

describe('calculatePercentage', () => {
  it('calculates percentage correctly', () => {
    expect(calculatePercentage(50, 100)).toBe(50)
  })
})
```

### E2E Tests

```typescript
// tests/e2e/quiz.spec.ts
import { test, expect } from '@playwright/test'

test('user can take a quiz', async ({ page }) => {
  await page.goto('/quiz/123')
  await page.click('[data-testid="start-quiz"]')
  // ... test logic
})
```

---

## Environment Variables

Required environment variables:

```env
# Database
DATABASE_URL="postgresql://..."

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="..."

# AI Services
VERTEX_AI_PROJECT_ID="..."
MENTIS_AI_API_KEY="..."

# Feature Flags
ENABLE_AI_GENERATION="false"
```

---

## Deployment

### Vercel Deployment

1. Connect repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

---

## Troubleshooting

### Common Issues

**Issue: Database connection error**
- Check `DATABASE_URL` in `.env`
- Ensure PostgreSQL is running
- Verify database exists

**Issue: Prisma Client not found**
- Run `npm run db:generate`

**Issue: TypeScript errors**
- Run `npm run type-check`
- Check for missing type definitions

**Issue: Port 3000 already in use**
- Kill the process: `lsof -ti:3000 | xargs kill`
- Or use a different port: `PORT=3001 npm run dev`

---

## Contributing

### Code Review Process

1. Create a pull request
2. Ensure CI checks pass
3. Request review from team members
4. Address feedback
5. Merge when approved

### Commit Message Convention

Follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Build process or tooling changes

Example:
```
feat: add quiz timer functionality

- Implement countdown timer
- Add pause/resume functionality
- Store elapsed time in database
```

---

## Resources

### Internal Documentation

- [Project Specification](PROJECT.md)
- [Architecture](ARCHITECTURE.md)
- [Database Schema](DATABASE.md)
- [Branding Guidelines](BRANDING.md)

### External Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com)

---

## Support

For questions or issues:

- **Technical Issues**: Create a GitHub issue
- **General Questions**: Contact the development team
- **Security Issues**: Email security@mentisera.com

---

**Last Updated**: December 2025  
**Version**: 1.0
