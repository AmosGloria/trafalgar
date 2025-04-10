import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-400  text-white px-8 py-12 text-left">
      <div className="flex flex-col lg:flex-row justify-between gap-12 max-w-7xl mx-auto">
        {/* Brand Info */}
        <div className="lg:w-1/4">
          <img src="trafalgar.png" alt="Trafalgar Logo" className="mb-4" />
          <p className="text-sm mb-4">
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
            for everyone
          </p>
          <p className="text-xs text-white/80">©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>

        {/* Links - Company */}
        <div>
          <h1 className="text-lg font-semibold mb-4">Company</h1>
          <ul>
            <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
            <li><Link to="/testimonials" className="hover:text-blue-200">Testimonials</Link></li>
            <li><Link to="/find-doctor" className="hover:text-blue-200">Find a Doctor</Link></li>
            <li><Link to="/apps" className="hover:text-blue-200">Apps</Link></li>
          </ul>
        </div>

        {/* Links - Region */}
        <div>
          <h1 className="text-lg font-semibold mb-4">Region</h1>
          <p className="mb-2">Indonesia</p>
          <p className="mb-2">Singapore</p>
          <p className="mb-2">Hongkong</p>
          <p>Canada</p>
        </div>

        {/* Links - Help */}
        <div>
          <h1 className="text-lg font-semibold mb-4">Help</h1>
          <p className="mb-2">Help Center</p>
          <p className="mb-2">Contact support</p>
          <p className="mb-2">Instructions</p>
          <p>How it works</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
