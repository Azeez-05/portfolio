import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const Project = () => {
  return (
    <section id="projects" className="py-20 min-h-screen items-center justify-center flex">
    <RevealOnScroll>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-violet-400 bg-clip-text text-center text-transparent"> Feature Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className=" p-6 rounded-xl border-white/10 border hover:-translate-y-1  hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all">
            <h3 className="text-xl font-semibold mb-4">Project Title 1</h3>
            <p className="text-gray-400 mb-4">Short description of the project.</p>
            <div>
                {["HTML", "CSS", "JavaScript", "React"].map((skill, index) => (
                  <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">{skill}</span>
                ))}
            </div>
            <div className='flex justify-between items-center mt-4 text-center'>
                <a href="#" className="text-blue-500 hover:text-blue-300 transition-colors">View Project</a>
            </div>
          </div>
        
          <div className=" p-6 rounded-xl border-white/10 border hover:-translate-y-1  hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all">
            <h3 className="text-xl font-semibold mb-4">Project Title 2</h3>
            <p className="text-gray-400 mb-4">Short description of the project.</p>
            <div>
                {["HTML", "CSS", "JavaScript", "React"].map((skill, index) => (
                  <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">{skill}</span>
                ))}
            </div>
            <div className='flex justify-between items-center mt-4 text-center'>
                <a href="#" className="text-blue-500 hover:text-blue-300 transition-colors">View Project</a>
            </div>
          </div>
        
          <div className=" p-6 rounded-xl border-white/10 border hover:-translate-y-1  hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all">
            <h3 className="text-xl font-semibold mb-4">Project Title 3</h3>
            <p className="text-gray-400 mb-4">Short description of the project.</p>
            <div>
                {["HTML", "CSS", "JavaScript", "React"].map((skill, index) => (
                  <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">{skill}</span>
                ))}
            </div>
            <div className='flex justify-between items-center mt-4 text-center'>
                <a href="#" className="text-blue-500 hover:text-blue-300 transition-colors">View Project</a>
            </div>
          </div>

          <div className=" p-6 rounded-xl border-white/10 border hover:-translate-y-1  hover:border-blue-500/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all">
            <h3 className="text-xl font-semibold mb-4">Project Title 4</h3>
            <p className="text-gray-400 mb-4">Short description of the project.</p>
            <div>
                {["HTML", "CSS", "JavaScript", "React"].map((skill, index) => (
                  <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">{skill}</span>
                ))}
            </div>
            <div className='flex justify-between items-center mt-4 text-center'>
                <a href="#" className="text-blue-500 hover:text-blue-300 transition-colors">View Project</a>
            </div>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
      </RevealOnScroll>
    </section>
  )
}

export default Project