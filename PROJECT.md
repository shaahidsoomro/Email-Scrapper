# **QUIZZERA – PROJECT DOCUMENT (Version 1.0)**

### *Pakistan's Most Powerful MCQ, Testing & Assessment Engine*

**A Mentisera Vertical — Quizzera.pk**

---

## **1️⃣ Introduction**

**Quizzera** is Mentisera's dedicated *MCQ Bank, Online Testing, and Exam Engine* designed for competitive exams such as **PPSC, FPSC, NTS, SPSC, KPPSC, HEC, University Entry Tests, O-Level/A-Level, FSc, Matric, and subject-level quizzes**.

### **Supported Features:**

* Large MCQ libraries
* AI-powered question creation
* Chapter-wise quizzes
* Smart analytics for students
* LMS-style performance tracking for institutions

### **Integrations:**

It fully integrates with **Course Craft**, **Mentis AI**, and **Mentisera Academy**.

---

## **2️⃣ Core Vision**

To become **Pakistan's most reliable, accurate, and scalable digital testing engine** used by:

* Students (self-study)
* Schools & universities (exam delivery)
* Coaching centers
* Teachers (quiz creation)
* HR teams (pre-employment testing)

---

## **3️⃣ Major Modules**

Below are the officially defined modules for Quizzera.

---

### **A) MCQ Bank Module**

A structured content engine for storing and managing MCQs.

#### **Key Features**

* Add/Edit/Delete MCQs
* Difficulty levels (Easy, Medium, Hard)
* Hierarchical Categories: Subject → Topic → Chapter → Subtopic
* Tags (e.g., "CSS English", "NTS math", "HEC LAW")
* Multiple explanations support
* Add source/reference for each question
* Import/Export MCQs in bulk
* Version control for MCQ content

---

### **B) AI MCQ Generator (Mentis AI Integration)**

The platform can generate:

* MCQs from course outlines
* Topic-based MCQs
* Paragraph reading comprehension MCQs
* Picture-based questions
* Scenario-based questions

#### **Output Includes:**

* Correct answer
* Distractors (wrong options)
* Detailed explanation
* Difficulty level
* Learning objectives mapped

---

### **C) Quiz Builder**

Teachers/institutions can create quizzes within minutes.

#### **Features:**

* Auto-generate quiz from MCQ bank
* Manual selection of questions
* Difficulty mixing (easy/medium/hard ratio)
* Timed quizzes
* Randomized question order
* Negative marking support
* Shuffle answer options
* Question weightage

#### **Quiz Types:**

* **Practice mode** - Instant feedback, no time limit
* **Exam mode** - Timed, no feedback until submission
* **Adaptive mode** - Difficulty adjusts based on performance

---

### **D) Student Dashboard**

A personalized learning dashboard with:

* Progress tracking across subjects
* Subject-wise performance graphs
* Weak-topic detection algorithm
* AI suggestions ("Work more on Algebra – accuracy 54%")
* Complete attempt history
* Study streak tracking
* Leaderboards
* Certificate generation

---

### **E) Institution Dashboard**

For schools, academies, and universities:

* Create and schedule exams
* Bulk upload students
* Real-time attempt monitoring
* Comprehensive analytics reports
* Export results (PDF, Excel)
* Item analysis (p-value, discrimination index)
* Teacher accounts & role-based permissions
* Custom branding options
* Batch-wise comparison
* Question bank management

---

### **F) Analytics & Insights**

Highly important module for data-driven learning:

#### **For Students:**

* Accuracy trends over time
* Average attempt time per question
* Strength/weakness patterns
* Topic mastery score
* Performance comparison with peers
* Predictive success rate

#### **For Institutions:**

* Batch-wise performance analysis
* Question difficulty validation
* Student engagement metrics
* Time-based performance patterns
* Cheating detection (optional v2)
* Drop-off rate analysis

---

## **4️⃣ Project Architecture**

The architecture fits with Mentisera's standard AI stack.

### **Frontend:**

* **Next.js 14+** (App Router)
* **TypeScript** for type safety
* **Tailwind CSS** for styling
* **Shadcn UI** for component library
* **Mentisera Design Kit** for brand consistency
* **React Query** for state management
* **Zod** for validation

### **Backend:**

* **Node.js / Nest.js** OR **Firebase**
* **PostgreSQL** for relational data (MCQs, users, institutions)
* **Firestore** for real-time features
* **Redis** for caching and session management
* **API layer** secured with JWT/Google Cloud IAM
* **GraphQL** or **REST API** architecture

### **AI Layer:**

* **Vertex AI** for ML models
* **Mentis AI microservice** for question generation
* **Embedding vector search** for question similarity detection
* **Natural Language Processing** for answer evaluation

### **Hosting & Infrastructure:**

* **Frontend:** Firebase Hosting or Vercel
* **Backend:** Google Cloud Run / App Engine
* **Database:** Cloud SQL (PostgreSQL)
* **Storage:** Google Cloud Storage for media
* **CDN:** Cloudflare or Google Cloud CDN

---

## **5️⃣ Database Schema Overview**

Detailed schema available in `DATABASE.md`

### **Core Tables:**

