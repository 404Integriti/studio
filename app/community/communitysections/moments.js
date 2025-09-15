"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Moments() {
  const images = [
    { src: "/carousel1.jpg", alt: "Moment 1" },
    { src: "/carousel2.jpg", alt: "Moment 2" },
    { src: "/carousel3.jpg", alt: "Moment 3" },
    { src: "/carousel4.jpg", alt: "Moment 4" },
    { src: "/carousel5.jpg", alt: "Moment 5" },
    { src: "/carousel6.jpg", alt: "Moment 6" },
  ];

  return (
    <section className="w-[100%] moments max-w-[1440px] mx-auto lg:pt-[70px] md:pt-[40px] pt-[20px]">
      <h2
        className="text-center lg:text-[40px] md:text-[36px] text-[24px] text-[#333] font-[600] lg:mt-[20px] mt-[0px] mb-[20px] lg:pb-[20px] pb-[10px] leading-[36px]"
        style={{ fontFamily: "var(--font-raleway)" }}
      >
        Our Most Cherished Moments
      </h2>

      <p
        className="mt-[20px] lg:text-[18px] text-[16px] font-[400] text-[#333] w-[100%] lg:px-[0px] px-[15px] max-w-[710px] mx-auto text-center"
        style={{ fontFamily: "var(--hero-p-font-family)" }}
      >
        Some of our most joyful times are those spent with our communities.
        Laughing with children, planting seeds of hope and sharing moments that
        truly matter — these are the memories we carry with us.
      </p>

      {/* ✅ Image Carousel */}
      <div className="lg:pt-[40px] pt-[20px] pb-[40px] lg:mt-[30px] mt-[15px] xl:px-[0px] lg:px-[20px] px-[20px]">
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  loop={true}
    autoHeight={true}
  breakpoints={{
    320: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 1 },
  }}
  className="w-[100%] max-w-[1400px] xl:h-[550px] h-auto mx-auto"
>
  {images.map((img, index) => (
    <SwiperSlide key={index}>
      <div className="flex justify-center">
        <Image
          src={img.src}
          alt={img.alt}
          width={1440}
          height={550}
          className="object-cover object-center"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </section>
  );
}
