import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Project from './Pages/Project'
import Skill from './Pages/Skill'
import Contact from './Pages/Contact'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Hero />
<About />
<Project />
<Skill />
<Contact />

  </StrictMode>,
)
