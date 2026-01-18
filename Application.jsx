import React from 'react';
import img from "../assets/Two-box-image.png"

const Application = () => {
  const steps = [
    {
      title: "Book Your 1-on-1 Leadership Session",
      description: "Start by booking a personalised session with one of our expert leadership coaches."
    },
    {
      title: "Prepare For Your Journey",
      description: "Our consultant will reach out to understand your role, challenges, and goals, guide you through the program, and match you with the right trainer."
    },
    {
      title: "Attend The Evaluation Session",
      description: "In this powerful session, you'll unpack what's holding you back, understand the root causes, and walk away with a personalised roadmap to move forward as a stronger leader."
    },
    {
      title: "Begin Your Journey With Kapable",
      description: "Start your onboarding and step into a transformational learning experience tailored for your leadership goals."
    }
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1230px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Application Process</h2>
          <p className="text-lg text-black">Take the first step towards your leadership transformation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: List of Steps */}
          <div className="space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="font-Inter flex items-start gap-4">
                {/* Custom Bullet Point */}
                <div className="mt-2 h-2 w-2 rounded-full bg-gray-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                  <p className="text-black leading-relaxed max-w-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Mockups */}
          <div className="flex flex-row sm:flex-row justify-center items-center gap-6 lg:justify-end">
            
              <img src={img} alt="" />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;