import React from "react";
import ShopifyWhitelabelCard from "./card";
export default function ShopifyWhitelabelServices() {
  const Data = [
    {
      src: "/WordpressWhitelabel/custom.svg",
      alt: "DNA Image",
      width: 83,
      height: 83,
      heading: " Custom eCommerce <br /> Store Development",
      description:
        "We build bespoke Shopify stores tailored to your client’s brand, audience, and growth goals.",
    },
    {
      src: "/WordpressWhitelabel/redesign.svg",
      alt: "DNA Image",
      width: 83,
      height: 83,
      heading: "Shopify <br /> Redesign",
      description:
        "Outdated stores get a full facelift—modern UI, conversion-first UX, and seamless mobile experiences.",
    },
    {
      src: "/WordpressWhitelabel/enterprise.svg",
      alt: "DNA Image",
      width: 83,
      height: 83,
      heading: "Shopify Plus & <br /> Enterprise",
      description:
        "For high-growth brands and enterprise clients, we deliver powerful customizations and integrations at scale.",
    },
    {
      src: "/WordpressWhitelabel/integration.svg",
      alt: "DNA Image",
      width: 83,
      height: 83,
      heading: "Shopify App <br /> Integration",
      description:
        "From payment gateways to inventory tools. We integrate the right apps to enhance store functionality.",
    },
    {
      src: "/WordpressWhitelabel/optimization.svg",
      alt: "DNA Image",
      width: 83,
      height: 83,
      heading: "Maintenance & <br /> Optimization",
      description:
        "Post launch we handle security, performance tuning, backups and ongoing improvements. This to keep stores running quite smoothly.",
    },
  ];

  return (
    <section>
      <div className="max-w-[1400px] px-[20px] mx-auto">
        <h3
          className="text-center mb-[10px] mt-[60px] font-[700] text-[28px] text-[#333] leading-[30px] min-[990px]:w-[50%] min-[1440px]:w-[40%] mx-auto"
          style={{ fontFamily: "var(--font-raleway)" }}
        >
          Our White Label Shopify Design and Development Services
        </h3>

        <div className="mt-[150px] grid grid-cols-1 min-[767px]:grid-cols-2 min-[990px]:grid-cols-3 gap-x-[70px] gap-y-[150px] px-[10px] min-[479px]:px-[0px] min-[767px]:px-[30px]">
          {Data.map((card, index) => {
            const isLast = index === Data.length - 1;
            const isSecondLast = index === Data.length - 2;

            // Default cards
            if (!isLast && !isSecondLast) {
              return (
                <div key={index} className="flex justify-center">
                  <ShopifyWhitelabelCard
                    {...card}
                    className="!max-w-[385px] !min-w-[173px]"
                    headingStyle="!text-[19px] sm:!text-[22px] !font-[600] mt-[20px] mb-[10px] text-center leading-[26px]"                  />
                </div>
              );
            }

            // Handle last two
            if (isSecondLast) {
              return (
                <React.Fragment key="last-two-wrapper">
                  {/* Mobile (<767px): show both normally */}
                  <div className="flex justify-center min-[990px]:hidden">
                    <ShopifyWhitelabelCard
                      headingStyle="!text-[19px] sm:!text-[22px] !font-[600] mt-[20px] mb-[10px] text-center leading-[26px]"
                      {...Data[Data.length - 2]}
                    />
                  </div>
                  <div className="flex justify-center min-[767px]:hidden">
                    <ShopifyWhitelabelCard
                      headingStyle="!text-[19px] sm:!text-[22px] !font-[600] mt-[20px] mb-[10px] text-center leading-[26px]"
                      {...Data[Data.length - 1]}
                    />
                  </div>

                  {/* Tablet (767–989px): last card centered */}
                  <div className="hidden min-[767px]:flex min-[990px]:hidden col-span-2 justify-center">
                    <ShopifyWhitelabelCard
                      headingStyle="!text-[19px] sm:!text-[22px] !font-[600] mt-[20px] mb-[10px] text-center leading-[26px]"
                      {...Data[Data.length - 1]}
                    />
                  </div>

                  {/* Desktop (≥990px): last two centered side by side */}
                  <div className="hidden min-[990px]:flex col-span-3 justify-center gap-[60px]">
                    {Data.slice(-2).map((lastCard, i) => (
                      <ShopifyWhitelabelCard
                        key={`desktop-last-${i}`}
                        headingStyle="!text-[19px] sm:!text-[22px] !font-[600] mt-[20px] mb-[10px] text-center leading-[26px]"
                        {...lastCard}
                      />
                    ))}
                  </div>
                </React.Fragment>
              );
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
}
