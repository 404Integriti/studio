'use client'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import ShopifyDesignCards from '@/app/components/shopifydesigncards';

gsap.registerPlugin(ScrollTrigger);

const shopifycardData = [
  { title: "100% Unique & Branded Themes", text: "We design every WordPress theme from the ground up—fully aligned with your brand identity, goals, and voice. Nothing pre-made, nothing generic.", rotate: "" },
  { title: "No Cookie-Cutter Templates", text: "Forget the off-the-shelf look. Every element is custom-crafted to stand out and speak directly to your audience—no reused layouts or duplicated code.", rotate: "" },
  { title: "Visual Storytelling Built In", text: "Each page is thoughtfully designed to guide users through your brand story, with intentional flow, engaging visuals, and meaningful content placement.", rotate: "" },
  { title: "High-Fidelity Mockups First", text: "Before we code, we design in detail. You'll review pixel-perfect mockups that reflect the final product—ensuring clarity and alignment from the start.", rotate: "" },
  { title: "Built for Scale & Speed", text: "Our themes aren’t just beautiful—they’re optimized for performance and future growth. From clean code to responsive layouts, every detail is scalable", rotate: "-4deg" },
];

export default function Customdesign() {
  const leftColRef = useRef(null);
  const cardsWrapperRef = useRef(null);

  useEffect(() => {
    if (!leftColRef.current || !cardsWrapperRef.current) return;

    // Set height of left column based on cards wrapper height
    const updateHeight = () => {
      leftColRef.current.style.minHeight = `${cardsWrapperRef.current.scrollHeight}px`;
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section className='relativev py-[40px] '>
      <div className='w-[100%] max-w-[1460px] mx-auto flex lg:flex-row flex-col items-start'>
        <div
          ref={leftColRef}
          className="w-[100%] max-w-[608px] pl-[40px] pr-[10px] flex flex-col items-center relative lg:mb-[0] mb-[30px]"
        >
          <div className="w-full max-w-[506px] sticky top-[140px]">
            <h2
              className='lg:text-[36px] text-[28px] font-[600] leading-[35px] mt-[20px] mb-[10px]'
              style={{ fontFamily: "var(--font-raleway)" }}
            >
              Custom Design for Shopify
            </h2>
          </div>
        </div>
        <div
          ref={cardsWrapperRef}
          className='w-[100%] max-w-[851px] lg:px-[2.5rem] px-[20px] relative lg:mt-[0px] mt-[50px]'
        >
          <div className={`wrapper`}>
            <ShopifyDesignCards cards={shopifycardData} />
          </div>
        </div>
      </div>
    </section>
  );
}
