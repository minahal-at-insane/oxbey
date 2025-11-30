import React, { useEffect } from 'react'
import Menu from './Menu'
import img1 from '../assets/img1.gif';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';
import build from '../assets/build.png';
import socials from '../assets/socials.png';
import logo from '../assets/logo1.png';
import bg_tokenomics from '../assets/bg_tokenomics.png';
import token from '../assets/token.png';
import bg_cases from '../assets/bg_cases.svg';
import bg_token from '../assets/bg-token.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
// import Roadmap from './Roadmap';
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
                            <h2 className='md:text-5xl text-2xl font-medium lg:[line-height:1.4]'>
                                Expert Social Media <br></br> Management from only<br></br>
                                <span className='font-extrabold text-blue-100'> $99 per month</span>
                            </h2>

                            <div className="flex gap-6 items-center py-8">
                                <a href='/' className='btn-gradient text-white-100 rounded-lg px-3 md:text-base text-xs py-3 flex items-center gap-3'>
                                    Get Started

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </a>

                                <a href='/' className='border-2 border-blue-100 text-blue-100 rounded-lg px-3 md:text-base text-xs py-3 flex items-center gap-3'>
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

            {/* X-Nova AI: Unleashing */}

            <img src={bg_token} alt='' className='absolute left-0 right-0 w-full mt-44'></img>

            <div className="lg:py-20 py-6 lg:px-20 px-5 container mx-auto relative z-10">

                <h3 className='text-center font-bold md:text-5xl lg:py-16 py-8'>
                    Why <span className='text-blue-100'>Oxbey?</span>
                </h3>

                <div className='grid md:grid-cols-3 grid-cols-1 lg:grid-rows-2 grid-rows-1 justify-center lg:space-y-0 space-y-8'>
                    <div className='md:w-4/12 rounded-[32px] bg-vision md:p-10 p-6 lg:-mr-10 text-center space-y-8 lg:translate-y-16'>
                        <p className='md:text-3xl text-xl font-semibold '>
                            Vision
                        </p>

                        <p className='leading-tight'>
                            Our vision is bridging the gap between artificial intelligence and blockchain technology, empowering users with accessible, customizable, and innovative tools. Our mission is to foster engagement, reward meaningful contributions, and create an ecosystem where technology adapts to individual needs, driving adoption and innovation across the digital landscape.”
                        </p>

                        <a href='https://nova-ai-2.gitbook.io/xnovaai/vision-and-mission/vision'>
                            <button className='px-5 py-2 rounded-full border-2 border-white-100 hover:bg-white-100 hover:text-purple-100 mt-8'>
                                Read More
                            </button>
                        </a>
                    </div>

                    <div data-aos='fade-up' className='md:w-4/12 rounded-[32px] bg-mission bg-opacity-30 md:p-10 p-6 text-center space-y-8'>
                        <p className='md:text-3xl text-xl font-semibold '>
                            Mission
                        </p>

                        <p className='leading-tight'>
                            Our mission is revolutionizing digital interaction by merging AI innovation with blockchain technology, empowering individuals and organizations with tools that foster creativity, collaboration, and growth. Our mission is to build a decentralized ecosystem where AI serves as a catalyst for automation, engagement, and seamless user experiences, while promoting active participation and rewarding community contributions.
                        </p>

                        <a href='https://nova-ai-2.gitbook.io/xnovaai/vision-and-mission/mission'>
                            <button className='px-5 py-2 rounded-full border-2 border-white-100 hover:bg-white-100 hover:text-pink-100 mt-8'>
                                Read More
                            </button>
                        </a>
                    </div>

                    <div className='mx-6 md:w-3/12 space-y-5'>
                        <img src={logo} alt='' className='w-56 flex mx-auto'></img>

                        <p className='md:text-4xl text-2xl font-semibold  text-center'>
                            X-Nova AI: Unleashing
                        </p>
                    </div>
                </div>

            </div>

            {/* tokenomics section */}

            <img src={bg_tokenomics} alt='' className='absolute w-full right-0 left-0 -mt-16'></img>

            <div id='tokenomics' className="lg:px-20 px-5 lg:py-20 py-6 relative z-10">
                <div className='container mx-auto'>

                    <p data-aos='fade-up' className='md:text-5xl text-3xl  text-center'>TOKENOMICS</p>

                    <button data-aos='fade-in' data-aos-delay='100' className='border-2 rounded-full px-6 py-3 mx-auto block mt-8'>
                        Click to copy Contract Address
                    </button>

                    <div className='flex flex-wrap items-center justify-center md:pt-28 pt-8 lg:space-y-0 space-y-8'>
                        <div className='lg:w-5/12'>
                            <img data-aos='zoom-in' src={token} alt=''></img>
                        </div>

                        <div data-aos='fade-left' className='lg:w-5/12 space-y-3'>
                            <div className='px-3 py-2 rounded-xl bg-[rgba(210,208,208,0.13)] flex items-center justify-between'>

                                <div className='flex items-center gap-3'>
                                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.542236" y="0.116699" width="33.6824" height="33.6824" rx="4.2103" fill="#32B6EA" />
                                    </svg>

                                    Token For Liquidity
                                </div>
                                <strong>80%</strong>
                            </div>

                            <div className='px-3 py-2 rounded-xl bg-[rgba(210,208,208,0.13)] flex items-center justify-between'>

                                <div className='flex items-center gap-3'>
                                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.542236" y="0.116699" width="33.6824" height="33.6824" rx="4.2103" fill="#1CA151" />
                                    </svg>

                                    Token For CEX
                                </div>
                                <strong>5%</strong>
                            </div>

                            <div className='px-3 py-2 rounded-xl bg-[rgba(210,208,208,0.13)] flex items-center justify-between'>

                                <div className='flex items-center gap-3'>
                                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.542236" y="0.116699" width="33.6824" height="33.6824" rx="4.2103" fill="#DEAD2F" />
                                    </svg>

                                    Token For Treasury
                                </div>
                                <strong>5%</strong>
                            </div>

                            <div className='px-3 py-2 rounded-xl bg-[rgba(210,208,208,0.13)] flex items-center justify-between'>

                                <div className='flex items-center gap-3'>
                                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.542236" y="0.116699" width="33.6824" height="33.6824" rx="4.2103" fill="#A00763" />
                                    </svg>

                                    Network Emission
                                </div>
                                <strong>10%</strong>
                            </div>

                            <div className='px-3 py-2 rounded-xl bg-[rgba(210,208,208,0.13)] flex items-center justify-between'>

                                <div className='flex items-center gap-3'>
                                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.542236" y="0.116699" width="33.6824" height="33.6824" rx="4.2103" fill="#343EBF" />
                                    </svg>

                                    Tax Buy & Sell
                                </div>
                                <strong>5% - 5%</strong>
                            </div>

                            <p className='md:text-4xl text-2xl font-semibold pt-3'>Token Supply : 100.000.000</p>
                        </div>
                    </div>
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
