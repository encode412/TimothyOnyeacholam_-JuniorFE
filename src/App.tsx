import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/ui/navbar'
import Homepage from './pages/homepage'
import Capsules from './pages/capsules'

function App() {

  return (
    <>
      <Navbar scrolling />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/capsules' element={<Capsules />} />
      </Routes>
      
      
    </>
  )
}

export default App
