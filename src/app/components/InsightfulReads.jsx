'use client'
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const insightfulReads = [
  {
    image: "/rohan3.png",
    title: "You Are Stronger Than You Think!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    button: "Read More",
  },
  {
    image: "/rohan2.png",
    title: "Unlock Your True Potential",
    description:
      "Discover the secrets to unlocking your hidden strengths and achieving your goals.",
    button: "Read More",
  },
  {
    image: "/rohan6.png",
    title: "Mind Over Matter",
    description:
      "Master your mindset and overcome any challenge that comes your way.",
    button: "Read More",
  },
];

// Custom Arrow Components
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute top-1/2 right-2 -translate-y-1/2 z-30 bg-black text-white rounded-full p-3 shadow-lg hover:bg-gray-800 transition focus:outline-none"
      style={{ ...style }}
      onClick={onClick}
      aria-label="Next"
      type="button"
    >
      <FaChevronRight size={20} />
    </button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute top-1/2 left-2 -translate-y-1/2 z-30 bg-black text-white rounded-full p-3 shadow-lg hover:bg-gray-800 transition focus:outline-none"
      style={{ ...style }}
      onClick={onClick}
      aria-label="Previous"
      type="button"
    >
      <FaChevronLeft size={20} />
    </button>
  );
}

export default function InsightfulReads() {
  const [hovered, setHovered] = useState(1);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="w-full flex flex-col items-center py-16 px-4 md:px-16 bg-white">
      <h2 className="text-5xl md:text-7xl font-extrabold text-black mb-10 text-left w-full" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-1px' }}>
        Insightful <br /> Read
      </h2>
      <div className="w-full overflow-hidden relative py-6">
        <Slider {...settings} className="insightful-reads-slider">
          {insightfulReads.map((item, idx) => (
            <div key={idx} className="my-8">
              <div
                className={`transition-all duration-300 flex flex-col items-center bg-white rounded-3xl shadow-2xl mx-auto cursor-pointer border-4 border-gray-100 w-[370px] h-[420px] ${hovered === idx
                  ? "scale-105 z-20"
                  : "scale-100 z-10 opacity-60"
                  }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(1)}
                style={{ boxShadow: hovered === idx ? "0 8px 32px rgba(0,0,0,0.18)" : "", fontFamily: 'Poppins, sans-serif' }}
              >
                <div className="relative w-full h-48 rounded-t-3xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-3xl"
                  />
                </div>
                <div className="flex flex-col items-center px-6 py-4">
                  <h3 className="font-extrabold text-2xl md:text-3xl text-black text-center mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-base text-center mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {item.description}
                  </p>
                  <button className="bg-black text-white rounded-full px-8 py-2 text-base font-bold shadow hover:bg-gray-800 transition" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {item.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
} 