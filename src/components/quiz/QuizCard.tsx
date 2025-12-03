import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DifficultyLevel } from '@/types'

interface QuizCardProps {
  id: string
  title: string
  description: string
  totalQuestions: number
  duration?: number
  difficulty?: DifficultyLevel
  onStart?: () => void
}

export function QuizCard({
  title,
  description,
  totalQuestions,
  duration,
  difficulty = 'medium',
  onStart,
}: QuizCardProps) {
  const difficultyColors = {
    easy: 'text-success',
    medium: 'text-warning',
    hard: 'text-destructive',
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          <span className={`text-xs font-semibold uppercase ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 text-sm text-secondary">
          <div className="flex items-center gap-1">
            <span aria-label="Questions">📝</span>
            <span>{totalQuestions} Questions</span>
          </div>
          {duration && (
            <div className="flex items-center gap-1">
              <span aria-label="Duration">⏱️</span>
              <span>{duration} min</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onStart} className="w-full">
          Start Quiz
        </Button>
      </CardFooter>
    </Card>
  )
}
