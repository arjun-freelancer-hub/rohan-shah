'use client'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const proudMoments = [
  { src: "/proud-moment/510320b321809a1a0bbbb6861ffad090.jpg", alt: "Proud Moment 4" },
  { src: "/proud-moment/63ad27efb685207e37819a3105fc40ee.png", alt: "Proud Moment 5" },
  { src: "/proud-moment/81892e806b4389fc42aed41395bac626.png", alt: "Proud Moment 6" },
  { src: "/proud-moment/57ef95d508d0c048b73384bd28bb8942.png", alt: "Proud Moment 7" },
];

export default function ProudMoments() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-16 bg-white">
      {/* Left Side */}
      <div className="flex-1 flex flex-col items-start mb-8 md:mb-0 md:mr-12 max-w-md">
        <h2 className="text-5xl md:text-7xl font-extrabold text-black leading-tight mb-4" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-1px' }}>
          Proud <br /> Moments
        </h2>
        <p className="text-lg md:text-xl text-black/80 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
        </p>
      </div>
      {/* Right Side - Carousel */}
      <div className="flex-1 w-full max-w-xl relative">
        {/* Gradient shadow left */}
        <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #fff 0%, #3b72bb22 100%)" }} />
        {/* Gradient shadow right */}
        <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #fff 0%, #3b72bb22 100%)" }} />
        <Slider {...settings} className="proud-moments-slider">
          {proudMoments.map((item, idx) => (
            <div key={idx} className="px-4">
              <div
                className="bg-white rounded-3xl flex items-center justify-center h-64 md:h-72 shadow-xl border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden"
                onClick={() => {
                  setSelectedImage(item);
                  setModalOpen(true);
                }}
              >
                <Image src={item.src} alt={item.alt} width={300} height={300} className="object-contain rounded-xl max-h-60 max-w-full transition-transform duration-300" />
              </div>
            </div>
          ))}
        </Slider>
        {/* Modal Preview */}
        {modalOpen && selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          >
            <div
              className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-lg w-full flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl font-bold"
                onClick={() => setModalOpen(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={500}
                height={500}
                className="object-contain rounded-xl max-h-[70vh] max-w-full"
              />
              <div className="mt-2 text-center text-lg font-medium text-black">{selectedImage.alt}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 