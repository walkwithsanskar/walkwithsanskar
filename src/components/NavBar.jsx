import React , {useState} from 'react'
import { Spin as Hamburger, Spin } from 'hamburger-react'
import {AiOutlineHome , AiOutlineUser} from "react-icons/ai"
import {CgNotes} from "react-icons/cg"
import {BiSolidGraduation} from "react-icons/bi"
import {HiOutlinePhotograph} from "react-icons/hi"
import {motion, spring} from "framer-motion"
const NavBar = () => {
  const [isOpen, setOpen] = useState(false);


  return (
    <motion.div   initial={{y:-500}} animate={{y:0}} transition= {{
      duration: 2,
      delay:0,
      type: "spring", stiffness: 200, damping: 10
    }}    className='flex flex-row  justify-between py-3'>
      <div className='  lg:flex md:hidden hidden text-2xl font-bold hover:text-white duration-0 text-white  Name'>Sanskar Patel</div>
      <div className='  lg:flex md:hidden    Link-container hidden flex-row gap-6 text-lg font-bold items-end'>
        
        <a href="#home" className='hover:text-white duration-0 text-indigo-300'>Home</a>
        <a href="#about" className='hover:text-white duration-0 text-indigo-300'>About</a>
        <a href="#skills" className='hover:text-white duration-0 text-indigo-300'>Skills</a>
        <a href="#qualifications" className='hover:text-white duration-0 text-indigo-300'>Qualification</a>
        <a href="#projects" className='hover:text-white duration-0 text-indigo-300'>Projects</a>
        {/* <a href="#contactme" className='hover:text-white duration-0 text-indigo-300'>Contact Me</a> */}
      </div>
      {/* <Hamburger/> */}
      <div className='lg:hidden flex flex-row justify-between lg:px-0 md:px-0 px-1 w-[100%] relative z-30'>
      <div className=' lg:text-2xl md:text-2xl text-xl  font-bold hover:text-white duration-0 text-white  Name self-center'>Sanskar Patel</div>
      <div onClick={(e)=>{
        console.log("clicked ham")
            setOpen(!isOpen);
      }} className='mr-[-15px]'>

      <Hamburger direction="left"  size={20} color='#ffffff' toggled={isOpen} toggle={setOpen}/>
      </div>
      <div className={`absolute   top-10  w-[102%]  transition-all origin-top duration-1000 lg:px-0 md:px-0 px-0  z-[-10] ${isOpen?" left-0 ":"left-[-110%] "}`}    >
       <div className='bg-indigo-950 rounded-sm bg-opacity-1   flex flex-col py-2 gap-4  w-[100%] '>

          <div className='   Link-container flex flex-row gap-6 text-md font-bold items-end w-[100%] justify-evenly'>
          <a href="#home" className='hover:text-white duration-0 text-indigo-300 flex flex-col gap-2 items-center'>   <AiOutlineHome className='text-2xl' onClick={()=>{
            setOpen(!isOpen)
          }}/>  <span>Home</span></a>
        <a href="#about" className='hover:text-white duration-0 text-indigo-300  flex flex-col gap-2   items-center'><AiOutlineUser className='text-2xl' onClick={()=>{
          setOpen(!isOpen)
        }}/>  <span>About</span></a>
        <a href="#skills" className='hover:text-white duration-0 text-indigo-300 flex flex-col gap-2  items-center'><CgNotes className='text-2xl' onClick={()=>{
          setOpen(!isOpen)
        }}/>  <span>Skills</span></a>
          </div>
          <div className=' flex   Link-container  flex-row gap-6 text-md font-bold items-end w-[100%] justify-evenly'>
          <a href="#qualifications" className='hover:text-white duration-0 text-indigo-300 flex flex-col gap-2  items-center'><BiSolidGraduation className='text-2xl' onClick={()=>{
            setOpen(!isOpen)
          }}/>  <span>Qualification</span></a>
        <a href="#projects" className='hover:text-white duration-0 text-indigo-300 flex-col gap-2 flex  items-center'><HiOutlinePhotograph className='text-2xl' onClick={()=>{
          setOpen(!isOpen)
        }}/>  <span>Projects</span></a>
        {/* <a href="#contactme" className='hover:text-white duration-0 text-indigo-300 flex-col gap-2  flex items-center'><FiArrowRightCircle className='text-2xl' onClick={()=>{
          setOpen(!isOpen)
        }}/>  <span>Contact Me</span></a> */}
          </div>

       </div>
        </div>
      </div>
    
    </motion.div>
  )
}

export default NavBar