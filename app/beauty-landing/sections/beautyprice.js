"use client";
import Image from "next/image";
import TickLogo from "../../../public/TickLogo.svg"
const BeautyPricing = () => {
  const packages = [
    {
      name: "Beauty Essentials",
      price: "999",
      color: "#ed8104",
      iconColor: "#007A6F",
      features: [
        "5 Pages – Home, About, Shop/Services, Product, Contact",
        "Custom Logo Design + Style Guide",
        "CMS Setup – Choose from Shopify, WordPress, or Webflow",
        "Beauty-Focused, Modern & Clean UI/UX",
        "Mobile Optimization (Responsive Design)",
        "Basic SEO Setup (meta tags, alt text, sitemap submission)",
        "1-Year Hosting (for WordPress sites)",
        "1-Month Post-Launch Support & Maintenance"
      ]
    },
    {
      name: "Glow Up",
      price: "1,999",
      color: "#ed8104",
      iconColor: "#007A6F",
      features: [
        "Includes Essentials, plus:",
        "Blog + Email Capture Integration",
        "Email Marketing Integration – Setup of basic email workflows (e.g. welcome series, abandoned cart)",
        "Live Chat Integration – Tidio or WhatsApp",
        "Tracking Setup – Google Analytics 4 (GA4) + Meta Pixel Integration",
        "3-Month Post-Launch Maintenance",
        "1-Year Hosting remains included for WordPress sites"
      ]
    }
  ];

  return (
    <section className="bg-white  lg:p-[60px] md:p-[30px] p-[20px]  pb-[0px]">
      <div className="w-full max-w-[1400px] mx-auto lg:px-[24px] px-[0px]  ">
        {/* Main Heading */}
        <h2
          className="text-center mb-16 text-[40px] leading-[36px] font-[600] mb-[40px] text-[#333] mt-[20px]"
          style={{
            fontFamily: "var(--font-raleway)",
          }}
        >
          Beauty Pricing
        </h2>

        {/* Pricing Cards */}
        <div className="flex gap-[20px] xl:flex-nowrap flex-wrap justify-center ">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="w-full max-w-[420px] sm:w-[420px] px-[17px] py-[40px] bg-[#fff] rounded-[12px] transition-all duration-500 ease-in-out shadow-[0_0_20px_8px_#0003] flex flex-col"
              style={{
                animation: "fadeInUp 0.5s ease-out",
              }}
            >
              {/* Plan Name */}
              <h3
                className="text-[24px] leading-[30px] mb-[-5px] text-center text-[#009688] font-[700]"
                style={{
                  fontFamily: "var(--font-raleway)",
                  transition: "all 0.5s ease-in-out",
                }}
              >
                {pkg.name}
              </h3>

              {/* Price */}
              <div className="flex justify-center items-center gap-[10px] py-[25px] mb-[15px]">
                <span
                  className={`${
                    pkg.price === "999"
                      ? "text-[42px] leading-[60px] font-[700]"
                      : "text-[50px] leading-[60px] font-[700]"
                  }`}
                  style={{
                    fontFamily: "var(--font-raleway)",
                    transition: "all 0.5s ease-in-out",
                    color: pkg.color,
                  }}
                >
                  ${pkg.price}
                </span>
                {index === 0 && (
                  <span
                    className="text-[22px] font-[700] text-[#7a7a7a] line-through ml-[-8px] mb-[-40px]"
                    style={{
                      fontFamily: "var(--font-raleway)",
                    }}
                  >
                    $1,500
                  </span>
                )}
                {index === 1 && (
                  <span
                    className="text-[22px] font-[700] text-[#7a7a7a] line-through ml-[-10px] mb-[-40px]"
                    style={{
                      fontFamily: "var(--font-raleway)",
                    }}
                  >
                    $2,400
                  </span>
                )}
              </div>

              {/* Features List */}
              <ul className="space-y-3 mt-[-12px]  flex-grow">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start mb-[20px]">
                    <span className="mr-[6px]  mt-2 flex-shrink-0 ">
  <Image 
    src={TickLogo} 
    alt="tick" 
    width={20} 
    height={12}
    className="w-[14px] h-[12px] justify-center overflow-clip text-[14px] leading-[20px]"
  />
</span>
                    <span
                      className="text-[15px] text-[#000] leading-[20px]"
                      style={{
                        fontFamily: "var(--font-raleway)",
                        transition: "all 0.5s ease-in-out",
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className="w-[90%] mx-auto bg-[#009688] px-[20px] rounded-[20px] py-[15px] lg:text-[21px] text-[14px] text-[#fff] font-[500] hover:bg-[#00776C] leading-[29px] cursor-pointer transition-all duration-500 ease-in-out shadow-[0_0_12px_5px_#0003]"
                style={{
                  fontFamily: "var(--font-raleway)",
                }}
              >
                Subscribe Now
              </button>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .grid > div {
            transition: all 0.5s ease-in-out;
          }
        `}</style>
      </div>
    </section>
  );
};

export default BeautyPricing;