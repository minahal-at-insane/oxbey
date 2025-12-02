import React, { useEffect } from 'react'
import Menu from './Menu'
import img1 from '../assets/img1.gif';
import a from '../assets/a.png';
import b from '../assets/b.png';
import c from '../assets/c.png';
import d from '../assets/d.png';
import benefit1 from '../assets/benefit1.webp';
import benefit2 from '../assets/benefit2.webp';
import benefit3 from '../assets/benefit3.webp';
import benefit4 from '../assets/benefit4.webp';
import benefit5 from '../assets/benefit5.webp';
import benefit6 from '../assets/benefit6.webp';
import benefit7 from '../assets/benefit7.webp';
import benefit8 from '../assets/benefit8.webp';
import benefit9 from '../assets/benefit9.webp';
import why1 from '../assets/why1.jpg';
import why2 from '../assets/why2.jpg';
import why3 from '../assets/why3.jpg';
import why4 from '../assets/why4.jpg';
import why5 from '../assets/why5.png';
import why6 from '../assets/why6.jpg';
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

            <div className="lg:py-20 py-6 lg:px-20 px-5 container mx-auto">

                <h3 className='text-center font-bold md:text-5xl lg:py-16 py-8'>
                    Why <span className='text-blue-100'>Oxbey?</span>
                </h3>

                <div className='grid md:grid-cols-3 grid-cols-1 lg:grid-rows-2 grid-rows-1 justify-start items-end gap-8'>
                    <div className='text-center space-y-3'>
                        <img src={why1} alt='benefit' className='flex mx-auto w-96'></img>
                        <h4 className='md:text-2xl text-xl font-medium'>Dedicated support</h4>
                        <p className='font-light lg:px-8'>
                            Get expert email or video call support whenever you need it.
                        </p>
                    </div>

                    <div className='text-center space-y-3'>
                        <img src={why2} alt='benefit' className='flex mx-auto w-96'></img>
                        <h4 className='md:text-2xl text-xl font-medium'>Dedicated support</h4>
                        <p className='font-light lg:px-8'>
                            Get expert email or video call support whenever you need it.
                        </p>
                    </div>

                    <div className='text-center space-y-3'>
                        <img src={why3} alt='benefit' className='flex mx-auto w-96'></img>
                        <h4 className='md:text-2xl text-xl font-medium'>Dedicated support</h4>
                        <p className='font-light lg:px-8'>
                            Get expert email or video call support whenever you need it.
                        </p>
                    </div>

                    <div className='text-center space-y-3'>
                        <img src={why4} alt='benefit' className='flex mx-auto w-96'></img>
                        <h4 className='md:text-2xl text-xl font-medium'>Dedicated support</h4>
                        <p className='font-light lg:px-8'>
                            Get expert email or video call support whenever you need it.
                        </p>
                    </div>

                    <div className='text-center space-y-3'>
                        <img src={why5} alt='benefit' className='flex mx-auto w-96'></img>
                        <h4 className='md:text-2xl text-xl font-medium'>Dedicated support</h4>
                        <p className='font-light lg:px-8'>
                            Get expert email or video call support whenever you need it.
                        </p>
                    </div>

                    <div className='text-center space-y-3'>
                        <img src={why6} alt='benefit' className='flex mx-auto w-96'></img>
                        <h4 className='md:text-2xl text-xl font-medium'>Dedicated support</h4>
                        <p className='font-light lg:px-8'>
                            Get expert email or video call support whenever you need it.
                        </p>
                    </div>

                </div>

            </div>

            {/* benefit section */}


            <section className="lg:px-20 px-5 lg:py-20 py-8 btn-gradient text-white-100">
                <div className='container mx-auto md:space-y-10 space-y-6'>
                    <h3 className='text-center font-bold md:text-6xl text-3xl'>
                        Subscription benefits
                    </h3>

                    <p className='text-center'>Simple, flexible, and affordable video creation designed to grow your brand.</p>

                    <div className='grid md:grid-cols-3 grid-cols-1 lg:grid-rows-3 grid-rows-1 items-center justify-center md:gap-10 gap-8'>

                        <div className='text-center space-y-3'>
                            <img src={benefit1} alt='benefit' className='w-20 flex mx-auto'></img>
                            <h4 className='md:text-2xl text-xl font-medium'>Premium quality</h4>
                            <p className='font-light lg:px-8'>
                                Professional, high-quality social media content that get results.
                            </p>
                        </div>

                        <div className='text-center space-y-3'>
                            <img src={benefit2} alt='benefit' className='w-20 flex mx-auto'></img>
                            <h4 className='md:text-2xl text-xl font-medium'>Super-fast delivery</h4>
                            <p className='font-light lg:px-8'>
                                Receive your first batch of content within 5 business days.
                            </p>
                        </div>

                        <div className='text-center space-y-3'>
                            <img src={benefit3} alt='benefit' className='w-20 flex mx-auto'></img>
                            <h4 className='md:text-2xl text-xl font-medium'>Fixed monthly rate</h4>
                            <p className='font-light lg:px-8'>
                                One flat fee with no surprises or hidden costs each month.
                            </p>
                        </div>

                        <div className='text-center space-y-3'>
                            <img src={benefit4} alt='benefit' className='w-20 flex mx-auto'></img>
                            <h4 className='md:text-2xl text-xl font-medium'>Unlimited revisions</h4>
                            <p className='font-light lg:px-8'>
                                Request as many tweaks as you need until you are satisfied.
                            </p>
                        </div>

                        <div className='text-center space-y-3'>
                            <img src={benefit5} alt='benefit' className='w-20 flex mx-auto'></img>
                            <h4 className='md:text-2xl text-xl font-medium'>Flexible & scalable</h4>
                            <p className='font-light lg:px-8'>
                                Easily upgrade, downgrade or cancel your plan anytime.
                            </p>
                        </div>

                        <div className='text-center space-y-3'>
                            <img src={benefit6} alt='benefit' className='w-20 flex mx-auto'></img>
                            <h4 className='md:text-2xl text-xl font-medium'>Team collaboration</h4>
                            <p className='font-light lg:px-8'>
                                Invite unlimited team members to suggest ideas and give feedback.
                            </p>
                        </div>

                        <div className='text-center space-y-3'>
                            <img src={benefit7} alt='benefit' className='w-20 flex mx-auto'></img>
                            <h4 className='md:text-2xl text-xl font-medium'>Consistent branding</h4>
                            <p className='font-light lg:px-8'>
                                Premium content that matches your brand style and tone.
                            </p>
                        </div>

                        <div className='text-center space-y-3'>
                            <img src={benefit8} alt='benefit' className='w-20 flex mx-auto'></img>
                            <h4 className='md:text-2xl text-xl font-medium'>Unique and yours</h4>
                            <p className='font-light lg:px-8'>
                                Every piece of content is 100% owned by you for you to reuse however you like.
                            </p>
                        </div>

                        <div className='text-center space-y-3'>
                            <img src={benefit9} alt='benefit' className='w-20 flex mx-auto'></img>
                            <h4 className='md:text-2xl text-xl font-medium'>Dedicated support</h4>
                            <p className='font-light lg:px-8'>
                                Get expert email or video call support whenever you need it.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* getting started */}

            <div className="lg:py-20 py-6 lg:px-20 px-5 container mx-auto space-y-24">

                <h3 className='text-center font-bold md:text-5xl'>
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

                <div>
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
                    <p className='text-center text-black-50 mt-8'>14-Day Money-Back Guarantee</p>
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
