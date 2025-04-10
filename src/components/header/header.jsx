import React from 'react';
import Navbar from './navbar';

function Header() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-14">
      <Navbar />

      {/* Element image at the extreme left of the page - hidden on mobile */}
      <img 
        src="./element.png" 
        alt="Decorative Element"
        className="hidden md:block absolute top-20 left-0 w-14 h-22"
      />

      <div className="flex flex-col lg:flex-row items-center justify-between mt-10 gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 md:mt-10">
            Virtual Healthcare 
            <span className="block">for you</span>
          </h1>
          <p className="text-gray-600 mb-6 max-w-md mx-auto lg:mx-0">
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
          </p>
          <div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-400 transition">
              Consult today
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img src="./illustration.png" alt="Illustration" className="w-full max-w-sm mx-auto lg:mx-0" />
        </div>
      </div>
    </div>
  );
}

export default Header;
