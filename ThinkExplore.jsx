import React from "react";
import img1 from "../assets/Think-explore-1.webp";
import img2 from "../assets/Think-explore-2.webp";
import img3 from "../assets/Think-explore-3.webp";
import img4 from "../assets/Think-explore-4.webp"

export default function ThinkExplore() {
  const master = [
    {
      image: img1,

      title: "Senior Leadership Definition and Insights into Executive Roles",
      about:
        "Have you ever seen senior leaders walking to their boardrooms and…",
      end: "Read More",
   
    },

    {
      image: img2,
      title: "Decoding Amazon Leadership Principles",
      about:
        "Ever wondered how Amazon became the worldwide phenomenon it is today?",
      end: "Read More",
   
    },

    {
      image: img3,
      title: "Understanding Thought Leadership: Meaning and Examples Explored",
      about:
        "In today’s world, a new form of leadership has emerged one that goes beyond…",
      end: "Read More",

    },

      {
      image: img4,
      title: "Empowering Women in Leadership Roles",
      about:
        "We know diversity is essential today, but there’s still a shortage of women in top jobs.",
      end: "Read More",
  
    }
  ];
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-0 bg-[#FBF3FE] ">
      {/* Whole-div */}
      <div className="max-w-[1230px] mx-auto flex flex-col gap-12 ">
      
        {/* Heading-Section */}
        <div className="text-center space-y-4 max-w-[950px] mx-auto  ">
          <h5 className="font-lexend font-semibold text-xl md:text-3xl md:text-4xl whitespace-nowrap overflow-hidden">
            Explore, Learn, Evolve With Our Blogs
          </h5>
        
        <p className="md:text-[20px] text-[15px] text-black">
          Elevate your understanding, develop essential skills and
          enrich yourself with easy-to-follow guides and helpful tips
        </p>
          
        </div>

        {/* Three-Grid-Section */}
        {/* --------------- Explore-Section----------- */}
        <div className=" grid gap-8
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4">
          {master.map((Six, index) => (
            <div
              key={index}
              className=" w-full max-w-[280px]
                mx-auto
                rounded-2xl
                border border-[#A16D48]
                flex flex-col
                overflow-hidden
                hover:shadow-lg
                transition
                                         "
     >
              {/* Structure into Grid */}
              <div>
                {/* box-1 */}
                <div className="space-y-2">
                  <div className="w-full h-full   rounded-t-[15px] overflow-hidden">
                    {/* Header-image */}
                    <img className=" w-full h-full object-cover" src={Six.image} />
                  </div>

                  {/* Title */}
                  <div className="p-3 space-y-2">
                    <div>
                      <h2 className="text-[#A16D48]">{Six.title}</h2>
                    </div>

                    {/* About */}
                    <p className="w-auto text-sm text-black">
                      {Six.about}
                    </p>


                    {/* Read-More-section */}
                    <div className="flex-grow justify-baseline   ">
                      <a
                        href="#"
                        className="text-[#A16D48]  text-sm sm:text-base hover:underline "
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

          {/* Explore-Button */}
              <div className=" justify-center items-center flex">
                   <button className="inline-flex cursor-pointer items-center justify-center 
                      bg-[#C6925E] text-white font-lexend  h-[42px] w-[124px] 
                      animated-border
                   ">
           Explore More          
          </button>
      </div>

      </div>
    </div>
  );
}
