import React from 'react'
import {motion} from "framer-motion"
const Education = () => {
  return (
    <motion.div  

initial={{ opacity: 0 , y:200  }}
    whileInView={{ opacity: 1 , y:0 }}
    viewport={{ once: true }}
    transition= {{
        duration: 2,
        delay:1,
        type: "spring", stiffness: 50, damping: 10
      }}
    
    
    className='flex flex-col   items-center   gap-10 h-[90vh]'>
      <div className='flex flex-col gap-2 items-center py-4'>
      <h1 className='commonhead lg:text-4xl md:text-4xl sm:text-2xl text-2xl  text-indigo-300 font-bold  '>Qualifications</h1>
      <span className='lg:text-xl md:text-xl sm:text-lg text-lg text-indigo-300'>My Educational Qualification</span>
    </div>
    <div className='flex flex-row justify-center w-[90%] '>
          <div className='flex flex-col h-[50vh] justify-between lg:w-[40%] md:w-[40%] sm:w-[100%] w-[100%]'> 
          
            {/* college */}
            <div className='flex flex-col gap-1'>

              <p className='text-xl text-white'>B.Tech Computer Science</p>
              <span className='text-base opacity-75 text-white'>Netaji Subhas University Of Technology , New Delhi </span>
              <span className='text-sm text-white opacity-75'>2021-2025</span>


            </div>
            {/* class 10th */}
            <div className='flex flex-col gap-1'>

              <p className='text-xl text-white'>Class 10th</p>
              <span className='text-base opacity-75 text-white'>Army Public School Udhampur</span>
              <span className='text-sm text-white opacity-75'>2018-2019</span>


            </div>
          </div>
          {/* timeline */}
          <div className='flex flex-col w-[20%] items-center'>
            <div className='w-[2vh] h-[2vh] bg-indigo-400 rounded-full'></div>
            <div className='h-[16vh] w-[2px] bg-indigo-400 self-center '></div>
            <div className='w-[2vh] h-[2vh] bg-indigo-400 rounded-full'></div>
            <div className='h-[16vh] w-[2px] bg-indigo-400 self-center '></div>
            <div className='w-[2vh] h-[2vh] bg-indigo-400 rounded-full'></div>
          </div>
          {/* class 12th */}
          <div  className='flex flex-col h-[50vh] justify-center lg:w-[20%] md:w-[20%] sm:w-[100%] w-[100%]'>
          <div className='flex flex-col gap-1 '>

                    <p className='text-xl text-white'>Class 12th</p>
                    <span className='text-base opacity-75 text-white'>Army Public School , Dhaula Kuan </span>
                    <span className='text-sm text-white opacity-75'>2020-2021</span>


</div>
          </div>
    </div>
    </motion.div>
  )
}

export default Education