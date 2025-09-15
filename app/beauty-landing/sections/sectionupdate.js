"use client";

import Herobutton from "@/app/components/herobuttons/herobutton";
import Image from "next/image";
import { useState } from "react";

const SectionUpdate = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const accordionItems = [
    {
      id: 1,
      title: "Brand First Strategy",
      description:
        "We start with your identity, story and tone of voice then design around it. Because in beauty, brands are everything.",
      isActive: activeAccordion === 1,
    },
    {
      id: 2,
      title: "Visuals That Convert",
      description:
        "Scroll triggered animations, mood enhancing palettes and product focused layouts designed to engage and convert.",
      isActive: activeAccordion === 2,
    },
    {
      id: 3,
      title: "Performance Meets Elegance",
      description:
        "Your site won't just look great. It’ll load fast, perform flawlessly and feel effortless to navigate.",
      isActive: activeAccordion === 3,
    },
    {
      id: 4,
      title: "Built for Loyalty",
      description:
        "We weave in touchpoints for email collection, reviews, subscriptions and other moments that turn shoppers into lifelong customers.",
      isActive: activeAccordion === 4,
    },
  ];

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section className="bg-white pt-[30px] pb-[60px] h-auto leading-[30px]">
      <div className="max-w-[1200px] mx-auto leading-[20px] ">
        {/* Main Heading */}
        <h2
          className="lg:text-start md:text-center text-center md:text-[36px] text-[28px] max-w-[590px] h-[84px] text-[#333]  md:leading-[42px] leading-[42px] font-[600]  mx-autp lg:mx-0 sm:mx-auto  mb-[50px] mt-[20px]"
          style={{
            fontFamily: "var(--font-raleway)",
          }}
        >
          Designed to Reflect Your Brand DNA
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center leading-[20px] ">
          {/* Left Side - Accordion */}
          <div className="space-y-4 lg:px-[0px] px-[20px]  ">
            {accordionItems.map((item) => (
              <div
                key={item.id}
                className="rounded-[15px]  flex flex-col justify-center  min-h-[80px] max-w-[590px] lg:mx-0 md:mx-auto mx-auto shadow-[0_2px_20px_12px_#effefb] leading-[70px] transition-all duration-300 ease-in-out mb-[23px] "
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full  text-left cursor-pointer  flex flex-row-reverse items-center justify-end transition-all duration-300 ease-in-out"
                >
                  <span
                    className={`sm:text-[22px] text-[20px]  text-[#333] sm:leading-[70px] font-[700] leading-[30px] transition-all duration-300 ease-in-out`}
                    style={{
                      fontFamily: "var(--font-raleway)",
                    }}
                  >
                    {item.title}
                  </span>
                  <span
                    className="text-[22px] text-[#333]  ml-[20px] mr-[25px] transition-all duration-300 ease-in-out font-[800] "
                    style={{
                      fontSize: item.isActive ? "22px" : "40px",
                      fontWeight: item.isActive ? "800" : "400",
                      lineHeight: item.isActive ? "70px" : "normal",
                    }}
                  >
                    {item.isActive ? "—" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    item.isActive ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.description && (
                    <div className="px-6 pb-4 ">
                      <p
                        className="faq-answer-text pl-[45px] mb-[30px] pl-[45px] text-[16px] leading-[20px] text-[#333] mb-[30px] transition-all duration-300 ease-in-out"
                        style={{
                          fontFamily: "var(--font-opensans)",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="flex lg:justify-start md:justify-center justify-center col-span-full">
              <Herobutton
                btnpadfirst="raleway customBrandBtn"
                btnpadsec="hidden"
                buttonwidth="230px"
                buttonheight="50px"
                firstButtonText="Design My Experience"
                secondButtonText="Meet Our Team"
                firstButtonlink="/contact-us"
                secondButtonlink="#meetourteam"
              />
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex  flex-col justify-center items-center pr-[20px] pb-[30px] md:hidden lg:flex  ">
            {/* Laptop with rocket illustration */}
            <div className=" h-full flex items-center  lg:justify-start justify-center ">
              <Image
                src="/update.png"
                width={459}
                height={297}
                alt="Laptop with rocket illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionUpdate;
