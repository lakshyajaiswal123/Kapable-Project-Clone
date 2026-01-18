import React from 'react'
import img from "../assets/pace.png"


export default function ThinkPace() {

  return (
    <section className=' w-full py-16'>
        {/* Whole-div */}
        <div className=' max-w-[1200px] mx-auto px-4
                         flex flex-col lg:flex-row
                         gap-10 items-center'>

            {/* Left-section */}
            <div className="w-full lg:w-1/2 flex justify-center">
            
                <img src={img}
                className="w-full md:max-w-[620px] object-contain"
                 alt="Skills Assement Overview" />

            </div>

            {/* Right-section */}
            <div  className="flex flex-col w-full lg:w-1/2 gap-y-4">
            
            
            {/* Title */}
            <h4 className="text-2xl md:text-[32px] font-semibold font-lexend">
            Your Learning Pace, Your Schedule
            </h4>

            {/* About */}
            <div className='py-2'>
            <p className="text-base md:text-[22px] font-open-sans mb-2">
            Every aspect of our curriculum is customised to align with your individual needs.
            </p>
            </div>

            {/* Points-section */}
            <div className='flex flex-col gap-y-4'>
        
             {/* first-point */}
            <div className='group flex gap-4'>
                {/* Bullet-Points-1 */}
                <div className='flex-shrink-0'>
                    <h2 className=" w-8 h-8 rounded-full
                    bg-black text-white
                    flex items-center justify-center
                    group-hover:bg-[#FBF3EB]
                    group-hover:text-[#8b5a2b]
                    transition">
                        1
                    </h2>
                </div>

                {/* Point-1 */}
                <div className='font-lexend '>
                  <h2 className='text-lg md:text-[21px]'>Fill Out The Application</h2>  
                 {/* On-Hover-section */}
                <div
                 className=" mt-1
                    opacity-100 md:opacity-0
                    md:group-hover:opacity-100
                    transition-all duration-300
                              ">
                  <p className="text-xs mt-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300"> Answer all the questions in as much detail as possible to help us analyse your candidature.</p> 
                </div>

                </div>
            </div>


               {/* Second-point */}
            <div className='group flex gap-5'>
                {/* Bullet-Points-2 */}
                <div >
                    <h2 className=" w-8 h-8 rounded-full
                    bg-black text-white
                    flex items-center justify-center
                    group-hover:bg-[#FBF3EB]
                    group-hover:text-[#8b5a2b]
                    transition">
                        2
                    </h2>
                </div>

                {/* Point-2 */}
                <div className='font-lexend '>
                  <h2 className='text-lg md:text-[21px]'>Application Review</h2>  
                 {/* On-Hover-section */}
                <div
                 className=" text-xs mt-1
                    opacity-100 md:opacity-0
                    md:group-hover:opacity-100
                    transition-all duration-300">
                  <span className="text-xs mt-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">We will review your application and share a link to a zoom meeting with your trainer.
                        *If your application is not selected you will receive an email informing you about the same.</span> 
                </div>
                </div>
            </div>

               {/* third-point */}
            <div className='group flex gap-5'>
                {/* Bullet-Points-3 */}
                <div className=''>
                    <h2 className=" w-8 h-8 rounded-full
                    bg-black text-white
                    flex items-center justify-center
                    group-hover:bg-[#FBF3EB]
                    group-hover:text-[#8b5a2b]
                    transition">
                        3
                    </h2>
                </div>

                {/* Point-3 */}
                <div className='font-lexend '>
                  <h2 className='text-lg md:text-[21px]'>Attend a 1-on-1 Session</h2>  
                 {/* On-Hover-section */}
                <div
                 className="text-xs mt-1
                    opacity-100 md:opacity-0
                    md:group-hover:opacity-100
                    transition-all duration-300">
                  <span className="text-xs mt-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">Attend a free 60 minute, 1-on-1 session with your trainer who will decode your challenges and create a roadmap for your upskilling journey.</span> 
                </div>
                </div>
            </div>

               {/* fourth-point */}
            <div className='group flex gap-5'>
                {/* Bullet-Points-4 */}
                <div className=''>
                    <h2 className=" w-8 h-8 rounded-full
                    bg-black text-white
                    flex items-center justify-center
                    group-hover:bg-[#FBF3EB]
                    group-hover:text-[#8b5a2b]
                    transition">
                        4
                    </h2>
                </div>

                {/* Point-4 */}
                <div className='font-lexend '>
                  <h2 className='text-lg md:text-[21px]'>Book Your Seat In Our Cohort</h2>  
                 {/* On-Hover-section */}
                <div
                 className="text-xs mt-1
                    opacity-100 md:opacity-0
                    md:group-hover:opacity-100
                    transition-all duration-300 ">
                  <span className='text-xs mt-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300'> Make a token payment to book your seat in our cohort. We take only 60 admissions per cohort.</span> 
                </div>
                </div>
            </div>
               
             


            {/* Point-Name */}
            {/* <div>
                {Points.map((item,index)=>(
            
            <div
            key={index}
            className=' '
            >
               
                <h2>{item.point}</h2>
            </div>
          
  ))}
 </div>  */}

 </div>



        </div>
      
    </div>
     </section>
  )
}
