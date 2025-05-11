"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-12 py-6 bg-white shadow-sm fixed top-0 left-0 z-20">
      {/* Logo */}
      <div className="font-bold text-lg md:text-2xl tracking-tight text-black">
        Rohan Shah
      </div>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex flex-col gap-1.5 focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-black rounded"></span>
        <span className="block w-6 h-0.5 bg-black rounded"></span>
        <span className="block w-6 h-0.5 bg-black rounded"></span>
      </button>
      {/* Nav links (hidden for now, can add later) */}
      {/* <div className="hidden md:flex gap-8 text-base font-medium text-black">
        <a href="#about" className="hover:text-orange-500 transition">About</a>
        <a href="#achievements" className="hover:text-orange-500 transition">Achievements</a>
        <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
      </div> */}
    </nav>
  );
} 