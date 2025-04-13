import React from 'react';

function Healthcare() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-28 px-6 md:px-16 py-10">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="./leading_healthcare_providers.png"
          alt="Healthcare"
          className="w-[650px] h-[477px] top-[2318px] left-[135px]"/>
      </div>

      {/* Right Side - Text */}
      <div className="md:w-1/2 text-left w-[486px] h-[388px] top-[2375px] left-[922px]
">
        <h1 className="text-2xl mb-2 font-bold text-[36px] leading-[56px] tracking-normal">Leading healthcare 
            <span className='block'>providers</span></h1>
        <div className="border border-black mb-4 mt-6 w-[56px] h-[2px] top-[2513px] left-[927px]"></div>
        <p className="mb-6 text-[#7D7987] font-light text-[18px] leading-[30px] tracking-normal">
          Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
          in the solutions we deliver.
        </p>
        <button className='border-[1.4px] border-[#458FF6] w-[200px] h-[60px] top-[2027px] left-[704px] rounded-[55px]
  hover:bg-blue-50 transition font-bold text-[18px] leading-[60px] tracking-normal text-[#458FF6]
'>
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Healthcare;
