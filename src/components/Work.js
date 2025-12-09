import React, { useEffect } from 'react'
import work1 from '../assets/work/work1.png';
import work2 from '../assets/work/work2.png';
import work3 from '../assets/work/work3.png';
import work4 from '../assets/work/work4.png';
import work5 from '../assets/work/work5.png';
import work6 from '../assets/work/work6.png';
import work7 from '../assets/work/work7.png';
import work8 from '../assets/work/work8.png';
import work9 from '../assets/work/work9.png';
import work10 from '../assets/work/work10.png';
import work11 from '../assets/work/work11.png';
import work12 from '../assets/work/work12.png';
import work13 from '../assets/work/work13.png';
import work14 from '../assets/work/work14.png';
import work15 from '../assets/work/work15.png';
import work16 from '../assets/work/work16.png';
import work17 from '../assets/work/work17.png';
import work18 from '../assets/work/work18.png';
import work19 from '../assets/work/work19.png';
import work20 from '../assets/work/work20.png';
import work21 from '../assets/work/work21.png';

import logo from '../assets/logo.png';
import save from '../assets/save.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import share from '../assets/share.webp';

import bg_services from '../assets/service/bg_services.svg';
import Menu from './Menu'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Work() {

  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, [])

  const workItems = [
    { img: work1 },
    { img: work2 },
    { img: work3 },
    { img: work4 },
    { img: work5 },
    { img: work6 },
    { img: work7 },
    { img: work8 },
    { img: work9 },
    { img: work10 },
    { img: work11 },
    { img: work12 },
    { img: work13 },
    { img: work14 },
    { img: work15 },
    { img: work16 },
    { img: work17 },
    { img: work18 },
    { img: work19 },
    { img: work20 },
    { img: work21 },


  ]

  return (
    <div>
      <div className=''>
        <img src={bg_services} alt='bg' className='invert brightness-75 absolute top-0 left-0 right-0'></img>
      </div>
      <section className="lg:px-20 px-5 lg:py-12 py-6 font-poppins text-black-50">
        <div className='container mx-auto'>

          <Menu />

          <div className='space-y-6 text-center md:pt-28 py-8'>
            <h1 className='md:text-5xl text-3xl font-bold lg:leading-snug uppercase'>
              OUR <span className='text-blue-100'>work</span>
            </h1>

            <p className='flex mx-auto lg:w-8/12 space-y-3 leading-loose'>
              Oxbey doesn’t do copy-paste solutions. Your brand has its own vibe, goals, and story — and your digital presence should match that energy. Our service packages are built to support businesses of all sizes, from growing startups to established companies that want to level up.
              <br></br><br></br>
              And if you need something more tailored, just hit us up. We’ll craft a custom package designed exactly around your needs.
            </p>
          </div>

          <div className='grid grid-cols-2 gap-6 mx-auto' style={{ maxWidth: '800px' }}>

            <div>
              <img src={work1} alt='work' className='rounded-xl shadow-md' />
            </div>

            <div className='grid grid-cols-2 gap-6 mx-auto justify-center'>
              <img src={work3} alt='work' className='rounded-xl shadow-md' />
              <img src={work4} alt='work' className='rounded-xl shadow-md' />
              <img src={work5} alt='work' className='rounded-xl shadow-md' />
              <img src={work6} alt='work' className='rounded-xl shadow-md' />
            </div>

            <div>
              <img src={work2} alt='work' className='rounded-xl shadow-md' />
            </div>

            <div>
              <img src={work3} alt='work' className='rounded-xl shadow-md' />
            </div>
          </div>

          <div className='grid grid-cols-4 gap-6 mx-auto py-12'>
            {workItems.map((item, idx) => (
              <div className='bg-white-100 rounded-2xl shadow-md'>
                <div className='flex items-center justify-between p-3 border-b border-white-200'>
                  <img src={logo} alt='' className='w-24' />
                  <p className='text-3xl -translate-y-3'>...</p>
                </div>

                <div key={idx} className='flex justify-center'>
                  <img src={item.img} alt='work' className='' />
                </div>

                <div className='flex items-center justify-between p-4 border-t border-white-200'>
                  <div className='flex items-center justify-start gap-3'>
                    <img src={like} alt='' className='' />
                    <img src={comment} alt='' className='' />
                    <img src={share} alt='' className='w-[1.6rem]' />
                  </div>

                  <div>
                    <img src={save} alt='save' />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section >
    </div >
  );
}

export default Work;