'use client'
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function InsightfulReads() {
  const [hovered, setHovered] = useState(1);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-left w-full px-4">
        Insightful <br /> Read
      </h2>
      <div className="w-full overflow-hidden relative py-6">
        <Slider {...settings} className="insightful-reads-slider">
          {insightfulReads.map((item, idx) => (
            <div key={idx} className="px-1 my-8">
              <div
                className={`transition-all duration-300 flex flex-col items-center bg-[#F5F5F5] rounded-3xl shadow-xl mx-auto cursor-pointer ${
                  hovered === idx
                    ? "scale-x-105 z-20 w-[370px] h-[420px]"
                    : "scale-x-90 z-10 w-[270px] h-[420px] opacity-60"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(1)}
                style={{ boxShadow: hovered === idx ? "0 8px 32px rgba(0,0,0,0.18)" : "" }}
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
                  <h3 className="font-bold text-lg md:text-xl text-black text-center mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm text-center mb-4">
                    {item.description}
                  </p>
                  <button className="bg-black text-white rounded-full px-6 py-2 text-sm font-semibold shadow hover:bg-gray-800 transition">
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