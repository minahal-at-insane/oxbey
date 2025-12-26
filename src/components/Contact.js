import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import Footer from './Footer';
import circle from '../assets/circle.png'


function Contact() {
  return (
    <div>
      <section className="lg:px-20 px-5 lg:py-20 py-6 font-poppins text-black-50 relative z-20">
        <div className='container mx-auto'>

          <Menu />

          <div className='space-y-6 text-center md:pt-20 py-8'>
            <h1 className='md:text-5xl text-3xl font-bold lg:leading-snug uppercase'>
              Get In <span className='text-blue-100'>Touch </span>
            </h1>

            <p className='flex mx-auto lg:w-8/12 space-y-3 leading-loose'>
              Ready to bring your ideas to life? Reach out and let’s make something you’ll actually be proud of. Whether you need a quick answer, a full project plan, or just want to talk things through, we’re here and always down to help. Drop a message anytime — we respond fast and work even faster.
            </p>
          </div>

          <div className='flex flex-wrap items-center justify-center mx-auto lg:w-9/12 rounded-md py-8 bg-black-25 p-3'>
            <div className='lg:w-4/12 btn-gradient p-6 text-white-100 space-y-6 lg:h-[500px] rounded-md'>
              <p className='font-semibold text-xl'>Contact Information</p>

              <div className='flex items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white-100">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>

                <p>+44 7782201460</p>
              </div>

              <div className='flex items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white-100">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>

                <p>oxbey.com@gmail.com</p>
              </div>
            </div>

            <div className='lg:w-8/12 lg:p-12 lg:mt-0 pt-8 lg:h-[500px]'>
              <form className='space-y-8'>
                <div className='lg:flex items-center justify-between gap-x-6 lg:space-y-0 space-y-8'>
                  <div className='space-y-3 w-full'>
                    <label className='text-xl font-bold'>Name</label>
                    <input name="user_name" type='text' required placeholder='Enter Your Name ...' className='lg:px-5 px-3 py-3 border-b-2 border-blue-100 w-full focus:outline-blue-100'></input>
                  </div>

                  <div className='space-y-3 w-full'>
                    <label className='text-xl font-bold'>Email</label>
                    <input name="user_email" type='email' required placeholder='Enter Your Email Address ...' className='lg:px-5 px-3 py-3 border-b-2 border-blue-100 w-full focus:outline-blue-100'></input>
                  </div>
                </div>

                <div className='space-y-3'>
                  <label className='text-xl font-bold'>Message</label>
                  <textarea name="message" required placeholder='Enter Your Message ...' className='lg:px-5 px-3 py-2 border-b-2 border-blue-100 w-full focus:outline-blue-100' rows='6'></textarea>
                </div>

                <button type="submit" value="Send" className='lg:px-5 px-4 py-2 bg-blue-100 text-white-100 rounded-lg text-xl font-bold'>
                  SUBMIT
                </button>
              </form>
            </div>
          </div>

        </div>
      </section >

      <Footer />
    </div >
  );
}

export default Contact;