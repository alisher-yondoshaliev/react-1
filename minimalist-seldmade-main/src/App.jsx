import { BrowserRouter, Routes, Route } from 'react-router-dom' // ← THIS LINE IS MISSING
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Bookmark from './pages/portfolio/Bookmark'
import Fylo from './pages/portfolio/Fylo'
import Insure from './pages/portfolio/Insure'
import Manage from './pages/portfolio/Manage'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio/bookmark" element={<Bookmark />} />
          <Route path="/portfolio/fylo" element={<Fylo />} />
          <Route path="/portfolio/insure" element={<Insure />} />
          <Route path="/portfolio/manage" element={<Manage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App