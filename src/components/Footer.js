import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.webp';
import linkedin from '../assets/linkedin.png';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';



function Footer() {
    return (
        <footer>
            <div className='md:py-16 py-8 container mx-auto px-5 font-poppins text-black-50'>

                <div className='flex flex-wrap items-center mx-auto lg:absolute bg-white-100 left-0 right-0 md:justify-between justify-center gap-5 md:w-8/12 shadow p-6 rounded-lg border border-white-200 z-20'>
                    <div className=''>
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
                <div className="container mx-auto md:space-y-16 space-y-8">

                    <div className="flex items-start justify-between gap-6">
                        <div>
                            <Link to='/'><img src={logo} alt='logo' className='md:w-48 w-32 invert brightness-0'></img></Link>
                        </div>

                        <div className="flex justify-center gap-3 items-center">
                            <a href='https://www.facebook.com/share/17FzB988Ux/?mibextid=wwXIfr' className='md:p-2 p-1 rounded-lg bg-white-100'>
                                <img src={facebook} alt='facebook' className='md:w-6 w-5'></img>
                            </a>
                            <a href='https://www.instagram.com/oxbey_com?igsh=eHlsdDZwaHo4dG0x' className='md:p-2 p-1 rounded-lg bg-white-100'>
                                <img src={instagram} alt='instagram' className='md:w-6 w-5'></img>
                            </a>
                            <a href='https://www.linkedin.com/company/oxbey/' className='md:p-2 p-1 rounded-lg bg-white-100'>
                                <img src={linkedin} alt='linkedin' className='md:w-6 w-5'></img>
                            </a>
                        </div>
                    </div>

                    <div className='flex flex-wrap items-start md:justify-between justify-center gap-6'>

                        <div className='flex items-center gap-5'>
                            <a href=''>Privacy Policy</a>
                            <a href=''>Terms & Conditions</a>
                        </div>

                        <nav>
                            <ul className="flex flex-wrap justify-center gap-6 items-center md:text-base text-sm">
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