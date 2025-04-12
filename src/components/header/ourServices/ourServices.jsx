import React from 'react'

function OurServices() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-[952] h-[177] top-[956px] left-[327px] rounded-[5px]'>
           <h1 className='mt-18 order-1 md:order-none font-bold text-[36px] leading-[56px] tracking-normal'>Our Services</h1>
      <div className='border border-black-1 mx-auto my-4 order-2 md:order-none w-[56px] h-[2px] top-[1038px] left-[776px]
        rounded-[5px]
'></div>
      <p className='text-sm px-6 md:px-30 order-2 md:order-none font-light text-[18px] leading-[30px] tracking-normal text-center text-[#7D7987]'>
        We provide to you the best choices for you. Adjust it to your health needs and make sure you undergo treatment with our highly qualified doctors. You can consult with us on which type of service is suitable for your health.
      </p>
      </div>
     
      <div className='order-3 md:order-none w-[1120px] h-[745px] top-[1213px] left-[244px]'>
        <img src='./our_services.png' alt="Our Services" />
        <button className='border-[1.4px] border-[#458FF6] w-[200px] h-[60px] top-[2027px] left-[704px] rounded-[55px]
  hover:bg-blue-50 transition font-bold text-[18px] leading-[60px] tracking-normal text-[#458FF6]
'>
          Learn more
        </button>
      </div>
      <div className='order-4 md:order-none'>
        
      </div>
    </div>
  )
}

export default OurServices
