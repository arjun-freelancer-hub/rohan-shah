'use client'
import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between h-[500px] md:min-h-[800px] w-full overflow-hidden"
      style={{
        borderBottomLeftRadius: "100% 50%",
        borderBottomRightRadius: "100% 50%",
        backgroundImage: "url('/hero-section1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative"
      }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Text Content */}
      <div className="z-10 flex-1 flex flex-col justify-center px-6 md:px-16 py-12 md:py-0">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          I AM <br />
          <span className="text-white">Rohan Shah</span>
        </h1>
        <p className="text-lg md:text-xl text-white mb-6 max-w-md">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded shadow w-fit cursor-pointer">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default HeroSection; 