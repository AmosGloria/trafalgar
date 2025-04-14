import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-400 text-white w-screen h-[523px] flex items-center justify-center relative">
        {/* Decorative Element */}
        <img 
        src='element.png' 
        className='absolute top-0 right-0 w-[132px] h-[115px]' 
        alt="Decorative element" 
      />
      <div className="flex flex-col lg:flex-row justify-center items-start gap-20 w-screen px-8">
        
        {/* Brand Info */}
        <div className="flex flex-col items-start justify-center text-left max-w-xs">
          <img src="trafalgar.png" alt="Trafalgar Logo" className="mb-4" />
          <p className="text-sm mb-2 font-light text-[18px] leading-[28px]">
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
          </p>
          <p className="text-xs text-white/80">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </div>

        {/* Links - Company */}
        <div className="flex flex-col items-start justify-center text-left">
          <h1 className="text-lg font-semibold mb-4">Company</h1>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
            <li><Link to="/testimonials" className="hover:text-blue-200">Testimonials</Link></li>
            <li><Link to="/find-doctor" className="hover:text-blue-200">Find a Doctor</Link></li>
            <li><Link to="/apps" className="hover:text-blue-200">Apps</Link></li>
          </ul>
        </div>

        {/* Links - Region */}
        <div className="flex flex-col items-start justify-center text-left">
          <h1 className="text-lg font-semibold mb-4">Region</h1>
          <ul className="space-y-2">
            <li>Indonesia</li>
            <li>Singapore</li>
            <li>Hongkong</li>
            <li>Canada</li>
          </ul>
        </div>

        {/* Links - Help */}
        <div className="flex flex-col items-start justify-center text-left">
          <h1 className="text-lg font-semibold mb-4">Help</h1>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Contact support</li>
            <li>Instructions</li>
            <li>How it works</li>
          </ul>
        </div>
      </div>

      {/* Decorative Element */}
      <img 
        src='element.png' 
        className='absolute bottom-0 left-0 w-[132px] h-[115px] opacity-30' 
        alt="Decorative element" 
      />
    </div>
  );
}

export default Footer;
