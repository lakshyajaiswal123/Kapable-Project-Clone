
import React, { useState } from "react";
import { potential } from './Potential'

export default function ThinkPotential() {
  const [activeTab, setActiveTab] = useState("cognitive");
  const current = potential.find(p => p.id === activeTab) || potential[0];

  return (
    <section className="w-full bg-black text-white p-5">
      <div className="max-w-[1310px] mx-auto px-4 sm:px-6">

        {/* Heading */}
    <div className='text-center md:p-5  font-lexend space-y-4'>
       <h3 className='md:text-[32px] text-[22px] whitespace-nowrap overflow-hidden   font-bold'>
         Unlock your leadership potential</h3>
    
         <p className='md:text-[22px] text-[12px]  '>
     Enhance your ability to express yourself clearly, influence others, and excel in presentations. Build strong, persuasive communication skills that are essential for personal and professional success.</p>
      </div>

     

        {/* Tabs */}
        <div className="flex flex-wrap justify-center md:space-x-10 gap-4 mb-5  border-b-2 border-[#333333] mt-4">
          {potential.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-4 rounded-t-xl text-[16px] font-lexend font-semibold transition justify-between
                ${
                  activeTab === tab.id
                    ? "bg-[#C6925E] text-white"
                    : "bg-white text-black"
                }`}
            >
              {tab.Heading}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center md:px-15">
          
          {/* Left Content */}
          <div className="space-y-6  p-2 w-full">
            {current.points.map((item, i) => (
              <div key={i}>
                <h4 className=" md:text-[20px] text-[17px] font-lexend mb-1 text-[#F6E1CE]">
                  {item.title}
                </h4>
                <p className="text-gray-300 md:text-[16px] text-[13px] font-lexend leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Diagram */}
          <div className="flex justify-center">
            <img
              src={current.image}
              alt="Thinking framework"
              className="max-w-[280px] sm:max-w-[380px] w-full"
            />
          </div>

        </div>
      
      </div>
    </section>
  );
}
