import React from 'react'

function LatestArticles() {
  return (
    <div className="relative py-10 px-16">
     
      <img
        src="element2.png"
        alt="Decorative Element"
        className="absolute top-6 right-0 md:w-68 z-0 opacity-80 pointer-events-none"
      />

<img
       src='element.png'
       alt='element image'
       className='absolute top-18 left-2 z-0 opacity-80 pointer-events-non'></img>

      <h1 className="text-center text-2xl font-semibold z-10 relative">Check out our latest article</h1>
      <div className='border border-black w-7 mx-auto my-4 z-10 relative'></div>

      {/* Flex container for 3 cards in a row */}
      <div className="flex flex-col md:flex-row text-left gap-6 z-10 relative">
        {/* Card 1 */}
        <div className="shadow-xl rounded-2xl p-4 w-full md:w-1/3 transition-transform hover:scale-105 bg-white">
          <img src="./image2.png" alt="Article 1" className="w-full rounded-lg mb-4" />
          <h2 className="text-lg font-semibold mb-2">Disease detection, check up in the laboratory</h2>
          <p className="text-sm text-gray-600 mb-4">
            In this case, the role of the health laboratory is very important to do a disease detection...
          </p>
          <button className="inline-flex items-center text-blue-600 hover:underline font-medium">
            Read more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Card 2 */}
        <div className="shadow-xl rounded-2xl p-4 w-full md:w-1/3 transition-transform hover:scale-105 bg-white">
          <img src="./MaskGroup.png" alt="Article 2" className="w-full rounded-lg mb-4" />
          <h2 className="text-lg font-semibold mb-2">Herbal medicines that are safe for consumption</h2>
          <p className="text-sm text-gray-600 mb-4">
            Herbal medicine is very widely used at this time because of its very good for your health...
          </p>
          <button className="inline-flex items-center text-blue-600 hover:underline font-medium">
            Read more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Card 3 */}
        <div className="shadow-xl rounded-2xl p-4 w-full md:w-1/3 transition-transform hover:scale-105 bg-white">
          <img src="./MaskGroup2.png" alt="Article 3" className="w-full rounded-lg mb-4" />
          <h2 className="text-lg font-semibold mb-2">Natural care for healthy facial skin</h2>
          <p className="text-sm text-gray-600 mb-4">
            A healthy lifestyle should start from now and also for your skin health.
          </p>
          <button className="inline-flex items-center text-blue-600 hover:underline font-medium">
            Read more
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      <div className="text-center mt-8 z-10 relative">
        <button className="border border-blue-300 px-6 py-1 rounded-full shadow hover:bg-blue-400 transition">
          View All
        </button>
      </div>
    </div>
  )
}

export default LatestArticles
