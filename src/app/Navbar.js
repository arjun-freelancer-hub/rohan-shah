"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-12 py-6 bg-white shadow-sm fixed top-0 left-0 z-50">
      {/* Logo */}
      <Link href="/" className="font-bold text-lg md:text-2xl tracking-tight text-black">
        Rohan Shah
      </Link>

      {/* Desktop Menu - Appears inline in navbar */}
      <div className={`hidden md:flex items-center gap-8 text-base font-medium text-black transition-all duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
        <Link href="/" className="hover:text-orange-500 transition">HOME</Link>
        <Link href="#about" className="hover:text-orange-500 transition">ABOUT</Link>
        <Link href="#achievements" className="hover:text-orange-500 transition">ACHIEVEMENTS</Link>
        <Link href="#photos" className="hover:text-orange-500 transition">PHOTOS</Link>
        <Link href="#videos" className="hover:text-orange-500 transition">VIDEOS</Link>
        <Link href="#news" className="hover:text-orange-500 transition">NEWS & ARTICLES</Link>
        <Link href="#blog" className="hover:text-orange-500 transition">BLOG</Link>
        <Link href="#contact" className="hover:text-orange-500 transition">CONTACT</Link>
      </div>

      {/* Mobile Menu - Appears as dropdown */}
      <div className={`md:hidden fixed top-[72px] left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out z-50 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link href="/" className="w-full text-center py-2 text-base font-medium text-black hover:text-orange-500 transition">HOME</Link>
          <Link href="#about" className="w-full text-center py-2 text-base font-medium text-black hover:text-orange-500 transition">ABOUT</Link>
          <Link href="#achievements" className="w-full text-center py-2 text-base font-medium text-black hover:text-orange-500 transition">ACHIEVEMENTS</Link>
          <Link href="#photos" className="w-full text-center py-2 text-base font-medium text-black hover:text-orange-500 transition">PHOTOS</Link>
          <Link href="#videos" className="w-full text-center py-2 text-base font-medium text-black hover:text-orange-500 transition">VIDEOS</Link>
          <Link href="#news" className="w-full text-center py-2 text-base font-medium text-black hover:text-orange-500 transition">NEWS & ARTICLES</Link>
          <Link href="#blog" className="w-full text-center py-2 text-base font-medium text-black hover:text-orange-500 transition">BLOG</Link>
          <Link href="#contact" className="w-full text-center py-2 text-base font-medium text-black hover:text-orange-500 transition">CONTACT</Link>
        </div>
      </div>

      {/* Animated Hamburger Button - Visible on all screens */}
      <button
        className="cursor-pointer w-6 h-6 relative focus:outline-none flex items-center justify-center z-50"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-5">
          <span className={`absolute block w-6 h-0.5 bg-black rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''
            }`}></span>
          <span className={`absolute block w-6 h-0.5 bg-black rounded transition-all duration-300 ${open ? 'opacity-0' : 'translate-y-2'
            }`}></span>
          <span className={`absolute block w-6 h-0.5 bg-black rounded transition-all duration-300 ${open ? '-rotate-45 translate-y-2' : 'translate-y-4'
            }`}></span>
        </div>
      </button>
    </nav>
  );
} 