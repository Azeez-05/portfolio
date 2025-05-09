import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const Home = () => {
  return (
    <section id="home" className='h-screen flex justify-center items-center relative'>
      <RevealOnScroll>
      <div className='text-center px-4 z-10'>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right'>Hi, I'm Abdulazeez</h1>
        <p className='mt-4 text-lg md:text-xl text-gray-400 mb-5 max-w-lg mx-auto'>I am a passionate developer with a love for creating beautiful and functional web applications.</p>
        <div className="flex justify-center space-x-4">
            <a href="#projects" className='mt-6 px-6 py-3 bg-blue-500 text-white rounded relative overflow-hidden hover:bg-violet-700 transition duration-1000 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)'>View Projects</a>
            <a href="#contact" className='mt-6 px-6 py-3 bg-blue-500 text-white rounded relative overflow-hidden hover:bg-violet-700 transition duration-1000 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)'>Contact</a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  )
}

export default Home