import React, { useEffect } from 'react'
import Menu from './Menu'
import bottom from '../assets/bottom.png';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';
import build from '../assets/build.png';
import read from '../assets/read.png';
import logo from '../assets/logo1.png';
import bg_tokenomics from '../assets/bg_tokenomics.png';
import token from '../assets/token.png';
import x from '../assets/x.png';
import telegram from '../assets/telegram.png';
import discord from '../assets/discord.png';
import bg_cases from '../assets/bg_cases.svg';
import bg_token from '../assets/bg-token.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Roadmap from './Roadmap';
import Faq from './Faq';


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
        <div className="bg-black-100 font-inter overflow-hidden text-white-100">

            <section className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="flex flex-col justify-center items-center gap-y-6 lg:py-28 py-12 text-center lg:w-9/12 mx-auto">
                        <h1 data-aos='fade-down' className='lg:text-[11rem] md:text-7xl text-5xl font-bricolage font-bold text-gradient tracking-wider'>
                            X-Nova AI
                        </h1>

                        <p data-aos='fade-up' className='font-bricolage md:text-4xl text-xl md:leading-snug'>
                            The First Platform Pioneering Autonomous AI Advancements
                            and AI Agents  On The Ethereum Blockchain
                        </p>
                        <p>
                            At the forefront of innovation, we seamlessly merge cutting-edge AI technology with blockchain infrastructure, delivering transformative solutions and unparalleled rewards for our community.
                        </p>
                        <p>
                            CA:
                        </p>

                        <div className="flex items-center justify-center md:gap-8 gap-6 mx-auto font-bricolage">
                            <a href="/">
                                <button className="text-white-100 rounded-xl py-3 md:text-lg px-6 border-custom btn-gradient">
                                    Get Started
                                </button>
                            </a>

                            <a href="https://nova-ai-2.gitbook.io/nova-ai-docs/~/changes/EQ4qSBxbIHuomQbVvnfo?r=0J9QPlO36tuh8sLa0Kpg" target='_blank' rel='noopener noreferrer'>
                                <button className="text-white-100 rounded-xl py-3 md:text-lg px-6 border-custom btn-gradient">
                                    Whitepaper
                                </button>
                            </a>
                        </div>

                        <div className='lg:h-[85vh]'>
                            <img data-aos='fade-in' data-aos-delay='100' src={bottom} alt='x-nova-ai' className='lg:absolute right-0 left-0 w-full mt-6'></img>
                        </div>
                    </div>
                </div>
            </section>

            {/* who we are section */}

            <section id='about' className="lg:px-20 px-5 lg:py-20 py-6 relative z-10 font-bricolage">
                <div className='container mx-auto'>

                    <div className='flex flex-col gap-y-5 items-center mx-auto justify-center w-11/12 bg-black-50 md:p-16 p-6 border-2 rounded-xl text-center'>
                        <p className='font-[500]'>WHO WE ARE</p>

                        <p data-aos='fade-up' className='md:text-xl'>
                            X-Nova AI is revolutionizing the way AI and blockchain work together. As the first of its kind, our platform empowers individuals and organizations with next-gen AI Agents that simplify and automate even the most complex tasks.
                            <br></br><br></br>
                            By combining cutting-edge AI solutions with the transparency and security of blockchain technology, X-Nova AI is paving the way for a smarter, more efficent and connected world.
                        </p>

                        <div className='flex flex-wrap items-start mx-auto text-left'>


                            <div className='md:w-1/2 flex items-start gap-3 md:text-xl md:mt-12 mt-6'>
                                <div>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11" cy="11" r="11" fill="url(#paint0_linear_5_355)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_5_355" x1="11" y1="0" x2="22" y2="28.5" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#7B2EB0" />
                                                <stop offset="1" stopColor="#481CBB" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>Empower Yourself with AI Agents</p>
                            </div>

                            <div className='md:w-1/2 flex gap-3 md:text-xl md:mt-12 mt-6'>
                                <div>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11" cy="11" r="11" fill="url(#paint0_linear_5_355)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_5_355" x1="11" y1="0" x2="22" y2="28.5" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#7B2EB0" />
                                                <stop offset="1" stopColor="#481CBB" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>

                                <p data-aos='fade-in' data-aos-delay='100'> Pioneering Autonomous AI Evolution on the Ethereum Blockchain</p>
                            </div>

                            <div className='md:w-1/2 flex md:text-xl gap-3 md:mt-16 mt-6'>
                                <div>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11" cy="11" r="11" fill="url(#paint0_linear_5_355)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_5_355" x1="11" y1="0" x2="22" y2="28.5" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#7B2EB0" />
                                                <stop offset="1" stopColor="#481CBB" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>Earn Rewards for Engagement</p>
                            </div>

                            <div className='md:w-1/2 flex md:text-xl gap-3 md:mt-16 mt-6'>
                                <div>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11" cy="11" r="11" fill="url(#paint0_linear_5_355)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_5_355" x1="11" y1="0" x2="22" y2="28.5" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#7B2EB0" />
                                                <stop offset="1" stopColor="#481CBB" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>Redefining Intelligence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why choose Us? section */}

            <img src={bg_cases} alt='' className='absolute left-0 right-0 w-full'></img>

            <section id='choose' className="lg:px-20 px-5 lg:py-20 py-6 relative z-10 font-bricolage">
                <div className='container mx-auto'>

                    <div className='text-center space-y-6'>
                        <p className='md:text-xl'>Why choose Us?</p>

                        <p data-aos='fade-up' className='md:text-6xl text-3xl font-bold tracking-wide'>
                            X-Nova Ai Use Cases
                        </p>
                    </div>

                    <div className='flex flex-wrap items-start justify-between mx-auto md:mt-20 mt-8'>

                        <div className='md:w-5/12'>
                            <p data-aos='fade-right' className='md:text-2xl text-lg'>X-Nova Ai Engage-to-Earn dApp</p>

                            <p data-aos='fade-right' className='md:my-8 my-6'>
                                The X-Nova AI Engage-to-Earn dApp is designed to reward user engagement while promoting project visibility
                            </p>

                            <div className='flex items-center gap-3'>
                                <div data-aos='zoom-in'>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>Community Growth & Promotion</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div data-aos='zoom-in'>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>Increasing Awareness in the Crypto Community</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div data-aos='zoom-in'>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>Driving User Adoption</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div>
                                    <svg data-aos='zoom-in' width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>Building an Influencer Ecosystem</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div>
                                    <svg data-aos='zoom-in' width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>Driving Token Utility</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div>
                                    <svg data-aos='zoom-in' width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>Data Insights for the Project</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div>
                                    <svg data-aos='zoom-in' width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>Supporting Grassroots Marketing</p>
                            </div>
                        </div>

                        <div className='md:w-5/12'>
                            <p data-aos='fade-left' className='md:text-2xl text-lg'>
                                X-Nova Ai Custom Ai Agent Bot
                                & dApp
                            </p>

                            <p data-aos='fade-left' className='md:my-8 my-6'>
                                AI Agent Telegram Bots can serve various roles, making them highly versatile for individuals, communities, and businesses
                            </p>

                            <div className='flex items-center gap-3'>
                                <div data-aos='zoom-in'>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>Community Management</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div data-aos='zoom-in'>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>Customer Support & Service</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div data-aos='zoom-in'>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>Learning & Education</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div data-aos='zoom-in'>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>Marketing & Promotions</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div data-aos='zoom-in'>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>Financial Assistance</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div data-aos='zoom-in'>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>Productivity Tools</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div data-aos='zoom-in'>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>Entertainment & Fun</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div data-aos='zoom-in'>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>News & Updates</p>
                            </div>
                            <div className='flex items-center gap-3 mt-4'>
                                <div data-aos='zoom-in'>
                                    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="11.5854" stroke="#FCFCFC" strokeWidth="1.82927" />
                                    </svg>
                                </div>
                                <p data-aos='fade-in' data-aos-delay='100'>Social Engagement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* features section */}

            <img src={bg_cases} alt='' className='absolute left-0 right-0 w-full'></img>

            <section id='features' className="lg:px-20 px-5 lg:pb-20 py-6 relative z-10">
                <div className='container mx-auto'>

                    <div className='flex flex-wrap items-center justify-between mx-auto md:mt-20 mt-8 lg:space-y-0 space-y-12'>

                        <div data-aos='zoom-in' className="lg:w-6/12 w-full img-item">
                            <img data-aos='zoom-in' data-aos-delay='100' src={feature1} alt="" className='sm:max-w-[450px] max-w-[280px]  flex mx-auto w-full' />
                        </div>

                        <div data-aos='fade-up' className="text-white-100 lg:w-5/12 w-full lg:mt-0 mt-8">
                            <h2 className='md:text-4xl text-2xl font-bold font-bricolage'>
                                Custom AI Agent Bot 🤖
                            </h2>

                            <p className="py-8  ">
                                Build and deploy smart Ai agents directly within telegram to automate tasks, boost efficency and elevate productivity like never before.
                            </p>

                            <div className="flex gap-8 items-center">
                                <a href='https://nova-ai-2.gitbook.io/xnovaai/x-nova-ai-agent-bot-and-dapp/x-nova-ai-custom-ai-agent-bot' className='border border-pink-100 rounded-lg px-3 md:text-base text-xs cursor-pointer py-2 flex items-center gap-3 divide-x divide-pink-100 md:w-48 h-[53px]'>
                                    <img src={build} alt="" className='pr-2 border-r border-pink-100' />
                                    Lets Build
                                </a>

                                <a href='/' className='border border-pink-100 rounded-lg px-3 md:text-base text-xs cursor-pointer py-2 flex items-center gap-3 divide-x divide-pink-100 md:w-48 h-[53px]'>
                                    <img src={read} alt="" className='pr-2 border-r border-pink-100' />
                                    Read Benefits
                                </a>
                            </div>
                        </div>

                    </div>


                    <div className='relative z-10 flex flex-wrap flex-row-reverse items-center justify-between mx-auto md:mt-20 mt-12 lg:space-y-0 space-y-12'>
                        <div data-aos='zoom-in' className="lg:w-5/12 w-full img-item">
                            <img data-aos='zoom-in' data-aos-delay='100' src={feature2} alt="" className='sm:max-w-[450px] max-w-[280px]  flex mx-auto w-full' />
                        </div>

                        <div data-aos='fade-up' className="text-white-100 lg:w-5/12 w-full lg:mt-0 mt-8">
                            <h2 className='md:text-4xl text-2xl font-bold font-bricolage'>
                                Custom AI Agent dApp  🖥
                            </h2>

                            <p className="py-8">
                                create and personalize your very own AI solutions through our decentralized application. Accessible, user-friendly and tailored for everyone from beginners to blockchain pros.
                            </p>

                            <div className="flex gap-8 items-center">
                                <a href='https://nova-ai-2.gitbook.io/xnovaai/x-nova-ai-agent-bot-and-dapp/x-nova-ai-agent-dapp' className='border border-pink-100 rounded-lg px-3 md:text-base text-xs py-2 flex items-center gap-3 divide-x divide-pink-100 md:w-52 h-[53px]'>
                                    <img src={build} alt="" className='pr-2 border-r border-pink-100' />
                                    Take Me There
                                </a>

                                <a href='/' className='border border-pink-100 rounded-lg px-3 md:text-base text-xs py-2 flex items-center gap-3 divide-x divide-pink-100 md:w-48 h-[53px]'>
                                    <img src={read} alt="" className='pr-2 border-r border-pink-100' />
                                    Read Benefits
                                </a>
                            </div>
                        </div>
                    </div>

                    <img src={bg_cases} alt='' className='absolute left-0 right-0 w-full'></img>

                    <div className='relative z-10 flex flex-wrap items-center justify-between mx-auto md:mt-20 mt-12 lg:space-y-0 space-y-12'>

                        <div data-aos='fade-up' className="lg:w-5/12 w-full img-item">
                            <img data-aos='zoom-in' data-aos-delay='100' src={feature3} alt="" className='sm:max-w-[450px] max-w-[280px] flex mx-auto w-full' />
                        </div>

                        <div data-aos='fade-up' className="text-white-100 lg:w-6/12 w-full lg:mt-0 mt-8">
                            <h2 className='md:text-4xl text-2xl font-bold font-bricolage'>
                                Twitter AI Agent ( Engage to Earn )
                            </h2>

                            <p className="py-8">
                                Redefine social engagement with ENgage-to-Earn rewards on X.com (Twitter). Contribute to X-Nova AI's growth by interacting and promoting and get reward for it.
                            </p>

                            <div className="flex gap-8 items-center">
                                <a href='https://nova-ai-2.gitbook.io/xnovaai/x-nova-twitter-ai-agent-nova/engage-to-earn' className='border border-pink-100 rounded-lg px-3 md:text-base text-xs py-2 flex items-center gap-3 divide-x divide-pink-100 md:w-52 h-[53px]'>
                                    <img src={build} alt="" className='pr-2 border-r border-pink-100' />
                                    Twitter Ai Agent
                                </a>

                                <a href='/' className='border border-pink-100 rounded-lg px-3 md:text-base text-xs py-2 flex items-center gap-3 divide-x divide-pink-100 md:w-48 h-[53px]'>
                                    <img src={read} alt="" className='pr-2 border-r border-pink-100' />
                                    Read Benefits
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className='relative z-10 flex flex-wrap flex-row-reverse items-center justify-between mx-auto md:mt-20 mt-12 lg:space-y-0 space-y-12'>
                        <div data-aos='zoom-in' className="lg:w-5/12 w-full img-item">
                            <img data-aos='zoom-in' data-aos-delay='100' src={feature4} alt="" className='sm:max-w-[450px] max-w-[280px]  flex mx-auto w-full' />
                        </div>

                        <div data-aos='fade-up' className="text-white-100 lg:w-5/12 w-full lg:mt-0 mt-8">
                            <h2 className='md:text-4xl text-2xl font-bold font-bricolage'>
                                AI Agents Evolve & Breed
                            </h2>

                            <p className="py-8">
                                Welcome th the next frontier of AI evolution! Experience autonomous AI agents that evolove, adapt and even breed within a decentralized ecosystem. Witness innovation like never before.
                            </p>

                            <div className="flex gap-8 items-center">
                                <a href='https://nova-ai-2.gitbook.io/xnovaai/x-nova-autonomous-ai-developments/ai-agents-evolve-and-breed' className='border border-pink-100 rounded-lg px-3 md:text-base text-xs py-2 flex items-center gap-3 divide-x divide-pink-100 md:w-52 h-[53px]'>
                                    <img src={build} alt="" className='pr-2 border-r border-pink-100' />
                                    Take Me There
                                </a>

                                <a href='/' className='border border-pink-100 rounded-lg px-3 md:text-base text-xs py-2 flex items-center gap-3 divide-x divide-pink-100 md:w-48 h-[53px]'>
                                    <img src={read} alt="" className='pr-2 border-r border-pink-100' />
                                    Read Benefits
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* X-Nova AI: Unleashing */}

            <img src={bg_token} alt='' className='absolute left-0 right-0 w-full mt-44'></img>

            <div className="lg:py-20 py-6 lg:px-20 px-5 container mx-auto relative z-10">

                <div className='flex flex-wrap justify-center lg:space-y-0 space-y-8'>
                    <div className='md:w-4/12 rounded-[32px] bg-vision md:p-10 p-6 lg:-mr-10 text-center space-y-8 lg:translate-y-16'>
                        <p className='md:text-3xl text-xl font-semibold font-bricolage'>
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
                        <p className='md:text-3xl text-xl font-semibold font-bricolage'>
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

                        <p className='md:text-4xl text-2xl font-semibold font-bricolage text-center'>
                            X-Nova AI: Unleashing
                        </p>
                    </div>
                </div>

            </div>

            {/* tokenomics section */}

            <img src={bg_tokenomics} alt='' className='absolute w-full right-0 left-0 -mt-16'></img>

            <div id='tokenomics' className="lg:px-20 px-5 lg:py-20 py-6 relative z-10">
                <div className='container mx-auto'>

                    <p data-aos='fade-up' className='md:text-5xl text-3xl font-bricolage text-center'>TOKENOMICS</p>

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

            {/* roadmap section */}

            <img src={bg_token} alt='' className='absolute left-0 right-0 w-full -mt-20'></img>

            <div id='roadmap' className="lg:px-20 px-5 lg:py-20 py-6 relative z-10">
                <div className='container mx-auto'>
                    <p data-aos='fade-up' className='md:text-5xl text-3xl font-bricolage text-center'>Roadmap</p>

                    <div data-aos='zoom-in'>
                        <Roadmap />
                    </div>
                </div>
            </div>

            {/* faq section */}

            <div id='faq' className="lg:px-20 px-5 py-8 relative z-10 bg-img">
                <div className='container mx-auto'>

                    <div data-aos='fade-up' className='text-center space-y-4'>
                        <p className='md:text-5xl text-3xl font-bricolage text-center'>Have any Question? </p>
                        <p>Join the industry leaders to discuss where the markets are heading. We accept token payments.</p>
                    </div>

                    <div className='md:mt-16 mt-6'>
                        <Faq items={faqItems} />
                    </div>


                    <div className='md:pt-32 pt-12 space-y-8'>
                        <nav>
                            <ul className="flex flex-wrap justify-center gap-5 text-sm pt-4 items-center text-white-100">
                                <li><a href="/" className="">Home</a></li>
                                <li><a href="#about" className="">About us</a></li>
                                <li><a href="#features" className="">Features</a></li>
                                <li><a href="/" className="">Dapp</a></li>
                                <li><a href="/" className=''>AI Agent</a></li>
                                <li><a href="/" className=''>Autonomous Ai</a></li>
                                <li><a href="#tokenomics" className=''>Tokenomics</a></li>
                                <li><a href="#roadmap" className=''>Roadmap</a></li>
                            </ul>
                        </nav>

                        <div className="flex justify-center gap-3 items-center">
                            <a href='https://x.com/XNova_AI' className='p-3 rounded-xl bg-[#353535]'>
                                <img src={x} alt='X' className='w-4'></img>
                            </a>
                            <a href='https://t.me/xnova_ai' className='p-3 rounded-xl bg-[#353535]'>
                                <img src={telegram} alt='X' className='w-[18px]'></img>
                            </a>
                            <a href='/' className='p-3 rounded-xl bg-[#353535]'>
                                <img src={discord} alt='X' className='w-[18px]'></img>
                            </a>
                        </div>

                        <p className='text-center'>Copyright © {new Date().getFullYear()} X-Nova Ai. All rights reserved.</p>
                    </div>


                </div>
            </div>



        </div>
    )
}
