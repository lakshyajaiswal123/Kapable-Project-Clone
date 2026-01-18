import React from "react";
import img1 from "../assets/image-1.png";
import img2 from "../assets/image-2.png";
import img3 from "../assets/image-3.png";

export default function Explore() {
  const master = [
    {
      image: img1,

      title: "Senior Leadership Definition and Insights into Executive Roles",
      about:
        "Have you ever seen senior leaders walking to their boardrooms and…",
      end: "Read More",
      point1: "Leadership",
      point2: "February 3, 2024",
    },

    {
      image: img2,
      title: "Decoding Amazon Leadership Principles",
      about:
        "Ever wondered how Amazon became the worldwide phenomenon it is today?",
      end: "Read More",
      point1: "Leadership",
      point2: "January 20, 2024",
    },

    {
      image: img3,
      title: "Understanding Thought Leadership: Meaning and Examples Explored",
      about:
        "In today’s world, a new form of leadership has emerged one that goes beyond…",
      end: "Read More",
      point1: "Leadership",
      point2: "January 12, 2024",
    },
  ];
  return (
    <div className="w-full flex p-5 ">
      {/* Whole-div */}
      <div className="px-4 sm:px-6 lg:px-0 max-w-[1230px] mx-auto flex flex-col justify-center">
        {/* Heading-Section */}
        <div className="max-w-[1230px]  mx-auto text-center font-inter space-y-2  ">
          <h5 className="font-semibold text-3xl sm:text-4xl">
            Explore, Learn, Evolve With Our Blogs
          </h5>
        
        <p className="text-sm sm:text-base ">
          Elevate your understanding, develop essential skills and
          <br className="hidden sm:block" />
          enrich yourself with easy-to-follow guides and helpful tips
        </p>
        
        </div>
 
        {/* Three-Grid-Section */}
        {/* --------------- Explore-Section----------- */}
        <div className="mt-12 grid gap-14 sm:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {master.map((Six, index) => (
            <div
              key={index}
              className="max-w-[312px] w-full  font-lexend min-h-[400px] rounded-2xl
                                     border border-[#A16D48] space-y-4
                                        flex flex-col mx-auto 
                                         "
     >
              {/* Structure into Grid */}
              <div >
                {/* box-1 */}
                <div>
                  <div className="  rounded-t-[15px] overflow-hidden">
                    {/* Header-image */}
                    <img className=" w-full h-full object-cover" src={Six.image} />
                  </div>

                  {/* Title */}
                  <div className="p-4 space-y-4 text-[17px]">
                    <div>
                      <h2 className="text-[#A16D48]">{Six.title}</h2>
                    </div>

                    {/* About */}
                    <p className="w-auto text-xs text-[#000000CC] ">
                      {Six.about}
                    </p>

                    {/* Leadership and date-Section */}
                    <div>
                      <ul className="list-inside flex gap-x-2 justify-baseline">
                        <li className="flex items-start gap-2">
                          {/* Bullet-points */}
                          <svg
                            className="w-1.5 h-1.5 mt-[7px] flex-shrink-0 text-[#A16D48]"
                            viewBox="0 0 8 8"
                            fill="currentColor"
                          >
                            <circle cx="4" cy="4" r="4" />
                          </svg>
                          <span className="text-xs">{Six.point1}</span>{" "}
                        </li>

                        <li className="flex items-start gap-2">
                          <svg
                            className="w-1.5 h-1.5 mt-[7px] flex-shrink-0 text-[#A16D48]"
                            viewBox="0 0 8 8"
                            fill="currentColor"
                          >
                            <circle cx="4" cy="4" r="4" />
                          </svg>
                          <span className="text-[12px]"> {Six.point2}</span>
                        </li>
                      </ul>
                    </div>

                    {/* Read-More-section */}
                    <div className="flex-grow  px-3  ">
                      <a
                        href="#"
                        className="text-[#A16D48]  text-[13px] font-lexend hover:underline"
                      >
                        {Six.end}
                      </a>
                      <span className="text-[#A16D48] "> →</span>
                    </div>


                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}
