import React, { useEffect } from 'react'
import work1 from '../assets/work/work1.png';
import work2 from '../assets/work/work2.png';
import work3 from '../assets/work/work3.png';
import work4 from '../assets/work/work4.png';
import work5 from '../assets/work/work5.png';
import work6 from '../assets/work/work6.png';
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
    { img: work6 }
  ]

  return (
    <div>
      <section className="lg:px-20 px-5 lg:py-12 py-6">
        <div className='container mx-auto'>

          <Menu />

          <div className='grid md:grid-cols-3 grid-cols-1 lg:grid-rows-2 grid-rows-1 justify-center items-center mx-auto gap-12 justify-items-center'>
            {workItems.map((item, idx) => (
              <div key={idx}>
                <img src={item.img} alt='work' className={`rounded-xl shadow-md`} />
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

export default Work;