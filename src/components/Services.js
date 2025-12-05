import React, { useEffect } from 'react'
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


function Services() {

      useEffect(() => {
        AOS.init({
          duration: 600,
        });
      }, [])

    const Services = [
        {
            img: service1,
            title: "Premium quality",
            desc: "Professional, high-quality social media content that get results.",
        },
        {
            img: service2,
            title: "Super-fast delivery",
            desc: "Receive your first batch of content within 5 business days.",
        },
        {
            img: service3,
            title: "Fixed monthly rate",
            desc: "One flat fee with no surprises or hidden costs each month.",
        },
        {
            img: service2,
            title: "Unlimited revisions",
            desc: "Request as many tweaks as you need until you are satisfied.",
        },
        {
            img: service5,
            title: "Flexible & scalable",
            desc: "Easily upgrade, downgrade or cancel your plan anytime.",
        },
        {
            img: service6,
            title: "Team collaboration",
            desc: "Invite unlimited team members to suggest ideas and give feedback.",
        },
        {
            img: service7,
            title: "Consistent branding",
            desc: "Premium content that matches your brand style and tone.",
        },
        {
            img: service8,
            title: "Unique and yours",
            desc: "Every piece of content is 100% owned by you for you to reuse however you like.",
        },
        {
            img: service9,
            title: "Dedicated support",
            desc: "Get expert email or video call support whenever you need it.",
        },
          {
            img: service10,
            title: "Dedicated support",
            desc: "Get expert email or video call support whenever you need it.",
        },
          {
            img: service11,
            title: "Dedicated support",
            desc: "Get expert email or video call support whenever you need it.",
        },
          {
            img: service12,
            title: "Dedicated support",
            desc: "Get expert email or video call support whenever you need it.",
        },
          {
            img: service13,
            title: "Dedicated support",
            desc: "Get expert email or video call support whenever you need it.",
        },
          {
            img: service14,
            title: "Dedicated support",
            desc: "Get expert email or video call support whenever you need it.",
        },
          {
            img: service15,
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