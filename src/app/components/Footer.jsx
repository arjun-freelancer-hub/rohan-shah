import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-200 pt-24 pb-8 px-4 md:px-0 mt-auto overflow-hidden" style={{
      borderTopLeftRadius: "100% 50%",
      borderTopRightRadius: "100% 50%"
    }}>
      {/* Curved SVG at the top */}
      <div className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none" style={{ height: '80px' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,80 C480,0 960,160 1440,80 L1440,0 L0,0 Z" fill="#f3f4f6" />
        </svg>
      </div>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-1px' }}>Subscribe to my Newsletter</h2>
        <form className="flex flex-col md:flex-row justify-center items-center gap-2 mb-12">
          <input
            type="email"
            placeholder="Enter your email address"
            className="border border-gray-400 rounded px-4 py-2 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg font-medium"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto font-bold text-lg"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Subscribe Now
          </button>
        </form>
        {/* Footer main sections */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 text-left md:text-left">
          <div className="mb-6 md:mb-0 min-w-[120px]">
            <h3 className="text-4xl font-extrabold leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>Rohan<br />Shah</h3>
          </div>
          <div className="mb-6 md:mb-0 min-w-[160px]">
            <h4 className="font-bold text-xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Follow me</h4>
            <div className="flex gap-4 text-2xl">
              <a href="#" aria-label="Facebook" className="hover:text-blue-600"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-500"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="YouTube" className="hover:text-red-600"><i className="fab fa-youtube"></i></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-800"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="mb-6 md:mb-0 min-w-[160px]">
            <h4 className="font-bold text-xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Quick links</h4>
            <ul className="text-left text-base space-y-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <li><a href="/" className="hover:underline">HOME</a></li>
              <li><a href="/about" className="hover:underline">ABOUT</a></li>
              <li><a href="#" className="hover:underline">ACHIEVEMENTS</a></li>
              <li><a href="#" className="hover:underline">PHOTOS</a></li>
              <li><a href="#" className="hover:underline">VIDEOS</a></li>
              <li><a href="#" className="hover:underline">NEWS & ARTICLES</a></li>
              <li><a href="#" className="hover:underline">BLOG</a></li>
              <li><a href="#" className="hover:underline">CONTACT</a></li>
            </ul>
          </div>
          <div className="min-w-[160px]">
            <h4 className="font-bold text-xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Legal</h4>
            <ul className="text-left text-base space-y-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <li><a href="#" className="hover:underline">Terms and conditions</a></li>
              <li><a href="#" className="hover:underline">privacy policies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 