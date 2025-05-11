'use client'
import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import "../globals.css";
import { FaMedal } from "react-icons/fa";

const medals = [
  {
    bg: "bg-[#f83097]",
    title: "1 Gold Medal",
    event: "International Strength Lifting & Incline Bench press Championship, 2023",
    year: "2023",
    country: "Nepal"
  },
  {
    bg: "bg-[#6718e9]",
    title: "2 Bronze Medals",
    event: "9th World Strength Lifting & Incline Bench press Championship, 2022",
    year: "2022",
    country: "Kyrgyzstan"
  },
  {
    bg: "bg-[#d025ce]",
    title: "2 Gold Medals",
    event: "Global Power Alliance Power Lifting EUROASIA Championship, 2020",
    year: "2020",
    country: "Ukraine"
  },
  {
    bg: "bg-[#e97518]",
    title: "2 Bronze Medals",
    event: "8th World Strength Lifting & Incline Bench press Championship, 2020",
    year: "2020",
    country: "Thailand"
  }
];

function useMedalVisibility(containerRef, count) {
  const [scales, setScales] = useState(Array(count).fill(1));

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const children = Array.from(container.children);
      const containerRect = container.getBoundingClientRect();
      const newScales = children.map((child) => {
        const rect = child.getBoundingClientRect();
        // If medal is fully visible, scale 1; if partially, scale 0.85
        if (
          rect.left >= containerRect.left &&
          rect.right <= containerRect.right
        ) {
          return 1;
        } else if (
          rect.right > containerRect.left &&
          rect.left < containerRect.right
        ) {
          return 0.85;
        } else {
          return 0.7;
        }
      });
      setScales(newScales);
    };
    handleScroll();
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [containerRef, count]);

  return scales;
}

const MedalSection = () => {
  const containerRef = useRef(null);
  const scales = useMedalVisibility(containerRef, medals.length);

  return (
    <section className="w-full py-12">
      {/* <h2 className="text-2xl font-bold mb-6 text-center">Medals</h2> */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto justify-center gap-2 px-4 py-8 scrollbar-hide"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", cursor: "grab" }}
        onMouseDown={e => {
          const container = containerRef.current;
          let startX = e.pageX - container.offsetLeft;
          let scrollLeft = container.scrollLeft;
          let isDown = true;
          container.style.cursor = 'grabbing';

          const onMouseMove = (e) => {
            if (!isDown) return;
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 1.2; // scroll-fast
            container.scrollLeft = scrollLeft - walk;
          };
          const onMouseUp = () => {
            isDown = false;
            container.style.cursor = 'grab';
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
          };
          window.addEventListener('mousemove', onMouseMove);
          window.addEventListener('mouseup', onMouseUp);
        }}
        onTouchStart={e => {
          const container = containerRef.current;
          let startX = e.touches[0].pageX - container.offsetLeft;
          let scrollLeft = container.scrollLeft;

          const onTouchMove = (e) => {
            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = (x - startX) * 1.2;
            container.scrollLeft = scrollLeft - walk;
          };
          const onTouchEnd = () => {
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
          };
          window.addEventListener('touchmove', onTouchMove);
          window.addEventListener('touchend', onTouchEnd);
        }}
      >
        {medals.map((medal, idx) => (
          <div
            key={idx}
            className={clsx(
              `medal-box-shadow ${medal.bg} rounded-3xl flex flex-col items-start justify-start min-w-[300px] min-h-[250px] max-w-[300px] max-h-[320px] transition-transform duration-300 mx-2 p-6 relative overflow-hidden`,
              { "opacity-60": scales[idx] < 1 }
            )}
            style={{
              transform: `scale(${scales[idx]})`,
              scrollSnapAlign: "center",
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <div className="absolute bottom-6 right-6 opacity-30 select-none pointer-events-none" style={{ fontSize: '110px', color: '#fff' }}>
              <FaMedal style={{ color: '#fff', filter: 'drop-shadow(0 0 2px #e2a400)' }} />
            </div>
            <div className="z-10">
              <div className="font-extrabold text-white text-2xl mb-2" style={{ letterSpacing: '-0.5px' }}>{medal.title}</div>
              <div className="font-semibold text-white text-base mb-2 leading-snug">{medal.event}</div>
              <div className="font-bold text-white text-lg mb-1">{medal.year}</div>
              <div className="text-white text-base opacity-90">{medal.country}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MedalSection; 