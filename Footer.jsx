import React from "react";
import logo from "../src/assets/mobile-logo.png"
import {
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer >
      <div className="animated-line"></div>
    <div className="bg-[#1F1F1F] text-white px-6 py-16 ">
      <div className="max-w-7xl mx-auto">

        {/* Top Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-sm">

          {/* Company */}
          <div>
            <h4 className="mb-4 font-Inter text-[#F2D6B3] text-lg">Company</h4>
            <ul className="space-y-3 text-white/70 ">
              <li className=" hover:text-white hover:cursor-pointer font-Inter">About Us</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Contact Us</li>
            </ul>
          </div>

          {/* Pillars */}
          <div>
            <h4 className=" mb-4 font-Inter text-[#F2D6B3] text-lg">Pillars</h4>
            <ul className="space-y-3 text-white/70">
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Thinkable</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Speakable</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Workable</li>
            </ul>
          </div>

          {/* Blogs */}
          <div>
            <h4 className=" mb-4 font-Inter text-[#F2D6B3] text-lg">Blogs</h4>
            <ul className="space-y-3 text-white/70">
              <li>Leadership</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Communication Skills</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Public Speaking</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Self-Confidence</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Persuasion</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Presentation Skills</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Negotiation Skills</li>
            </ul>
          </div>

          {/* Program Comparison */}
          <div>
            <h4 className=" mb-4 font-Inter text-[#F2D6B3] text-lg">Program Comparison</h4>
            <ul className="space-y-3 text-white/70">
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Kappable VS Harvard</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Kappable VS ISB</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Kappable VS INSEAD</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Kappable VS Dale Carnegie</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Kappable VS CCL</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Kappable VS Franklin Covey</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Kappable VS MDX Dubai</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Kappable VS PWC</li>
            </ul>
          </div>

          {/* Learn More On */}
          <div>
            <h4 className="mb-4 font-Inter text-[#F2D6B3] text-lg">Learn More On</h4>
            <ul className="space-y-3 text-white/70">
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Leadership Development</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Leadership & Management Courses</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Senior Leadership</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Entrepreneurial Leadership</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Executive Leadership</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Corporate Leadership</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Effective Communication</li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h4 className=" mb-4">&nbsp;</h4>
            <ul className="space-y-3 text-white/70">
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Powerful Storytelling</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Presentation Skills</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Social Emotional Learning</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Public Speaking</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Idea Generation</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Spontaneous Thinking</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Delegation</li>
              <li className=" hover:text-white hover:cursor-pointer font-Inter">Women Leadership</li>
            </ul>
          </div>
        </div>

        <div className="w-full flex items-center gap-6 sm:gap-10 py-10">
      
      {/* Left Line */}
      <div className="flex-1 h-px bg-white/30" />

      {/* Social Icons */}
      <div className="flex items-center gap-6 text-[#F2D6B3]">
        <Linkedin size={24} />
        <Instagram size={24} />
        <Facebook size={24} />
        <Youtube size={24} />
      </div>

      {/* Right Line */}
      <div className="flex-1 h-px bg-white/30" />
    </div>

          {/* Logo */}
<div className="flex justify-center items-center">
  <img
    src={logo}
    alt="Kapable Logo"
    className="w-40 object-contain"
  />
</div>

        

        {/* Bottom Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-white/60">
          <span className="font-Inter">Privacy Policy</span>
          <span className="font-Inter">Terms & Conditions</span>
          <span className="font-Inter">Refund Policy</span>
          <span className="font-Inter">Cookie Policy</span>
          <span className="font-Inter">Copyright Policy</span>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-center text-xs text-white/50 font-Inter">
          Kapable by Skillup Enterprise Private Limited
        </p>

      </div>
    </div>
    </footer>
  );
}