import { useState ,useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FocusAreas } from "./Focusdata";
import CTA from "./Home/CTA";

import logo from "../src/assets/logo.png";
import logo2 from "../src/assets/mobile-logo.png";
import img1 from "../src/assets/navbar-image1.png";
import img2 from "../src/assets/navbar-image2.png";
import img3 from "../src/assets/navbar-image3.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFocus, setOpenFocus] = useState(false);
  const [openPillars, setOpenPillars] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);

    const [open, setOpen] = useState(false);
      
  // useEffect(() => {
  //     document.body.style.overflow = "hidden";
  
  //    //scroll on close
  //     return () => {
  //       document.body.style.overflow = "auto";
  //     };
  //   }, []);


    // Focus-Areas-Right-section
    const skills = [
    "Public Speaking",
    "Personal Brand-Building",
    "Idea Generation",
    "Self Confidence",
    "Presentation Skills",
    "Spontaneous Thinking",
    "Persuasion",
    "Powerful Storytelling",
    "Interview Skills",
    "Personality Development",
    "Social Emotional Learning",
    "Management Skills",
    "Effective Communication",
    "Social Skills",
    "Delegation",
  ];

  // Resoures-Left_section and right-section-Hover
  const blogs = [
    [
      img1,
      "Top 10 Best Leadership Development Programs for Corporates & Management",
    ],
    [img2, "How To Overcome Fear Of Public Speaking"],
    [img3, "How To Improve Communication Skills In The Workplace"],
  ];

  const category = [
    ["Communication Skills"],
    ["Public Speaking"],
    ["Leadership"],
    ["Self Confidence"],
    ["Negotiation Skills"],
  ];

  return (


    <div className="fixed top-0 left-0 w-full h-[72px] bg-white shadow-md z-50 ">
                       
      <div className="max-w-[1287px] mx-auto h-full px-4 flex items-center gap-x-2">

            {/* Logo */}
        <img src={logo} alt="Logo" className="h-10 shrink-0" />     
          
        {/* Desktop Menu */}           
        <div className="hidden lg:flex flex-1 items-center justify-between ml-10">
                     
          <div className="flex items-center gap-8 font-inter text-sm xl:text-base">


                   {/* Linking-pages-section  */}       
            <NavLink
              to="/home" reloadDocument 
              className={({ isActive }) =>
                isActive ? "text-[#D2B48C]" : "text-black"
              }
            >
              Home      
            </NavLink>
                         
            <NavLink
              to="/about" reloadDocument 
              className={({ isActive }) =>
                isActive ? "text-[#D2B48C]" : "text-black"
              }
            >
                  About Us      
            </NavLink>
             
  
   {/*--------------------------- Focus Areas-Section------------------------------- */}
                     
            <div className="group cursor-pointer">           
              <div className="flex items-center gap-1">
                                         
            
              <a href="#">Focus Areas  </a>        
               
                             
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 1024 1024"
                  className="transition-transform duration-300 group-hover:rotate-180"
                >
                                 
                  <path d="M831.872 340.864L512 652.672L192.128 340.864c-11.776-11.776-30.976-11.776-42.752 0-11.776 11.776-11.776 30.976 0 42.752L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712c11.776-11.776 11.776-30.976 0-42.752-11.776-11.776-30.976-11.776-42.752 0z" />
                               
                </svg>
                           
              </div>
              

              {/*On-Hover-Dropdown-Section */}           
              <div
                className=" fixed left-1/2 top-[72px]
                              -translate-x-1/2
                              w-[1100px] max-w-[95vw]
                              bg-white rounded-b-xl shadow-xl
                              translate-y-4
                              opacity-0 invisible
                              group-hover:opacity-100
                              group-hover:visible
                              group-hover:translate-y-0
                              transition-all duration-500 ease-in-out
                              z-50"
              >
                <div className="flex rounded-b-xl overflow-hidden shadow-xl max-h-[320px] h-auto">
                  {/* LEFT-Section */}
                  <div className="w-1/3  bg-[#F6E1CE] p-5">
                    <p className="text-md text-[#636363] px-9">OUR PILLARS</p>

                  {FocusAreas.map((item, index) => (
                   
                   
                   <NavLink
                        key={item.id} reloadDocument
                        to={`/focus/${index}`}
                        className="block mt-4"
                      >
                        <div
                          className="px-4 py-2 rounded-md space-y-1
                           hover:bg-white transition max-w-70 mx-auto"
                        >
                          <p className="font-semibold text-xl">{item.pillar}</p>
                          <p className="text-xs text-[#636363] ">
                            {item.description}
                          </p>
                        </div>
                      </NavLink>
                    ))}
                  </div>

                  {/* ---------------------RIGHT-Section----------------------------------------- */}
             
    <div className="w-2/3 p-6">
      <p className="text-sm text-gray-500 mb-2">
        OUR SKILLS
      </p>

      <div className="h-px bg-gray-300 mb-4" />

      <ul className="grid grid-cols-3 gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="
              group flex justify-between items-center
              px-3 py-2 rounded-md
              text-sm
              hover:bg-[#f7f2ee] hover:text-[#b58e62]
              transition cursor-pointer
            "
          >
            <span>{skill}</span>
            <span className="opacity-0 group-hover:opacity-100 transition">
              →
            </span>
          </li>
        ))}
      </ul>
    </div>

 </div>
