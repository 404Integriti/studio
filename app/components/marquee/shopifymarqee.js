"use client";

import { useEffect, useRef } from "react";

export default function ShopifyDevMarquee({ images = [], speed = 30, gap = 40 }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let pos = 0;

    function animate() {
      pos -= 1; // move left each frame
      if (Math.abs(pos) >= track.scrollWidth / 2) {
        pos = 0; // reset seamlessly at half length
      }
      track.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  // 🔑 duplicate twice to fill space
  const duplicatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden w-full bg-[#3a3a3a] py-7">
      <div
        className="flex whitespace-nowrap"
        ref={trackRef}
        style={{
          gap: `${gap}px`,
          willChange: "transform",
        }}
      >
        {duplicatedImages.map((text, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 text-white text-[14px] font-[500]"
            style={{
              fontFamily: "var(--font-raleway)",
              whiteSpace: "nowrap",
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
