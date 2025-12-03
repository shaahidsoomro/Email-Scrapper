# Quizzera Database Schema

## Overview

Quizzera uses PostgreSQL as the primary relational database for structured data storage. This document outlines the complete database schema.

---

## Entity Relationship Diagram

```
┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│   Subjects   │──1:N──│    Topics    │──1:N──│   Chapters   │
└──────────────┘       └──────────────┘       └──────────────┘
                                                       │
                                                      1:N
                                                       │
┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│     MCQs     │──N:M──│     Tags     │       │  Subtopics   │
└──────────────┘       └──────────────┘       └──────────────┘
       │
      1:N
       │
┌──────────────┐
│   Options    │
└──────────────┘

┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│    Users     │──1:N──│ QuizAttempts │──1:N──│QuizResponses │
└──────────────┘       └──────────────┘       └──────────────┘
       │                       │
       │                      1:N
       │                       │
┌──────────────┐       ┌──────────────┐
│Institutions  │       │   Results    │
└──────────────┘       └──────────────┘

┌──────────────┐       ┌──────────────┐
│   Quizzes    │──N:M──│     MCQs     │
└──────────────┘       └──────────────┘
       │
      1:N
       │
┌──────────────┐
│  QuizConfig  │
└──────────────┘
```

---

## Table Definitions

### 1. subjects

Stores main subject categories (e.g., Mathematics, English, General Knowledge)

```sql
CREATE TABLE subjects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL UNIQUE,
    slug VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    icon_url VARCHAR(500),
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id),
    
    CONSTRAINT subjects_name_check CHECK (LENGTH(name) >= 2)
);

CREATE INDEX idx_subjects_slug ON subjects(slug);
CREATE INDEX idx_subjects_active ON subjects(is_active);
```

### 2. topics

Stores topics within subjects (e.g., Algebra, Grammar)

```sql
CREATE TABLE topics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    description TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(subject_id, slug),
    CONSTRAINT topics_name_check CHECK (LENGTH(name) >= 2)
);

CREATE INDEX idx_topics_subject ON topics(subject_id);
CREATE INDEX idx_topics_slug ON topics(slug);
CREATE INDEX idx_topics_active ON topics(is_active);
```

### 3. chapters

Stores chapters within topics

```sql
CREATE TABLE chapters (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    topic_id UUID NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    description TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(topic_id, slug),
    CONSTRAINT chapters_name_check CHECK (LENGTH(name) >= 2)
);

CREATE INDEX idx_chapters_topic ON chapters(topic_id);
CREATE INDEX idx_chapters_slug ON chapters(slug);
```

### 4. mcqs

Stores MCQ questions

```sql
CREATE TABLE mcqs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    question_text TEXT NOT NULL,
    question_type VARCHAR(50) DEFAULT 'single_choice', -- single_choice, multiple_choice, true_false
    chapter_id UUID REFERENCES chapters(id) ON DELETE SET NULL,
    difficulty_level VARCHAR(20) DEFAULT 'medium', -- easy, medium, hard
    marks DECIMAL(5,2) DEFAULT 1.00,
    negative_marks DECIMAL(5,2) DEFAULT 0.00,
    time_limit_seconds INTEGER, -- Optional time limit for this question
    explanation TEXT,
    hint TEXT,
    reference_text TEXT, -- Source/reference
    reference_url VARCHAR(500),
    image_url VARCHAR(500),
    is_verified BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    usage_count INTEGER DEFAULT 0,
    correct_percentage DECIMAL(5,2), -- Statistical data
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id),
    verified_by UUID REFERENCES users(id),
    
    CONSTRAINT mcqs_question_check CHECK (LENGTH(question_text) >= 10),
    CONSTRAINT mcqs_marks_check CHECK (marks >= 0),
    CONSTRAINT mcqs_difficulty_check CHECK (difficulty_level IN ('easy', 'medium', 'hard'))
);

CREATE INDEX idx_mcqs_chapter ON mcqs(chapter_id);
CREATE INDEX idx_mcqs_difficulty ON mcqs(difficulty_level);
CREATE INDEX idx_mcqs_active ON mcqs(is_active);
CREATE INDEX idx_mcqs_verified ON mcqs(is_verified);
CREATE INDEX idx_mcqs_created_by ON mcqs(created_by);
CREATE FULLTEXT INDEX idx_mcqs_question_fulltext ON mcqs(question_text);
```

### 5. options

Stores answer options for MCQs