1. **subjects** - Main subject categories
2. **topics** - Topics within subjects
3. **chapters** - Chapters within topics
4. **mcqs** - MCQ questions
5. **options** - Answer options for MCQs
6. **quizzes** - Quiz definitions
7. **quiz_attempts** - Student quiz attempts
8. **quiz_results** - Detailed results
9. **institutions** - Schools/universities
10. **students** - Student profiles
11. **teachers** - Teacher profiles
12. **roles_permissions** - Access control
13. **analytics_events** - Event tracking

---

## **6️⃣ User Roles**

1. **Super Admin (Mentisera)** - Full system access
2. **Institution Admin** - Manage institution and users
3. **Teacher** - Create quizzes and view analytics
4. **Student** - Take quizzes and view progress
5. **Content Creator / MCQ Contributor** - Add/edit MCQs

---

## **7️⃣ Monetization Model**

Quizzera will have a **B2C + B2B model**:

### **For Students (B2C)**

* **Free Tier:**
  * 50 MCQs per month
  * Basic practice mode
  * Limited analytics

* **Premium (Individual):**
  * Unlimited MCQs
  * All quiz modes
  * Advanced analytics
  * Certificate generation
  * Pricing: PKR 499/month or PKR 4,999/year

* **Subject Packs:**
  * PPSC Pack: PKR 999
  * FPSC Pack: PKR 999
  * NTS Pack: PKR 1,499
  * University Entry: PKR 1,999

### **For Institutions (B2B)**

* **Per Student License:**
  * 1-100 students: PKR 200/student/year
  * 101-500 students: PKR 150/student/year
  * 500+ students: Custom pricing

* **Enterprise Features:**
  * Custom branded portal
  * Dedicated support
  * Custom question bank
  * Advanced analytics
  * API access

### **For Teachers**

* Quiz creation tools (Free with institution license)
* Advanced analytics dashboard
* Export tools

---

## **8️⃣ Unique Value Proposition**

Why Quizzera is different from Pakistan's existing MCQ platforms:

✅ **100% aligned with Pakistan's competitive exams** - PPSC, FPSC, SPSC, NTS, HEC  
✅ **AI-generated verified questions** with Mentis AI integration  
✅ **Smart analytics** like Coursera, Khan Academy, Quizizz  
✅ **Institutional portal** - missing in Pakistani market  
✅ **Deep integration** with Course Craft & Mentis AI ecosystem  
✅ **Modern UI/UX** with Tailwind + Shadcn  
✅ **Offline export options** for areas with limited connectivity  
✅ **Completely localized** for Pakistan (Urdu support coming)  
✅ **Mobile-first responsive design**  
✅ **Progressive Web App (PWA)** support  

---

## **9️⃣ Branding Guidelines**

### **Domain:**
**Quizzera.pk**

### **Color Palette:**

Use official Mentisera color palette:

* **#0F172A** – Navy (Primary)
* **#22C55E** – Emerald (Success)
* **#0EA5E9** – Sky Blue (Info)
* **#475569** – Slate (Secondary)
* **#F8FAFC** – Light (Background)
* **#EF4444** – Red (Error)
* **#F59E0B** – Amber (Warning)

### **Typography:**

* **Primary Font:** Inter
* **Secondary Font:** Poppins
* **Code Font:** Fira Code

### **Logo Direction:**

* Q + checkmark icon
* Q + tick box
* Minimal MCQ bubble design
* Modern, clean, professional

### **Design Principles:**

* Clean and minimal
* Focus on readability
* Accessibility first
* Mobile responsive
* Fast loading times

---

## **🔟 Project Deliverables**

### **Phase 1 (MVP - 3 months):**

- [x] Project documentation
- [ ] UI/UX wireframes (Figma)
- [ ] Full SRS (Software Requirements Specification)
- [ ] Database schema and ERD
- [ ] Frontend Next.js + Tailwind base
- [ ] API development
- [ ] MCQ Bank core module
- [ ] Quiz engine implementation
- [ ] Student dashboard (basic)
- [ ] Admin dashboard (basic)
- [ ] Authentication system

### **Phase 2 (3-6 months):**

- [ ] AI MCQ Generator integration
- [ ] Advanced analytics
- [ ] Institution dashboard
- [ ] Teacher portal
- [ ] Payment integration
- [ ] Mobile app (React Native)

### **Phase 3 (6-12 months):**

- [ ] Urdu language support
- [ ] Offline mode
- [ ] Advanced cheating detection
- [ ] Video explanations
- [ ] Live proctoring
- [ ] Marketplace for MCQs

---

## **📊 Success Metrics**

### **Year 1 Goals:**

* 10,000+ registered students
* 50+ institutional partnerships
* 100,000+ MCQs in database
* 1 million+ quiz attempts
* PKR 5 million+ ARR

### **Year 3 Goals:**

* 100,000+ registered students
* 500+ institutional partnerships
* Market leader in Pakistan's MCQ space
* PKR 50 million+ ARR

---

## **🚀 Getting Started**

See `README.md` for development setup instructions.

See `ARCHITECTURE.md` for technical architecture details.

See `DATABASE.md` for database schema documentation.

---

## **📞 Contact & Support**

* **Website:** https://quizzera.pk
* **Email:** support@quizzera.pk
* **Parent Company:** Mentisera
* **Documentation:** https://docs.quizzera.pk

---

**Document Version:** 1.0  
**Last Updated:** December 2025  
**Status:** In Development  
**License:** Proprietary - Mentisera Private Limited
