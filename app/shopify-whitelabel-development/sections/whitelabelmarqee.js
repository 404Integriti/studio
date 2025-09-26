'use client';
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function WhitelabelMarquee({ images = [], speed = 30, gap = 40 }) {
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

  // Duplicate for infinite loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden w-full ">
      <div
        className="flex   whitespace-nowrap justify-center items-center h-[70px]"
        ref={trackRef}
        style={{
          gap: `${gap}px`,
          willChange: "transform",
        }}
      >
        {duplicatedImages.map((image, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 flex items-center justify-center ${image.source == '/ShopifyWhitelabel/bitdefender.svg' ? 'border p-[22px]  border-[#9D9D9D] rounded-full' : ''}`}
            style={{
              width: `${image.width}px`,   // control width per image
              height: `${image.height}px`, // control height per image
            }}
          >
            <Image
              src={image.source}
              alt={`marquee-img-${idx}`}
              width={image.width}
              height={image.height}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
