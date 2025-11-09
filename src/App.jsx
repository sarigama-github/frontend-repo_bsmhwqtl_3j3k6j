import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import ExperienceProjects from './components/ExperienceProjects'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b12] font-inter text-white">
      <Hero />
      <About />
      <Skills />
      <ExperienceProjects />
    </div>
  )
}

export default App
