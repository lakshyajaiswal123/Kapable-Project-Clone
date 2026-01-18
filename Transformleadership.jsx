import React from "react";

export default function Transformleadership() {
  return (
    <section className="w-full bg-[#9c6c49] px-3 py-7 sm:py-12 md:py-10">
      <div className="max-w-5xl mx-auto text-center text-white">
        
        {/* Heading */}
        <h2 className="text-xl sm:text-3xl md:text-3xl lg:text-[35px]
                       font-bold font-Inter mb-6">
          Ready to Transform Your Leadership?
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-base md:text-xl
                    max-w-2xl mx-auto font-Inter
                      text-white mb-10">
          Hear firsthand success stories and experiences from our learners,
          showcasing the transformative impact of our program.
        </p>

        {/* Button */}
        <button
          className="inline-flex items-center gap-1
                     bg-[#F6E4CF] text-black
                     font-Inter font-semibold
                     px-4 sm:px-6 py-1 sm:py-1
                     rounded-[6px] font-medium"
        >
          Begin Your Journey
          <span className="text-lg">→</span>
        </button>
 


      </div>
    </section>
  );
}