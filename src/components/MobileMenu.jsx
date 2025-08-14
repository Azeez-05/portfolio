import React from 'react';
// import { useEffect } from 'react';


const MobileMenu = ({menuOpen,setMenuOpen}) => {
 
  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 overflow-hidden pointer-events-none'} `
    } >
       <button onClick={() => setMenuOpen(false)} className='absolute top-6 right-4 text-white text-2xl z-50 focus:outline-none cursor-pointer' aria-label='Close menu'>
        &times;
       </button>
        <a href="#home" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" :"opacity-0 translate-y-5 "}`}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" :"opacity-0 translate-y-5 "}`}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" :"opacity-0 translate-y-5 "}`}>Projects</a>
        <a href="#social" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" :"opacity-0 translate-y-5 "}`}>Contact</a>
    </div>
  )
}

export default MobileMenu