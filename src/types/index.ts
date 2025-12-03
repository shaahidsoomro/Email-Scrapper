// Common types for the Quizzera application

export type DifficultyLevel = 'easy' | 'medium' | 'hard'
export type QuizType = 'practice' | 'exam' | 'adaptive'
export type QuestionType = 'single_choice' | 'multiple_choice' | 'true_false'
export type UserRole = 'student' | 'teacher' | 'institution_admin' | 'content_creator' | 'super_admin'

export interface MCQ {
  id: string
  questionText: string
  questionType: QuestionType
  chapterId?: string
  difficultyLevel: DifficultyLevel
  marks: number
  negativeMarks: number
  timeLimitSeconds?: number
  explanation?: string
  hint?: string
  referenceText?: string
  referenceUrl?: string
  imageUrl?: string
  isVerified: boolean
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Option {
  id: string
  mcqId: string
  optionText: string
  isCorrect: boolean
  displayOrder: number
  explanation?: string
}

export interface Quiz {
  id: string
  title: string
  slug: string
  description?: string
  quizType: QuizType
  totalMarks?: number
  passingMarks?: number
  durationMinutes?: number
  isPublic: boolean
  createdAt: Date
  updatedAt: Date
}

export interface QuizAttempt {
  id: string
  quizId: string
  userId: string
  attemptNumber: number
  status: 'in_progress' | 'completed' | 'abandoned' | 'expired'
  startedAt: Date
  submittedAt?: Date
  timeTakenSeconds?: number
  score?: number
  percentage?: number
  passed?: boolean
}

export interface User {
  id: string
  email: string
  fullName: string
  role: UserRole
  isActive: boolean
  createdAt: Date
}

export interface ApiResponse<T> {
  data: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
