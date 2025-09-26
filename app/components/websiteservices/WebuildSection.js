"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StackedCards from "./StackedCards";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    icon: "/transparent.svg",
    title: "Transparent Process",
    text: "Agencies trust us to deliver on their behalf, seamlessly extending your team while keeping your brand front and center.",
    rotate: "-7deg"
},
  {
    icon: "/sec.svg",
    title: "Flexible Engagement",
    text: "Whether you need help with a single project or want a long-term partner, we shape our engagement model around your needs.",
    rotate: "7deg"
  },
  {
    icon: "/third.svg",
    title: "Senior-Level Talent",
    text: "Your project is always handled by experienced, senior developers—no juniors, no outsourcing, just skilled professionals doing real work.",
    rotate: "0deg"
},
  {
    icon: "/forth.svg",
    title: "Results That Scale",
    text: "From small businesses to enterprise brands, we’ve helped clients grow from a few sales a month to thousands—and we know how to do it again.",
    rotate: "0deg"
},
];

export default function WebuildSection() {
  return (
    <section className="relative bg-[#f8f8f8]">
      <div className="max-w-[1440px] lg:pt-[150px] md:pt-[80px] pt-[60px] px-[20px] mx-auto flex lg:flex-row flex-col items-start md:pb-[0px] pb-[60px]">
        
        {/* Left side */}
<div className="w-full lg:max-w-[50%] max-w-[100%] lg:pl-[40px] flex flex-col items-center relative lg:min-h-[1846px] lg:mb-[0] mb-[30px]">

          <div className="w-full max-w-[506px]  sticky top-[140px]">
            <h2
              className="pr-[20px] lg:text-[36px] text-[30px] font-[600] leading-[42px] lg:mt-[20px] mt-[10px] mb-[10px] text-[#333]"
              style={{ fontFamily: "raleway" }}
            >
              Not Just Websites—We Build Long-Term Partnerships
            </h2>
            <p
              className="w-full max-w-[472px] text-[16px] mb-[10px] text-[#333]"
              style={{ fontFamily: "var(--font-opensansq)" }}
            >
              We don’t believe in one size fit-all solutions. We believe in
              building partnerships that last. Our team aligns with yours. Your
              time zone, your goals and your vision. Whether you’re working with
              us for a single project or building an entire ecosystem of digital
              products, we’re here to grow with you.
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:max-w-[38%] mx-auto max-w-[100%] relative lg:mt-[0px] mt-[50px]">
            <div className={`wrapper`}> {/* gives enough scroll space */}
                <StackedCards cards={cardData} />
              </div>
        </div>
      </div>
    </section>
  );
}
