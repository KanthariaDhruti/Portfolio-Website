import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
