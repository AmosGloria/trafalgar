import React from 'react';
import Navbar from './navbar';

function Header() {
  return (
    <div className="relative px-14">
      <Navbar />

      {/* Element image at the extreme left of the page */}
      <img 
        src="./element.png" 
        alt="Decorative Element"
        className="absolute top-20 left-0 w-12 h-20"
      />

      <div className="flex flex-col lg:flex-row items-center justify-between px-6 mt-8">
        {/* Left Content */}
        <div className="max-w-lg">
          <h1 className="font-bold text-2xl lg:text-3xl mb-4 text-left">Virtual Healthcare
            <span className='block'></span> for you</h1>
          <p className="text-gray-600 mb-6 text-left">
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
          </p>
          <div className='text-left'>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">Consult today</button>
          </div>
        
        </div>
        <div>
            
        </div>

        {/* Right Image */}
        <div className="mt-8 lg:mt-0"> 
          <img src="./illustration.png" alt="Illustration" className="w-full max-w-md" />
        </div>
      </div>
    </div>
  );
}

export default Header;
