import React from 'react';
import { Expand } from './Expand';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from "lucide-react";

    function QnA(){
        const [openIndex, setOpenIndex] = useState(null);
        
        const toggleFAQ = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        }
        return(
    <> 
       {/* ---------Frequently Question Asked--------- */}
    
            <div className='w-full flex  bg-[#faf5ee] justify-center px-5  py-10'>
              <div className='w-full max-w-[1120px] flex flex-col items-center'>
                <h2 className='text-2xl sm:text-3xl text-neutral-900 font-bold '>Frequently Asked Questions</h2>
           
            <div className="mt-11 w-full flex justify-center">
                <div className='w-full max-w-[875px] border border-gray-300 rounded-xl bg-white shadow-xl px-6 sm:px-12 py-12 font-open-sans'>
                  <div className='flex flex-col gap-y-6  '>
                    {Expand.map((Ex,index)=>(
                      <div key={index} className=' border-b border-gray-300'>
                        <button onClick={()=> toggleFAQ(index)} className='flex justify-between items-center w-full py-2 px-4 text-left cursor-pointer '>
                          <h3 className='text-[#AC7B5E] text-sm md:text-[22px] font-semibold transition font-Inter whitespace-nowrap'>{Ex.title}</h3>
                         {openIndex === index ? (
                          <ChevronDown className="text-[#AC7B5E]" />
                        ) : (
                          <ChevronRight className="text-[#AC7B5E]" />
                        )}
                        </button>

                        <div className={`overflow-hidden grid transition-all duration-300 ease-in-out
                        ${openIndex === index
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                        }`}>
                          
                          <div className='overflow-hidden text-neutral-500 text-sm font-Inter max-w-full md:max-w-[556px] leading-relaxed px-5 '>{Ex.about}
      
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
export default QnA;