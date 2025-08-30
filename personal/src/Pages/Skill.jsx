import React from 'react'
const skills = [
    { name: "React JS", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "HTML & CSS", icon: "💻" },
    { name: "UI/UX Design", icon: "🖌️" },
    { name: "Database", icon: "📊" },
  ];

function Skill() {
  return (
    <section>
   <div className="bg-gradient-to-b from-teal-100 to-teal-50 w-full h-screen ">
     <div className="flex flex-col justify-center items-center pt-20">
        <h2 className="text-4xl md:text-5xl  font-bold text-emerald-900">My Skills</h2>
         <p className='text-xl text-emerald-950 font-bold p-10'> Here are the technologies and tools I use to design and build modern, responsive web applications.</p>
      

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-teal-900 rounded-2xl shadow-md  hover:scale-105 transition-transform duration-300 shadow-emerald-900"
            >
              <span className="text-4xl">{skill.icon}</span>
              <p className="mt-3 text-lg font-medium text-emerald-50">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
   </div>
   </section>
  )
}

export default Skill