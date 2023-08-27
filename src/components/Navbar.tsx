import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-zinc-800 py-5 flex justify-center h-[70px]">
      <Link to="/" className="font-medium text-2xl">
        Quiz App
      </Link>
    </header>
  )
}
