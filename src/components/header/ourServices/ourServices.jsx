import React from 'react'

function OurServices() {
  return (
    <div>
      <h1 className='font-bolder text-2xl mt-18'>Our Services</h1>
      <div className='border border-black-1 w-7  mx-auto my-4'></div>
      <p className='text-gray-500 text-sm px-60'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
        <div>
            <img src='./our_services.png'></img>
        </div>  
        <div>
          <button className='border border-blue-300 px-6 py-1 rounded-full hover:bg-blue-50 transition'>Learn more</button>
        </div>
    </div>
  )
}

export default OurServices