```sql
CREATE TABLE options (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mcq_id UUID NOT NULL REFERENCES mcqs(id) ON DELETE CASCADE,
    option_text TEXT NOT NULL,
    is_correct BOOLEAN DEFAULT false,
    display_order INTEGER DEFAULT 0,
    explanation TEXT, -- Specific explanation for this option
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT options_text_check CHECK (LENGTH(option_text) >= 1)
);

CREATE INDEX idx_options_mcq ON options(mcq_id);
CREATE INDEX idx_options_correct ON options(is_correct);
```

### 6. tags

Stores tags for categorizing MCQs

```sql
CREATE TABLE tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    category VARCHAR(50), -- exam_type, skill, topic_tag
    color VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT tags_name_check CHECK (LENGTH(name) >= 2)
);

CREATE INDEX idx_tags_category ON tags(category);
CREATE INDEX idx_tags_slug ON tags(slug);
```

### 7. mcq_tags

Junction table for MCQs and Tags (many-to-many)

```sql
CREATE TABLE mcq_tags (
    mcq_id UUID NOT NULL REFERENCES mcqs(id) ON DELETE CASCADE,
    tag_id UUID NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    PRIMARY KEY (mcq_id, tag_id)
);

CREATE INDEX idx_mcq_tags_mcq ON mcq_tags(mcq_id);
CREATE INDEX idx_mcq_tags_tag ON mcq_tags(tag_id);
```

### 8. users

Stores all user accounts

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255), -- NULL for OAuth users
    full_name VARCHAR(255) NOT NULL,
    username VARCHAR(100) UNIQUE,
    role VARCHAR(50) NOT NULL DEFAULT 'student', -- super_admin, institution_admin, teacher, student, content_creator
    phone VARCHAR(20),
    profile_image_url VARCHAR(500),
    institution_id UUID REFERENCES institutions(id) ON DELETE SET NULL,
    is_active BOOLEAN DEFAULT true,
    is_email_verified BOOLEAN DEFAULT false,
    last_login_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT users_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$'),
    CONSTRAINT users_role_check CHECK (role IN ('super_admin', 'institution_admin', 'teacher', 'student', 'content_creator'))
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_institution ON users(institution_id);
CREATE INDEX idx_users_active ON users(is_active);
```

### 9. institutions

Stores educational institutions

```sql
CREATE TABLE institutions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    type VARCHAR(50), -- school, college, university, coaching_center
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100) DEFAULT 'Pakistan',
    postal_code VARCHAR(20),
    phone VARCHAR(20),
    email VARCHAR(255),
    website VARCHAR(255),
    logo_url VARCHAR(500),
    subscription_plan VARCHAR(50) DEFAULT 'free', -- free, basic, premium, enterprise
    subscription_status VARCHAR(50) DEFAULT 'active',
    student_limit INTEGER DEFAULT 100,
    subscription_start_date DATE,
    subscription_end_date DATE,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT institutions_name_check CHECK (LENGTH(name) >= 2)
);

CREATE INDEX idx_institutions_slug ON institutions(slug);
CREATE INDEX idx_institutions_type ON institutions(type);
CREATE INDEX idx_institutions_active ON institutions(is_active);
```

### 10. quizzes

Stores quiz definitions

```sql
CREATE TABLE quizzes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    description TEXT,
    quiz_type VARCHAR(50) DEFAULT 'practice', -- practice, exam, adaptive
    subject_id UUID REFERENCES subjects(id) ON DELETE SET NULL,
    topic_id UUID REFERENCES topics(id) ON DELETE SET NULL,
    chapter_id UUID REFERENCES chapters(id) ON DELETE SET NULL,
    total_marks DECIMAL(8,2),
    passing_marks DECIMAL(8,2),
    duration_minutes INTEGER, -- NULL for unlimited
    negative_marking BOOLEAN DEFAULT false,
    negative_marks_per_question DECIMAL(5,2) DEFAULT 0.00,
    shuffle_questions BOOLEAN DEFAULT true,
    shuffle_options BOOLEAN DEFAULT true,
    show_results_immediately BOOLEAN DEFAULT true,
    allow_review BOOLEAN DEFAULT true,
    is_public BOOLEAN DEFAULT true,
    institution_id UUID REFERENCES institutions(id) ON DELETE CASCADE,
    created_by UUID NOT NULL REFERENCES users(id),
    is_active BOOLEAN DEFAULT true,
    scheduled_at TIMESTAMP, -- For scheduled exams
    expires_at TIMESTAMP, -- Quiz expiration
    max_attempts INTEGER DEFAULT 0, -- 0 for unlimited
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT quizzes_title_check CHECK (LENGTH(title) >= 3),
    CONSTRAINT quizzes_type_check CHECK (quiz_type IN ('practice', 'exam', 'adaptive'))
);

