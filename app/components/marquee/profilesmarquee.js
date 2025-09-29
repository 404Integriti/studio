
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function  Profilesmarquee({ images = [], speed = 30, gap = 40 }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let start = 0;

    function animate() {
      start += 1;
      if (start >= track.scrollWidth ) {
        start = 0;
      }
      track.style.transform = `translateX(-${start}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images, ...images];


  return (
    <div className="overflow-hidden w-full mt-[60px] pt-[40px] pb-[40px]">
      <div
        className="flex whitespace-nowrap justify-center items-center "
        ref={trackRef}
        style={{
          gap: `${gap}px`,
          willChange: "transform",
        }}
      >
        {duplicatedImages.map((src, idx) => (
          <div key={idx} className="flex-shrink-0"
            style={{
                maxWidth: "258px",
                width: "100%",
                height: "258px",
              }}>
          <Image
              src={src}
              alt={`marquee-img-${idx}`}
              width={258}
              height={258}
           
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
