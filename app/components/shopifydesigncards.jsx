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
    <div className="cards-wrapper ">
      {cards.map((card, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className=" h-[180px] hover:bg-[#fff3e0] transition duration-300 shadow-[0_-12px_16px_-4px_#0000000d] rounded-[20px] border px-[20px]"
          style={{ transform: `rotate(${card.rotate})` }}
        >
          <div className="w-[100%] max-w-[100%]">
            <h3
              className="text-[#333] font-[600] md:text-[24px] text-[20px] leading-[30px] mt-[20px]"
              style={{ fontFamily: "raleway" }}
            >
              {card.title}
            </h3>
            <p className="text-[#070707] text-left font-[400] md:text-[17px] text-[16px] leading-[27px]">
              {card.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
