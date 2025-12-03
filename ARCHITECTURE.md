# Quizzera Technical Architecture

## Architecture Overview

Quizzera follows a modern, scalable microservices-inspired architecture built on Next.js with a focus on performance, security, and maintainability.

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Web App    │  │  Mobile App  │  │  Admin Panel │      │
│  │  (Next.js)   │  │(React Native)│  │   (Next.js)  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    API GATEWAY LAYER                         │
│                  (Next.js API Routes)                        │
│              Authentication & Rate Limiting                  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                         │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐           │
│  │ MCQ Bank   │  │Quiz Engine │  │ Analytics  │           │
│  │  Service   │  │  Service   │  │  Service   │           │
│  └────────────┘  └────────────┘  └────────────┘           │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐           │
│  │   User     │  │Institution │  │  Payment   │           │
│  │  Service   │  │  Service   │  │  Service   │           │
│  └────────────┘  └────────────┘  └────────────┘           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      DATA LAYER                              │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐           │
│  │ PostgreSQL │  │  Firebase  │  │   Redis    │           │
│  │   (Main)   │  │(Real-time) │  │  (Cache)   │           │
│  └────────────┘  └────────────┘  └────────────┘           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    EXTERNAL SERVICES                         │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐           │
│  │ Mentis AI  │  │Vertex AI   │  │   Email    │           │
│  │   (MCQ)    │  │  (ML/AI)   │  │  Service   │           │
│  └────────────┘  └────────────┘  └────────────┘           │
└─────────────────────────────────────────────────────────────┘
```

---

## Technology Stack

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI
- **State Management:** React Query (TanStack Query)
- **Form Handling:** React Hook Form + Zod
- **Charts:** Recharts / Chart.js
- **Authentication:** NextAuth.js

### Backend
- **Runtime:** Node.js 20+
- **API:** Next.js API Routes / GraphQL
- **Authentication:** JWT + OAuth 2.0
- **Validation:** Zod
- **ORM:** Prisma / Drizzle ORM

### Database
- **Primary Database:** PostgreSQL 15+ (Cloud SQL)
- **Real-time Data:** Firebase Firestore
- **Cache:** Redis (Google Cloud Memorystore)
- **Search:** Elasticsearch (optional)

### AI/ML
- **AI Platform:** Google Vertex AI
- **Custom AI:** Mentis AI microservice
- **Vector Database:** Pinecone / Weaviate

### Infrastructure
- **Hosting:** Vercel / Firebase Hosting
- **Backend:** Google Cloud Run
- **Storage:** Google Cloud Storage
- **CDN:** Cloudflare
- **Monitoring:** Sentry, LogRocket
- **Analytics:** Google Analytics 4, Mixpanel

---

## Application Structure

```
quizzera/
├── .github/                 # GitHub workflows
├── .vscode/                 # VS Code settings
├── public/                  # Static assets
│   ├── images/
│   ├── fonts/
│   └── icons/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (auth)/         # Auth routes group
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── forgot-password/
│   │   ├── (dashboard)/    # Dashboard routes
│   │   │   ├── student/
│   │   │   ├── teacher/
│   │   │   ├── institution/
│   │   │   └── admin/
│   │   ├── (public)/       # Public routes
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   └── pricing/
│   │   ├── api/            # API routes
│   │   │   ├── auth/
│   │   │   ├── mcqs/
│   │   │   ├── quizzes/
│   │   │   ├── analytics/
│   │   │   └── institutions/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/         # React components
│   │   ├── ui/            # Shadcn UI components
│   │   ├── forms/
│   │   ├── charts/
│   │   ├── quiz/
│   │   ├── mcq/
│   │   └── dashboard/
│   ├── lib/               # Utilities & helpers
│   │   ├── db/           # Database utilities
│   │   ├── auth/         # Auth utilities
│   │   ├── api/          # API clients
│   │   ├── utils/        # General utilities
│   │   └── validations/  # Zod schemas
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript types
│   ├── config/           # Configuration files
│   ├── constants/        # Constants
│   └── styles/           # Global styles
├── prisma/               # Prisma schema & migrations
│   ├── schema.prisma
│   └── migrations/
├── tests/                # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/                 # Documentation
├── scripts/              # Utility scripts
├── .env.example          # Environment variables template
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

---

## Core Modules

### 1. MCQ Bank Module

**Responsibilities:**
- CRUD operations for MCQs
- Category management (Subject → Topic → Chapter)
- Tagging system
- Import/Export functionality
- Version control

**Key Components:**
- `MCQEditor` - Create/edit MCQs
- `MCQBrowser` - Browse and search MCQs
- `BulkImporter` - Import MCQs from Excel/CSV
- `CategoryTree` - Hierarchical category browser

**API Endpoints:**
- `POST /api/mcqs` - Create MCQ
- `GET /api/mcqs/:id` - Get MCQ
- `PUT /api/mcqs/:id` - Update MCQ
- `DELETE /api/mcqs/:id` - Delete MCQ
- `GET /api/mcqs/search` - Search MCQs
- `POST /api/mcqs/bulk-import` - Bulk import

### 2. Quiz Engine

**Responsibilities:**
- Quiz creation and configuration
- Quiz delivery and timing
- Answer submission and evaluation
- Results calculation
- Adaptive difficulty

**Key Components:**
- `QuizBuilder` - Create quizzes
- `QuizPlayer` - Take quizzes
- `QuizReview` - Review quiz results
- `TimerComponent` - Quiz timer

**API Endpoints:**
- `POST /api/quizzes` - Create quiz
- `GET /api/quizzes/:id` - Get quiz
- `POST /api/quizzes/:id/start` - Start quiz attempt
- `POST /api/quizzes/:id/submit` - Submit answers
- `GET /api/quizzes/:id/results` - Get results

