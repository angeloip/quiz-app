import confetti from 'canvas-confetti'
import { type Question as QuestionType } from '../interface'

interface Props {
  filteredQuestions: QuestionType[]
  score: number
  setStart: (start: boolean) => void
}

export default function Results({ filteredQuestions, score, setStart }: Props) {
  confetti()
  return (
    <section className="flex flex-col gap-8 mx-3 shadow-md shadow-slate-600 p-5 rounded-lg bg-zinc-900">
      <h1 className="text-4xl font-bold text-center">Resultados</h1>

      <div className="flex flex-col gap-7 text-center text-lg font-bold">
        <span>Acertaste</span>
        <span className="font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl animate-pulse">
          {((score / filteredQuestions.length) * 100).toFixed(0)}%
        </span>
        de las preguntas ({score} de {filteredQuestions.length})
      </div>

      <button
        onClick={() => {
          setStart(false)
        }}
        className="border px-5 py-2 rounded-lg transition-all font-bold hover:bg-yellow-500 hover:text-gray-900"
      >
        ¡Vamos de nuevo!
      </button>
    </section>
  )
}
