"use client";

import { PiOrangeBold } from "react-icons/pi";
import { OpenmojiCaliforniaFlag } from "../components/OpenmojiCaliforniaFlag"; // Adjust path if needed

export default function Areas() {
  const cities = [
    'Irvine',
    'Newport Beach',
    'Costa Mesa',
    'Santa Ana',
    'Tustin',
    'Laguna Hills',
    'Lake Forest',
    'Anaheim',
    'Huntington Beach',
    'Fullerton',
  ];

  return (
    <section
      id="areas"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-6 md:gap-8 mb-6">
          <PiOrangeBold
            className="w-10 h-10 md:w-12 md:h-12 text-orange-600 flex-shrink-0 
              drop-shadow-[0_0_20px_rgba(251,146,60,0.6)] 
              animate-pulse-slow"
          />

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center animate-fade-in-up whitespace-nowrap">
            Areas We Serve in Orange County
          </h2>

          <PiOrangeBold
            className="w-10 h-10 md:w-12 md:h-12 text-orange-600 flex-shrink-0 
              drop-shadow-[0_0_20px_rgba(251,146,60,0.6)] 
              animate-pulse-slow"
          />
        </div>

        <p className="text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto animate-fade-in">
          Suarez Cleaning Services proudly offers commercial cleaning and janitorial services across Orange County, CA, including:
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {cities.map((city, index) => (
            <span
              key={index}
              className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full font-medium hover:bg-cyan-500 hover:text-white hover:scale-110 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
              style={{
                animationDelay: `${index * 0.05}s`,
                animation: "fadeInUp 0.5s ease-out forwards",
              }}
            >
              {city}
            </span>
          ))}
        </div>

        <p className="text-gray-600 text-center animate-fade-in">
          We also serve surrounding cities in Southern California.
        </p>

        {/* California Flag */}
        <div className="flex justify-center mt-4 animate-fade-in-up">
          <OpenmojiCaliforniaFlag className="w-40 h-40" />
        </div>
      </div>
    </section>
  );
}
