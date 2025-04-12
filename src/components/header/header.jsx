import React from 'react';
import Navbar from './navbar';

function Header() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-24">
      <Navbar />

      {/* Element image at the extreme left of the page - hidden on mobile */}
      <img 
        src="./element.png" 
        alt="Decorative Element"
        className="hidden md:block absolute w-[131.58103942871094] h-[114.99999237060547] top-[170px] -left-[50px] opacity: 0.3"/>

      <div className="flex flex-col lg:flex-row items-center justify-between mt-34 gap-4">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center w-[445px] h-[338px] top-[283px] left-[190px]">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 md:mt-18 lg:text-left">
            Virtual Healthcare 
            <span className="block">for you</span>
          </h1>
          <p className="text-gray-600 mb-6 max-w-md mx-auto lg:mx-0 lg:text-left">
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
          </p>
          <div className='text-left'>
            <button className="bg-[#458FF6] text-white rounded-[55px] shadow hover:bg-blue-400 transition w-[200px]
                h-[60px] top-[561px] left-[190px] font-bold text-[18px] leading-[60px] tracking-normal">
              Consult today
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end w-[693px] h-[598px] top-[177px] left-[744px]">
          <img src="./illustration.png" alt="Illustration"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
