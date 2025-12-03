export const APP_CONFIG = {
  name: 'Quizzera',
  description: "Pakistan's #1 MCQ & Assessment Engine",
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  domain: 'quizzera.pk',
  social: {
    facebook: 'https://facebook.com/quizzera',
    twitter: 'https://twitter.com/quizzera',
    linkedin: 'https://linkedin.com/company/quizzera',
    instagram: 'https://instagram.com/quizzera',
  },
  support: {
    email: 'support@quizzera.pk',
    phone: '+92-XXX-XXXXXXX',
  },
}

export const EXAM_TYPES = [
  { id: 'ppsc', name: 'PPSC', fullName: 'Punjab Public Service Commission' },
  { id: 'fpsc', name: 'FPSC', fullName: 'Federal Public Service Commission' },
  { id: 'nts', name: 'NTS', fullName: 'National Testing Service' },
  { id: 'spsc', name: 'SPSC', fullName: 'Sindh Public Service Commission' },
  { id: 'kppsc', name: 'KPPSC', fullName: 'Khyber Pakhtunkhwa Public Service Commission' },
  { id: 'hec', name: 'HEC', fullName: 'Higher Education Commission' },
  { id: 'university', name: 'University Entry', fullName: 'University Entry Tests' },
  { id: 'olevel', name: 'O-Level', fullName: 'O-Level Exams' },
  { id: 'alevel', name: 'A-Level', fullName: 'A-Level Exams' },
] as const

export const DIFFICULTY_LEVELS = [
  { value: 'easy', label: 'Easy', color: 'success' },
  { value: 'medium', label: 'Medium', color: 'warning' },
  { value: 'hard', label: 'Hard', color: 'destructive' },
] as const

export const QUIZ_TYPES = [
  { value: 'practice', label: 'Practice Mode', description: 'Instant feedback, no time limit' },
  { value: 'exam', label: 'Exam Mode', description: 'Timed, no feedback until submission' },
  { value: 'adaptive', label: 'Adaptive Mode', description: 'Difficulty adjusts based on performance' },
] as const

export const USER_ROLES = [
  { value: 'student', label: 'Student' },
  { value: 'teacher', label: 'Teacher' },
  { value: 'institution_admin', label: 'Institution Admin' },
  { value: 'content_creator', label: 'Content Creator' },
  { value: 'super_admin', label: 'Super Admin' },
] as const

export const SUBSCRIPTION_PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    features: ['50 MCQs per month', 'Basic practice mode', 'Limited analytics'],
  },
  {
    id: 'monthly',
    name: 'Premium Monthly',
    price: 499,
    features: ['Unlimited MCQs', 'All quiz modes', 'Advanced analytics', 'Certificate generation'],
  },
  {
    id: 'annual',
    name: 'Premium Annual',
    price: 4999,
    features: ['Unlimited MCQs', 'All quiz modes', 'Advanced analytics', 'Certificate generation', 'Priority support'],
  },
] as const
