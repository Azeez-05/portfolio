import React from 'react'
import RevealOnScroll from '../RevealOnScroll'
import 'bootstrap-icons/font/bootstrap-icons.css';

const SocialLinks = () => {
  return (
    <section id='#social' className='min-h-screen flex items-center justify-center py-20 relative '>
      <div className="w-170  mx-auto px-4">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-center text-transparent">Get In Touch</h2>
        <h2 className='text-center font-bold mt-4'>Got a project we can work on together?</h2>
        <div className='my-10 grid sm:grid-cols-3 md:grid-cols-5 gap-6 pl-10'>
          <div>
             <a className="bi bi-linkedin text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-center text-transparent" href='https://www.linkedin.com/in/abdulazeez-hammed'></a>
          </div>
          <div> 
            <a className="bi bi-envelope-at text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-center text-transparent" href='https://mailto:hammedabdulazeez05@gmail.com'></a>
          </div>
          <div> 
            <a className="bi bi-github text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-center text-transparent" href='https://github.com/Azeez-05'></a>
          </div>
          <div> 
            <a className="bi bi-tiktok text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-center text-transparent" href='https://tiktok.com/@dev___zyz'></a>
          </div>
          <div> 
            <a className="bi bi-twitter-x text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-center text-transparent" href='https://x.com/Dev_zyz'></a>
          </div>
        </div>
         <h2 className='text-center font-extralight mt-5 '>Let's Create Something Amazing</h2>
      </div>
           <p className=' absolute bottom-0 text-sm text-center'>Copyright &copy; 2024.All rights are Reserved</p>
     
    </section>
  )
}

export default SocialLinks