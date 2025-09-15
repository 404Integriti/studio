'use client';
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Marquee({ images = [], speed = 30, gap = 40 }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let start = 0;

    function animate() {
      start += 1;
      if (start >= track.scrollWidth / 2) {
        start = 0;
      }
      track.style.transform = `translateX(-${start}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex whitespace-nowrap justify-center items-center h-[70px]"
        ref={trackRef}
        style={{
          gap: `${gap}px`,
          willChange: "transform",
        }}
      >
        {duplicatedImages.map((src, idx) => (
          <div key={idx} className="flex-shrink-0"
            style={{
                minWidth: "120px",
                maxWidth: "180px",
                width: "100%",
                height: "auto",
              }}>
          <Image
              src={src}
              alt={`marquee-img-${idx}`}
              width={150}
              height={150}
           
              style={{
                objectFit: "scale-down",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
