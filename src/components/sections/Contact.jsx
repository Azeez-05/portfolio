import React from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const SERVICE_ID = 'service_w3zwa8a'
  const TEMPLATE_ID = 'template_zodt2tc'
  const PUBLIC_KEY = '7Qs_JixjLv49B3naX'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text)
        setFormData({
          name: '',
          email: '',
          message: ''
        })
        alert('Email sent successfully!')
      }, (error) => {
        console.error('Failed to send email:', error)
        alert('Failed to send email. Please try again later.')
      })
  }
  return (
    <section id='#contact' className='min-h-screen flex items-center justify-center py-20'>
      <div className="w-170  mx-auto px-4">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-center text-transparent">Get In Touch</h2>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-gray-300 mb-2'>Name</label>
            <input type='text' id='name' className='w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 rounded' required placeholder='Name' value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-300 mb-2'>Email</label>
            <input type='email' id='email'  className='w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 rounded' required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
          </div>
          <div className='mb-4'>
            <label htmlFor='message' className='block text-gray-300 mb-2'>Message</label>
            <textarea id='message' rows='4'  className='w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 rounded' required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
          </div>
          <button type='submit' className='px-6 py-3 bg-blue-500 text-white rounded hover:bg-violet-600 transition relative overflow-hidden duration-1000 w-full'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact