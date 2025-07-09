import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import { BsFileEarmarkText } from "react-icons/bs";
import { LuMessageSquareHeart } from "react-icons/lu";
import { FaInstagram, FaUsersViewfinder } from "react-icons/fa6";
import { DiJavascript } from 'react-icons/di';
import { RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";

function Hero() {
     const [text] = useTypewriter({
      words: ['Frontend Developer', 'UI/UX Designer', 'Creative Coder', 'Web Animator'],
      loop: true,
      delaySpeed: 2000,
    });
  return (
    <section>
<div className="h-screen bg-gradient-to-b from-emerald-50 to-teal-50 flex justify-center items-center">
 <div className="grid lg:grid-cols-2 gap-12 lg:gap-16  ">

  
 

  <div className="space-y-10 text-center lg:text-left pt-100 md:pt-75 lg:pt-0">


            <div className="space-y-4">
              <h1 className="text-4xl  md:text-4xl lg:text-6xl font-bold text-emerald-950 ">
               Hi, I'm Gamsa
              </h1>

                 <h1 className=" text-3xl md:text-3xl lg:text-4xl   md:mt-10 md:ml-5">
                    I am a    {' '}
                    <span className="font-bold text-emerald-700 ">
                      {text}
                    </span>
                    <Cursor />
                  </h1>

              <p className="text-lg md:text-xl text-emerald-950 leading-relaxed max-w-2xl font-bold mt-10">
                A passionate Frontend Developer and UI Designer who transforms ideas into delightful digital experiences using React, Tailwind CSS, and modern UI patterns.

              </p>
            </div>
<div className="flex  sm:flex-row gap-4 justify-center lg:justify-start ">
         


 <button className="group relative px-6 py-3 bg-teal-800  text-teal-50 font-semibold rounded-full shadow-lg shadow-emerald-950 *:hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out">
                <span className="relative z-10 flex justify-center font-bold  items-center gap-3 text-xl"><BsFileEarmarkText />View Projects </span>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className=" group relative px-6 py-3 bg-teal-800  text-teal-50 font-semibold rounded-full shadow-lg shadow-emerald-950 *:hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out">
                <span className="relative z-10 flex justify-center font-bold  items-center gap-3 text-xl"><BsFileEarmarkText />Contact me</span>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
              </button>
      

       
      
           </div>

          
           <div className="flex  sm:flex-row gap-4 justify-center lg:justify-start">
         


 <button className="group relative p-6 bg-teal-800  text-teal-50 font-semibold rounded-full shadow-lg shadow-emerald-950 *:hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out">
                <span className="relative z-10 flex justify-center font-bold  items-center gap-3 text-2xl"><FaFacebookF /></span>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className=" relative px-6 py-3 bg-teal-800  text-teal-50 font-semibold rounded-full shadow-lg shadow-emerald-950 *:hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out">
                <span className="relative z-10 flex justify-center font-bold  items-center gap-3 text-2xl "><FaInstagram /></span>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
              </button>
               <button className="  relative px-6 py-3 bg-teal-800  text-teal-50 font-semibold rounded-full shadow-lg shadow-emerald-950 *:hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out">
                <span className="relative z-10 flex justify-center font-semibold items-center gap-3 text-2xl  "><BiLogoGmail /></span>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
              </button>
      

       
      
           </div>
           
           
          </div>

<div className="flex justify-center lg:justify-end pr-20">
            <div className="relative">
              {/* Floating background elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-200 rounded-full opacity-40 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Main profile container */}
              <div className="relative  p-8 rounded-3xl  transform hover:scale-105 transition-transform duration-500 ease-out">
                <div className="w-80 h-80 md:w-110 md:h-110 rounded-3xl overflow-hidden  shadow-emerald-50 shadow-xl">
                  <img
                    src="./Girl01.jpg"
                    alt="Frontend Developer Profile"
                    className="w-full h-full object-cover animate-float border-2 border-green-100 "
                  />
                </div>

                {/* Decorative elements */}
               
                 <div className="absolute flex opacity-10 justify-center gap-3 items-center bottom-10 -left-10 w-40 h-10 bg-emerald-50  text-emerald-950 rounded-2xl animate-bounce duration-500 font-bold text-xl "><DiJavascript /> Javascript</div>
                 <div className="absolute flex justify-center gap-3 items-center bottom-10 -right-8  top-10 w-40 h-10 bg-emerald-950 shadow-2xl shadow-emerald-200 text-emerald-50 rounded-2xl animate-bounce duration-500 font-bold text-xl"><RiReactjsFill />ReactJS</div>
                 <div className="absolute flex justify-center gap-3 items-center bottom-10 -right-8  w-40 h-10 bg-emerald-950 shadow-2xl shadow-emerald-200 text-emerald-50 rounded-2xl animate-bounce duration-500 font-bold text-xl"><RiTailwindCssFill />Tailwind CSS</div>
               
              </div>

              {/* Code snippet decoration */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-teal-950  text-emerald-50 p-4 rounded-lg shadow-md shadow-teal-800  text-sm font-mono opacity-90 hidden lg:block font-bold">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>{"const dev = {"}</div>
                <div className="ml-4">{'name: "React Dev",'}</div>
                <div className="ml-4">{'passion: "Frontend"'}</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>


</div>
  
 </div>


  </section>
  )
}

export default Hero