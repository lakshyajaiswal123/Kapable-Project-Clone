import React, { useState } from "react";
import img from "../assets/background-image.png";
import heroImg from "../assets/ThinkHero-image.png";

export default function ThinkHero() {
  // const [open, setOpen] = useState(false);

  return (
    <section className="pt-[72px]">
      {/* HERO BACKGROUND */}
      <div
        className="relative text-white w-full bg-black
                   lg:min-h-[462px]
                   bg-cover bg-bottom bg-no-repeat
                   overflow-hidden"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div
          className="relative z-10 flex flex-col gap-5 md:gap-8
                     md:max-w-[800px] 
                     pt-10 md:pt-16
                     px-4 sm:px-6 md:px-16 lg:px-[102px]"
        >
          {/* Heading */}
          <h1 className="text-[#F6E1CE]
                         text-3xl sm:text-4xl md:text-[55px]
                         font-lexend font-bold leading-tight">
            Elevate your
            <br />
            <span>Cognitive agility</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-[24px] font-lexend p-1">
            Enhance your ability to think spontaneously, solve problems creatively,
            and make sound decisions.
          </p>

          {/* Animated Button */}
          <div className=" w-fit rounded-md p-2">
            <button
              // onClick={() => setOpen(true)}
              className="bg-[#C6925E] text-white
                         font-lexend h-[42px] w-[130px] px-6 rounded-md animated-border"
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="hidden xl:block absolute bottom-0 right-0 z-10">
          <img
            src={heroImg}
            alt="Leadership Expert"
            className="md:max-h-[462px] object-contain select-none"
          />
        </div>
      </div>

  
    
    </section>
  );
}
