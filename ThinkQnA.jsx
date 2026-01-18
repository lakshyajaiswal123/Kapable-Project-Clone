import React from 'react';
import { Expand } from '../Home/Expand';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from "lucide-react";


export default function ThinkQnA(){
        const [openIndex, setOpenIndex] = useState(null);
        
        const toggleFAQ = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        }
        return(
    <> 
       {/* ---------Frequently Question Asked--------- */}
    
            <div className='w-full flex  bg-black justify-center px-5  py-10 '>
              <div className='w-full md:max-w-[1250px] flex flex-col items-center'>
                <h2 className=' text-[20px] md:text-[32px]  text-white font-bold  font-lexend'>Frequently Asked Questions</h2>
           
            <div className="mt-11 w-full flex justify-center">
                <div className='w-full md:max-w-[1250px]  border-gray-300 rounded-xl bg-black shadow-xl px-6 sm:px-12 md:py-12 font-open-sans'>
                  <div className='flex flex-col gap-y-6  '>
                    {Expand.map((Ex,index)=>(
                      <div key={index} className=' border-b border-gray-300'>
                        <button onClick={()=> toggleFAQ(index)} className='flex justify-between items-center w-full py-2 px-1 text-left cursor-pointer '>
                          <h3 className='text-white text-sm text-[13px] sm:text-[15px] md:text-[22px] font-lexend transition  whitespace-nowrap'>{Ex.title}</h3>
                         {openIndex === index ? (
                          <ChevronDown className="text-white" />
                        ) : (
                          <ChevronRight className="text-white" />
                        )}
                        </button>

                        <div className={`overflow-hidden grid transition-all duration-300 ease-in-out
                        ${openIndex === index
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                        }`}>
                          
                          <div className='overflow-hidden text-white text-[12px] md:text-[18px] font-lexend max-w-full leading-relaxed  p-1 '>
                            <p><span>{Ex.about}</span></p>
      
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  </div>
                </div>
              </div>
            </div>
           
            
    </>
  )
}



  