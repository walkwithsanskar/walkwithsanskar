import React from 'react'
import hero from "../assets/images/edit.jpg"
import Tilt from "react-parallax-tilt"
import {motion} from "framer-motion"
const About = () => {
  return (
   <motion.div  
      initial={{ opacity: 0 , y:200  }}
  whileInView={{ opacity: 1 , y:0 }}
  viewport={{ once: true }}
  transition= {{
      duration: 2,   
      delay:0,
      type: "spring", stiffness: 50, damping: 10
    }}
   
        className='flex flex-col gap-16 lg:h-[90vh] md:h-[90vh] sm:h-[90vh] h-fit  lg:pb-0 md:pb-0 sm:pb-48  lg:mt-10 md:mt-10 sm:mt-10   mt-24 lg:pt-0 md:pt-0 sm:pt-0 pt-10'>
    <div className='flex flex-col gap-2 items-center py-4'>
      <h1 className='commonhead lg:text-4xl md:text-4xl sm:text-2xl text-2xl text-indigo-300 font-bold  '>About Me</h1>
      <span className='lg:text-xl md:text-xl sm:text-lg text-lg text-indigo-300'>My Introduction</span>
    </div>
    <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col lg:items-start md:items-start sm:items-center items-center gap-16 px-3'>
    <motion.div initial={{x:-100 , opacity:0}} animate={{x:0 , opacity:1}} transition={{duration:3 , type:"spring" , damping:10 , delay:4,stiffness:50}} >

    <Tilt
      className="tilt-img"
    tiltMaxAngleX={35}
    tiltMaxAngleY={35}
    perspective={900}
    scale={1.05}
    transitionSpeed={2000}
    gyroscope={true}
    > 
      <div className='flex w-[100%]'>

      <img src={hero} alt="Sanskar Patel" className=' rounded-md  z-[1] min-w-[310px] mix-blend-luminosity w-[310px] border-4 ' />
      </div>

    </Tilt>
    </motion.div>

      <motion.div initial={{x:100 , opacity:0}} animate={{x:0 , opacity:1}} transition={{duration:3 , type:"spring" , damping:10 , delay:4,stiffness:50}} className='flex flex-col gap-5 justify-start  '>
        <p className='flex  lg:text-xl md:text-xl sm:text-xl text-lg text-white'>Hey there,👋 I'm Sanskar a 20-year-old CSE undergrad who is passionate about Web Development, UI/UX Design . Currently,  I share my learnings through new projects and write-ups. ✍🏻</p>
        {/* <a href="" className='lg:self-start md:self-start sm:self-center self-center'><button className='bg-indigo-900  self-start  rounded-lg px-4 py-3 text-xl text-white font-light    border-indigo-600 border-2  hover:bg-indigo-500' onClick={(event)=>{
          event.preventDefault();
        }}
        >Resume</button></a> */}
      </motion.div>
    </div>
   </motion.div>
  )
}

export default About