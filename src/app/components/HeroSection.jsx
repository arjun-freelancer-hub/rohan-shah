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
      <div className="z-10 flex-1 flex flex-col justify-center px-6 md:px-16 py-12 md:py-0 text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-1px' }}>
          I AM <br />
          <span className="text-white">Rohan Shah</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium text-white mb-8 max-w-md" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-3 rounded-lg shadow-orange transition-all duration-200 w-fit cursor-pointer" style={{ fontFamily: 'Poppins, sans-serif', boxShadow: '0 4px 20px 0 rgba(255, 87, 34, 0.3)' }}>
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default HeroSection; 