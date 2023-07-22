import React from 'react'
import {GrLinkedin} from "react-icons/gr"
import {ImInstagram , ImGithub} from "react-icons/im"
import {motion} from "framer-motion"
const Footer = () => {
  return (
    <motion.div
        initial={{ opacity: 0 , x:-200  }}
    whileInView={{ opacity: 1 , x:0 }}
    viewport={{ once: true }}
    transition= {{
        duration: 2,
        delay:1,
        type: "spring", stiffness: 200, damping: 10
      }}

     className='min-h-[50vh]  max-h-max flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between px-3 gap-5 py-8 pb-16 relative'>
  
        <div className='flex flex-col  gap-2 lg:self-center md:self-center sm:self-center self-start'>

              <h1 className='text-2xl text-white font-bold '>Sanskar</h1>
              <h1 className='text-2xl text-white font-bold '>Patel</h1>
              <span className='text-lg text-white'>Full Stack Developer</span>

        </div>
        <div className='flex flex-col justify-around items-center'>

          <div className='Link-container flex lg:flex-row  md:flex-row sm:flex-row flex-col self-start lg:gap-6 md:gap-6 sm:gap-6 gap-1 text-lg font-bold items-start'>
          <a href="#home" className='hover:text-white duration-0 text-indigo-300'>Home</a>
        <a href="#about" className='hover:text-white duration-0 text-indigo-300'>About</a>
        <a href="#projects" className='hover:text-white duration-0 text-indigo-300'>Projects</a>
          </div>
        

         

        </div>
        <div className='flex flex-col justify-center'>
        <div className='flex lg:flex-col md:flex-col sm:flex-col flex-row justify-center gap-10'>
          <a href="https://www.linkedin.com/in/walkwithsanskar/" target='_blank'>  <GrLinkedin    className='text-3xl text-indigo-500 duration-500 hover:scale-110 hover:text-white' /></a>
          <a href="https://www.instagram.com/walkwithsanskar/" target='_blank'>

            <ImInstagram   className='text-3xl text-indigo-500 duration-500 hover:scale-110 hover:text-white'/>
          </a>

            <a href="https://github.com/walkwithsanskar" target='_blank'>
            <ImGithub   className='text-3xl text-indigo-500 duration-500 hover:scale-110 hover:text-white'/>
            </a>
            
          </div>
        </div>
        
    </motion.div>
  )
}

export default Footer