### 3. Analytics Module

**Responsibilities:**
- Performance tracking
- Statistical analysis
- Weak area detection
- Trend analysis
- Report generation

**Key Components:**
- `PerformanceDashboard` - Main analytics view
- `ChartComponents` - Various chart types
- `ReportGenerator` - Generate PDF/Excel reports
- `WeakAreaDetector` - AI-powered weak area analysis

**API Endpoints:**
- `GET /api/analytics/student/:id` - Student analytics
- `GET /api/analytics/quiz/:id` - Quiz analytics
- `GET /api/analytics/institution/:id` - Institution analytics
- `POST /api/analytics/report` - Generate report

### 4. User Management

**Responsibilities:**
- User authentication
- Role-based access control
- Profile management
- Institution hierarchy

**Key Components:**
- `AuthProvider` - Authentication context
- `UserProfile` - Profile management
- `RoleManager` - Role assignment
- `PermissionGuard` - Route protection

**API Endpoints:**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update profile

### 5. AI Integration

**Responsibilities:**
- MCQ generation from content
- Question similarity detection
- Answer evaluation
- Difficulty prediction

**Key Components:**
- `AIGenerator` - AI question generation
- `SimilarityChecker` - Duplicate detection
- `DifficultyPredictor` - ML-based difficulty estimation

**API Endpoints:**
- `POST /api/ai/generate-mcqs` - Generate MCQs
- `POST /api/ai/check-similarity` - Check for duplicates
- `POST /api/ai/predict-difficulty` - Predict difficulty

---

## Data Flow

### Quiz Taking Flow

```
Student → Quiz Selection → Start Quiz → Load Questions (Cache)
         ↓
Answer Questions → Auto-save Progress (Redis)
         ↓
Submit Quiz → Evaluate Answers → Calculate Score
         ↓
Store Results (PostgreSQL) → Update Analytics (Background)
         ↓
Show Results → Generate Certificate (if passed)
```

### MCQ Generation Flow (AI)

```
Teacher → Input Topic/Content → Send to Mentis AI
         ↓
AI Processes → Generates MCQs → Validates Quality
         ↓
Returns MCQs → Teacher Reviews → Approves/Edits
         ↓
Save to Database → Index for Search
```

---

## Security Architecture

### Authentication & Authorization
- JWT tokens with short expiry (15 min)
- Refresh tokens stored in HTTP-only cookies
- Role-based access control (RBAC)
- Permission-based authorization
- OAuth 2.0 for social login

### Data Security
- Encryption at rest (database level)
- Encryption in transit (TLS 1.3)
- API rate limiting
- CORS configuration
- SQL injection prevention (Prisma ORM)
- XSS protection
- CSRF tokens

### Monitoring & Logging
- Centralized logging (Google Cloud Logging)
- Error tracking (Sentry)
- Performance monitoring (Vercel Analytics)
- Security scanning (Snyk)
- Audit logs for sensitive operations

---

## Performance Optimization

### Caching Strategy
- **Redis Cache:**
  - User sessions
  - Quiz data during attempts
  - Frequently accessed MCQs
  - Analytics aggregations

- **Next.js Caching:**
  - Static page generation
  - Incremental static regeneration
  - API response caching

### Database Optimization
- Indexed columns for fast queries
- Database connection pooling
- Query optimization
- Materialized views for analytics
- Read replicas for analytics queries

### Frontend Optimization
- Code splitting
- Lazy loading
- Image optimization (next/image)
- Font optimization
- Bundle size monitoring

---

## Scalability Considerations

### Horizontal Scaling
- Stateless API design
- Load balancing (Google Cloud Load Balancer)
- Auto-scaling based on traffic
- Database sharding (future)

### Vertical Scaling
- Database performance tuning
- Query optimization
- Caching layers
- CDN for static assets

---

## Disaster Recovery

### Backup Strategy
- Daily automated database backups
- Point-in-time recovery (7 days)
- Geo-redundant storage
- Backup testing monthly

### High Availability
- Multi-region deployment
- Database replication
- Automated failover
- 99.9% uptime SLA

---

## Monitoring & Alerting

### Key Metrics
- Response time (p50, p95, p99)
- Error rate
- Database query performance
- Cache hit rate
- User engagement metrics

### Alerts
- High error rate (>1%)
- Slow response time (>1s)
- Database connection issues
- High memory usage (>80%)
- Failed background jobs

---

## Development Workflow

### Local Development
1. Clone repository
2. Install dependencies: `npm install`
3. Setup environment: Copy `.env.example` to `.env`
4. Run database migrations: `npx prisma migrate dev`
5. Start dev server: `npm run dev`

### CI/CD Pipeline
1. **Code Push** → GitHub
2. **Automated Tests** → Unit + Integration
3. **Linting** → ESLint + Prettier
4. **Type Checking** → TypeScript
5. **Build** → Next.js production build
6. **Deploy** → Vercel (automatic)

### Testing Strategy
- Unit tests (Jest + Testing Library)
- Integration tests (API routes)
- E2E tests (Playwright)
- Visual regression tests (Chromatic)

---

## API Documentation

API documentation will be available at `/api/docs` using:
- Swagger/OpenAPI specification
- Interactive API explorer
- Code examples in multiple languages

---

## Future Enhancements

### Phase 2
- GraphQL API
- Real-time collaboration
- Video explanations
- Live proctoring
- Mobile apps (iOS/Android)

### Phase 3
- Blockchain certificates
- AI tutoring system
- VR/AR question modes
- Gamification features
- Peer-to-peer learning

---

**Document Version:** 1.0  
**Last Updated:** December 2025
