import { useParams } from 'react-router-dom'
import { questions } from '../data'
import Question from '../components/Question'
import { useState } from 'react'

const LIMIT_QUESTION = 5

export default function Category() {
  const { category } = useParams<{ category: string }>()
  const [indexQuestion, setIndexQuestion] = useState(0)

  const questionsFiltered = questions
    .filter((question) => question.category === category)
    .sort(() => Math.random() - 0.5)
    .slice(0, LIMIT_QUESTION)

  const questionInfo = questionsFiltered[indexQuestion]

  return (
    <section className="flex flex-col items-center justify-center gap-5 min-h-[calc(100vh-70px)]">
      <div className="w-full max-w-xl">
        <Question
          info={questionInfo}
          indexQuestion={indexQuestion}
          setIndexQuestion={setIndexQuestion}
          questionsFiltered={questionsFiltered}
        />
      </div>
    </section>
  )
}
