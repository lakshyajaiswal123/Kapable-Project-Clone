import React from "react";

export default function JoinUs() {
  return (
    <section className="bg-black w-full">
      <div
        className="
          max-w-[1140px] mx-auto
          px-4 sm:px-6 lg:px-8
          py-6 sm:py-20 lg:py-10
          text-center
        "
      >
        {/* Heading */}
        <h2
          className="
            text-white font-semibold font-Inter
            text-xl sm:text-3xl md:text-2xl lg:text-4xl
            leading-tight
            md:max-w-5xl mx-auto 
          "
        >
          Grow with Kapable! Think you've got the Kapable DNA?
        </h2>

        {/* Button */}
        <div className="mt-8 sm:mt-6">
          <button
            className="
              bg-white text-black
              font-medium font-Inter
              px-6 sm:px-12
              py-2 sm:py-3
              rounded-lg
              text-sm sm:text-base
             
            "
          >
            Join Us
          </button>
        </div>
      </div>
    </section>
  );
}