import React from "react";
import { Mail } from "lucide-react";

export default function ReachOut() {
  const contacts = [
    {
      title: "For Sales",
      desc: "Get in touch to join the program.",
      email: "info@kapable.club",
    },
    {
      title: "For Marketing",
      desc: "Connect with us and let’s grow together.",
      email: "marketing@kapable.club",
    },
    {
      title: "For Customer Support",
      desc: "Reach out to us for any assistance.",
      email: "ops@kapable.club",
    },
  ];

  return (
    <section className="bg-[#FFF7ED] py-12 px-6">
      <div className="max-w-full mx-auto font-lexend ">
        
        {/* Heading */}
        <h2 className="text-center text-xl md:text-3xl font-Inter font-semibold mb-12">
          Reach out to us
        </h2>

        {/* Content */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6 ">
          
          {/* Vertical dividers (desktop only) */}
          <div className="hidden lg:block absolute inset-y-0 left-1/3 w-[2px] bg-[#B07A4A]" />
          <div className="hidden lg:block absolute inset-y-0 right-1/3 w-[2px] bg-[#B07A4A]" />

          {contacts.map((item, index) => (
            <div
              key={index}
              className="text-center flex flex-col max-w-sm mx-auto items-center  "
            >
              <h3 className=" text-xl md:text-2xl font-semibold text-[#B07A4A] font-Inter mb-1">
                {item.title}
              </h3>

              <p className="text-base text-black font-Inter   mb-2">
                {item.desc}
              </p>

              <a
                href={`mailto:${item.email}`}
                className="flex items-center font-Inter gap-3 font-semibold text-lg "
              >
                <Mail className="w-6 h-6 text-[#B07A4A] font-Inter" />
                {item.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}