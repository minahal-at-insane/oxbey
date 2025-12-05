import React, { useEffect } from 'react'
import benefit1 from '../assets/benefit1.webp';
import benefit2 from '../assets/benefit2.webp';
import benefit3 from '../assets/benefit3.webp';
import benefit4 from '../assets/benefit4.webp';
import benefit5 from '../assets/benefit5.webp';
import benefit6 from '../assets/benefit6.webp';
import benefit7 from '../assets/benefit7.webp';
import benefit8 from '../assets/benefit8.webp';
import benefit9 from '../assets/benefit9.webp';
import Menu from './Menu'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Services() {


    const Services = [
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

    return (

        <section className="lg:px-20 px-5 lg:py-12 py-6">
            <div className='container mx-auto'>

                <Menu />

                <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-rows-3 grid-rows-1 items-center justify-center md:gap-10 gap-8">
                    {Services.map((item, index) => (
                        <div key={index} className="text-center space-y-3">
                            <img src={item.img} alt="benefit" className="w-20 flex mx-auto" />
                            <h4 className="md:text-2xl text-xl font-medium">{item.title}</h4>
                            <p className="font-light lg:px-8">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}

export default Services;