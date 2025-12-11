import React, { useEffect, useState, useRef } from 'react'
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
import work22 from '../assets/work/work22.png';
import work23 from '../assets/work/work23.png';
import work24 from '../assets/work/work24.png';
import work25 from '../assets/work/work25.png';
import work26 from '../assets/work/work26.png';
import vid1 from '../assets/work/vid1.mp4';
import vid2 from '../assets/work/vid2.mp4';
import vid3 from '../assets/work/vid3.mp4';
import vid4 from '../assets/work/vid4.mp4';
import vid5 from '../assets/work/vid5.mp4';
import vid6 from '../assets/work/vid6.mp4';
import vid7 from '../assets/work/vid7.mp4';
import vid8 from '../assets/work/vid8.mp4';
import vid9 from '../assets/work/vid9.mp4';
import vid10 from '../assets/work/vid10.mp4';
import vid11 from '../assets/work/vid11.mp4';
import vid12 from '../assets/work/vid12.mp4';
import vid13 from '../assets/work/vid13.mp4';
import vid14 from '../assets/work/vid14.mp4';
import vid15 from '../assets/work/vid15.mp4';
import vid16 from '../assets/work/vid16.mp4';


import logo from '../assets/logo.png';
import save from '../assets/save.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import share from '../assets/share.webp';
import bg_services from '../assets/service/bg_services.svg';
import Menu from './Menu'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';


function Work() {

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, [])

  const workItems = [
    { img: work1 }, { img: work2 }, { img: work3 }, { img: work4 }, { img: work5 },
    { img: work6 }, { img: work7 }, { img: work8 }, { img: work9 }, { img: work10 },
    { img: work11 }, { img: work12 }, { img: work13 }, { img: work14 }, { img: work15 },
    { img: work16 }, { img: work17 }, { img: work18 }, { img: work19 }, { img: work20 },
    { img: work21 }, { img: work22 }, { img: work23 }, { img: work24 }, { img: work25 },
    { img: work26 }
  ]

  const workVideo = [
    { video: vid1 },
    { video: vid2 },
    { video: vid3 },
    { video: vid4 },
    { video: vid5 },
    { video: vid6 },
    { video: vid7 },
    { video: vid8 },
    { video: vid9 },
    { video: vid10 },
    { video: vid11 },
    { video: vid12 },
    { video: vid13 },
    { video: vid14 },
    { video: vid15 },
    { video: vid16 }
  ]

  const [visible, setVisible] = useState(8);

  const loadMore = () => {
    setVisible(prev => prev + 8);
  };

  return (
    <div>
      <div className=''>
        <img src={bg_services} alt='bg' className='invert brightness-75 absolute top-0 left-0 right-0'></img>
      </div>
      <section className="lg:px-20 px-5 lg:py-20 py-6 font-poppins text-black-50 relative z-20">
        <div className='container mx-auto'>

          <Menu />

          <div className='flex items-center justify-between lg:h-screen'>
            <div className='space-y-6 py-8 lg:w-1/2'>
              <h1 className='md:text-5xl text-3xl font-bold lg:leading-snug uppercase'>
                OUR <span className='text-blue-100'>work</span>
              </h1>

              <p className='space-y-3 leading-loose'>
                Oxbey doesn’t do copy-paste solutions. Your brand has its own vibe, goals, and story — and your digital presence should match that energy. Our service packages are built to support businesses of all sizes, from growing startups to established companies that want to level up.
                <br></br>
                And if you need something more tailored, just hit us up. We’ll craft a custom package designed exactly around your needs.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <a href='/' className='btn-gradient text-white-100 rounded-lg px-5 py-3 flex items-center justify-center gap-3 hover:-translate-y-2 duration-200 hover:shadow-xl md:w-52 w-full'>
                  Get Started

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </a>

                <a href='/' className='border-2 border-blue-100 text-blue-100 rounded-lg px-5 py-3 flex items-center justify-center gap-3 hover:-translate-y-2 duration-200 hover:shadow-xl md:w-52 w-full'>
                  Schedule Demo

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4 mx-auto lg:w-1/2' style={{ maxWidth: '420px' }}>
              <img src={work3} alt='work' className='rounded-tl-full shadow-md' />
              <img src={work4} alt='work' className='rounded-tr-full shadow-md' />
              <img src={work5} alt='work' className='rounded-bl-full shadow-md' />
              <img src={work6} alt='work' className='rounded-br-full shadow-md' />
            </div>
          </div>

          <div className='space-y-6 text-center py-8'>
            <h1 className='md:text-4xl text-3xl font-bold lg:leading-snug uppercase'>
              Examples of our <span className='text-blue-100'>work</span>
            </h1>

            <p className='flex mx-auto lg:w-8/12 space-y-3 leading-loose'>
              Get your design & marketing work done without the hassle of unreliable freelancers, costly agencies. Pay a fixed, monthly, and predictable rate, with no contracts or surprises.
            </p>
          </div>

          <div className='grid grid-cols-4 gap-5 mx-auto py-6'>
            {workItems.slice(0, visible).map((item, idx) => (
              <div className='rounded-xl work-item bg-black-25'>
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

          {visible < workItems.length && (
            <div className='text-center mt-6'>
              <button
                onClick={loadMore}
                className='btn-gradient text-white-100 rounded-lg px-5 py-3 flex text-center shadow-lg duration-200 hover:shadow-xl md:w-44 w-full mx-auto justify-center'
              >
                Load More
              </button>
            </div>
          )}

          <div>
            <div className='md:py-20 py-8 text-center'>
              <h1 className='md:text-4xl text-3xl text-center font-bold lg:leading-snug uppercase'>
                Short-Form <span className='text-blue-100'>Video</span> Content
              </h1>

              <p className='flex mx-auto lg:w-8/12 space-y-3 leading-loose md:mb-16 mb-8 mt-3'>
                Get your design & marketing work done without the hassle of unreliable freelancers, costly agencies. Pay a fixed, monthly, and predictable rate, with no contracts or surprises.
              </p>

              <div className='grid grid-cols-4 gap-6 mx-auto py-6'>
                {workVideo.slice(0, visible).map((item, idx) => (
                  <div key={idx} className='relative overflow-hidden flex justify-center shadow-md rounded-xl'>
                    <video src={item.video} autoPlay controls className='rounded-xl bg-blend-overlay bg-blue-100' />
                  </div>
                ))}
              </div>

              {visible < workVideo.length && (
                <div className='text-center mt-6'>
                  <button
                    onClick={loadMore}
                    className='btn-gradient text-white-100 rounded-lg px-5 py-3 flex text-center shadow-lg duration-200 hover:shadow-xl md:w-44 w-full mx-auto justify-center'
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>

            <grid></grid>
          </div>

        </div>
      </section >

      <Footer />
    </div >
  );
}

export default Work;