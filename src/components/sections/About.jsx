import React from 'react'
import RevealOnScroll from '../RevealOnScroll'
const About = () => {
  const frontendSkills = ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"];
  const backendSkills = ["Node.js", "PHP", "MongoDB", "MySQL", "Python", "Django"];
  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>  
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-violet-400 bg-clip-text text-center text-transparent ">About Me</h2>
           
            <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
              <p className='text-grey-300'>A passionate developer with a love for creating beautiful and functional web applications.</p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                  <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                  <div className='flex flex-wrap gap-2'>
                    {frontendSkills.map((skill, index) => (
                      <span key={index} className='bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-300/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>{skill}</span>
                    ))}
                  </div>
                </div>

                <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                  <h3 className='text-xl font-bold mb-4'>Backend</h3>
                  <div className='flex flex-wrap gap-2'>
                    {backendSkills.map((skill, index) => (
                      <span key={index} className='bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-300/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>  
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all border-white/10 border'>
                <h3 className='text-xl font-bold mb-4'>Education</h3>
                <ul className='list-disc list-inside text-gray-300 space-y-2'>
                  <li>
                    <strong>B.Sc. in Computer Science</strong> - Osun state University, Osogbo (2022 - Present)
                  </li>
                  <li>
                    <strong>Web Development Bootcamp</strong> - Udemy (2021 - 2022)
                  </li>
                </ul>
              </div>

              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all border-white/10 border'>
                <h3 className='text-xl font-bold mb-4'>Work Experience</h3>
                <div>
                  <div>
                    <h4 className='font-semibold'>Web Developer at Abray Tech (2020-present)</h4>
                    <p className='text-gray-400'>Worked on various web development projects, focusing on frontend technologies.</p>
                  </div>
                  <div>
                    <h4 className='font-semibold'>Intern at Beloved Tech Hub (2025)</h4>
                    <p className='text-gray-400'>Gained experience in backend development and database management.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default About