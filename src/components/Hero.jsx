import React ,{useEffect , useRef} from 'react'
import {GrLinkedin} from "react-icons/gr"
import {ImInstagram , ImGithub} from "react-icons/im"
import heroImage from "../assets/images/crop.jpg"
import Typed from "typed.js"
import Tilt from "react-parallax-tilt"
import {motion} from "framer-motion"
const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web', 'MERN' , 'Full Stack'],
      loop: true,
      cursorChar:"!",
      typeSpeed: 200,
    backSpeed: 100,
      
    });

    return ()=>{
      typed.destroy();
    }
    
  }, []);

  return (
    <div className='w-[100%] flex flex-row justify-between  items-center lg:py-24  md:py-24 sm:py-24 py-0 lg:h-[98vh] md:h-[90vh] sm:h-fit h-fit lg:gap-4 md:gap-4 ' id='home'>
    {/* social media icons */}
          <motion.div initial={{x:-200 , opacity:0 }} animate={{x:0 , opacity:1}}  transition= {{
      duration: 5,
      delay:1,
      type: "spring", stiffness: 100, damping: 10
    }}
      className='flex flex-col justify-center gap-10'>
          <a href="https://www.linkedin.com/in/walkwithsanskar/" target='_blank'>  <GrLinkedin    className='text-3xl text-indigo-500 duration-500 hover:scale-110 hover:text-white' /></a>
          <a href="https://www.instagram.com/walkwithsanskar/" target='_blank'>

            <ImInstagram   className='text-3xl text-indigo-500 duration-500 hover:scale-110 hover:text-white'/>
          </a>

            <a href="https://github.com/walkwithsanskar" target='_blank'>
            <ImGithub   className='text-3xl text-indigo-500 duration-500 hover:scale-110 hover:text-white'/>
            </a>
            
          </motion.div>

      {/* description */}
          <motion.div   initial={{x:200 , opacity:0 }} animate={{x:0 , opacity:1}}  transition= {{
      duration: 5,
      delay:1,
      type: "spring", stiffness: 50, damping: 10
    }}
       className='flex lg:flex-row md:flex-row flex-col-reverse    items-center lg:gap-6 md:gap-6 sm:gap-6 gap-16  justify-around lg:pt-0 md:pt-0 sm:pt-0   pt-44 lg:pl-0 md:pl-0 sm:pl-0 pl-4 pr-3'>

            <div className='flex flex-col gap-5 '>

            <h1 className='lg:text-5xl md:text-5xl sm:text-5xl text-3xl text-white font-bold '>Hello  I am Sanskar</h1>
            <div>

            <h2 className='lg:text-2xl md:text-2xl sm:text-2xl text-xl text-white font-bold opacity-90 select-none'>I am a <span ref={el}></span> developer</h2>
            <h2 className='text- text-white font-bold  select-none'>Building Software to solve real life problems</h2>
            </div>
            <a href="mailto:walkwithsanskar1@gmail.com">

            <button className='bg-indigo-900  self-start  rounded-lg px-2 py-3 text-xl text-white font-light    border-indigo-600 border-2  hover:bg-indigo-500'>Contact Me</button>
            </a>
            </div>

            <Tilt    
            className="parallax-effect-glare-scale"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.8}
            scale={1.02}>

          <div className='relative lg:h-[305px] md:h-[305px] sm:h-[305px] h-[200px] lg:w-[305px] md:w-[300px] sm:w-[305px] w-[200px] rounded-l-md rounded-tl-[69%] rounded-bl-[30%] rounded-tr-[20%] rounded-b-[58%] bg-indigo-400  '>
                <img src={heroImage}  className=" lg:w-[300px] md:w-[300px] sm:w-[300px] w-[200px] absolute top-0 left-0 mix-blend-multiply rounded-l-md rounded-tl-[69%] rounded-bl-[30%] rounded-tr-[20%] rounded-b-[58%]" alt="i am hero" />
                <div className='lg:h-[300px] md:h-[300px] sm:h-[300px] h-[200px] lg:w-[300px] md:w-[300px] sm:w-[300px] w-[200px] rounded-l-md rounded-tl-[69%] rounded-bl-[30%] rounded-tr-[20%] rounded-b-[58%] bg-indigo-400'></div>
             
          </div>
            </Tilt>
          </motion.div>
    </div>
  )
}

export default Hero



// <Tilt
// className="parallax-effect-glare-scale"
// perspective={500}
// glareEnable={true}
// glareMaxOpacity={0.45}
// scale={1.02}
// >
// <div className="inner-element">
//   <div>React</div>
//   <div>Parallax Tilt</div>
//   <div>👀</div>
// </div>
// </Tilt>