import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaSquareArrowUpRight } from "react-icons/fa6";
const Card=({title,description,image,button01,button02})=>(
    <div className="bg-secoundary     md:w-full   rounded-3xl flex-col flex items-center justify-center gap-5 shadow-xl shadow-emerald-950 p-10 ">
        
        <h2 className='text-2xl font-semibold text-emerald-50 uppercase'>{title}</h2>
        <p className='flex justify-center items-center text-center'>{description}</p>
        <img src={image} alt="{tittle}" className='w-full'/>
        <button className='w-2/6 h-10 rounded-xl justify-center items-center bg-emerald-50 text-emerald-950 shadow-md shadow-emerald-100 border-2 border-emerald-950 cursor-pointer text-xl font-semibold flex gap-5'  ><FaGithub />{button01}</button>
 <button className='w-3/6 h-10 rounded-xl justify-center items-center bg-emerald-50 text-emerald-950 shadow-md shadow-emerald-100 border-2 border-emerald-950 cursor-pointer text-xl font-semibold flex gap-5'  ><FaSquareArrowUpRight /> {button02}</button>
 
             
    </div>
);

const data=[
    {
        id:1,
        title:'E-commerce Storefront',
        description:'A full-stack e-commerce application with product listing, shopping cart, and checkout functionality.',
        image:'./girl.jpg',
        button01:'GitHub',
        button02:'Live Demo'
    },

    {
        id:2,
        title:'Task Managment App',
        description:'A simple and intutive task management application with drag-and-drop recording and catergrization.',
        image:'./girl.jpg',
        button01:'GitHub',
        button02:'Live Demo'
    },
    {
        id:3,
        title:'Personal Blog Platform',
        description:'A respnsive blog platform with markdown supprt, comments, and use authentication.',
        image:'./girl.jpg',
        button01:'GitHub',
        button02:'Live Demo'
    },
    {
        id:3,
        title:'Weather Dashboard',
        description:'A real-time weather dashboard fetching data from a public API, displaying current conditions and forecasts.',
        image:'./girl.jpg',
        button01:'GitHub',
        button02:'Live Demo'
    },
    {
        id:3,
        title:'Portfolio Website',
        description:'My personal portfolio website showcasing my projects, skills, and contact informatin.',
        image:'./Project01.png',
        button01:'GitHub',
        button02:'Live Demo'
    },
    {
        id:3,
        title:'Recipe Finder',
        description:'An application to search for recipies based on ingredients, dietary resrictions, and cuisine type.',
        image:'./girl.jpg',
        button01:'GitHub',
        button02:'Live Demo'
    }
]

function Project() {
  return (
    <>
    <section>
        
<div className="bg-gradient-to-b from-teal-100 to-teal-50 w-full  ">
    <div className="flex flex-col justify-center items-center pt-20">
            <h2 className='text-4xl md:text-5xl  font-bold text-emerald-900'>MY PROJECTS</h2>
         <p className='text-xl text-emerald-950 font-bold p-10'> A collection of my recent work, showcasing my skills in front-end development</p>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10    justify-center items-center px-10 pt-10 pb-10">  
        {data.map((item)=>(

            <Card key={item.id}  title={item.title}  description={item.description} image={item.image} button01={item.button01} button02={item.button02}   />
        )
        
        )}      
   
    </div>
</div>
    </section>
    </>
  )
}

export default Project