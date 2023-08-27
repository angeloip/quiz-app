import { Link } from 'react-router-dom'

interface Category {
  name: string
  img: string
  gradientColor: string
}

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      key={category.name}
      to={`/category/${category.name}`}
      className={`rounded-xl my-2 bg-gradient-to-r ${category.gradientColor} transition-transform hover:scale-105`}
    >
      <figure className="p-5 flex justify-center items-center h-36 w-36">
        <img src={category.img} alt={category.name} className="h-full w-full" />
      </figure>

      <h1 className="text-2xl font-semibold bg-stone-800 bg-opacity-60 py-3 px-5 text-center">
        {category.name}
      </h1>
    </Link>
  )
}
