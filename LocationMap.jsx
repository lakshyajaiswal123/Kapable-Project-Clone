import React from "react";
import { MapPin } from "lucide-react";

export default function LocationMap() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Address */}
        <div className="flex items-center justify-center gap-3 mb-8 text-center">
          <MapPin className="text-[#B07A4A] w-5 h-5 flex-shrink-0" />
          <p className="text-xl sm:text-xl font-Inter">
            316/274 Westend Marg Saket, New Delhi, Delhi-110030
          </p>
        </div>

        {/* Map */}
        <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
          
          {/* Aspect ratio wrapper */}
          <div className="relative pb-[50%] sm:pb-[35%]">
            <iframe
              title="Kapable Location"
              src="https://www.google.com/maps?q=Kapable%20316/274%20Westend%20Marg%20Saket%20New%20Delhi&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}