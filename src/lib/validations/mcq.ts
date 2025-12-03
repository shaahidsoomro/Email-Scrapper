import { z } from 'zod'

export const createMCQSchema = z.object({
  questionText: z.string().min(10, 'Question must be at least 10 characters'),
  questionType: z.enum(['single_choice', 'multiple_choice', 'true_false']).default('single_choice'),
  chapterId: z.string().uuid().optional(),
  difficultyLevel: z.enum(['easy', 'medium', 'hard']).default('medium'),
  marks: z.number().positive().default(1),
  negativeMarks: z.number().min(0).default(0),
  timeLimitSeconds: z.number().positive().optional(),
  explanation: z.string().optional(),
  hint: z.string().optional(),
  referenceText: z.string().optional(),
  referenceUrl: z.string().url().optional(),
  imageUrl: z.string().url().optional(),
  options: z.array(
    z.object({
      optionText: z.string().min(1, 'Option text is required'),
      isCorrect: z.boolean().default(false),
      displayOrder: z.number().int().min(0).default(0),
      explanation: z.string().optional(),
    })
  ).min(2, 'At least 2 options are required'),
})

export type CreateMCQInput = z.infer<typeof createMCQSchema>
