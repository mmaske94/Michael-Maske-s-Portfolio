import React from 'react'
//importing each component
import Header from './components/Header/Header.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import FunFacts from './components/FunFacts/FunFacts.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'


const App = () => {
  return (
   //Using the Components and displaying what is in each component
   <>
        <Header/>
        <NavBar/>
        <About />
        <FunFacts />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </>
  )
}

export default App