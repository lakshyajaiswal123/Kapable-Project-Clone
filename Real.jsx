import { useEffect, useState } from "react";

import img1 from "../src/assets/marquee-1.png";
import img2 from "../src/assets/marquee-2.png";
import img3 from "../src/assets/marquee-3.png";
import img4 from "../src/assets/marquee-4.webp";

const images = [img1, img2, img3, img4];

// clone last & first image for infinite effect
const extendedImages = [
  images[images.length - 1],
  ...images,
  images[0],
];

export default function Real() {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  /* ---------- AUTO SLIDE ---------- */
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [index]);

  /* ---------- SEAMLESS RESET ---------- */
  useEffect(() => {
    // reached fake last slide → jump to real first
    if (index === extendedImages.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 700);
    }

    // reached fake first slide → jump to real last
    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(extendedImages.length - 2);
      }, 700);
    }
  }, [index]);

  /* ---------- BUTTON HANDLERS ---------- */
  const nextSlide = () => {
    setTransition(true);
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setTransition(true);
    setIndex((prev) => prev - 1);
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center ">

      {/* LEFT SCREEN BUTTON */}
      <button
        onClick={prevSlide}
        className="mr-7 left-4 top-1/2 -translate-y-1/2 z-50
                   w-12 h-12 bg-black/70 hover:bg-black
                   text-white rounded-full flex items-center justify-center"
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* CAROUSEL */}
      <div className="w-full max-w-[900px] overflow-hidden rounded-xl">
        <div
          className={`flex ${
            transition ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {extendedImages.map((img, i) => (
            <div key={i} className="w-full flex-shrink-0">
              <img
                src={img}
                alt=""
                className="w-full h-[300px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SCREEN BUTTON */}
      <button
        onClick={nextSlide}
        className="ml-10 right-4 top-1/2 -translate-y-1/2 z-50
                   w-12 h-12 bg-black/70 hover:bg-black
                   text-white rounded-full flex items-center justify-center"
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

    </div>
  );
}
