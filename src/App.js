import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, Contact, Home, Navbar, Skills, Work } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <Navbar />
    //   <Home />
    //   <About />
    //   <Skills />
    //   <Work />
    //   <Contact />
    // </div>
  )
}

export default App
