import React, { useState, useEffect } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function CTA({ onClose }) {
  const [phone, setPhone] = useState("");

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-3 sm:px-6">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="
          relative z-10 bg-white rounded-xl shadow-xl
          w-full max-w-[720px]
          max-h-[90vh] overflow-y-auto
          p-5 sm:p-8
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-semibold"
        >
          ✕
        </button>

        <h2 className="text-xl sm:text-2xl font-bold mb-6">
          Contact Us
        </h2>

        <form className="space-y-5 text-black">

          {/* First & Last Name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label className="block mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter your first name"
                className="w-full border border-[#636363] bg-[#FAFAFA] px-3 py-2 rounded outline-none"
              />
            </div>

            <div className="w-full">
              <label className="block mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter your last name"
                className="w-full border border-[#636363] bg-[#FAFAFA] px-3 py-2 rounded outline-none"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col sm:flex-row gap-4">
            
            {/* Email */}
            <div className="w-full">
              <label className="block mb-1">
                Email ID <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full border border-[#636363] bg-[#FAFAFA] px-3 py-2 rounded outline-none"
              />
            </div>

            {/* Phone */}
            <div className="w-full">
              <label className="block mb-1">
                Phone <span className="text-red-500">*</span>
              </label>

              <PhoneInput
                defaultCountry="in"
                value={phone}
                onChange={setPhone}
                className="w-full border border-[#636363] bg-[#FAFAFA] rounded"
                inputClassName="
                  w-full bg-transparent outline-none
                  px-3 py-2
                "
              />
            </div>
          </div>

          {/* Company */}
          <div className="w-full">
            <label className="block mb-1">
              Current Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter your company name"
              className="w-full border border-[#636363] bg-[#FAFAFA] px-3 py-2 rounded outline-none"
            />
          </div>

          {/* Job Title & City */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label className="block mb-1">
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter your job title"
                className="w-full border border-[#636363] bg-[#FAFAFA] px-3 py-2 rounded outline-none"
              />
            </div>

            <div className="w-full">
              <label className="block mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter your city"
                className="w-full border border-[#636363] bg-[#FAFAFA] px-3 py-2 rounded outline-none"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="
                w-full sm:w-[120px]
                bg-[#A16D48] text-white font-semibold
                py-3 rounded-md
                hover:bg-[#8d5e3d] transition
              "
            >
              Next
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
