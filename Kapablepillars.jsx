import React from 'react';

const Kapablepillars = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-16 py-10 lg:py-16">
     <div className=' flex flex-col lg:flex-row items-center gap-10 lg:gap-13'>

      {/* LEFT COLUMN: VIDEO CONTAINER */}
      <div className="w-full lg:w-1/2">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black">
          
          {/* VIDEO EMBED */}
         <iframe
         className='absolute w-full h-full'
         src="https://www.youtube.com/embed/KtRMY0ArVv8?si=_DmdNJMsLOmgN7DK"
         title="YouTube video player"
          frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
         </iframe>
        </div>
      </div>

      {/* RIGHT COLUMN: TEXT CONTENT */}
      <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
        <h2 className="text-4xl font-bold text-black leading-tight font-Inter">
          Understanding The Pillars Of Kapable
        </h2>
        
        <p className="text-lg text-black font-Inter">
          Today's professional world is volatile, uncertain, complex, and ambiguous (VUCA). 
          Professionals need to develop skills that make them stand out from the crowd.
        </p>

        <p className="text-lg text-black font-Inter">
          Thinkable, Speakable, and Workable together 
          integrate seamlessly to make you Kapable. They empower you to think critically, 
          communicate confidently, and lead effectively.
        </p>

        <p className="text-xl font-bold text-black pt-4">
          Apply now to understand how Kapable helps be heard, seen, and remembered.
        </p>
      </div>


        </div>
    </section>
  );
};

export default Kapablepillars;