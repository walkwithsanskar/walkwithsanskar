import React , {useState} from 'react'
import {BsCodeSlash , BsTools} from "react-icons/bs"
import {PiBracketsCurly} from "react-icons/pi"
import {BsFillArrowDownCircleFill} from "react-icons/bs"
import {SiJavascript , SiPython , SiCplusplus , SiNodedotjs , SiMongodb , SiTailwindcss ,SiReact , SiRedux , SiGithub  , SiRender} from "react-icons/si"
import {motion} from "framer-motion"
import {TbBrandVscode} from "react-icons/tb"


const Skills = () => {


  const [showContent , setShowContent] = useState({
    langs:false,tools:false,libs:false
  })

  return (
    <motion.div initial={{ opacity: 0 , y:200  }}
    whileInView={{ opacity: 1 , y:0 }}
    viewport={{ once: true }}
    transition= {{
        duration: 2,
        delay:0,
        type: "spring", stiffness: 50, damping: 10
      }} className='lg:mt-10 md:mt-10 sm:mt-[70vh]   mt-[5vh]  lg:h-max md:h-max sm:h-max h-max gap-16 flex flex-col items-center mb-16  '>
      <div className='flex flex-col gap-2 items-center py-4'>
      <h1 className='commonhead lg:text-4xl md:text-4xl sm:text-2xl text-2xl  text-indigo-300 font-bold  '>Skills</h1>
      <span className='lg:text-xl md:text-xl sm:text-lg text-lg text-indigo-300'>My Technical Skills</span>
    </div>

    <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-6 flex-wrap lg:justify-center md:justify-center sm:items-center items-center h-max'> 

      {/* languages */}
      <div className='flex flex-col lg:w-[40%] md:w-[40%] sm:w-[100%] w-[100%] lg:min-w-[400px] md:min-w-fit min-w-fit max-h-fit h-fit self-start '>

      <div className='relative flex flex-row gap-2   lg:w-[40%] md:w-[40%] sm:w-[100%] w-[100%]  lg:min-w-[400px] md:min-w-fit min-w-fit min-h-fit h-fit justify-center ' onClick={()=>{
        setShowContent((prev)=>{
          return {...prev , langs:!showContent.langs}
        })
      }}>
        <span className='self-center text-2xl text-indigo-500 '> <BsCodeSlash className='font-bold'/></span>
        <div className='flex flex-col'>
          <span className='text-white lg:text-2xl md:text-2xl sm:text-xl text-xl font-bold'>Languages</span>
          <p className='text-white opacity-80 text-base font-semibold'>Languages that I have picked up over time</p>
        </div>
        <span className='self-center text-indigo-500 text-2xl'>
        <BsFillArrowDownCircleFill  className={`duration-200 ${showContent.langs?"rotate-180 ":" rotate-0"}`}/>
        </span>
      </div> 
      <div className={`languageDiv flex flex-col gap-2 mt-7 px-2 pl-10   self-stretch w-[100%]   ${showContent.langs ? "flex scale-100 ":"hidden scale-0"} duration-1000 transition-all   `}>

          <div className='flex flex-col gap-2 w-[90%]'>

          <div className='flex flex-row justify-between w-[100%]'>
            <SiJavascript className='text-4xl text-indigo-700'/>
            <span className='text-xl font-bold text-white self-end'>Javascript</span>
            
          </div>

          <div className='w-[100%] bg-indigo-700 h-[5px] rounded-md'>

          </div>
          </div>
          <div className='flex flex-col gap-2 w-[90%]'>

          <div className='flex flex-row justify-between w-[100%]'>
            <SiCplusplus className='text-4xl text-indigo-700'/>
            <span className='text-xl font-bold text-white self-end'>C++</span>
            
          </div>

          <div className='w-[100%] bg-indigo-700 h-[5px] rounded-md'>

          </div>
          </div>
          <div className='flex flex-col gap-2 w-[90%]'>

          <div className='flex flex-row justify-between w-[100%]'>
            <SiPython className='text-4xl text-indigo-700'/>
            <span className='text-xl font-bold text-white self-end'>Python</span>
            
          </div>

          <div className='w-[70%] bg-indigo-700 h-[5px] rounded-md'>

          </div>
          </div>
          

      </div>
      </div>
      {/* libraries */}
      <div className='flex flex-col lg:w-[40%] md:w-[40%] sm:w-[100%] w-[100%] lg:min-w-[400px] md:min-w-fit min-w-fit max-h-fit h-fit self-start'>

      <div className='relative flex flex-row gap-2   lg:w-[40%] md:w-[40%] sm:w-[100%] w-[100%]  lg:min-w-[400px] md:min-w-fit min-w-fit min-h-fit h-fit justify-center  ' onClick={()=>{
        setShowContent((prev)=>{
          return {...prev , libs:!showContent.libs}
        })
      }}>
        <span className='self-center text-2xl text-indigo-500 '> <PiBracketsCurly className='font-bold'/></span>
        <div className='flex flex-col'>
          <span className='text-white lg:text-2xl md:text-2xl sm:text-xl text-xl  font-bold'>Libraries & Frameworks</span>
          <p className='text-white opacity-80 text-base font-semibold'>Libraries and Frameworks that I  work with</p>
        </div>
        <span className='self-center text-indigo-500 text-2xl'><BsFillArrowDownCircleFill  className={`duration-200 ${showContent.libs?"rotate-180 ":" rotate-0"}`}/></span>
      </div> 
      <div className={`languageDiv flex flex-col gap-2 mt-7 px-2 pl-10     ${showContent.libs ? "flex scale-100 ":"hidden scale-0"} duration-1000 transition-all   `}>

          <div className='flex flex-col gap-2 w-[90%]'>

          <div className='flex flex-row justify-between w-[100%]'>
            <SiReact className='text-4xl text-indigo-700'/>
            <span className='text-xl font-bold text-white self-end'>Reactjs</span>
            
          </div>

          <div className='w-[100%] bg-indigo-700 h-[5px] rounded-md'>

          </div>
          </div>
          <div className='flex flex-col gap-2 w-[90%]'>

          <div className='flex flex-row justify-between w-[100%]'>
            <SiNodedotjs className='text-4xl text-indigo-700'/>
            <span className='text-xl font-bold text-white self-end'>NodeJs</span>
            
          </div>

          <div className='w-[100%] bg-indigo-700 h-[5px] rounded-md'>

          </div>
          </div>
          <div className='flex flex-col gap-2 w-[90%]'>

          <div className='flex flex-row justify-between w-[100%]'>
            <SiMongodb className='text-4xl text-indigo-700'/>
            <span className='text-xl font-bold text-white self-end'>Mongodb</span>
            
          </div>

          <div className='w-[90%] bg-indigo-700 h-[5px] rounded-md'>

          </div>
          </div>
          
          <div className='flex flex-col gap-2 w-[90%]'>

          <div className='flex flex-row justify-between w-[100%]'>
            <SiTailwindcss className='text-4xl text-indigo-700'/>
            <span className='text-xl font-bold text-white self-end'>Tailwind Css</span>
            
          </div>

          <div className='w-[100%] bg-indigo-700 h-[5px] rounded-md'>

          </div>
          </div>
          <div className='flex flex-col gap-2 w-[90%]'>

          <div className='flex flex-row justify-between w-[100%]'>
            <SiRedux className='text-4xl text-indigo-700'/>
            <span className='text-xl font-bold text-white self-end'>Redux</span>
            
          </div>

          <div className='w-[80%] bg-indigo-700 h-[5px] rounded-md'>

          </div>
          </div>
          

      </div>
      </div>
      {/* tools */}
      <div className='flex flex-col lg:w-[40%] md:w-[40%] sm:w-[100%] w-[100%] lg:min-w-[400px] md:min-w-fit min-w-fit min-h-fit h-fit'>

      <div className='relative flex flex-row gap-2   lg:w-[40%] md:w-[40%] sm:w-[100%] w-[100%]  lg:min-w-[400px] md:min-w-fit min-w-fit min-h-fit h-fit justify-center  ' onClick={()=>{
        setShowContent((prev)=>{
          return {...prev , tools:!showContent.tools}
        })
      }}>
        <span className='self-center text-2xl text-indigo-500 '> <BsTools className='font-bold'/></span>
        <div className='flex flex-col'>
          <span className='text-white lg:text-2xl md:text-2xl sm:text-xl text-xl  font-bold'>Tools</span>
          <p className='text-white opacity-80 text-base font-semibold'>Tools that I know and use on a daily basis
</p>
        </div>
        <span className='self-center text-indigo-500 text-2xl'><BsFillArrowDownCircleFill  className={`duration-200 ${showContent.tools?"rotate-180 ":" rotate-0"}`}/></span>
      </div> 
      <div className={`languageDiv flex flex-col gap-2 mt-7 px-2 pl-10     ${showContent.tools ? "flex scale-100 ":"hidden scale-0"} duration-1000 transition-all   `}>

          <div className='flex flex-col gap-2 w-[90%]'>

          <div className='flex flex-row justify-between w-[100%]'>
            <SiGithub className='text-4xl text-indigo-700'/>
            <span className='text-xl font-bold text-white self-end'>GitHub</span>
            
          </div>

          <div className='w-[100%] bg-indigo-700 h-[5px] rounded-md'>

          </div>
          </div>
          <div className='flex flex-col gap-2 w-[90%]'>

          <div className='flex flex-row justify-between w-[100%]'>
            <SiRender className='text-4xl text-indigo-700'/>
            <span className='text-xl font-bold text-white self-end'>Render</span>
            
          </div>

          <div className='w-[100%] bg-indigo-700 h-[5px] rounded-md'>

          </div>
          </div>
          <div className='flex flex-col gap-2 w-[90%]'>

          <div className='flex flex-row justify-between w-[100%]'>
            <TbBrandVscode className='text-4xl text-indigo-700'/>
            <span className='text-xl font-bold text-white self-end'>VsCode</span>
            
          </div>

          <div className='w-[70%] bg-indigo-700 h-[5px] rounded-md'>

          </div>
          </div>
          

      </div>
      </div>
      
      
    </div>
    </motion.div>
  )
}

export default Skills