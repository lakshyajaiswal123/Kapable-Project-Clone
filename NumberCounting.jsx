import React from 'react';
import CountUp from 'react-countup';

const NumberCounting = () => {
  return (
    <div className='bg-black text-white py-10 sm:py-12 mt-5 font-inter p-5'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-[1230px] mx-auto'>

            {/* first-box */}
            <div className='flex flex-col items-center justify-center bg-[#333333] p-5 sm:p-6  rounded-2xl space-y-1'>
                <p className=' text-2xl sm:text-3xl font-semibold'>
                    <CountUp
                    start={0}
                    end={30000}
                     suffix="+"
                    duration={3}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    />
                </p>
                <p className='text-sm sm:text-base text-center'>Learning Hours</p>
            </div>

            {/* second-box */}
            <div className='flex flex-col items-center justify-center bg-[#333333] p-5 sm:p-6 rounded-2xl space-y-1'>
                <p className='text-2xl sm:text-3xl font-semibold'>
                     <CountUp
                    end={2000}
                    separator=","
                    suffix="+"
                    duration={3}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    />
                </p>
                <p className='text-sm sm:text-base text-center'>Learners</p>
            </div >

           {/* Third-box */}
<div className="flex flex-col items-center justify-center bg-[#333333]  p-5 sm:p-6  rounded-2xl space-y-1">
  <p className="text-2xl sm:text-3xl font-semibold ">
    <CountUp
      start={0}
      end={70.25}
      decimals={2}
      duration={3}
      enableScrollSpy
      scrollSpyOnce
    />
  </p>
  <p className='text-sm sm:text-base text-center'>
    Net Promoter Score
  </p>
</div>

            {/* fourth-box */}
            <div className='flex flex-col items-center justify-center bg-[#333333] p-6 rounded-2xl space-y-1'>
                <p className='text-2xl sm:text-3xl font-semibold'>
                      <CountUp
                    end={35}
                    separator=","
                    suffix="+"
                    duration={3}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    />
                </p>
                <p className='text-sm sm:text-base text-center'>Industries</p>
            </div>
        </div>
    
    </div>
  )
}

export default NumberCounting
