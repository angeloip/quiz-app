import { type Question as QuestionType } from '../interface'

interface Props {
  info: QuestionType
  indexQuestion: number
  setIndexQuestion: (index: number) => void
  questionsFiltered: QuestionType[]
}

export default function Question({
  info,
  indexQuestion,
  setIndexQuestion,
  questionsFiltered
}: Props) {
  const goNextQuestion = () => {
    if (indexQuestion < questionsFiltered.length - 1) {
      setIndexQuestion(indexQuestion + 1)
    }
  }

  return (
    <section className="flex flex-col gap-6 mx-3 shadow-md shadow-slate-600 p-5 rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">
          {indexQuestion + 1} / {questionsFiltered.length}
        </h1>
        <div>
          <span className="font-semibold">Dificultad: </span>
          <span className="font-bold">{info.difficulty}</span>
        </div>
      </div>
      <button className="border px-5 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900">
        Reiniciar
      </button>

      <h1 className="font-bold">{info.question}</h1>

      <div className="grid grid-cols-2 gap-5">
        <button
          className={
            'border p-5 rounded-lg flex justify-center items-center hover:scale-105'
          }
        >
          <p className="font-medium text-center text-sm">Alguna respuesta</p>
        </button>
      </div>

      <button
        onClick={goNextQuestion}
        className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium"
      >
        Finalizar o Siguiente Pregunta
      </button>
    </section>
  )
}
