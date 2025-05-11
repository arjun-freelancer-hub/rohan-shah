"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-12 py-6 bg-white shadow-sm fixed top-0 left-0 z-20">
      {/* Logo */}
      <Link href="/" className="font-bold text-lg md:text-2xl tracking-tight text-black">
        Rohan Shah
      </Link>

      {/* Desktop Menu - Appears inline in navbar */}
      <div className={`hidden md:flex gap-8 text-base font-medium text-black transition-all duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
        <a href="/" className="hover:text-orange-500 transition">HOME</a>
        <a href="#about" className="hover:text-orange-500 transition">ABOUT</a>
        <a href="#achievements" className="hover:text-orange-500 transition">ACHIEVEMENTS</a>
        <a href="#photos" className="hover:text-orange-500 transition">PHOTOS</a>
        <a href="#videos" className="hover:text-orange-500 transition">VIDEOS</a>
        <a href="#news" className="hover:text-orange-500 transition">NEWS & ARTICLES</a>
        <a href="#blog" className="hover:text-orange-500 transition">BLOG</a>
        <a href="#contact" className="hover:text-orange-500 transition">CONTACT</a>
      </div>

      {/* Mobile Menu - Appears as dropdown */}
      <div className={`md:hidden fixed top-[72px] left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <a href="/" className="text-base font-medium text-black hover:text-orange-500 transition">HOME</a>
          <a href="#about" className="text-base font-medium text-black hover:text-orange-500 transition">ABOUT</a>
          <a href="#achievements" className="text-base font-medium text-black hover:text-orange-500 transition">ACHIEVEMENTS</a>
          <a href="#photos" className="text-base font-medium text-black hover:text-orange-500 transition">PHOTOS</a>
          <a href="#videos" className="text-base font-medium text-black hover:text-orange-500 transition">VIDEOS</a>
          <a href="#news" className="text-base font-medium text-black hover:text-orange-500 transition">NEWS & ARTICLES</a>
          <a href="#blog" className="text-base font-medium text-black hover:text-orange-500 transition">BLOG</a>
          <a href="#contact" className="text-base font-medium text-black hover:text-orange-500 transition">CONTACT</a>
        </div>
      </div>

      {/* Animated Hamburger Button - Visible on all screens */}
      <button
        className="cursor-pointer w-6 h-6 relative focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span className={`absolute block w-6 h-0.5 bg-black rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2.5' : ''
          }`}></span>
        <span className={`absolute block w-6 h-0.5 bg-black rounded transition-all duration-300 ${open ? 'opacity-0' : 'translate-y-2.5'
          }`}></span>
        <span className={`absolute block w-6 h-0.5 bg-black rounded transition-all duration-300 ${open ? '-rotate-45 translate-y-2.5' : 'translate-y-5'
          }`}></span>
      </button>
    </nav>
  );
} 