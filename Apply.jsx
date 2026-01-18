import React from 'react'

export default function Apply() {
  return (

    <section className="w-full bg-black py-12 px-6 md:py-13 md:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Apply Now To Our Leadership Acceleration Program
          </h2>
          <p className="text-white font-semibold  md:text-xl lg:text-[17px] max-w-3xl leading-relaxed">
            Begin your journey with our first session! Transform yourself with a 
            customised program perfectly suited to your needs which will elevate 
            your skills and set you on the path to achieve your goals.
          </p>
        </div>

        {/* Action Button */}
        <div className="flex-shrink-0">
          <button className="bg-[#A67C52] hover:bg-[#8B6642] transition-colors duration-300 text-white px-7 py-2 rounded-md font-Inter text-lg shadow-lg">
            Apply Now
          </button>
        </div>

      </div>
    </section>
  );
};