</div>
</div>
 
 {/*-------------------------- Focus Areas-Section-End-------------- */} 
                  
            

 {/*---------------------------- Resources-Section-Start--------------------------------- */}   
                 
            <div className="group cursor-pointer">
                        
              <div className="flex items-center gap-1">
               <span>Resources</span>             
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 1024 1024"
                  className="transition-transform duration-300 group-hover:rotate-180"
                >
                                 
                  <path d="M831.872 340.864L512 652.672L192.128 340.864c-11.776-11.776-30.976-11.776-42.752 0-11.776 11.776-11.776 30.976 0 42.752L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712c11.776-11.776 11.776-30.976 0-42.752-11.776-11.776-30.976-11.776-42.752 0z" />
                               
                </svg>       
              </div>


                          {/*On-Hover-Dropdown-Section */}           
              <div className="fixed left-1/2 top-[72px]
                              -translate-x-1/2
                              w-[1100px] max-w-[95vw]
                              bg-white rounded-xl shadow-xl
                              translate-y-4
                              opacity-0 invisible
                              group-hover:opacity-100
                              group-hover:visible
                              group-hover:translate-y-0
                              transition-all duration-500 ease-in-out
                              z-[50]"
                                    >
                             
                <div className="flex">


                                  {/* Left-section */}               
                  <div className="w-1/3 bg-[#F6E1CE] p-6 rounded-b-[10px]   space-y-4">
                                     
                     <p className="text-gray-500 px-2">DISCOVER</p>   
                               
                    {[
                      ["Blogs"],
                      ["Success Stories"],
                      ["Comparative"],
                      ["Glossary"],
                    ].map(([title]) => (
                      <div
                        key={title}
                        className="hover:bg-white p-2 rounded-md space-y-2"
                      >
                                             
                        <p className="font-semibold">{title}</p>               
                           
                      </div>
                    ))}                 
                  </div>


                                  {/* Right-section */}               
                  <div> 
                    {/* Main-div for both-section  */}
                    <div className="flex">
                                         
                      <div className="min-w-[400px] p-6">
                                          
                        <p className="text-md text-gray-500 mb-2">
                        FEATURED BLOGS                    
                        </p>
                               
                        {/* Line-section */}
                        <div className="h-px bg-gray-300 mb-4"></div>           
                                 
                        <ul className="space-y-3">              
                          {blogs.map(([img, title], index) => (
                          
                          <li
                              key={index}
                              className="flex items-center gap-3 px-3 py-2 rounded-md
                               hover:bg-[#f7f2ee] hover:text-[#b58e62]
                               transition cursor-pointer"
                            >
                                                         
                              <img
                                src={img}
                                alt={title}
                                className="w-12 h-12 object-cover"
                              />
                                                         
                              <span className="text-xs leading-snug">
                              {title}                           
                              </span>
                                                       
                            </li>
                          ))}                     
                        </ul>                   
                      </div>
                                          {/* By-Categories-section */}         
                               
                      <div className="min-w-[400px] p-6 ">
                                             
                        <p className="text-md text-gray-500 mb-2">
                           BY CATEGORIES                     
                        </p>
                            
                        {/* Line-section*/}
                        <div className="h-px bg-gray-300 mb-4"></div>           
                                 
                        <ul className="space-y-2">                     
                          {category.map(([title], index) => (
                            <li
                              key={index}
                              className=" group flex items-center gap-3 px-3 py-2 rounded-md
                            hover:bg-[#f7f2ee] hover:text-[#b58e62]
                               transition cursor-pointer"
                            >
                                                         
                              <span className="text-xs leading-snug">
                                   {title}                           
                              </span>
                                                 
                              <span className="opacity-0 group-hover:opacity-100 transition">
                                  →                            
                              </span>                        
                            </li>
                          ))}                     
                        </ul>                 
                      </div>
                                       
                    </div>
                                      {/*Lower-Video-Library-section */}             
                       
                    <div
                      className="max-w-[500px] mx-auto border border-[#b58e62]  rounded-3xl px-4 py-2 
                                flex justify-center items-center cursor-pointer bg-[#f7f2ee] transition mb-5"
                    >
                                         
                      <div className="text-center text-[#b58e62] text-sm">
                        View Our {""}                     
                        <span className="font-bold underline">
                          Video Librar
                        </span>                 
                        <span className="font-bold">y.</span>                   
                      </div>           
                    </div>   
                    
                                                
                  </div>         
                </div>        
              </div>        
            </div>
                      {/*------------ Resources-Section-End-------------- */}   


        <NavLink
              to="/contact" reloadDocument 
              className={({ isActive }) =>
                isActive ? "text-[#D2B48C]" : "text-black"
              }
            >
              Contact Us      
            </NavLink>      
             
          </div>
                          {/* CTA-Section */}        {/* Right Section */}     
           
          {/* <div className="flex items-center gap-4 ">
                     
            <a
              className="  hidden lg:flex
      items-center justify-center
      h-[42px] px-6 
      bg-[#D1855C] text-white
      rounded-sm
      hover:opacity-90
      transition
      animated-border"
            >
                          Begin Your Journey →          
            </a>
                     
          </div> */}

          {/* CTA-Button */}

          <>
            <button
              onClick={() => setOpen(true)}
              className=" hidden lg:flex inline-flex cursor-pointer items-center justify-center 
                                bg-[#C6925E] text-white font-lexend h-[42px] w-[220px] px-6
                                animated-border"
            >
              Begin Your Journey →
            </button>

            {/* {Modal} */}
            {open && <CTA onClose={() => setOpen(false)} />}
          </>
                   
        </div>



    {/* ------------Mobile-section-Responsiveness------------------- */}         
       
        {/* Mobile Toggle */}         
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden ml-auto"
        >
                      {isOpen ? "✕" : "☰"}         
        </button>
                   
      </div>
            {/* Mobile Menu */}     
      {isOpen && (
        <div className="lg:hidden fixed inset-0 w-3/4 h-screen bg-black p-6 z-[60]">
              
                <img src={logo2} className="h-10 mb-6" />     
              
          <div className="flex flex-col gap-4 text-white">
                    
              <NavLink
              to="/home" reloadDocument 
              className={({ isActive }) =>
                isActive ? "text-[#D2B48C]" : "text-white"
              }
            >
              Home      
            </NavLink> 
            
            <NavLink
              to="/about" reloadDocument 
              className={({ isActive }) =>
                isActive ? "text-[#D2B48C]" : "text-white"
              }
            >
           About Us      
            </NavLink>         
         
         
            {/* Focus-Area-Section */}
            <div
              onClick={() => setOpenFocus(!openFocus)}
              className="flex items-center justify-between cursor-pointer"
            >
                <span>Focus Areas</span> 
              <svg
                width="14"
                height="14"
                viewBox="0 0 1024 1024"
                className={`fill-white transition-transform duration-300 ${
                  openFocus ? "rotate-180" : ""
                }`}
              >
                   
                <path d="M831.872 340.864L512 652.672L192.128 340.864c-11.776-11.776-30.976-11.776-42.752 0-11.776 11.776-11.776 30.976 0 42.752L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712z" />
                 
              </svg>
            </div>
            {openFocus && (
              <div className="pl-4 space-y-2 mt-2 text-sm">
                <div
                  onClick={() => setOpenPillars(!openPillars)}
                  className="flex items-center justify-between cursor-pointer py-2 border-b "
                >
                    <span>Our Pillars</span> 
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 1024 1024"
                    className={`fill-white transition-transform duration-300 ${
                      openPillars ? "rotate-180" : ""
                    }`}
                  >
                       
                    <path d="M831.872 340.864L512 652.672L192.128 340.864z" /> 
                  </svg>
                </div>

                {/* FocusArea-section-Links */}

{openPillars && (
  <ul className="pl-1 text-sm font-semibold space-y-4">
    <NavLink
      to="/focus/0" reloadDocument
      onClick={() => setIsOpen(false)}
      className="block px-1 py-1 hover:text-[#D2B48C]"
    >
      Thinkable
    </NavLink>

    <NavLink
      to="/focus/1" reloadDocument
      onClick={() => setIsOpen(false)}
      className="block px-1 py-1 hover:text-[#D2B48C]"
    >
      Speakable
    </NavLink>

    <NavLink reloadDocument
      to="/focus/2"
      onClick={() => setIsOpen(false)}
      className="block px-1 py-1 hover:text-[#D2B48C]"
    >
      Workable
    </NavLink>
  </ul>
)}

                    {/* Our-Skills-Section */} 
                <div
                  onClick={() => setOpenSkills(!openSkills)}
                  className="flex items-center justify-between cursor-pointer py-2 border-b "
                >
                    <span>Our Skills</span> 
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 1024 1024"
                    className={`fill-white transition-transform duration-300 ${
                      openSkills ? "rotate-180" : ""
                    }`}
                  >
                       
                    <path d="M831.872 340.864L512 652.672L192.128 340.864z" /> 
                  </svg>
                </div>
                {openSkills && (
                  <ul className="pl-1 text-sm text-white space-y-4 font-semibold">
                        <li className="px-1 py-1">Public Speaking</li>   
                    <li className="px-1 py-1">Personal Brand-Building</li>   
                    <li className="px-1 py-1">Idea Generation</li>   
                    <li className="px-1 py-1"> Self Confidence</li>   
                    <li className="px-1 py-1">Presentation Skills</li>   
                    <li className="px-1 py-1">Spontaneous Thinking</li>   
                    <li className="px-1 py-1">Persuasion</li>   
                    <li className="px-1 py-1">Powerful Storytelling</li>   
                    <li className="px-1 py-1">Interview Skills</li>   
                    <li className="px-1 py-1">Personality Development</li>   
                    <li className="px-1 py-1">Social Emotional Learning</li>   
                    <li className="px-1 py-1">Management Skills</li>   
                    <li className="px-1 py-1">Effective Communication</li>   
                    <li className="px-1 py-1">Social Skills</li>   
                    <li className="px-1 py-1">Delegation</li> 
                  </ul>
                )}
                   
              </div>
            )}
          
          <NavLink
              to="/home" reloadDocument
              className={({ isActive }) =>
                isActive ? "text-[#D2B48C]" : "text-white"
              }
            >
              Resources      
            </NavLink> 
                     
             <NavLink
              to="/contact" reloadDocument
              className={({ isActive }) =>
                isActive ? "text-[#D2B48C]" : "text-white"
              }
            >
              Contact Us      
            </NavLink>      
             
           
                     
          </div>
                 
          
        </div>
      )}

           {/* CTA-Button-On-MObile   */}

        <div className="md:hidden fixed bottom-0 left-1/2
                              -translate-x-1/2 z-70 w-full">
         
            <button
             onClick={() => setOpen(true)}
            className="w-full animated-border text-white text-center py-2 h-[50px] rounded ">
                            Begin Your Journey →            
            </button>

                        {/* {Modal} */}
            {open && <CTA onClose={() => setOpen(false)} />}

            </div>
    </div>
  );
}
