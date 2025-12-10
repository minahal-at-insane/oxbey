import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import Footer from './Footer';


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

          <div className='flex items-center justify-center mx-auto w-9/12 rounded-md py-8'>
            <div className='w-4/12 btn-gradient p-6'>
             Contact Information
            </div>

            <div className='w-8/12 bg-black-25 p-6'>
              Form
            </div>
          </div>

        </div>
      </section >

      <Footer />
    </div >
  );
}

export default Contact;