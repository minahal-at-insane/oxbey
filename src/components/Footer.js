import x from '../assets/x.png';
import telegram from '../assets/telegram.png';
import discord from '../assets/discord.png';
import { Link } from "react-router-dom";



function Footer() {
    return (
        <footer>
            <div className='md:pb-16 py-8 container mx-auto px-5 font-poppins'>
                <div data-aos='fade-up' className='text-center pb-12'>
                    <p className='md:text-5xl text-3xl text-center font-semibold'>Social media, <span className='text-blue-100'>simplified</span></p>
                </div>

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

            <div className="lg:px-20 px-5 lg:pt-12 py-8 btn-gradient text-white-100">
                <div className="container mx-auto">
                    <div className='flex flex-wrap items-start md:justify-between justify-center gap-6'>
                        <nav>
                            <ul className="flex justify-center gap-6 items-center">
                                <li><Link to="/" className=''>Home</Link></li>
                                <li><Link to="/pricing" className=''>Pricing</Link></li>
                                <li><Link to="/services" className=''>Services</Link></li>
                                <li><Link to="/contact" className=''>Contact</Link></li>
                            </ul>
                        </nav>

                        <div className="flex justify-center gap-3 items-center">
                            <a href='/' className='p-3 rounded-xl bg-blue-100'>
                                <img src={x} alt='X' className='w-4'></img>
                            </a>
                            <a href='/' className='p-3 rounded-xl bg-blue-100'>
                                <img src={telegram} alt='X' className='w-[18px]'></img>
                            </a>
                            <a href='/' className='p-3 rounded-xl bg-blue-100'>
                                <img src={discord} alt='X' className='w-[18px]'></img>
                            </a>
                        </div>

                    </div>

                    <p className='text-center mt-6'>Copyright © {new Date().getFullYear()} Oxbey.com. All rights reserved.</p>

                </div>
            </div>
        </footer>
    );
}

export default Footer;