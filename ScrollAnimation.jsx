import React from "react";
import img1 from "../assets/scroll-1.png";
import img2 from "../assets/scroll-2.png";
import img3 from "../assets/scroll-3.png";
import img4 from "../assets/scroll-4.png";
import img5 from "../assets/scroll-5.png";
import img6 from "../assets/scroll-6.png";

export default function ScrollAnimation() {
  const cards = [
    {
      title: "Live 1-on-1 Training",
      points: [
        "Customised skill development sessions",
        "Align personal and career goals",
        "Expert-guided problem solving",
      ],
      bg: "bg-[#FFF7ED]",
      text: "text-black",
      img: img1,
    },
    {
      title: "Personalised Curriculum",
      points: [
        "Industry-specific modules",
        "Hands-on skill application",
        "Immediate impactful results",
      ],
      bg: "bg-black",
      text: "text-white",
      img: img2,
    },
    {
      title: "Cohort Connect",
      points: [
        "Insights from diverse industries",
        "Network with driven leaders",
        "Real-world interactive sessions",
      ],
      bg: "bg-[#FFF7ED]",
      text: "text-black",
      img: img3,
    },
    {
      title: "Granular Feedback",
      points: [
        "Detailed, focused feedback",
        "Access tailored resources",
        "Customised growth roadmap",
      ],
      bg: "bg-black",
      text: "text-white",
      img: img4,
    },
    {
      title: "Integrated Approach",
      points: [
        "Varied learning formats",
        "Comprehensive skill enhancement",
        "Personalised training materials",
      ],
      bg: "bg-[#FFF7ED]",
      text: "text-black",
      img: img5,
    },
     {
      title: "Flexibility",
      points: [
        "Accessible online program",
        "Flexible scheduling options",
         "Real-world interactive sessions",
      ],
      bg: "bg-black",
      text: "text-white",
      img: img6,
    },
  ];

  return (
    <section className=" w-full px-4 sm:px-6 lg:px-10 py-24">
      <div className="flex flex-col lg:flex-row gap-16">

        {/* LEFT STICKY CONTENT */}
        <div className="lg:w-1/2">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-3xl font-bold font-Inter">
              Why Kapable?
            </h2>
            <p className="mt-4 text-xl text-black  font-Inter">
              Explore how our programs are designed to elevate your skills and take your career forward.
            </p>
          </div>
        </div>

        {/* RIGHT STACKING CARDS */}
        <div className="lg:w-1/2 relative">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`
                ${card.bg}
                sticky top-28
                rounded-xl
                px-3 py-6 md:p-6
                shadow-lg
                mb-10
              `}
              
            >
              <div className=" flex justify-evenly items-center gap-6">
                
                <div className={`${card.text} max-w-md`}>
                  <h3 className="text-xl font-semibold mb-4 font-Inter">
                    {card.title}
                  </h3>

                  <ul className="space-y-2 text-base font-Inter">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span>✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <img
                  src={card.img}
                  alt={card.title}
                  className="w-20 md:w-24 object-contain flex-shrink-0"

                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}