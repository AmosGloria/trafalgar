import React from 'react'

function OurServices() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-bolder text-2xl mt-18 order-1 md:order-none'>Our Services</h1>
      <div className='border border-black-1 w-7 mx-auto my-4 order-2 md:order-none'></div>
      <p className='text-gray-500 text-sm px-6 md:px-60 order-2 md:order-none'>
        We provide to you the best choices for you. Adjust it to your health needs and make sure you undergo treatment with our highly qualified doctors. You can consult with us on which type of service is suitable for your health.
      </p>
      <div className='order-3 md:order-none'>
        <img src='./our_services.png' alt="Our Services" />
      </div>
      <div className='order-4 md:order-none'>
        <button className='border border-blue-300 px-6 py-1 rounded-full hover:bg-blue-50 transition mt-4'>
          Learn more
        </button>
      </div>
    </div>
  )
}

export default OurServices
