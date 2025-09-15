"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ScrollFeatures = () => {
  const containerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const features = [
    {
      icon: "/crm.png",
      title: "CRM & ERP, Your Way",
      description: "CRM, ERP, and third-party tools seamlessly integrated and tailored to your unique business workflow."
    },
    {
      icon: "/crm2.svg",
      title: "Backend Essentials",
      description: "Payment gateways, shipping platforms, and inventory systems integrated for smooth operations."
    },
    {
      icon: "/crm3.svg",
      title: "Marketing Tool Integration",
      description: "Powerful marketing tools like Klaviyo, Meta, and Google Ads seamlessly integrated to drive traffic and boost sales."
    },
    {
      icon: "/crm4.svg",
      title: "Boost with One Click",
      description: "One-click post-purchase upsells and advanced loyalty systems to increase customer retention and maximize revenue."
    },
    {
      icon: "/crm5.svg",
      title: "Real-Time Insights",
      description: "Advanced analytics and reporting tools for real-time, data-driven business insights and smarter decision-making."
    },

  ];

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable carousel on mobile

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 20; // Much more sensitive - only 20px scroll needed
      
      if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down - show next slide
          setScrollDirection("down");
          setCurrentSlide(prev => Math.min(prev + 1, features.length - 4)); // Stop at 4th to last slide
        } else {
          // Scrolling up - show previous slide
          setScrollDirection("up");
          setCurrentSlide(prev => Math.max(prev - 1, 0)); // Move only 1 slide back
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, features.length, isMobile]);

  // Mobile view - show all slides in a grid
  if (isMobile) {
    return (
      <section className="bg-white py-[60px] overflow-hidden" ref={containerRef}>
        <div className="w-full mx-auto px-6">
   

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="w-[100%] max-w-[390px] min-h-[255px] bg-[#effefb] rounded-[1.2rem] border-[.0625rem] border-[#83838329] p-6"
              >
                <div className="text-center mb-4">
                  <div className=" mb-3"><Image src={feature.icon} width={46} height={44} alt="" /></div>
                </div>
                <h3 
                  className="text-[24px] font-[600] text-[#1d1d1f] tracking-[-.025em]"
                  style={{
                    fontFamily: "var(--font-raleway)"
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-[14px] text-[#333] leading-[21px] leading-[1.1] opacity-[0.75]"
                  style={{
                    fontFamily: "var(--font-raleway)"
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop view - show 3 slides with carousel
  return (
    <section className="bg-white py-[0px] overflow-hidden" ref={containerRef}>
      <div className="w-full mx-auto px-6">
  

        {/* Four Slides Container */}
        <div className="relative h-[400px] flex items-center justify-center">
          {features.map((feature, index) => (
            <div
              key={index}        
              className={`absolute w-[100%] xxl:max-w-[390px] max-w-[336px] min-h-[255px] bg-[#effefb] rounded-[1.2rem] border-[.0625rem] border-[#83838329] p-6 transition-all duration-700 ease-in-out ${
                index >= currentSlide && index < currentSlide + 4
                  ? "opacity-100 translate-x-0 scale-100 z-10"
                  : index < currentSlide
                    ? "opacity-0 -translate-x-full scale-95 z-0"
                    : "opacity-0 translate-x-full scale-95 z-0"
              }`}
              style={{
                left: `${(index - currentSlide) * 25}%`,
                transform: `translateX(0) ${
                  index >= currentSlide && index < currentSlide + 4
                    ? "translateX(0)"
                    : index < currentSlide
                      ? "translateX(-100%)"
                      : "translateX(100%)"
                }`
              }}
            >
              <div className="text-center mb-4">
                <div className="mb-3"><Image src={feature.icon} width={46} height={44} alt="" /></div>
              </div>
              <h3 
                className="text-[24px] font-[600] text-[#1d1d1f] tracking-[-.025em] "
                style={{
                  fontFamily: "var(--font-raleway)"
                }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-[14px] text-[#333] leading-[21px] leading-[1.1] opacity-[0.75]"
                style={{
                  fontFamily: "var(--font-Opensans)"
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

{/* 
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: features.length - 3 }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentSlide 
                  ? "bg-[#009688] scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>


        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Scroll {scrollDirection === "up" ? "up" : "down"} to see more features</p>
        </div>
         */}
      </div>
    </section>
  );
};

export default ScrollFeatures;
