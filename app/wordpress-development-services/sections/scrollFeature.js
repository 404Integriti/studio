"use client";
import Herobutton from "@/app/components/herobuttons/herobutton";
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
      icon: "/crm2.svg",
      title: "Plugin & Theme Troubleshooting",
      description:
        "We dig into the issue, identify the root cause, and solve it—without band-aid fixes.",
    },
    {
      icon: "/crm.png",
      title: "Fast, Human-Powered Responses",
      description:
        "Get quick help from real developers who understand your stack and your timeline.",
    },
    {
      icon: "/crm3.svg",
      title: "Support That Scales",
      description:
        "Whether it's one site or a dozen, we tailor support plans to your volume and technical needs",
    },
    {
      icon: "/cursor.svg",
      title: "Proactive Site Health Monitoring",
      description:
        "We don’t just react—we monitor your site’s health regularly to catch issues before they cost you customers.",
    },
    {
      icon: "/crm5.svg",
      title: "Real-Time Insights",
      description:
        "Advanced analytics and reporting tools for real-time, data-driven business insights and smarter decision-making.",
    },
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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
          setCurrentSlide((prev) => Math.min(prev + 1, features.length - 4)); // Stop at 4th to last slide
        } else {
          // Scrolling up - show previous slide
          setScrollDirection("up");
          setCurrentSlide((prev) => Math.max(prev - 1, 0)); // Move only 1 slide back
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
      <section
        className="bg-white py-[60px] overflow-hidden"
        ref={containerRef}
      >
        <div className="w-full mx-auto px-6">
          <h1 className="text-center font-[600] py-[15px] text-[36px]">
            Wordpress Support
          </h1>

          <div className="grid grid-cols-1 gap-6 justify-items-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="w-[100%] sm:max-w-[80%] min-h-[200px] bg-[#effefb] rounded-[1.2rem] border-[.0625rem] border-[#83838329] p-6"
              >
                <div className="text-center mb-4">
                  <div className=" mb-3">
                    <Image src={feature.icon} width={46} height={44} alt="" />
                  </div>
                </div>
                <h3
                  className="text-[24px] font-[600] text-[#1d1d1f] tracking-[-.025em]"
                  style={{
                    fontFamily: "var(--font-raleway)",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[14px] text-[#333] leading-[21px]  opacity-[0.75]"
                  style={{
                    fontFamily: "var(--font-raleway)",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex py-[40px] justify-center ">
          <Herobutton
            btnpadfirst="hero-btn-dental !text-[18px] !max-w-[400px] !mt-[-30px] raleway !px-[32px] !py-[10px] !font-[400] flex"
            btnpadsec="hidden"
            buttonwidth=" sm:!280px"
            buttonheight="!18px"
            firstButtonText="Expolre Wordpress Support"
            secondButtonText=""
            firstButtonlink="/contact-us"
            secondButtonlink="/portfolio"
          />
        </div>
      </section>
    );
  }

  // Desktop view - show 3 slides with carousel
  return (
    <section className="bg-white py-[0px] overflow-hidden" ref={containerRef}>
      <div className="w-full mx-auto px-6">
        <h1 className="text-center font-[600] pt-[45px] text-[36px] text-[#333333]">
          Wordpress Support
        </h1>

        {/* Four Slides Container */}
        <div className="relative min-h-[350px]  flex items-center justify-center ">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`absolute  xxl:max-w-[390px] w-[24%] max-w-[336px] lg:min-h-[285px] xl:min-h-[255px]  rounded-[1.2rem] border-[.0625rem] border-[#83838329] p-6  transition-all duration-700 ease-in-out  ${
                index % 2 === 0 ? "bg-[#c7fff4]" : "bg-[#effefb]"
              } ${
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
                }`,
              }}
            >
              <div className="text-center mb-4">
                <div className="mb-3  h-[47px] w-[47px] ">
                  <Image
                    src={feature.icon}
                    width={feature.icon === "/cursor.svg" ? 30 : 46}
                    height={feature.icon === "/cursor.svg" ? 27 : 44}
                    alt=""
                    className=""
                  />
                </div>
              </div>
              <h3
                className="text-[20px] min-[1430px]:text-[24px] font-[600] text-[#1d1d1f] tracking-[-.025em]"
                style={{
                  fontFamily: "var(--font-raleway)",
                }}
              >
                {feature.title}
              </h3>
              <p
                className="text-[14px] text-[#333] leading-[21px]  opacity-[0.75]"
                style={{
                  fontFamily: "var(--font-Opensans)",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center ">
          <Herobutton
            btnpadfirst="hero-btn-dental !text-[18px] !max-w-[400px] !mt-[-30px] raleway !px-[32px] !py-[10px] !font-[400] flex"
            btnpadsec="hidden"
            buttonwidth=" sm:!280px"
            buttonheight="!18px"
            firstButtonText="Expolre Wordpress Support"
            secondButtonText=""
            firstButtonlink="/contact-us"
            secondButtonlink="/portfolio"
          />
        </div>
      </div>
    </section>
  );
};

export default ScrollFeatures;
