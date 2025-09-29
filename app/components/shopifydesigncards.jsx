"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
export default function ShopifyDesignCards({ cards }) {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active-card");
          } else {
            entry.target.classList.remove("active-card");
          }
        });
      },
      {
        threshold: 0.6, 
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="cards-wrapper shopify-cards-wrapper ">
      {cards.map((card, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className=" card shopify-card sm:!max-h-[180px] z-20 !bg-white hover:!bg-[#FFF3E0] transition-all duration-300"
          style={{ transform: `rotate(${card.rotate})` }}
        >
          <div className="w-[100%] max-w-[100%]">
            <h3
              className="text-[#333] font-[600] md:text-[24px] text-[20px] leading-[30px] mt-[20px] mb-[10px]"
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              {card.title}
            </h3>
            <p className="text-[#070707] text-left font-[400] md:text-[14px] text-[16px] leading-[27px]"
              style={{ fontFamily: "var(--font-raleway)" }}
              >
              {card.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
