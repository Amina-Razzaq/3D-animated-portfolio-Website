import React from 'react'

import Services from './components/services/Services'
import Portfolio from './components/projects/Portfolio'
import Contact from './components/contact/Contact'
import Hero from './components/hero/hero'



const App = () => {
  return (
    <div className='container'>
    <section id="#hero">
    <Hero />
    </section>
    <section id="services">
    <Services/>
    </section>
    {/* <section id='#projects'> */}
    <Portfolio/>
    {/* </section> */}
    <section id="#contact">
    <Contact/>
    </section>
    
    
      
    </div>
  )
}

export default App
