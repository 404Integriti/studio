"use client";

import Image from "next/image";
import { useState } from "react";

const Customthemedesign = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const accordionItems = [
    {
      id: 1,
      title: "Perfect on Every Screen",
      description: "We ensure your site looks flawless on desktops, tablets and smartphones—with layouts that adapt seamlessly to every resolution and orientation.",
      isActive: activeAccordion === 1
    },
    {
      id: 2,
      title: "Tap-Friendly Interactions",
      description: "Every button, menu, and element is sized and spaced for mobile usability. No zooming, pinching, or frustration—just smooth, intuitive navigation.",
      isActive: activeAccordion === 2
    },
    {
      id: 3,
      title: "Fast Mobile Performance",
      description: "Speed matters more on mobile. We optimize images, code and load priorities to ensure your site loads in seconds—even on slower connections.",
      isActive: activeAccordion === 3
    },
    {
      id: 4,
      title: "Mobile-First User Focus",
      description: "We design with the mobile user in mind, prioritizing thumb-friendly layouts, clear CTAs and fast access to the most important content.",
      isActive: activeAccordion === 4
    }
  ];

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section className="bg-white pt-[30px] pb-[60px]">
      <div className="w-full max-w-[1200px] mx-auto ">
        {/* Main Heading */}
        <h2 
          className="text-left md:text-[36px] text-[24px] md:leading-[42px] leading-[30px] font-[600] mb-[43px] mt-[50px] lg:px-[0px] px-[20px]"
          style={{
                 fontFamily: "var(--font-raleway)"
          }}
        >
          Custom Theme Design
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          {/* Left Side - Accordion */}
          <div className="space-y-4 lg:px-[0px] px-[20px]">
            {accordionItems.map((item) => (
              <div key={item.id} className="rounded-[15px] shadow-[0_2px_20px_12px_#effefb] transition-all duration-700 ease mb-[23px]">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left flex flex-row-reverse items-center justify-end transition-all duration-700 ease"
                >
                  <span 
                    className="md:text-[22px] text-[18px] font-[700] text-[#333] md:leading-[78px] leading-[30px] h-[80px] transition-all duration-700 ease"
                    style={{
                       fontFamily: "var(--font-raleway)"
                    }}
                  >
                    {item.title}
                  </span>
                  <span 
                    className="text-[40px] text-[#333] mx-[25px] transition-all duration-700 ease"
                    style={{
                      fontSize: item.isActive ? "20px" : "40px",
                      fontWeight: item.isActive ? "800" : "400",
                      lineHeight: item.isActive ? "36px" : "normal"
                    }}
                  >
                    {item.isActive ? "—" : "+"}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-700 ease ${
                    item.isActive ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.description && (
                    <div className="px-6 pb-4">
                      <p 
                        className="faq-answer-text pl-[45px] mb-[30px] text-[16px] text-[#333]transition-all duration-700 ease"
                        style={{
                          fontFamily: "var(--font-opensans)"
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Illustration */}
          <div className="flex justify-center lg:absolute lg:top-15 lg:w-[48%] lg:right-0 ">
          
              {/* Laptop with rocket illustration */}
              <div className="w-full h-full flex items-center  justify-center">
            <Image 
              src="/Frame3.svg"
              width={471}
              height={366}
              alt="Laptop with rocket illustration"
            />
              </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customthemedesign;
