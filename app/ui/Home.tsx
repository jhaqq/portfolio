"use client";

import React from "react";

export default function Home() {
  return (
    <div
      id="#home"
      className="flex flex-col items-center w-full h-screen bg-gradient-to-b from-yellow-200 to-yellow-50 relative overflow-hidden"
    >
      {/* Large Semicircle */}
      <div className="absolute w-full h-[65vh] bg-yellow-300 rounded-b-full shadow-lg top-0 overflow-hidden">
        {/* Animated Dots */}
        <div className="absolute top-4 left-4 w-3 h-3 bg-yellow-400 rounded-full sm:w-4 sm:h-4 sm:top-10 sm:left-10 animate-bounce"></div>

        {/* Content Inside the Semicircle */}
        <div className="absolute h-full flex flex-col justify-center items-center w-full px-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gray-800 tracking-wide animate-fade-in">
            Hey! I'm Jacob.
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-center mb-4 sm:mb-10 text-gray-700 animate-fade-in">
            I'm a full stack developer who loves to build.
          </p>
          {/* <p className="font-bold text-md sm:text-lg lg:text-xl text-center w-11/12 sm:w-4/5 text-blue-500 animate-fade-in">
            Whether you have the next big idea or you're looking for that star developer for your team, look no further.
          </p> */}
          <button
            onClick={() => {
              const aboutSection = document.getElementById("about");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 hover:scale-105 transform transition duration-200"
          >
            <p className="text-xl text-white font-bold">
              Let's Build Something!
            </p>
          </button>
        </div>
      </div>

      {/* Subtle Scroll Prompt */}
      <div className="absolute bottom-30 sm:bottom-10 flex flex-col items-center">
        <p className="text-gray-500 text-sm sm:text-lg mb-1 sm:mb-2">
          Scroll to explore
        </p>
        <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}
