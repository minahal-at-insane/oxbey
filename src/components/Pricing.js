import Footer from './Footer';
import Menu from './Menu';
import basic from '../assets/basic.png';
import advance from '../assets/advance.png';
import premium from '../assets/premium.png';

function Pricing() {
  return (
    <div>
      <div className='lg:px-20 px-5 lg:py-20 py-6 font-poppins container mx-auto text-black-50 relative z-10'>

        <Menu />

        <div className='space-y-6 text-center'>
          <h1 className='md:text-5xl text-3xl font-bold lg:leading-snug'>
            OUR <span className='text-blue-100'>PACKAGES</span>
          </h1>

          <p className='flex mx-auto w-8/12 space-y-3 leading-loose'>
            Oxbey doesn’t do copy-paste solutions. Your brand has its own vibe, goals, and story — and your digital presence should match that energy. Our service packages are built to support businesses of all sizes, from growing startups to established companies that want to level up.
            <br></br><br></br>
            And if you need something more tailored, just hit us up. We’ll craft a custom package designed exactly around your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center md:gap-10 gap-6">
          <div className='px-6 py-8 rounded-2xl shadow-xl border border-white-200 space-y-6'>
            <span className='btn-gradient p-3 rounded-full absolute -mt-16 ml-72'>
              <img src={basic} alt='basic' className='invert brightness-0 w-12 h-12'></img>
            </span>

            <div className='space-y-2'>
              <p className='font-medium md:text-3xl text-xl'>Basic</p>

              <h2 className='text-blue-100 font-semibold md:text-3xl text-xl'>£<span className='font-extrabold md:text-5xl text-2xl'>29</span>/mo</h2>
            </div>

            <div className='border-t border-white-200'>
            </div>

            <div className='space-y-5'>
              <div className='space-y-2'>
                <p className='font-medium md:text-3xl text-xl'>X2</p>

                <p className='text-xl'>Social Media Platforms</p>
              </div>

              <ul className='space-y-3 font-sm'>
                <li className='flex items-start gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-blue-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Unlimited Posting (content Provided by you)
                </li>

                 <li className='flex items-start gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-blue-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Unlimited Posting (content Provided by you)
                </li>

                 <li className='flex items-start gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-blue-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Unlimited Posting (content Provided by you)
                </li>

                 <li className='flex items-start gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-blue-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Unlimited Posting (content Provided by you)
                </li>

                 <li className='flex items-start gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-blue-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Unlimited Posting (content Provided by you)
                </li>

                 <li className='flex items-start gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-blue-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Unlimited Posting (content Provided by you)
                </li>

                 <li className='flex items-start gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-blue-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Unlimited Posting (content Provided by you)
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}

export default Pricing;