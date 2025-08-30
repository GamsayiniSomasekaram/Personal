import React from 'react'
import { FaCss3, FaFacebookF, FaHtml5, FaReact } from 'react-icons/fa';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";



function Hero() {
  const [text] = useTypewriter({
        words: ['Frontend Developer', 'UI/UX Designer', 'Creative Coder', 'Web Animator'],
        loop: true,
        delaySpeed: 2000,
      });
  return (
 <>
 <section>
  <div className='h-screen w-full bg-[url(/Hero.jpg)] bg-cover '>
  <div className='bg-emerald-800/35 w-full h-screen flex flex-col justify-center items-center'>
  <div className='text-4xl sm:text-7xl font-extrabold text-emerald-50     text-shadow-emerald-950 text-shadow-lg mb-4'>
    Hi, I'm Gamsayini
  </div>
 
   <div className='text-3xl sm:text-4xl text-gray-700 mb-6 font-bold'
  ><h2>
    <span className="font-bold text-emerald-950     text-shadow-white text-shadow-lg">{text} 🚀</span></h2></div>
    
    <div className=' sm:text-2xl text-emerald-950/90 font-bold  leading-relaxed  flex justify-center items-center text-center text-shadow-emerald-50 text-shadow-lg'> I design and build responsive, elegant UIs using modern technologies like React, Tailwind CSS, and JavaScript. </div>

   <div className="grid md:grid-cols-5 grid-cols-3 md:gap-6  gap-4 pt-15 text-6xl text-white text-shadow-lg text-shadow-emerald-50 text-items-center">
    <FaReact className='animate-bounce duration-1000 '  />
    <IoLogoJavascript className='animate-bounce duration-1000' />
    <FaHtml5 className='animate-bounce duration-1000' />
    <RiTailwindCssFill className='animate-bounce duration-1000' />
    <FaCss3 className='animate-bounce duration-1000' />
    


    
   
   </div>
  
  </div>
  </div>
 </section>
 </>
  )
}

export default Hero