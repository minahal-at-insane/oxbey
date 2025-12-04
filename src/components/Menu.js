import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

export default function Menu() {

  const [isOpen, setIsopen] = useState(false);
  // const [show, setShow] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }

  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        // scrolling down → hide
        setShowHeader(false);
      } else {
        // scrolling up → show
        setShowHeader(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (

    <header>

      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="lg:flex hidden items-center justify-between font-poppins w-9/12 border-[0.3px] border-white-200 backdrop-blur rounded-full py-2 px-2 mt-6 mx-auto shadow">
          <a href="/" className="">
            <img src={logo} alt="Logo" className="w-36" />
          </a>

          <nav>
            <ul className="flex justify-center gap-6 items-center">
              <li><Link to="/" className='hover:text-blue-100 duration-150'>Home</Link></li>
              <li><Link to="/pricing" className='hover:text-blue-100 duration-150'>Pricing</Link></li>
              <li><Link to="/services" className='hover:text-blue-100 duration-150'>Services</Link></li>
              <li><Link to="/contact" className='hover:text-blue-100 duration-150'>Contact</Link></li>
            </ul>
          </nav>

          <div>
            <button className="bg-blue-100 text-white-100 rounded-full py-2 lg:px-6 px-4 font-semibold hover:bg-white-100 hover:text-blue-100 duration-150 shadow-md">
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between">
        <a href="/" className="">
          <img src={logo} alt="Logo" className='w-32' />
        </a>

        <button onClick={ToggleSidebar} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      <div className={`sidebar ${isOpen === true ? 'active' : ''} bg-blue-100 border text-white-100 rounded-md`}>
        <div className='p-6'>
          <ul onClick={ToggleSidebar} className='space-y-8'>
            <li><Link to="/" className='hover:text-blue-100 duration-150'>Home</Link></li>
            <li><Link to="/pricing" className='hover:text-blue-100 duration-150'>Pricing</Link></li>
            <li><Link to="/services" className='hover:text-blue-100 duration-150'>Services</Link></li>
            <li><Link to="/contact" className='hover:text-blue-100 duration-150'>Contact</Link></li>
          </ul>
        </div>
      </div>

    </header >
  )
}
