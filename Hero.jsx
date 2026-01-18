import React from "react";
import { NavLink } from "react-router-dom";

import img from "../assets/background-image.png";
import heroImg from "../assets/Home-hero-image.png";
import { useState } from "react";
import CTA from "./CTA";

export default function Hero() {
   const [open, setOpen] = useState(false);
  return (
    <section className="pt-[72px]">

      {/* HERO -Background */}
      <div
        className=" relative bg-black text-white
                    min-h-[520px]
                    bg-contain bg-bottom bg-no-repeat
                    overflow-hidden 
                      "
                
        style={{ backgroundImage: `url(${img})` }}
      >


        
        {/* HEading and Main-line */}
        <div className="
            relative z-10
            flex flex-col
            gap-10 w-auto
            md:max-w-[800px]
            pt-10 md:pt-16
            px-4 sm:px-6 md:px-[92px] 
          "
        >
          {/* Upper-Heading */}
          <div className="inline-block max-w-[290px] font-poppins text-black">
            <div className="rounded px-3 py-1.5 bg-[#F6E1CE] text-sm">
              Professional Leadership Development
            </div>
          </div>

          {/* Heading */}
      <h1 className="
  w-full text-white 
  text-3xl sm:text-4xl md:text-5xl
  md:font-bold font-poppins font-semibold
  md:tracking-wider leading-normal
">
 Think, Speak and Lead 
  <span className="hidden sm:inline"><br /></span>
  <span className="whitespace-nowrap"> with Confidence</span>
</h1>


          {/* About */}
          <p className="text-xl sm:text-lg md:text-xl font-open-sans max-w-[500px]">
            Inspire, influence and create positive transformation
            at workplace and beyond.
          </p>

          {/* CTA-Button */}
          {/* <NavLink
            to="/contact"
            className="
              inline-flex items-center justify-center
              w-fit
              px-6 h-[50px]
              bg-[#C6925E]
              text-white font-lexend
              animated-border
            "
          >
            Begin Your Journey →
          </NavLink> */}
         
         <>
          <button
          onClick={()=>setOpen(true)}
          className="inline-flex cursor-pointer items-center justify-center 
                      bg-[#C6925E] text-white font-lexend  h-[42px] w-[220px]  px-6
                      animated-border">

                         Begin Your Journey →

          </button>

          {/* {Modal} */}
          {open && <CTA onClose={()=> setOpen(false)} /> }
          
           </>
        </div>

        {/*Hero-Founder-image */}
        <div
          className="
            hidden xl:block
            absolute bottom-0 right-[92px]
            z-0
          "
        >
          <img
            src={heroImg}
            alt="Leadership Expert"
            className="
              max-h-[520px]
              object-contain
              select-none
            "
          />
        </div>
      </div>
    </section>
  );
}
