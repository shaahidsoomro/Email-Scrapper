import { z } from 'zod'

export const createQuizSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  description: z.string().optional(),
  quizType: z.enum(['practice', 'exam', 'adaptive']).default('practice'),
  subjectId: z.string().uuid().optional(),
  topicId: z.string().uuid().optional(),
  chapterId: z.string().uuid().optional(),
  totalMarks: z.number().positive().optional(),
  passingMarks: z.number().positive().optional(),
  durationMinutes: z.number().positive().optional(),
  negativeMarking: z.boolean().default(false),
  negativeMarksPerQuestion: z.number().min(0).default(0),
  shuffleQuestions: z.boolean().default(true),
  shuffleOptions: z.boolean().default(true),
  showResultsImmediately: z.boolean().default(true),
  allowReview: z.boolean().default(true),
  isPublic: z.boolean().default(true),
  maxAttempts: z.number().int().min(0).default(0),
  mcqIds: z.array(z.string().uuid()).min(1, 'At least one MCQ is required'),
})

export type CreateQuizInput = z.infer<typeof createQuizSchema>
