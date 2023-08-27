import Question from './Question'
import { questions } from '../data'
import { useState } from 'react'
import Results from './Results'

const LIMIT_QUESTION = 5

interface Props {
  category: string
  setStart: (start: boolean) => void
}

export default function Quiz({ category, setStart }: Props) {
  const [indexQuestion, setIndexQuestion] = useState(0)
  const [activeResults, setActiveResults] = useState(false)
  const [score, setScore] = useState(0)
  const [filteredQuestions, setFilteredQuestions] = useState(() => {
    const data = questions
      .filter((question) => question.category === category)
      .sort(() => Math.random() - 0.5)
      .slice(0, LIMIT_QUESTION)

    return data.map((question) => ({
      ...question,
      answers: [...question.answers].sort(() => Math.random() - 0.5)
    }))
  })

  const questionInfo = filteredQuestions[indexQuestion]
  return (
    <div className="w-full max-w-xl">
      {activeResults ? (
        <Results
          filteredQuestions={filteredQuestions}
          score={score}
          setStart={setStart}
        />
      ) : (
        <Question
          info={questionInfo}
          indexQuestion={indexQuestion}
          setIndexQuestion={setIndexQuestion}
          filteredQuestions={filteredQuestions}
          setFilteredQuestions={setFilteredQuestions}
          setScore={setScore}
          score={score}
          setStart={setStart}
          setActiveResults={setActiveResults}
        />
      )}
    </div>
  )
}
