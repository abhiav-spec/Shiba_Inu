import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './components/About'
import Projects from './components/Projects'
import BackgroundMusic from './components/BackgroundMusic'

function App() {
  return (
    <BrowserRouter>
      <BackgroundMusic />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
