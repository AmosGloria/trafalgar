import React from 'react';

function Healthcare() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-28 px-6 md:px-16 py-10">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="./leading_healthcare_providers.png"
          alt="Healthcare"
          className="w-full h-auto"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-2xl font-bold mb-2">Leading healthcare 
            <span className='block'>providers</span></h1>
        <div className="border border-black w-8 mb-4 mt-6"></div>
        <p className="mb-6 text-gray-500">
          Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
          in the solutions we deliver.
        </p>
        <button className=" border border-blue-300 px-6 py-1 rounded-full">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Healthcare;
