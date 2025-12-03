# Quizzera - Pakistan's #1 MCQ & Assessment Engine

![Quizzera Logo](https://img.shields.io/badge/Quizzera-MCQ%20Engine-0F172A?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-In%20Development-22C55E?style=for-the-badge)
![License](https://img.shields.io/badge/License-Proprietary-0EA5E9?style=for-the-badge)

**Quizzera.pk** - A Mentisera Vertical

---

## 🎯 Overview

Quizzera is Pakistan's most powerful MCQ bank, online testing, and exam engine designed for competitive exams including **PPSC, FPSC, NTS, SPSC, KPPSC, HEC, University Entry Tests, O-Level/A-Level, FSc, Matric**, and subject-level quizzes.

### ✨ Key Features

- 📚 **Extensive MCQ Bank** - Comprehensive question libraries
- 🤖 **AI-Powered Generation** - Automated MCQ creation using Mentis AI
- 📊 **Smart Analytics** - Advanced performance tracking and insights
- 🏫 **Institution Portal** - Complete LMS for schools and universities
- 📱 **Mobile-First Design** - Responsive across all devices
- 🎓 **Adaptive Learning** - Personalized difficulty adjustment
- 📈 **Performance Tracking** - Detailed student progress monitoring
- 🔒 **Secure Testing** - Enterprise-grade security

---

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ 
- npm or yarn
- PostgreSQL 15+
- Redis (optional, for caching)

### Installation

```bash
# Clone the repository
git clone https://github.com/shaahidsoomro/Email-Scrapper.git
cd Email-Scrapper

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

---

## 📖 Documentation

- **[Project Specification](PROJECT.md)** - Complete project documentation
- **[Architecture](ARCHITECTURE.md)** - Technical architecture details
- **[Database Schema](DATABASE.md)** - Database design and ERD
- **[Branding Guidelines](BRANDING.md)** - Design system and branding
- **[API Documentation](docs/api.md)** - API endpoints and usage (coming soon)

---

## 🏗️ Tech Stack

### Frontend
- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Shadcn UI** - Component library
- **React Query** - State management

### Backend
- **Node.js** - Runtime environment
- **PostgreSQL** - Primary database
- **Prisma** - ORM and migrations
- **Redis** - Caching layer

### AI/ML
- **Google Vertex AI** - Machine learning
- **Mentis AI** - Custom AI microservice

### Infrastructure
- **Vercel** - Frontend hosting
- **Google Cloud** - Backend services
- **Cloudflare** - CDN and security

---

## 📁 Project Structure

```
quizzera/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   ├── lib/             # Utilities and helpers
│   ├── hooks/           # Custom React hooks
│   └── types/           # TypeScript types
├── prisma/              # Database schema
├── public/              # Static assets
├── tests/               # Test files
└── docs/                # Documentation
```

---

## 🎨 Design System

### Color Palette
- **Primary:** `#0F172A` (Navy)
- **Success:** `#22C55E` (Emerald)
- **Info:** `#0EA5E9` (Sky Blue)
- **Secondary:** `#475569` (Slate)
- **Background:** `#F8FAFC` (Light)

### Typography
- **Primary:** Inter
- **Secondary:** Poppins

---

## 🧪 Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format

# Database migrations
npx prisma migrate dev

# Generate Prisma Client
npx prisma generate
```

### Code Quality

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Husky** - Git hooks
- **Jest** - Unit testing
- **Playwright** - E2E testing

---

## 🤝 Contributing

This is a proprietary project developed by Mentisera. For internal team contributions:

1. Create a feature branch
2. Make your changes
3. Write/update tests
4. Submit a pull request

---

## 📊 Modules

### A. MCQ Bank Module
Comprehensive question management system with categorization, tagging, and versioning.

### B. AI MCQ Generator
AI-powered question generation using Mentis AI integration.

### C. Quiz Builder
Flexible quiz creation with multiple modes and configurations.

### D. Student Dashboard
Personalized learning dashboard with progress tracking and insights.

### E. Institution Dashboard
Complete management portal for schools and universities.

### F. Analytics & Insights
Advanced analytics for students and institutions with ML-powered recommendations.

---

## 🎯 Roadmap

### Phase 1 (Current) - MVP
- [x] Project documentation
- [ ] Core MCQ Bank
- [ ] Quiz Engine
- [ ] Basic dashboards
- [ ] Authentication

### Phase 2 (Next 6 months)
- [ ] AI Integration
- [ ] Advanced Analytics
- [ ] Mobile Apps
- [ ] Payment Integration

### Phase 3 (6-12 months)
- [ ] Urdu Support
- [ ] Offline Mode
- [ ] Video Explanations
- [ ] Live Proctoring

---

## 📞 Support

- **Website:** https://quizzera.pk
- **Email:** support@quizzera.pk
- **Documentation:** https://docs.quizzera.pk
- **Parent Company:** [Mentisera](https://mentisera.com)

---

## 📄 License

**Proprietary License** - © 2025 Mentisera Private Limited. All rights reserved.

This software is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

---

## 🙏 Acknowledgments

- **Mentisera Team** - Core development team
- **Course Craft** - Integration partner
- **Mentis AI** - AI/ML services

---

**Built with ❤️ by Mentisera for Pakistan's Education Revolution**
