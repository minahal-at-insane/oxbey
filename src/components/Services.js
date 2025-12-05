import React, { useEffect } from 'react'
import service from '../assets/service/service.png';
import service1 from '../assets/service/service1.png';
import service2 from '../assets/service/service2.png';
import service3 from '../assets/service/service3.png';
import service4 from '../assets/service/service4.png';
import service5 from '../assets/service/service5.png';
import service6 from '../assets/service/service6.png';
import service7 from '../assets/service/service7.png';
import service8 from '../assets/service/service8.png';
import service9 from '../assets/service/service9.png';
import service10 from '../assets/service/service10.png';
import service11 from '../assets/service/service11.png';
import service12 from '../assets/service/service12.png';
import service13 from '../assets/service/service13.png';
import service14 from '../assets/service/service14.png';
import service15 from '../assets/service/service15.png';


import Menu from './Menu'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';


function Services() {

    useEffect(() => {
        AOS.init({
            duration: 600,
        });
    }, [])

    const Services = [
        {
            img: service1,
            title: "Search Engine Optimization (SEO)",
            desc: "On-page, Off-page, Technical, LocalImproves your website’s visibility on search engines by optimizing content, structure, and authority",
        },
        {
            img: service2,
            title: "SEM / PPC",
            desc: "Drives instant traffic using paid ads that target the right audience at the perfect time",
        },
        {
            img: service3,
            title: "Social Media Marketing (SMM)",
            desc: "Builds brand presence and engagement across platforms using strategic content and targeted advertising",
        },
        {
            img: service4,
            title: "Content Marketing",
            desc: "RAttracts and educates your audience through valuable content that builds trust and credibility",
        },
        {
            img: service5,
            title: "Email Marketing",
            desc: "Nurtures leads and boosts sales through personalized messages, automated flows, and timely offers",
        },
        {
            img: service6,
            title: "Web Design & Development",
            desc: "Creates visually appealing, user-friendly websites that look great and perform smoothly on all devices",
        },
        {
            img: service7,
            title: "Conversion Rate Optimization (CRO)",
            desc: "Improves conversion rates by testing designs, optimizing funnels, and enhancing the overall user experience",
        },
        {
            img: service8,
            title: "Analytics & Reporting",
            desc: "Tracks website performance, user behavior, and campaign results to guide smarter business decisions",
        },
        {
            img: service9,
            title: "Influencer Marketing",
            desc: "Boosts brand awareness through creators who authentically promote your products to their audience",
        },
        {
            img: service10,
            title: "Online Reputation Management (ORM)",
            desc: "Manages your online reputation by monitoring reviews and maintaining a positive brand image",
        },
        {
            img: service11,
            title: "Affiliate Marketing",
            desc: "Expands your reach using partners who promote your brand in exchange for commissions",
        },
        {
            img: service12,
            title: "Marketing Automation",
            desc: "Streamlines marketing processes using automated systems that save time and improve customer journeys",
        },
        {
            img: service13,
            title: "Video Marketing",
            desc: "Engages audiences through high-impact video content tailored for different platforms and formats",
        },
        {
            img: service14,
            title: "Mobile Marketing",
            desc: "Reaches customers directly on their phones with targeted messages and app-based campaigns",
        },
        {
            img: service15,
            title: "E-commerce Marketing",
            desc: "Drives online sales through targeted ads, optimized product pages, and automated email strategies",
        },
    ];

    return (

        <div>
            <div className='lg:px-20 px-5 lg:py-20 py-6 font-poppins container mx-auto text-black-50'>

                <Menu />

                <div className='flex items-center justify-between gap-8 lg:lg:py-20 py-8'>
                    <div className='lg:w-1/2 space-y-8'>

                        <h1 className='md:text-5xl text-3xl font-bold lg:leading-snug'>
                            The <span className='text-blue-100'>Services</span> We Provide For You
                        </h1>

                        <p>
                            OXBEY has a powerhouse team of skilled, experienced developers who know how to tackle complex web problems with confidence and precision. We’ve delivered solutions across multiple industries, earning trust and recognition from countless project owners who rely on our expertise, consistency, and commitment to high-quality results.
                        </p>
                    </div>

                    <div className='lg:w-1/2'>
                        <img src={service} alt='services-img' className='float-right'></img>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-rows-3 grid-rows-1 items-center justify-center md:gap-10 gap-8">
                    {Services.map((item, index) => (
                        <div
                            key={index}
                            className="relative group text-center bg-[#f5f5f5] p-8 h-80 rounded-md shadow-md overflow-hidden transition-colors duration-300"
                        >
                            <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-100 transition-all duration-300 group-hover:h-full"></span>

                            <div className="relative z-10 space-y-5 group-hover:text-white-100">
                                <img
                                    src={item.img}
                                    alt="benefit"
                                    className="w-20 flex mx-auto transition duration-200 group-hover:invert group-hover:brightness-0"
                                />
                                <h4 className="md:text-xl text-lg font-semibold transition duration-200">
                                    {item.title}
                                </h4>
                                <p className="lg:px-8 transition duration-200">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>

    );
}

export default Services;