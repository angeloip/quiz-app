import { useParams } from 'react-router-dom'
import { categories } from '../data'
import { useState } from 'react'
import Quiz from '../components/Quiz'

export default function Category() {
  const { category } = useParams<{ category: string }>()
  const selectedCategory = categories.find((img) => img.name === category)
  const [start, setStart] = useState(false)

  return (
    <section className="flex flex-col items-center justify-center gap-5 min-h-[calc(100dvh-70px)]">
      {start ? (
        <Quiz category={category as string} setStart={setStart} />
      ) : (
        <div
          className={`rounded-xl my-2 bg-gradient-to-r ${selectedCategory?.gradientColor} w-60 overflow-hidden`}
        >
          <h1 className="text-2xl font-semibold bg-stone-800 bg-opacity-60 py-3 px-5 text-center">
            {selectedCategory?.name}
          </h1>
          <figure className="p-5 flex justify-center items-center h-48 w-48 mx-auto">
            <img
              src={selectedCategory?.img}
              alt={selectedCategory?.name}
              className="h-full w-full"
            />
          </figure>

          <button
            className="px-5 py-2 font-bold transition-colors bg-zinc-700 w-full"
            onClick={() => {
              setStart(true)
            }}
          >
            ¡Empezar!
          </button>
        </div>
      )}
    </section>
  )
}
