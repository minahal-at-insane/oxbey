import React, { useEffect } from 'react'
import Menu from './Menu'
import img1 from '../assets/img1.gif';
import a from '../assets/a.png';
import b from '../assets/b.png';
import c from '../assets/c.png';
import d from '../assets/d.png';
import socials from '../assets/socials.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Faq from './Faq';
import ImageSlider from './ImageSlider';
import Footer from './Footer';


export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 600,
        });
    }, [])

    const faqItems = [
        {
            title: "Why Do I Choose X-Nova AI",
            content:
                "X-Nova AI offers unparalleled solutions tailored to your needs, ensuring seamless integration with your goals.",
        },
        {
            title: "What Is X-Nova AI",
            content:
                "X-Nova Ai Custom AI Bot is a versatile platform that empowers individuals and organizations to create tailored AI agents designed to meet their unique requirements. Whether for business, education, or personal use, this solution enables you to build and deploy AI bots that align perfectly with your goals.",
        },
        {
            title: "How Can I Gain Access?",
            content:
                "You can gain access by signing up on the official X-Nova platform and following the guided process to create your personalized AI bot.",
        },
        {
            title: "How Do I Benefit From It?",
            content:
                "X-Nova AI helps automate tasks, improve efficiency, and provide personalized AI solutions, saving time and resources.",
        },
    ];

    return (
        <div className="font-poppins overflow-hidden text-black-50">

            <section className="lg:px-20 px-5 lg:py-12 py-6">
                <div className='container mx-auto'>

                    <Menu />

                    <div className='flex flex-wrap flex-row-reverse items-center justify-between mx-auto lg:space-y-0 space-y-12 lg:h-screen'>
                        <div data-aos='zoom-in' className="lg:w-5/12 w-full">
                            <img data-aos='zoom-in' data-aos-delay='100' src={img1} alt="" className='flex mx-auto w-full' />
                        </div>

                        <div data-aos='fade-up' className="lg:w-6/12 w-full">
                            <h1 className='md:text-5xl text-2xl font-medium lg:[line-height:1.4]'>
                                Expert Social Media <br></br> Management from only<br></br>
                                <span className='font-extrabold text-blue-100'> $99 per month</span>
                            </h1>

                            <div className="flex gap-6 items-center py-8">
                                <a href='/' className='btn-gradient text-white-100 rounded-lg px-5 py-3 flex items-center justify-center gap-3 hover:-translate-y-2 duration-200 hover:shadow-xl md:w-52'>
                                    Get Started

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </a>

                                <a href='/' className='border-2 border-blue-100 text-blue-100 rounded-lg px-5 py-3 flex items-center justify-center gap-3 hover:-translate-y-2 duration-200 hover:shadow-xl md:w-52'>
                                    Schedule Demo

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </a>
                            </div>

                            <div className="space-y-3">
                                <p>✔️ No contracts. Cancel anytime</p>
                                <p>✔️ 14-day money-back guarantee</p>
                                <p>✔️ Trusted by hundreds of businesses</p>
                            </div>

                            <div>
                                <img src={socials} className='w-1/2 pt-6'></img>
                            </div>
                        </div>
                    </div>

                    <ImageSlider />

                    <h2 className='text-center font-medium md:text-5xl lg:py-16 py-8'>
                        Save <span className='text-blue-100'>time.</span> Save <span className='text-blue-100'>money</span>. Save <span className='text-blue-100'>hassle.</span>
                    </h2>
                </div>
            </section>

            {/* why oxbey */}

            <div className="lg:py-20 py-6 lg:px-20 px-5 container mx-auto relative z-10">

                <h3 className='text-center font-bold md:text-5xl lg:py-16 py-8'>
                    Why <span className='text-blue-100'>Oxbey?</span>
                </h3>

                <div className='grid md:grid-cols-3 grid-cols-1 lg:grid-rows-2 grid-rows-1 justify-center lg:space-y-0 space-y-8'>

                </div>

            </div>

            {/* getting started */}

            <div className="lg:py-20 py-6 lg:px-20 px-5 container mx-auto space-y-12">

                <h3 className='text-center font-bold md:text-5xl lg:py-16 py-8'>
                    Getting Started Is <span className='text-blue-100'>Simple</span>
                </h3>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-8'>
                    <div className='text-center space-y-3'>
                        <img src={a} alt='1' className='w-32 flex mx-auto'></img>
                        <h4 className='text-xl font-medium'>Sign up online</h4>
                        <p className='text-black-50 font-light'>
                            Choose a plan that’s right for your business and sign up in just 2 minutes to begin receiving quality social media content, hassle-free!
                        </p>
                    </div>

                    <div className='text-center space-y-3'>
                        <img src={b} alt='1' className='w-32 flex mx-auto'></img>
                        <h4 className='text-xl font-medium'>Sign up online</h4>
                        <p className='text-black-50 font-light'>
                            Answer some questions about your business, upload content and tell us about your requirements so we can begin creating your posts!
                        </p>
                    </div>

                    <div className='text-center space-y-3'>
                        <img src={c} alt='1' className='w-32 flex mx-auto'></img>
                        <h4 className='text-xl font-medium'>Sign up online</h4>
                        <p className='text-black-50 font-light'>
                            Connect your social media profiles to your Content Scheduler – no need to share passwords! 100% secure connection.
                        </p>
                    </div>

                    <div className='text-center space-y-3'>
                        <img src={d} alt='1' className='w-32 flex mx-auto'></img>
                        <h4 className='text-xl font-medium'>Sign up online</h4>
                        <p className='text-black-50 font-light'>
                            You’ll receive your content within 5 business days. Log in to your Content Scheduler to review or edit your posts, or request a revision.
                        </p>
                    </div>
                </div>

                <div className="flex gap-6 items-center justify-center">
                    <a href='/' className='btn-gradient text-white-100 rounded-lg px-5 py-3 flex items-center justify-center gap-3 hover:-translate-y-2 duration-200 hover:shadow-xl md:w-52'>
                        Get Started

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </a>

                    <a href='/' className='border-2 border-blue-100 text-blue-100 rounded-lg px-5 py-3 flex items-center justify-center gap-3 hover:-translate-y-2 duration-200 hover:shadow-xl md:w-52'>
                        Schedule Demo

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </a>
                </div>

            </div>

            {/* faq section */}

            <div id='faq' className="lg:px-20 px-5 py-20">
                <div className='container mx-auto'>

                    <div data-aos='fade-up' className='text-center space-y-4'>
                        <p className='md:text-5xl text-3xl text-center font-semibold'>Frequently Asked <span className='text-blue-100'>Questions</span></p>
                    </div>

                    <div className='md:mt-16 mt-6'>
                        <Faq items={faqItems} />
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}
