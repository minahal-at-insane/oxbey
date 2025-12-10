import React, { useEffect, useState } from 'react'
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
            </div>

            <div className='grid grid-cols-2 gap-6 mx-auto lg:w-1/2' style={{ maxWidth: '420px' }}>
              <img src={work3} alt='work' className='rounded-xl shadow-md' />
              <img src={work4} alt='work' className='rounded-xl shadow-md' />
              <img src={work5} alt='work' className='rounded-xl shadow-md' />
              <img src={work6} alt='work' className='rounded-xl shadow-md' />
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

        </div>
      </section >

      <Footer />
    </div >
  );
}

export default Work;