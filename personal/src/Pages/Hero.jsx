import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import { FaFacebookF, FaFacebookMessenger, FaInstagram, FaUsers } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { DiJavascript, DiReact } from 'react-icons/di';
import { RiJavascriptFill, RiReactjsFill, RiTailwindCssFill, RiTailwindCssLine } from 'react-icons/ri';

function Hero() {
  const [text] = useTypewriter({
      words: ['Frontend Developer', 'UI/UX Designer', 'Creative Coder', 'Web Animator'],
      loop: true,
      delaySpeed: 2000,
    });
  return (
   <>
   <section>
<div className="bg-gradient-to-b from-emerald-50 to-teal-50  lg:h-screen " >
<div className="grid lg:grid-cols-2  ">
  {/* right Side */}
<div className="text-center lg:text-left lg:pt-30 lg:pl-20 pt-20">
  <h1 className='text-4xl md:text-5xl  font-bold text-emerald-900'>Hi, I'm Gamsa</h1>
  <h1 className=" text-3xl md:text-3xl lg:text-4xl text-emerald-950 pt-5  ">
                    I am a    {' '}
                    <span className="font-bold text-emerald-600 ">{text}</span>
                    <Cursor />
                  </h1>
                   <p className="text-lg md:text-xl text-emerald-950 leading-relaxed max-w-2xl font-bold mt-10">
                A passionate Frontend Developer and UI Designer who transforms ideas into delightful digital experiences using React, Tailwind CSS, and modern UI patterns.</p>
<div className=" md:flex  flex items-center justify-center space-x-4 pt-15 lg:justify-start ">
 <button className='relative px-6 py-3 bg-teal-800 text-teal-50 rounded-full shadow-xl shadow-teal-950 transform hover:-translate-y-1 transition duration-300 flex gap-3 items-center justify-center font-bold text-xl '> <FaUsers /> View Projects</button>
<button className='relative px-6 py-3 bg-teal-800 text-teal-50 rounded-full shadow-xl shadow-teal-950 transform hover:-translate-y-1 transition duration-300 flex gap-3 items-center  justify-center  font-bold text-xl '> <MdOutlineMessage /> Contact Me</button>


</div>

<div className=" md:flex  flex items-center justify-center space-x-4 pt-15 lg:justify-start ">
<button className='bg-teal-800 p-6 rounded-full shadow-lg shadow-teal-900 animate-bounce text-2xl  font-bold text-teal-50 border-2 border-white'><FaFacebookF /> </button>
<button className='bg-teal-800 p-6 rounded-full shadow-lg shadow-teal-900 animate-bounce text-2xl  font-bold text-teal-50 border-2 border-white'><FaInstagram /></button>
  <button className='bg-teal-800 p-6 rounded-full shadow-lg shadow-teal-900 animate-bounce text-2xl  font-bold text-teal-50 border-2 border-white'><BiLogoGmail /> </button>

  
  
</div>

</div>






{/* second side fr image */}
<div className="flex justify-center lg:justify-end p-30">
<div className="relative">
 <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-200 rounded-full opacity-40 animate-pulse"
        
              ></div> 
                  <div className="relative bg-white border-3 border-teal-950/50 p-10 rounded-3xl shadow-lg shadow-teal-950 transform hover:scale-105 transition-transform duration-500 ease-out">
                <div className="w-80 h-80 md:w-100 md:h-100 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="./Girl01.jpg"
                    alt="Frontend Developer Profile"
                    className="w-full h-full object-cover animate-float border-2 border-green-100"
                  />
                </div>

                {/* Decorative elements */}
               
                 <div className="absolute flex justify-center gap-3 items-center bottom-10 -left-8 w-40 h-10 bg-emerald-950/80 text-white rounded-2xl animate-bounce duration-500 font-bold text-xl border-2 shadow-md shadow-emerald-950 border-emerald-50"><RiJavascriptFill />Javascript</div>
                 <div className="absolute flex justify-center gap-3 items-center -right-8  top-10 w-40 h-10 bg-emerald-950/80 text-white rounded-2xl animate-bounce duration-500 font-bold text-xl border-2 shadow-md shadow-emerald-950 border-emerald-50 "><RiReactjsFill />ReactJS</div>
                 <div className="absolute flex justify-center gap-3 items-center -right-8  bottom-10 w-40 h-10 bg-emerald-950/80 text-white rounded-2xl animate-bounce duration-500 font-bold text-xl border-2 shadow-md shadow-emerald-950 border-emerald-50 "><RiTailwindCssLine />Tailwind CSS</div>
               
              </div>
            
              

</div>
</div>

</div>
</div>
</section>
   
   </>
  )
}

export default Hero