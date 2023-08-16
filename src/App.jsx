import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import logo from './assets/logo.png'
import ScrollToTop from './components/ScrollToTop'
import Features from './pages/Features'
import About from './pages/About'
import NotFound from './pages/NotFound'
function App() {
  const [currentLink, setCurrentLink] = useState(null)

  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Navbar
        currentLink={currentLink}
        setCurrentLink={setCurrentLink}
      ></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/Features" element={<Features></Features>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer
        currentLink={currentLink}
        setCurrentLink={setCurrentLink}
      ></Footer>
    </BrowserRouter>
  )
}

export default App
