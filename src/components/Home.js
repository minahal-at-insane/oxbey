import React, { useEffect } from 'react'
import Menu from './Menu'
import img1 from '../assets/img3.gif';
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
import work1 from '../assets/work/work1.png';
import work2 from '../assets/work/work2.png';
import work3 from '../assets/work/work3.png';
import work4 from '../assets/work/work4.png';
import work5 from '../assets/work/work5.png';
import work6 from '../assets/work/work6.png';
import cross from '../assets/cross.webp';
import tick from '../assets/tick.webp';

import socials from '../assets/socials.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Faq from './Faq';
import ImageSlider from './ImageSlider';
import Footer from './Footer';
import { Link } from "react-router-dom";


export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 600,
        });
    }, [])

    const faqItems = [
        {
            title: "What happens after I sign up?",
            content:
                "Once you've selected a plan, you'll need to complete a short intake form to provide more information about your business and requirements. Once the intake form has been submitted, you will be directed to your Client Portal, where you will be prompted to connect your chosen social media profiles to our Content Scheduler, to enable us to schedule your posts. Within 5 business days after signing up, when your first batch of posts have been scheduled and are ready for review, we will send you an email containing details to access your Content Scheduler. You can edit and reschedule posts, request revisions, suggest ideas, upload content for us to use, tell us of any upcoming promotions and more. We’ll send you an email every 14 days each time a new batch of posts has been scheduled, approved by our Editorial team and is ready for you to review.",
        },
        {
            title: "Do I have to share my social media profile login details?",
            content:
                "Nope! Simply connect your social media profiles to your Content Schedule after you sign up and we will be able to schedule your posts. Simple.",
        },
        {
            title: "I don't have any social media profiles set up yet, can you help?",
            content:
                "Of course! Get in touch and we will be happy to help. There is a small one-off fee for each social media profile we create for you.",
        },
        {
            title: "How do you know what to post for my business?",
            content:
                "When you sign up you’ll be asked to complete an intake form so we can find out more about your business and the type of content that you expect. We thoroughly research every company we work with before creating content, so we will only post high-quality content that is relevant for your audience.",
        },
        {
            title: "What kind of posts will you create for my business?",
            content:
                "We will create a variety of posts for your business based on the answers you provide in the intake form during signup. This could be product/service information, industry news, testimonials, trivia, quotes etc based on your preferences. We will create a mixture of educational, promotional and interactive content to attract, engage and build trust with your audience.",
        },
        {
            title: "Can I see the posts you create before they are published?",
            content:
                "Absolutely. You can review all scheduled content by accessing your Content Scheduler via your client portal. Here you can review, edit and reschedule posts, and use the sidebar in your client portal to suggest ideas, request revisions, upload content for us to use and more.",
        },
        {
            title: "Can I still post on my own social media profiles?",
            content:
                "Of course! You can use your Content Scheduler to schedule and publish your own posts (in addition to the posts we create for you) to each of your connected social media profiles simultaneously.",
        },
    ];

    const benefits = [
        {
            img: benefit1,
            title: "Premium quality",
            desc: "Professional, high-quality social media content that get results.",
        },
        {
            img: benefit2,
            title: "Super-fast delivery",
            desc: "Receive your first batch of content within 5 business days.",
        },
        {
            img: benefit3,
            title: "Fixed monthly rate",
            desc: "One flat fee with no surprises or hidden costs each month.",
        },
        {
            img: benefit4,
            title: "Unlimited revisions",
            desc: "Request as many tweaks as you need until you are satisfied.",
        },
        {
            img: benefit5,
            title: "Flexible & scalable",
            desc: "Easily upgrade, downgrade or cancel your plan anytime.",
        },
        {
            img: benefit6,
            title: "Team collaboration",
            desc: "Invite unlimited team members to suggest ideas and give feedback.",
        },
        {
            img: benefit7,
            title: "Consistent branding",
            desc: "Premium content that matches your brand style and tone.",
        },
        {
            img: benefit8,
            title: "Unique and yours",
            desc: "Every piece of content is 100% owned by you for you to reuse however you like.",
        },
        {
            img: benefit9,
            title: "Dedicated support",
            desc: "Get expert email or video call support whenever you need it.",
        },
    ];

    const whyItems = [
        {
            img: why3,
            width: "w-52",
            title: "Created By Experts",
            desc: "Our team of expert content creators will produce eye-catching graphics, write engaging copy and schedule your posts for you every 14 days.",
        },
        {
            img: why4,
            width: "w-64",
            title: "100% Done-For-You",
            desc: "We offer a 100% done-for-you service so you don’t have to create a thing. Simply review your scheduled posts twice a month in a matter of minutes!",
        },
        {
            img: why1,
            width: "w-64",
            title: "Unique Designs",
            desc: "We create eye-catching designs in your company branding, featuring your logo, fonts and colours, specifically designed to grab your audience’s attention.",
        },
        {
            img: why5,
            width: "w-60",
            title: "Personal Dashboard",
            desc: "You’ll have access to your own client portal and content scheduler, where you can manage your scheduled posts, run reports or publish additional content yourself.",
        },
        {
            img: why2,
            width: "w-64",
            title: "Remain In Control",
            desc: "Suggest ideas, request revisions and tell us of any upcoming promotions directly through your client portal. We’ll be sure to include it all in your posts.",
        },
        {
            img: why6,
            width: "w-64",
            title: "Expert Support",
            desc: "Got a question? You can email our Support Team whenever you like, or book a call to speak to someone directly if you prefer.",
        },
    ];

    const steps = [
        {
            img: a,
            title: "Book a Free Consultation",
            desc: "Get in touch with us and tell us about your business, goals, and challenges.",
        },
        {
            img: b,
            title: "Get a Custom Strategy",
            desc: "We analyze your market and create a tailored digital marketing plan that fits your budget and objectives.",
        },
        {
            img: c,
            title: "We Launch & Optimize",
            desc: "Our team starts implementing the strategy, continuously optimizing for better performance and results.",
        },
        {
            img: d,
            title: "Track Growth & Results",
            desc: "Receive clear reports and updates so you can see real growth in traffic, leads, and sales.",
        },
    ];

    const agencyCons = [
        "Expensive monthly retainers",
        "Slow turnaround times",
        "Long-term contracts",
        "Limited revisions",
        "Generic templates",
        "Extra fees for every change",
        "No dedicated support",
        "Hard-to-use dashboards",
        "Inconsistent quality",
        "Poor communication",
    ];

    const agencyPros = [
        "Industry-leading pricing",
        "Premium content creation",
        "No long contracts",
        "No hidden fees",
        "Cancel anytime",
        "Content in 5 business days",
        "Risk-free guarantee",
        "Email & video support",
    ];

    const workItems = [
        { img: work1 },
        { img: work2 },
        { img: work3 },
        { img: work4 },
        { img: work5 },
        { img: work6 }
    ]

    return (
        <div className="font-poppins overflow-hidden text-black-50 ">

            <section className="lg:px-28 px-5 lg:py-12 py-6">
                <div className='container mx-auto'>

                    <Menu />

                    <div className='flex flex-wrap items-center justify-between mx-auto lg:space-y-0 space-y-12 lg:h-screen pt-8'>

                        <div data-aos='fade-up' className="lg:w-6/12 w-full">
                            <h1 className='md:text-5xl text-2xl font-medium lg:[line-height:1.4]'>
                                Expert Social Media <br></br> Management from only<br></br>
                                <span className='font-extrabold text-blue-100'> $99 per month</span>
                            </h1>

                            <div className="flex flex-wrap gap-6 items-center py-8">
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

                            <div className="space-y-3">
                                <p>✔️ No contracts. Cancel anytime</p>
                                <p>✔️ 14-day money-back guarantee</p>
                                <p>✔️ Trusted by hundreds of businesses</p>
                            </div>

                            <div>
                                <img src={socials} className='md:w-1/2 pt-6'></img>
                            </div>
                        </div>

                         <div data-aos='zoom-in' className="lg:w-6/12 w-full">
                            <img data-aos='zoom-in' data-aos-delay='100' src={img1} alt="" className='lg:w-10/12 flex mx-auto lg:float-right' />
                        </div>
                    </div>

                    <div className='pt-8'>
                        <ImageSlider />
                    </div>

                    <h2 className='text-center font-bold md:text-5xl text-3xl lg:py-20 py-8'>
                        Our <span className='text-blue-100'>Work</span>
                    </h2>

                    <div className='grid md:grid-cols-3 grid-cols-2 lg:grid-rows-2 grid-rows-1 justify-center items-center mx-auto md:gap-12 gap-6 justify-items-center'>
                        {workItems.map((item, idx) => (
                            <div key={idx}>
                                <img src={item.img} alt='work' className={`rounded-xl shadow-md`} />
                            </div>
                        ))}
                    </div>

                          <Link to="/our-work" className='btn-gradient text-white-100 rounded-lg px-5 py-3 flex text-center hover:-translate-y-2 duration-200 hover:shadow-xl md:w-52 w-full mx-auto mt-12 justify-center'>
                           See More
                        </Link>

                    <div>

                    </div>
                </div>
            </section>

            {/* why oxbey */}

            <div className="lg:pt-20 py-8 lg:px-20 px-5 container mx-auto">

                <h3 className='text-center font-bold md:text-5xl text-3xl'>
                    Why <span className='text-blue-100'>Oxbey?</span>
                </h3>

                <div className='grid md:grid-cols-3 grid-cols-1 lg:grid-rows-2 grid-rows-1 justify-center items-end gap-8 lg:py-20 py-8'>
                    {whyItems.map((item, idx) => (
                        <div key={idx} className='text-center space-y-5'>
                            <img src={item.img} alt='benefit' className={`flex mx-auto ${item.width}`} />
                            <h4 className='md:text-2xl text-xl font-medium'>{item.title}</h4>
                            <p className='font-light lg:px-8'>{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>

            {/* benefit section */}

            <section className="lg:px-20 px-5 lg:py-20 py-12 btn-gradient text-white-100">
                <div className="container mx-auto md:space-y-10 space-y-6">
                    <h3 className="text-center font-bold md:text-6xl text-3xl">
                        Subscription benefits
                    </h3>

                    <p className="text-center">
                        Simple, flexible, and affordable video creation designed to grow your brand.
                    </p>

                    <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-rows-3 grid-rows-1 items-center justify-items-center md:gap-10 gap-6">
                        {benefits.map((item, index) => (
                            <div key={index} className="text-center space-y-3">
                                <img src={item.img} alt="benefit" className="md:w-20 w-10 flex mx-auto" />
                                <h4 className="md:text-2xl text-sm font-medium">{item.title}</h4>
                                <p className="font-light lg:px-8 md:text-md text-xs">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Frustrated with Agencies section */}

            <div className="lg:py-20 py-6 lg:px-20 px-5 container mx-auto md:space-y-12 space-y-8">
                <h3 className='text-center font-bold md:text-4xl text-xl'>
                    Frustrated with Agencies That<br></br>
                    <span className='text-blue-100'>Cost More and Deliver Less?</span>
                </h3>

                <p className='text-center'>
                    Stop overspending on agencies that disappoint. Step Social offers affordable,<br></br> high-quality social media management to help your business grow – without the stress or hidden costs.
                </p>

                <div className='flex flex-wrap items-center justify-center gap-y-8 md:gap-x-24'>

                    <div className='p-6 rounded-lg bg-[#f9f9f9] shadow-lg'>
                        <p className='font-bold text-xl mb-4'>Other agencies:</p>

                        <ul className='space-y-4'>
                            {agencyCons.map((item, idx) => (
                                <li key={idx} className='flex items-center gap-2'>
                                    <img src={cross} alt='cross' className='w-5' />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='p-6 rounded-lg btn-gradient shadow-lg text-white-100'>
                        <p className='font-bold md:text-3xl text-xl mb-4'>With Oxbey:</p>

                        <ul className='space-y-4'>
                            {agencyPros.map((item, idx) => (
                                <li key={idx} className='flex items-center gap-2'>
                                    <img src={tick} alt='cross' className='w-5' />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className='w-full bg-white-100 py-3 text-center text-blue-100 font-semibold mt-5 rounded-md'>
                            Get Started
                        </button>
                    </div>

                </div>

            </div>

            {/* getting started */}

            <div className="py-6 lg:px-20 px-5 container mx-auto md:space-y-24 space-y-8">

                <h3 className='text-center font-bold md:text-5xl text-2xl'>
                    Getting Started Is <span className='text-blue-100'>Simple</span>
                </h3>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-8'>
                    {steps.map((item, idx) => (
                        <div key={idx} className='text-center space-y-3'>
                            <img src={item.img} alt='step' className='md:w-32 w-20 flex mx-auto' />
                            <h4 className='text-xl font-medium'>{item.title}</h4>
                            <p className='text-black-50 font-light'>{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <div className="flex flex-wrap gap-6 items-center justify-center">
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
                    <p className='text-center text-black-50 mt-8'>14-Day Money-Back Guarantee</p>
                </div>

            </div>

            {/* faq section */}

            <div id='faq' className="lg:px-20 px-5 md:py-20 py-8">
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
