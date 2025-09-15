import { useEffect, useRef } from "react";
import Image from "next/image";
export default function StackedCards({ cards }) {
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
    <div className="cards-wrapper">
      {cards.map((card, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="card"
          style={{ transform: `rotate(${card.rotate})` }}
        >
          <div className="w-[100%] max-w-[335px] mx-auto">
            {card.icon && (
              <Image
                src={card.icon}
                alt={card.title}
                width={68}
                height={68}
                className="w-[60px] h-[60px] mb-4"
              />
            )}
            <h3
              className="text-[#f6f6f6] font-[600] md:text-[24px] text-[20px] leading-[30px] mt-[10px]"
              style={{ fontFamily: "raleway" }}
            >
              {card.title}
            </h3>
            <p className="text-[#e7e7e7] text-left font-[400] md:text-[17px] text-[16px] leading-[27px]">
              {card.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