CREATE INDEX idx_quizzes_subject ON quizzes(subject_id);
CREATE INDEX idx_quizzes_topic ON quizzes(topic_id);
CREATE INDEX idx_quizzes_chapter ON quizzes(chapter_id);
CREATE INDEX idx_quizzes_creator ON quizzes(created_by);
CREATE INDEX idx_quizzes_institution ON quizzes(institution_id);
CREATE INDEX idx_quizzes_public ON quizzes(is_public);
CREATE INDEX idx_quizzes_active ON quizzes(is_active);
```

### 11. quiz_mcqs

Junction table for Quizzes and MCQs

```sql
CREATE TABLE quiz_mcqs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    quiz_id UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
    mcq_id UUID NOT NULL REFERENCES mcqs(id) ON DELETE CASCADE,
    question_order INTEGER NOT NULL,
    custom_marks DECIMAL(5,2), -- Override default marks for this quiz
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(quiz_id, mcq_id),
    UNIQUE(quiz_id, question_order)
);

CREATE INDEX idx_quiz_mcqs_quiz ON quiz_mcqs(quiz_id);
CREATE INDEX idx_quiz_mcqs_mcq ON quiz_mcqs(mcq_id);
```

### 12. quiz_attempts

Stores quiz attempt records

```sql
CREATE TABLE quiz_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    quiz_id UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    attempt_number INTEGER DEFAULT 1,
    status VARCHAR(50) DEFAULT 'in_progress', -- in_progress, completed, abandoned, expired
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    submitted_at TIMESTAMP,
    time_taken_seconds INTEGER,
    score DECIMAL(8,2),
    percentage DECIMAL(5,2),
    passed BOOLEAN,
    total_questions INTEGER,
    correct_answers INTEGER,
    wrong_answers INTEGER,
    unanswered INTEGER,
    ip_address VARCHAR(45),
    user_agent TEXT,
    
    CONSTRAINT quiz_attempts_status_check CHECK (status IN ('in_progress', 'completed', 'abandoned', 'expired'))
);

CREATE INDEX idx_quiz_attempts_quiz ON quiz_attempts(quiz_id);
CREATE INDEX idx_quiz_attempts_user ON quiz_attempts(user_id);
CREATE INDEX idx_quiz_attempts_status ON quiz_attempts(status);
CREATE INDEX idx_quiz_attempts_started ON quiz_attempts(started_at);
```

### 13. quiz_responses

Stores individual question responses

```sql
CREATE TABLE quiz_responses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    attempt_id UUID NOT NULL REFERENCES quiz_attempts(id) ON DELETE CASCADE,
    mcq_id UUID NOT NULL REFERENCES mcqs(id) ON DELETE CASCADE,
    selected_option_ids UUID[], -- Array of selected option IDs
    is_correct BOOLEAN,
    marks_obtained DECIMAL(5,2),
    time_taken_seconds INTEGER,
    is_marked_for_review BOOLEAN DEFAULT false,
    answered_at TIMESTAMP,
    
    UNIQUE(attempt_id, mcq_id)
);

CREATE INDEX idx_quiz_responses_attempt ON quiz_responses(attempt_id);
CREATE INDEX idx_quiz_responses_mcq ON quiz_responses(mcq_id);
CREATE INDEX idx_quiz_responses_correct ON quiz_responses(is_correct);
```

### 14. analytics_events

Stores analytics events for tracking

```sql
CREATE TABLE analytics_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    event_type VARCHAR(100) NOT NULL, -- quiz_start, quiz_complete, mcq_answer, etc.
    event_category VARCHAR(50), -- quiz, mcq, user, etc.
    event_data JSONB, -- Flexible data storage
    session_id VARCHAR(255),
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_analytics_user ON analytics_events(user_id);
CREATE INDEX idx_analytics_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_category ON analytics_events(event_category);
CREATE INDEX idx_analytics_created ON analytics_events(created_at);
CREATE INDEX idx_analytics_data_gin ON analytics_events USING GIN(event_data);
```

### 15. user_progress

Tracks user learning progress

```sql
CREATE TABLE user_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    subject_id UUID REFERENCES subjects(id) ON DELETE CASCADE,
    topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
    chapter_id UUID REFERENCES chapters(id) ON DELETE CASCADE,
    total_questions_attempted INTEGER DEFAULT 0,
    correct_answers INTEGER DEFAULT 0,
    accuracy_percentage DECIMAL(5,2),
    average_time_seconds INTEGER,
    mastery_level VARCHAR(20) DEFAULT 'beginner', -- beginner, intermediate, advanced, expert
    last_activity_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(user_id, subject_id, topic_id, chapter_id)
);

