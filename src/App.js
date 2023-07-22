import React from 'react'
import ParticleBg from './utils/ParticleBg'
import NavBar from "./components/NavBar"
import Hero from './components/Hero'
import About from "./components/About"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Projects from './components/Projects'
import Footer from "./components/Footer"
const App = () => {
  return (
    <div className='h-[100vh]  bg-indigo-950 overflow-x-hidden overscroll-y-scroll scroll-smooth '>
    
    <ParticleBg/>
    <div className='lg:w-4/6 md:4/6 sm:w-[100%] w-[100%] mx-auto relative flex flex-col gap-14 justify-between'>
      <div className='fixed lg:w-4/6 md:4/6 sm:w-[100%] w-[100%] bg-indigo-950 z-30'>
      <NavBar/>

      </div>
      <div className='flex flex-col'>
      <Hero/>
      <div id="about" className='pt-6'>
      <About/>

      </div>

      <div  id="skills" className='pt-6'>
      <Skills/>

      </div>
      <div  id='qualifications'  className='pt-10' >

      <Education/>
      </div>
      <div id='projects' className='pt-10' >

      <Projects/>
      </div>

      </div>
     
    </div>
    <div className='bg-indigo-900 bg-opacity-50'>
    <div className='lg:w-4/6 md:4/6 sm:w-[100%] w-[100%] mx-auto flex flex-col relative'>
    <Footer/>
    <span className='text-white self-center'>© Sanskar Patel. All rights reserved</span>
    </div>

    </div>
   

 
   
    </div>

  )
}

export default App