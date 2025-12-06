import x from '../assets/x.png';
import telegram from '../assets/telegram.png';
import discord from '../assets/discord.png';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';



function Footer() {
    return (
        <footer>
            <div className='md:py-16 py-8 container mx-auto px-5 font-poppins text-black-50'>

                <div className='flex flex-wrap items-center mx-auto absolute bg-white-100 left-0 right-0 md:justify-between justify-center gap-5 md:w-8/12 shadow p-6 rounded-lg border border-white-200 z-20'>
                    <div data-aos='fade-right' className=''>
                        <p className='md:text-2xl text-xl font-semibold'>Social media, <span className='text-blue-100'>simplified</span></p>

                        <p className='mt-5'>14-Day Money-Back Guarantee</p>
                    </div>

                    <div>
                        <a href='/' className='btn-gradient text-white-100 rounded-lg px-5 py-3 flex items-center justify-center gap-3 hover:scale-105 duration-200 hover:shadow-xl md:w-48 w-full border'>
                            Get Started

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

            <div className="lg:px-20 px-5 lg:pt-28 py-8 btn-gradient text-white-100 font-poppins">
                <div className="container mx-auto space-y-20">

                    <div className="flex flex-wrap items-start md:justify-between justify-center gap-6">
                        <div>
                            <Link to='/'><img src={logo} alt='logo' className='w-48 invert brightness-0'></img></Link>
                        </div>

                        <div className="flex justify-center gap-3 items-center">
                            <a href='/' className='p-3 rounded-xl bg-white-100'>
                                <img src={x} alt='X' className='w-4 invert brightness-75'></img>
                            </a>
                            <a href='/' className='p-3 rounded-xl bg-white-100'>
                                <img src={telegram} alt='X' className='w-[18px] invert brightness-75'></img>
                            </a>
                            <a href='/' className='p-3 rounded-xl bg-white-100'>
                                <img src={discord} alt='X' className='w-[18px] invert brightness-75'></img>
                            </a>
                        </div>
                    </div>

                    <div className='flex flex-wrap items-start md:justify-between justify-center gap-6'>

                        <div>
                            <a href=''>Privacy Policy</a>
                        </div>

                        <nav>
                            <ul className="flex justify-center gap-6 items-center">
                                <li><Link to="/" className=''>Home</Link></li>
                                <li><Link to="/pricing" className=''>Pricing</Link></li>
                                <li><Link to="/services" className=''>Services</Link></li>
                                <li><Link to="/our-work" className=''>Our Work</Link></li>
                                <li><Link to="/contact" className=''>Contact</Link></li>
                            </ul>
                        </nav>

                    </div>

                    <p className='text-center mt-6'>Copyright © {new Date().getFullYear()} Oxbey.com. All rights reserved.</p>

                </div>
            </div>
        </footer>
    );
}

export default Footer;