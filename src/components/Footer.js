import x from '../assets/x.png';
import telegram from '../assets/telegram.png';
import discord from '../assets/discord.png';
import { Link } from "react-router-dom";



function Footer() {
    return (
        <footer>
            <div className="lg:px-20 px-5 lg:pt-12 py-6 btn-gradient text-white-100">
                <div className="container mx-auto">
                    <div className='flex items-start justify-between'>
                        <nav>
                            <ul className="flex justify-center gap-6 items-center">
                                <li><Link to="/" className='hover:text-blue-100 duration-150'>Home</Link></li>
                                <li><Link to="/pricing" className='hover:text-blue-100 duration-150'>Pricing</Link></li>
                                <li><Link to="/services" className='hover:text-blue-100 duration-150'>Services</Link></li>
                                <li><Link to="/contact" className='hover:text-blue-100 duration-150'>Contact</Link></li>
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