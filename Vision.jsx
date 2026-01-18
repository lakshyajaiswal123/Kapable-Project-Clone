import React from 'react'

export default function Vision() {
  return (
    <div className='bg-[#FBF3EB] w-full'>

        {/* whole-div */}
        <div className='max-w-[1140px] mx-auto
                         flex flex-col md:flex-row font-lexend
                          py-8 px-4 sm:px-6 gap-y-8 md:gap-x-10   '>

            {/* left-section */}
            <div className='max-w-[520px] w-full md:pr-10 
         md:border-r-[1.6px]
          md:border-[#A16D48]
          md:pb-0
          pb-6
          border-b md:border-b-0
          border-[#A16D48] '>

             <div className='text-center  space-y-4 '>
                <h3 className='font-bold text-2xl sm:text-3xl '>
                    Our Vision
                </h3>

                <p className='text-sm  sm:text-base leading-relaxed text-center mb-[14px]'>
                    To provide a dynamic, supportive and transformative learning
                     experience that equips individuals with tools and perspectives
                      they need to reach their full potential as leaders.
                </p>

             </div>

            </div>


            {/* right-section */}
            <div className='max-w-[520px] w-full md:pl-10 space-y-4'>

                <div className='text-center space-y-4 '>

                <h3 className='font-bold text-2xl sm:text-3xl'>
                    Our Mission
                </h3>

                <p className='text-sm  sm:text-base leading-relaxed'>
                    To foster a world where individuals have the skills and mindset to lead, influence, and drive positive change in their organizations and communities.
                </p>

                </div>

            </div>

        </div>
      
    </div>
  )
}
