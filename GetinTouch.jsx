import React from "react";
import img from "../assets/background-image.png";


export default function GetInTouch() {
  return (
    <section className="relative max-w-full bg-black ">
      
      {/* Background Image */}
       <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
           style={{ backgroundImage: `url(${img})` }}
    
      />
        {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 " />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-10 sm:py-24 md:py-18">
        
        <h1 className="text-[#e8d5c4] font-semibold font-Inter
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Get in touch
        </h1>

        <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg
                      text-white font-Inter">
          We’re here to listen, support and provide solutions.
        </p>
      </div>
    </section>
  );
}