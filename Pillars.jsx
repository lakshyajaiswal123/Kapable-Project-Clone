import React from "react";

export default function Pillars() {
  const about = [
    {
      title: "Thinkable",
      more: "Develop strategic thinking and problem-solving capabilities essential for leadership.",
      points: [
        "Critical thinking frameworks",
        "Strategic decision making",
        "Cognitive flexibility training",
        "Problem-solving methodologies",
      ],

      end: "Read More",
    },

    {
      title: "Speakable",
      more: "Master communication skills that inspire teams and convey ideas with clarity and impact.",
      points: [
        "Executive presence development",
        "Persuasive presentation skills",
        "Confident public speaking",
        "Active listening techniques",
      ],
      end: "Read More",
    },

    {
      title: "Workable",
      more: "Transform knowledge into action with practical implementation strategies and tools.",
      points: [
        "Productivity optimization",
        "Effective delegation skills",
        "Team collaboration methods",
        "Execution excellence frameworks"
      ],
      end: "Read More",
    },
  ];

  return (
    // Main-div
    <div className="p-6">
      {/* Whole-div */}
      <div className="px-4 sm:px-6 lg:px-0">
        {/* Heading-Section */}
        <div className="max-w-[1230px]  mx-auto text-center font-inter space-y-2   ">
          <h3 className="font-semibold text-2xl sm:text-3xl whitespace-nowrap">
            The Three Pillars of Kapable
          </h3>
          <p className="text-sm sm:text-base">
            Take the first step towards leadership excellence!
          </p>
        </div>

        {/* Three-Grid-Section */}
        <div className="mt-12">
          <div className="max-w-[1230px] mx-auto grid lg:gap-1 gap-8 sm:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {about.map((Six, index) => (
              <div
                key={index}
                className="max-w-[342px] w-full  rounded-2xl
                                     border border-[#A16D48]
                                        flex flex-col mx-auto "
              >
                {/* Upper-background */}
                <div className="w-full min-h-[24px]  bg-[#A16D48] rounded-t-[12px] overflow-hidden"></div>

                {/* Structure into Grid */}
                <div>
                  {/* box-1 */}

                  <div className="space-y-3 p-8 font-inter ">
                    {/* Heading */}
                    <h2 className="text-2xl font-bold  text-[#A16D48]">
                      {Six.title}
                    </h2>

                    <p className="text-[#636363] font-medium text-sm sm:text-base ">
                      {Six.more}
                    </p>

                    <ul className="space-y-2">
                      {Six.points.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-[#636363]"
                        >
                          {/* Tick Icon */}
                          <svg
                            className="w-4 h-4 text-[#A16D48] mt-[3px]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>

                          {/* Text */}
                          <span className="text-[#A16D48] ">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex-grow  px-3  ">
                      <a
                        href="#"
                        className="text-[#A16D48]  text-sm sm:text-base hover:underline"
                      >
                        {Six.end}
                      </a>
                      <span className="text-[#A16D48] "> →</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
