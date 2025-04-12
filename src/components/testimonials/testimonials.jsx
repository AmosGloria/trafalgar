import React from 'react'

function Testimonials() {
  return (
    <div className="relative">
      {/* Left outside element image */}
      <img
        src="./element.png"
        alt="element"
        className="absolute left-8 bottom-16 -translate-y-1/2 w-20 h-20 object-contain z-10"
      />

      {/* Testimonial Card */}
      <div className="relative bg-gradient-to-b from-[#67C3F3] via-[#5A98F2] to-[#5A98F2] py-12 px-22 mx-22 rounded-3xl overflow-hidden">

        <img
          src="./element.png"
          alt="element"
          className="absolute top-0 right-0 w-20 h-20 object-contain z-10"
        />

        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-white">What our customers are saying</h1>
          <div className="border border-white w-7 mx-auto my-4"></div>
        </div>

        {/* Testimonial Section (Image + Name + Text in row) */}
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <img
              src="./testimonial.png"
              alt="testimonial"
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-white">
              <p className="font-semibold">Edward Newgate</p>
              <p className="text-sm text-gray-100">Founder Circle</p>
            </div>
          </div>

          <div className="text-white max-w-xl text-left">
            <p>
              “Our dedicated patient engagement app and web portal allow you to access information instantaneously
              (no tedious forms, long calls, or administrative hassle) and securely.”
            </p>
          </div>
        </div>
      </div>
      
        <div className="flex justify-center items-center gap-4 mt-12 text-[#458FF6] w-336.4285888671875 h-20 t-4191px l-633px">
  {/* Left Arrow */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6 cursor-pointer"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
  </svg >
<span>....</span>
  {/* Right Arrow */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6 cursor-pointer"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
         </svg>
</div>

    </div>
  )
}

export default Testimonials
