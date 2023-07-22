import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {HiChevronDoubleRight} from "react-icons/hi"
import chat from "../assets/images/chat.gif"
import story from "../assets/images/story.gif"
import dp from "../assets/images/dp.gif"
import share from "../assets/images/share.gif"
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';
import {motion} from "framer-motion"
const Projects = () => {
  return (
    <motion.div  
    initial={{ opacity: 0 , y:200  }}
    whileInView={{ opacity: 1 , y:0 }}
    viewport={{ once: true }}
    transition= {{
        duration: 3,
        delay:0,
        type: "spring", stiffness: 50, damping: 10
      }} className='min-h-[80vh] max-h-max pb-10'>
    <div className='flex flex-col gap-2 items-center py-4'>
      <h1 className='commonhead lg:text-4xl md:text-4xl sm:text-2xl text-2xl  text-indigo-300 font-bold  '>Projects</h1>
      <span className='lg:text-xl md:text-xl sm:text-lg text-lg text-indigo-300'>Most Recent Work</span>
    </div>

    <div>

    <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}

        className='select-none lg:w-[800px] md:w-[800px] sm:w-[100%]  w-[100%] lg:h-[300px] md:h-[300px] sm:h-fit h-fit '
  
      >
        <SwiperSlide className='relative bg-center bg-cover'>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4 '>
          <img src={chat}  className='lg:w-auto md:w-auto sm:w-fit w-fit rounded-lg border-2 self-center'/>
          <div className='flex flex-col gap-2 px-5'>
            <h1 className='text-2xl text-indigo-400 font-bold '>NoobChat</h1>
            <p className=' text-indigo-200 font-semibold lg:text-xl md:text-xl sm:text-xl text-lg'>NoobChat is a real-time chat application developed using MERN stack and Socket.io. It enables users to create and delete chats, facilitating seamless real-time communication. It focuses on facilitating chat interactions</p>
            <a href="https://noobchatfrontend.onrender.com/" target='_blank'><button className='bg-indigo-900  self-start  rounded-lg px-4 py-3 lg:text-xl md:text-xl sm:text-lg text-lg text-white font-light    border-indigo-600 border-2  hover:bg-indigo-500 flex flex-row gap-2 justify-center items-center' 
        >    <span>Check It Out  </span>  <HiChevronDoubleRight className='text-xl'/></button></a>
          </div>

        </div>
        </SwiperSlide>
        
        <SwiperSlide className='relative bg-center bg-cover'>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4'>
          <img src={story}  className='lg:w-auto md:w-auto sm:w-fit self-center w-fit rounded-lg border-2'/>
          <div className='flex flex-col gap-2 px-5'>
            <h1 className='text-2xl text-indigo-400 font-bold '>StoriesIg</h1>
            <p className=' text-indigo-200 font-semibold   lg:text-xl md:text-xl sm:text-xl text-lg'>StoriesIg is a simple implementation of an application that allows users to download Insatgram Stories . It's bulit using ReactJs , NodeJs and Tailwind Css</p>
            <a href="http://storiesigfrontend.onrender.com/" target='_blank'><button className='bg-indigo-900  self-start  rounded-lg px-4 py-3 lg:text-xl md:text-xl sm:text-lg text-lg text-white font-light    border-indigo-600 border-2  hover:bg-indigo-500 flex flex-row gap-2 justify-center items-center' 
        >    <span>Check It Out  </span>  <HiChevronDoubleRight className='text-xl'/></button></a>
          </div>

        </div>
        </SwiperSlide>
        
        <SwiperSlide className='relative bg-center bg-cover'>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4'>
          <img src={dp}  className='lg:w-auto md:w-auto self-center sm:w-fit w-fit rounded-lg border-2'/>
          <div className='flex flex-col gap-2 px-5'>
            <h1 className='text-2xl text-indigo-400 font-bold '>InstaDp</h1>
            <p className=' text-indigo-200 font-semibold  lg:text-xl md:text-xl sm:text-xl text-lg '>InstaDp is simple application that allows users to view instagram profile pics in Hd quality and also download them , Built Using React , NodeJs and Tailwind Css</p>
            <a href="https://noobchatfrontend.onrender.com/" target='_blank'><button className='bg-indigo-900  self-start  rounded-lg px-4 py-3 lg:text-xl md:text-xl sm:text-lg text-lg text-white font-light    border-indigo-600 border-2  hover:bg-indigo-500 flex flex-row gap-2 justify-center items-center' 
        >    <span>Check It Out  </span>  <HiChevronDoubleRight className='text-xl'/></button></a>
          </div>

        </div>
        </SwiperSlide>
        
        <SwiperSlide className='relative bg-center bg-cover'>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4'>
          <img src={share}  className='lg:w-auto self-center md:w-auto sm:w-fit w-fit rounded-lg border-2' />
          <div className='flex flex-col gap-2 px-5'>
            <h1 className='text-2xl text-indigo-400 font-bold '>ShareSphere</h1>
            <p className=' text-indigo-200 font-semibold  lg:text-xl md:text-xl sm:text-xl text-lg'>ShareSphere is a MERN stack based social media application that allows users to create friends create posts and much more
           . Its completely responsive and works perfectly on all the devices </p>
            <a href="https://main--jolly-snickerdoodle-2eafd0.netlify.app/" target='_blank'><button className='bg-indigo-900  self-start  rounded-lg px-4 py-3 lg:text-xl md:text-xl sm:text-lg text-lg text-white font-light    border-indigo-600 border-2  hover:bg-indigo-500 flex flex-row gap-2 justify-center items-center' 
        >    <span>Check It Out  </span>  <HiChevronDoubleRight className='text-xl'/></button></a>
          </div>

        </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
    </motion.div>
  )
}

export default Projects