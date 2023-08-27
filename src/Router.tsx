import { Navbar } from './components'
import { Home, Category } from './pages'
import { Routes, Route } from 'react-router-dom'

export default function Router() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
    </>
  )
}
