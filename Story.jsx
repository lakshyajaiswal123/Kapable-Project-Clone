import React from 'react'
import img from "../assets/story.png"

export default function Story() {
  return (
    // Main-div
    <div className='py-12 sm:py-16'>

            {/* Whole-div */}
        <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row  
         gap-y-10 md:gap-x-10
        px-4 sm:px-6 '>
            
                {/* Left-section */}
            <div className=' w-full  md:max-w-[595px] font-inter  '>
                <div className=' space-y-4 text-center md:text-left '>
                    {/* Heading-section */}
                    <h2 className='font-semibold text-2xl sm:text-3xl'>Our Story</h2>

                    <p className='text-md sm:text-base md:text-lg leading-relaxed'>
                    We built Kapable with the objective to help professionals become a better version of themselves & change with changing times. Our aim is to enable individuals to be future ready. We strive to empower, inspire and educate our learners on skills that matter.
                    </p>


                </div>

            </div>

            {/* Right-section */}
            <div className='w-full md:max-w-[595px] flex justify-center'>
                <img
                 src={img} 
                 className='w-full max-w-md md:max-w-full h-auto object-contain'
            alt="Our Story" />
            </div>
            
        </div>
      
    </div>
  )
}
