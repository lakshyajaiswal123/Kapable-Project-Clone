import React from "react";
import img from "../assets/Guide.png";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useState } from 'react';

export default function Guide() {
      const [phone, setPhone] = useState('');

  return (
    <div className="bg-black px-5 py-10 space-y-8">
      
      {/* Heading */}
      <div className="text-[#F6E1CE] text-center font-semibold font-lexend text-3xl sm:text-4xl">
        <h4>Download Our Free Assertiveness Guide</h4>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-[1230px] mx-auto items-center">
        
        {/* Left Section */}
        <div className="w-auto sm:w-[30%] lg:w-1/2 flex justify-center">
          <img
            src={img}
            alt="Assertiveness Guide"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 text-white">
          <form className="space-y-5">

            {/* First & Last Name */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <label className="block mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full bg-transparent border border-white px-3 py-2 rounded outline-none"
                />
              </div>

              <div className="w-full">
                <label className="block mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full bg-transparent border border-white px-3 py-2 rounded outline-none"
                />
              </div>
            </div>

{/* Email and Phone-Section */}

 <div className="flex flex-col sm:flex-row gap-4">

  {/* Email */}
  <div className="w-full">
    <label className="block mb-1">
      Email <span className="text-red-500">*</span>
    </label>
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full bg-transparent border border-white px-3 py-2 rounded outline-none text-white"
    />
  </div>

  {/* Phone */}
  <div className="w-full ">
    <label className="block mb-1 px-2">
      Phone <span className="text-red-500">*</span>
    </label>

    <div className=" px-2 py-1 flex items-center ">
      <PhoneInput
        defaultCountry="in"
        value={phone}
        onChange={setPhone}
        className=" border- border-white text-white  rounded"
       inputClassName="bg-transparent outline-none w-[260px] px-2 py-2 text-white placeholder:text-gray-300"
      />
    </div>
  </div>

</div>

  {/* Company & Job Title */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <label className="block mb-1">
                  Company <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Company name"
                  className="w-full bg-transparent border border-white px-3 py-2 rounded outline-none"
                />
              </div>

              <div className="w-full">
                <label className="block mb-1">
                 Job Title  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Job Title "
                  className="w-full bg-transparent border border-white px-3 py-2 rounded outline-none"
                />
              </div>
            </div>

            {/* Checkbox-section */}
         
 <label className="flex items-center gap-3 text-white cursor-pointer">
  <input
    type="checkbox"
    className="w-3 h-3 accent-white bg-transparent border border-white"
  />
  <span className="text-xs">
   	
I agree to receive occasional emails from Kapable. We respect your privacy and will never share your information.
  </span>
</label>



            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#636363] text-black font-semibold py-3 rounded hover:bg-gray-200 transition"
            >
              Download Free Guide
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
