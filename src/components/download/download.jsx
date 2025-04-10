import React from 'react';

function Download() {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 px-4 md:px-16 py-8">
      {/* Right Side - Image */}
      <div className="w-full md:w-1/2">
        <img src="download.png" alt="Download" className="w-full h-auto" />
      </div>

      {/* Left Side - Text */}
      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-2xl font-bold mb-2">Download our mobile apps</h1>
        <div className="border border-black w-7 my-4"></div>
        <p className="mb-6 text-gray-700">
          Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious forms, long calls, 
          or administrative hassle) and securely.
        </p>
        <button className="flex items-center gap-2 border border-blue-300 px-6 py-1 rounded-full hover:bg-blue-50 transition">
          Download
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-300 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
         </svg>

        </button>
      </div>
    </div>
  );
}

export default Download;
