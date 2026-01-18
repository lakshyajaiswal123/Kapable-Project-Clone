import React from "react";
import img from "../assets/advisor-1.png";
import img2 from "../assets/advisor-2.png";
import img3 from "../assets/advisor-3.png";
import img4 from "../assets/advisor-4.png";
import img5 from "../assets/advisor-5.png";
import img6 from "../assets/advisor-6.png";
import img7 from "../assets/advisor-7.png";

const advisors = [
  {
    name: "Abhishek Rungta",
    role: "Founder & CEO of Indus Net Technologies",
    img: img,
  },
  {
    name: "Srish Agrawal",
    role: "Founder – A1 Future Technologies",
    img: img2,
  },
  {
    name: "Ashish Tulsian",
    role: "CEO and Co Founder of Posist",
    img: img3,
  },
  {
    name: "Sakshi Tulsian",
    role: "CRO and Co Founder of Posist",
    img: img4,
  },
  {
    name: "Alkesh Agarwal",
    role: "CEO and Co Founder of Re-feel",
    img: img5,
  },
  {
    name: "Rakesh Chhabra",
    role: "Managing Partner at AARC & Co",
    img: img6,
  },
  {
    name: "Sameer Guglani",
    role: "Curator at Supermorpheus",
    img: img7,
  },
];

export default function Ouradvisors() {
  return (
    <section className="bg-white py-10 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Text */}
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-bold font-Inter mb-4">
              Our Advisors
            </h2>
            <p className="text-xl text-black leading-relaxed max-w-xl font-Inter">
              Our advisors inform our business and product development based
              on their first-hand experiences within the HR, L&D and Ed-tech
              communities.
            </p>
          </div>

          {/* Top Right Advisors (aligned to grid) */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            {advisors.slice(0, 2).map((advisor, index) => (
              <AdvisorCard key={index} {...advisor} />
            ))}
          </div>
        </div>

        {/* Bottom Advisors */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {advisors.slice(2).map((advisor, index) => (
            <AdvisorCard key={index} {...advisor} />
          ))}
        </div>

      </div>
    </section>
  );
}

function AdvisorCard({ img, name, role }) {
  return (
    <div className="text-left">
      <div className="w-[150px] h-[150px] rounded-xl overflow-hidden mb-4">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="text-base font-Inter font-medium">
        {name}
      </h4>
      <p className="text-sm text-black mt-1 leading-snug max-w-[160px] font-Inter">
        {role}
      </p>
    </div>
  );
}