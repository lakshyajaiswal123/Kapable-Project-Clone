import React from "react";
import img1 from "../assets/value-1.png";
import img2 from "../assets/value-2.png";
import img3 from "../assets/value-3.png";
import img4 from "../assets/value-4.png";
import img5 from "../assets/value-5.png";
import img6 from "../assets/value-6.png";

export default function Values() {
  const power = [
    {
      image: img1,
      Heading: "Empathy",
      about: "Compassionate and human-centered approach",
    },

    {
      image: img2,
      Heading: "Empowerment",
      about: "Fostering a supportive and collaborative environment",
    },

    {
      image: img3,
      Heading: "Longevity",
      about: "Promoting sustainable practices and mindset",
    },
    {
      image: img4,
      Heading: "Value Centricity",
      about: "Delivering high-quality services",
    },

    {
      image: img5,
      Heading: "Impact",
      about: "Making a positive difference in the world",
    },

    {
      image: img6,
      Heading: "Personalization",
      about: "Customizing experiences for maximum impact",
    },
  ];

  return (
    <div className="bg-black text-white py-12 ">
      <div className="max-w-[1200px] mx-auto font-inter px-4 ">

        {/* Heading and about-section */}

        <div className="space-y-4 text-center">
          {/* Heading-section */}
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#F6E1CE]">
            
            Our Values
          </h2>

          {/* About-section */}
          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-300">
            We believe in the power of continuous learning and evolution,
            creating an environment where individuals can enhance their skills,
            adapt to change, and thrive in every aspect of their lives.
          </p>
        </div>

        {/* Grid-section */}
          <div className=" mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {power.map((item, index) => (
              <div
                key={index}
                className="bg-white flex rounded-md p-5 
                flex flex-col sm:flex-row  items-center         
             sm:items-start gap-4 text-center sm:text-left
              shadow-sm hover:shadow-lg transition  "
              >
                {/* Icon */}
                <img
                  src={item.image}
                  className=" w-14 h-14 md:w-16 md:h-16 object-contain"
                />

                <div className="text-black ">
                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-1 ">
                    {item.Heading}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed">{item.about}</p>
                </div>
              </div>
            ))}
          </div>
        
      </div>
    </div>
  );
}
