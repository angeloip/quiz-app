export interface Question {
  id: number
  difficulty: string
  category: string
  question: string
  correctAnswer: string
  answers: string[]
  userSelectedAnswer?: string
  isCorrectUserAnswer?: boolean
}
