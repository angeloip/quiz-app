import { type Question as QuestionType } from '../interface'
import { ArrowBack, ArrowForward } from './Icons'

interface Props {
  info: QuestionType
  indexQuestion: number
  setIndexQuestion: (index: number) => void
  filteredQuestions: QuestionType[]
  setFilteredQuestions: (questions: QuestionType[]) => void
  setScore: (score: number) => void
  score: number
  setStart: (start: boolean) => void
  setActiveResults: (active: boolean) => void
}

const getBackgroundColor = (info: QuestionType, answerIndex: number) => {
  const { userSelectedAnswer, correctAnswer } = info
  if (userSelectedAnswer == null) return 'bg-zinc-800'
  if (
    info.answers[answerIndex] !== correctAnswer &&
    info.answers[answerIndex] !== userSelectedAnswer
  ) {
    return 'bg-zinc-800'
  }
  if (info.answers[answerIndex] === correctAnswer) return 'bg-green-500'
  if (info.answers[answerIndex] === userSelectedAnswer) return 'bg-red-500'
}

export default function Question({
  info,
  indexQuestion,
  setIndexQuestion,
  filteredQuestions,
  setFilteredQuestions,
  setScore,
  score,
  setStart,
  setActiveResults
}: Props) {
  const goPrevQuestion = () => {
    if (indexQuestion > 0) {
      setIndexQuestion(indexQuestion - 1)
    }
  }

  const goNextQuestion = () => {
    if (indexQuestion < filteredQuestions.length - 1) {
      setIndexQuestion(indexQuestion + 1)
    }
  }

  const selectAnswer = (index: number, answer: string) => () => {
    setFilteredQuestions(
      filteredQuestions.map((question) => {
        if (question.id === info.id) {
          const isCorrectUserAnswer = answer === info.correctAnswer
          if (isCorrectUserAnswer) setScore(score + 1)
          return {
            ...question,
            userSelectedAnswer: info.answers[index],
            isCorrectUserAnswer
          }
        }

        return question
      })
    )
  }

  return (
    <section className="flex flex-col gap-6 mx-3 shadow-md shadow-slate-600 p-5 rounded-lg bg-zinc-900">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">
          {indexQuestion + 1} / {filteredQuestions.length}
        </h1>
        <div>
          <span className="font-semibold">Dificultad: </span>
          <span className="font-bold">{info.difficulty}</span>
        </div>
      </div>
      <button
        onClick={() => {
          setStart(false)
        }}
        className="border px-5 py-2 rounded-lg font-bold transition-colors hover:bg-yellow-500 hover:text-gray-900"
      >
        Reiniciar
      </button>

      <h1 className="font-bold">{info.question}</h1>

      <div className="grid grid-cols-2 gap-5">
        {info.answers.map((answer, index) => (
          <button
            key={answer}
            disabled={info.userSelectedAnswer != null}
            onClick={selectAnswer(index, answer)}
            className={`${getBackgroundColor(
              info,
              index
            )} p-5 rounded-lg flex justify-center items-center enabled:hover:bg-zinc-700`}
          >
            <p className="font-medium text-center text-sm">{answer}</p>
          </button>
        ))}
      </div>

      <section className="flex flex-col items-center gap-4 justify-center">
        <div className="flex items-center gap-4">
          <button
            disabled={indexQuestion === 0}
            onClick={goPrevQuestion}
            className="border border-yellow-600 text-yellow-600 rounded-md px-5 py-2 transition-colors enabled:hover:bg-yellow-600 enabled:hover:text-black font-medium"
          >
            <ArrowBack />
          </button>
          <button
            disabled={indexQuestion === filteredQuestions.length - 1}
            onClick={goNextQuestion}
            className="border border-yellow-600 text-yellow-600 rounded-md px-5 py-2 transition-colors enabled:hover:bg-yellow-600 enabled:hover:text-black font-medium"
          >
            <ArrowForward />
          </button>
        </div>

        {indexQuestion === filteredQuestions.length - 1 && (
          <button
            onClick={() => {
              setActiveResults(true)
            }}
            className="border px-5 py-2 rounded-lg font-bold transition-colors hover:bg-yellow-500 hover:text-gray-900"
          >
            Terminar
          </button>
        )}
      </section>
    </section>
  )
}
