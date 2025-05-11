'use client'
import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";
import "../globals.css";

const medals = [
  { name: "meddals" },
  { name: "meddals" },
  { name: "meddals" },
  { name: "meddals" },
  { name: "meddals" },
  { name: "meddals" },
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
        className="flex overflow-x-auto gap-4 px-4 py-8 scrollbar-hide"
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
              "medal-box-shadow bg-white rounded-3xl flex items-center justify-center min-w-[240px] min-h-[240px] max-w-[240px] max-h-[240px] transition-transform duration-300 mx-4",
              { "opacity-60": scales[idx] < 1 }
            )}
            style={{
              transform: `scale(${scales[idx]})`,
              scrollSnapAlign: "center",
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <span className="font-extrabold text-black text-3xl text-center" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.5px' }}> {medal.name} </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MedalSection; 