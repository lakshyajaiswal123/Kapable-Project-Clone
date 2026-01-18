import React from "react";
import { motion } from "framer-motion";

export default function Marquee() {
  const logos = [
    // "microsoft.svg",
    // "accenture.svg",
    // "Tata.svg",
    // "deloitte.svg",
    // "cyient.svg",
    // "amazon.svg",
    "flipkart-logo.svg",
    "company.svg",
    "tcs.svg",
    "jp-morgan.svg",
    "Airtel.png",
    "Axix-Bank.png",
    "benz.png",
    "Colagate.png",
    "Emirates.png",
   "Havmore.png",
   "Hitachi.png",
   "IDFC.png",
   "ITC.png",
   "Jio.png",
   "JK-Cement.png",
   "LG.png",
   "make-my-trip.png",
   "Razorpay.png",
   "OLA.png"

  ];

  return (
    <div className="w-full py-10 p-5">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl
                     font-semibold font-inter px-4 mb-8">
        Loved and trusted by professionals from
      </h2>

        {/* Marquee-section */}
      <div className="border border-[#C6925E] rounded-2xl max-w-[1230px] w-full  mx-auto px-3 sm:px-6 md:px-10 py-6 sm:py-7 overflow-hidden">

      {/* Upper Marquee */}
      <div className="relative overflow-hidden ">
        <div className="flex ">
          <motion.div
            className="flex flex-shrink-0"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt=""
                className=" h-6 sm:h-8 md:h-10  
                 w-auto  mx-3 sm:mx-6 md:mx-10"      
              />
            ))}
          </motion.div>

          <motion.div
            className="flex flex-shrink-0"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt=""
             className=" h-6 sm:h-8 md:h-10  
                 w-auto  mx-3 sm:mx-6 md:mx-10"      
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lower Marquee */}
      <div className="relative overflow-hidden mt-6 ">
        <div className="flex ">
          <motion.div
            className="flex flex-shrink-0"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt=""
                className=" h-6 sm:h-8 md:h-10  
                 w-auto  mx-3 sm:mx-6 md:mx-10"
              />
            ))}
          </motion.div>

          <motion.div
            className="flex flex-shrink-0"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt=""
               className=" h-6 sm:h-8 md:h-10  
                 w-auto  mx-3 sm:mx-6 md:mx-10"              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
}