CREATE INDEX idx_user_progress_user ON user_progress(user_id);
CREATE INDEX idx_user_progress_subject ON user_progress(subject_id);
CREATE INDEX idx_user_progress_mastery ON user_progress(mastery_level);
```

### 16. subscriptions

Tracks user subscriptions

```sql
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    institution_id UUID REFERENCES institutions(id) ON DELETE CASCADE,
    plan_type VARCHAR(50) NOT NULL, -- free, monthly, annual, subject_pack
    plan_name VARCHAR(100),
    status VARCHAR(50) DEFAULT 'active', -- active, cancelled, expired, suspended
    amount DECIMAL(10,2),
    currency VARCHAR(10) DEFAULT 'PKR',
    billing_cycle VARCHAR(20), -- monthly, annual, one_time
    start_date DATE NOT NULL,
    end_date DATE,
    auto_renew BOOLEAN DEFAULT true,
    payment_method VARCHAR(50),
    transaction_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT subscriptions_entity_check CHECK (
        (user_id IS NOT NULL AND institution_id IS NULL) OR
        (user_id IS NULL AND institution_id IS NOT NULL)
    )
);

CREATE INDEX idx_subscriptions_user ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_institution ON subscriptions(institution_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
CREATE INDEX idx_subscriptions_end_date ON subscriptions(end_date);
```

---

## Materialized Views

### 1. Subject Performance Summary

```sql
CREATE MATERIALIZED VIEW mv_subject_performance AS
SELECT 
    s.id AS subject_id,
    s.name AS subject_name,
    COUNT(DISTINCT up.user_id) AS total_students,
    AVG(up.accuracy_percentage) AS avg_accuracy,
    SUM(up.total_questions_attempted) AS total_questions_attempted
FROM subjects s
LEFT JOIN user_progress up ON s.id = up.subject_id
GROUP BY s.id, s.name;

CREATE UNIQUE INDEX idx_mv_subject_performance ON mv_subject_performance(subject_id);
```

### 2. Quiz Statistics

```sql
CREATE MATERIALIZED VIEW mv_quiz_statistics AS
SELECT 
    q.id AS quiz_id,
    q.title,
    COUNT(DISTINCT qa.user_id) AS total_attempts,
    AVG(qa.score) AS average_score,
    AVG(qa.time_taken_seconds) AS average_time,
    COUNT(CASE WHEN qa.passed = true THEN 1 END) AS passed_count
FROM quizzes q
LEFT JOIN quiz_attempts qa ON q.id = qa.quiz_id
WHERE qa.status = 'completed'
GROUP BY q.id, q.title;

CREATE UNIQUE INDEX idx_mv_quiz_statistics ON mv_quiz_statistics(quiz_id);
```

---

## Database Functions

### 1. Calculate Quiz Score

```sql
CREATE OR REPLACE FUNCTION calculate_quiz_score(attempt_id_param UUID)
RETURNS DECIMAL(8,2) AS $$
DECLARE
    total_score DECIMAL(8,2);
BEGIN
    SELECT SUM(marks_obtained)
    INTO total_score
    FROM quiz_responses
    WHERE attempt_id = attempt_id_param;
    
    RETURN COALESCE(total_score, 0.00);
END;
$$ LANGUAGE plpgsql;
```

### 2. Update User Progress

```sql
CREATE OR REPLACE FUNCTION update_user_progress()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO user_progress (user_id, subject_id, topic_id, chapter_id)
    SELECT 
        NEW.user_id,
        c.topic_id,
        t.subject_id,
        m.chapter_id
    FROM quiz_responses qr
    JOIN mcqs m ON qr.mcq_id = m.id
    JOIN chapters c ON m.chapter_id = c.id
    JOIN topics t ON c.topic_id = t.id
    WHERE qr.attempt_id = NEW.id
    ON CONFLICT (user_id, subject_id, topic_id, chapter_id) 
    DO UPDATE SET
        total_questions_attempted = user_progress.total_questions_attempted + 1,
        updated_at = CURRENT_TIMESTAMP;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_user_progress
AFTER INSERT ON quiz_attempts
FOR EACH ROW
WHEN (NEW.status = 'completed')
EXECUTE FUNCTION update_user_progress();
```

---

## Indexes Summary

Key indexes for performance:
- All foreign keys are indexed
- Full-text search on MCQ questions
- Composite indexes on frequently queried columns
- GIN index on JSONB analytics data

---

## Data Migration Strategy

1. **Phase 1:** Core tables (subjects, topics, chapters)
2. **Phase 2:** MCQ and options tables
3. **Phase 3:** User and institution tables
4. **Phase 4:** Quiz and attempt tables
5. **Phase 5:** Analytics and progress tracking

---

**Document Version:** 1.0  
**Last Updated:** December 2025
