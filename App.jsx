import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home/Home.jsx";
import About from "./about-us/About.jsx";
import FocusAreas from "./FocusAreas";
import Footer from "./Footer.jsx";
import Contact from "./contact-us/Contact.jsx";
import FocusDetail from "./FocusDetail.jsx";

// import Real from './Real'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/home" element={<Home />}></Route>
         <Route path="/contact" element={<Contact/>}></Route>
        
           <Route path="/focus/:index" element={<FocusDetail />} />
      </Routes>


      <Footer/>

      {/* <Real/> */}
    </>
  );
}
