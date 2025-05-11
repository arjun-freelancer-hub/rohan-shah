'use client'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const proudMoments = [
  { src: "/rohan3.png", alt: "Proud Moment 1" },
  { src: "/rohan2.png", alt: "Proud Moment 2" },
  { src: "/rohan6.png", alt: "Proud Moment 3" },
];

export default function ProudMoments() {
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
        <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-4">
          Proud <br /> Moments
        </h2>
        <p className="text-base md:text-lg text-black/80 mb-2">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
        </p>
      </div>
      {/* Right Side - Carousel */}
      <div className="flex-1 w-full max-w-xl relative">
        {/* Gradient shadow left */}
        <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none" style={{background: "linear-gradient(to right, #fff 0%, #3b72bb22 100%)"}} />
        {/* Gradient shadow right */}
        <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none" style={{background: "linear-gradient(to left, #fff 0%, #3b72bb22 100%)"}} />
        <Slider {...settings} className="proud-moments-slider">
          {proudMoments.map((item, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-[#4176C6] rounded-2xl flex items-center justify-center h-64 md:h-72 shadow-xl transition-all duration-300">
                <Image src={item.src} alt={item.alt} width={300} height={300} className="object-contain rounded-xl" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
} 