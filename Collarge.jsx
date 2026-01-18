import React from "react";
import img1 from "../assets/background-image.png";
import img2 from "../assets/collarge.png";
import img3 from "../assets/collarge2.png";
import img4 from "../assets/upper-collarge.png";
import img5 from "../assets/collarge-background.png"

export default function Collarge() {
  return (
    <div className="w-full">

      {/* ------------------ Desktop / Hero-Section-------------------*/}
   <div
  className="hidden md:flex relative lg:min-h-screen min-h-[80vh]
  bg-black bg-contain bg-bottom  bg-no-repeat
  items-center justify-center transition-all"
  style={{ backgroundImage: `url(${img1})` }}
>

        <div className="relative w-full flex justify-center">
          {/* Collage Image */}
          <img
            className="w-full h-auto py-6"
            src={img2}
            alt="Collage"
          />

          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center text-[#F6E1CE] space-y-4 font-inter w-full max-w-3xl">
              <h1 className="leading-tight text-4xl lg:text-5xl xl:text-6xl">
                Hi, we're Kapable!
              </h1>

              <p className=" md:text-xs lg:text-lg leading-relaxed md:font-semibold">
                We believe that learning and development should be a
                <br />
                life-changing and career-enhancing experience
                <br />
                available for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------Mobile Section-------------------- */}
      <div
        className="md:hidden w-full bg-black bg-conatin bg-bottom bg-no-repeat py-16 transition-all"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="max-w-5xl mx-auto px-6 space-y-10">

          {/* Upper Image */}
          <img
            className="w-full h-auto py-8"
            src={img4}
            alt="Upper Collage"
          />

          {/* Text */}
          <div className="text-center text-[#F6E1CE] space-y-4 font-inter">
            <h1 className="text-2xl sm:text-3xl font-semibold">
              Hi, we're Kapable!
            </h1>

            <p className="text-sm sm:text-base leading-relaxed">
              We believe that learning and development should be a
              life-changing and career-enhancing experience
              available for everyone.
            </p>
          </div>

          {/* Lower Image */}
          <img
            className="w-full h-auto"
            src={img3}
            alt="Lower Collage"
          />
        </div>
      </div>

    </div>
  );
}
