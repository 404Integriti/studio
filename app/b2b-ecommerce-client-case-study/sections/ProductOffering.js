"use client";

import Image from "next/image";
import { useState } from "react";

const ProductOffering = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const accordionItems = [
    {
      id: 1,
      title: "Real-Time SAP Pricing Sync",
      description: "We enabled real-time synchronization between SAP and Shopify, ensuring each customer received accurate pricing instantly at checkout.",
      isActive: activeAccordion === 1
    },
    {
      id: 2,
      title: "Enhanced Checkout Process",
      description: "With faster pricing updates and customized checkout fields, customers experienced a smoother and more intuitive buying journey. ",
      isActive: activeAccordion === 2
    },
    {
      id: 3,
      title: "Advanced Data Security",
      description: "Session-based authentication ensured the secure exchange of pricing and customer data across platforms.",
      isActive: activeAccordion === 3
    },
    {
      id: 4,
      title: "Seamless User Experience",
      description: "Both B2B and guest users benefited from dynamic pricing updates without needing to log in, ensuring wide accessibility.",
      isActive: activeAccordion === 4
    }
  ];

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section className="bg-white pt-[45px] px-[20px] pb-[65px] md:px-[40px] lg:px-0">
      <div className="w-full max-w-[1200px] mx-auto  ">
        {/* Main Heading */}
        <h2 
          className=" mb-10 md:text-[36px] text-[#333333] text-[24px] md:leading-[42px] leading-[30px] font-[600]  mt-[50px]  lg:text-left text-center"
          style={{
                 fontFamily: "var(--font-raleway)"
          }}
        >
                Product Offerings
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Accordion */}
          <div className="max-w-[590px] mx-auto space-y-4 lg:px-[0px] px-[20px]">
            {accordionItems.map((item) => (
              <div key={item.id} className="rounded-[15px] cursor-pointer   shadow-[0_2px_20px_12px_#effefb] transition-all duration-300 ease-in-out mb-[23px] ms-[-5px]">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left flex flex-row-reverse items-center justify-end transition-all duration-300 ease-in-out"
                >
                  <span 
                    className="md:text-[22px] text-[18px] font-[700] text-[#333] md:leading-[78px] leading-[30px] h-[80px] transition-all duration-300 ease-in-out"
                    style={{
                       fontFamily: "var(--font-raleway)"
                    }}
                  >
                    {item.title}
                  </span>
                  <span 
                    className="text-[40px] text-[#333] mx-[25px] transition-all duration-300 ease-in-out"
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
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    item.isActive ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.description && (
                    <div className="px-6 pb-4">
                      <p 
                        className="faq-answer-text   pl-[45px] text-[16px] text-[#333] mb-[30px] transition-all duration-300 ease-in-out"
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
          <div className="hidden  lg:flex justify-end">
          
              {/* Laptop with rocket illustration */}
              <div className="w-[80%] max-w-[610px] !mr-[80px] h-auto flex items-center  justify-center ">
            <Image 
              src="/MobileLogoB2b.png"
              width={459}
              height={297}
              alt="Laptop with rocket illustration"
              className=" "
            />
              </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOffering;
