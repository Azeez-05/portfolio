import React from 'react'

const Contact = () => {
  return (
    <section id='#contact' className='min-h-screen flex items-center justify-center py-20'>
      <div className="w-170  mx-auto px-4">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-center text-transparent">Get In Touch</h2>
        <form className='space-y-6'>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-gray-300 mb-2'>Name</label>
            <input type='text' id='name' className='w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 rounded' required placeholder='Name'/>
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-300 mb-2'>Email</label>
            <input type='email' id='email'  className='w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 rounded' required />
          </div>
          <div className='mb-4'>
            <label htmlFor='message' className='block text-gray-300 mb-2'>Message</label>
            <textarea id='message' rows='4'  className='w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 rounded' required></textarea>
          </div>
          <button type='submit' className='px-6 py-3 bg-blue-500 text-white rounded hover:bg-violet-600 transition relative overflow-hidden duration-1000 w-full'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact