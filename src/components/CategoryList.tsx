import { categories } from '../data'
import CategoryCard from './CategoryCard'

export default function CategoryList() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 mt-10 mx-4">
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  )
}
