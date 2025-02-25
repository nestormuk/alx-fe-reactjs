
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Service from './components/Service'
import Navbar from './components/Navbar'


function App() {
  

  return (
    <BrowserRouter>
    <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={ <About/>} />
        <Route path='service' element={ <Service />}/>
        <Route path='contact' element={ <Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
