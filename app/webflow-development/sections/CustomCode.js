'use client';

import WebflowCCICard from "@/app/components/WebflowCCICard";

const cardsData = [
  {
    title: "Custom Motion Design",
    description:
      "Custom animations and interactions beyond native Webflow—crafted for engaging user experiences, brand storytelling, and enhanced site dynamics.",
    image: "/WebflowCCI/first.svg",
  },
  {
    title: "Powerful Integrations",
    description:
      "Third-party integrations including CRMs, analytics, marketing tools and more—seamlessly connected for efficient workflows and data-driven decisions.",
    image: "/WebflowCCI/second.svg",
  },
  {
    title: "Advanced SEO",
    description:
      "Advanced SEO optimization and performance enhancements tailored for Webflow sites—ensuring faster load times, higher rankings and better user engagement across all devices.",
    image: "/WebflowCCI/third.svg",
  },
  {
    title: "Embed What You Need",
    description:
      "Embed custom code for advanced functionality like sliders, forms, calculators, interactive elements and dynamic user experiences—all tailored to your specific needs.",
    image: "/WebflowCCI/fourth.svg",
  },
  {
    title: "Full-Stack Webflow",
    description:
      "Full-stack Webflow builds with custom JavaScript, APIs, and advanced functionality—delivering dynamic, high-performance and scalable websites tailored to your needs.",
    image: "/WebflowCCI/fifth.svg",
  },
];

const WebflowCCISection = () => {
  return (
    <section className="bg-white pt-[10px] min-[479px]:pt-[40px] w-full">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="raleway mt-[30px] mb-[60px] text-[30px] min-[991]:text-[36px] font-[600] text-center">
        Custom Code & Integrations
      </h1>
      <div className="w-full mx-auto"  >
         <div className="px-[20px] min-[767px]:px-[40px]">
        <div  style={{
    marginLeft: "clamp(0px, calc((100vw - 1360px) / 80 * 40), 40px)",
    marginRight: "clamp(0px, calc((100vw - 1360px) / 80 * 40), 40px)",
  }}>
          <div className="w-full pb-[70px]">
            <div className=" relative">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="sticky transition-all duration-300 w-full"
            style={{
              top: `${100 + index * 50}px`,
              zIndex: cardsData.length + index,
              marginBottom: "40px",
            }}
          >
           <WebflowCCICard
    {...card}
    tiltDirection={index % 2 === 0 ? "-rotate-5" : "rotate-5"}
    alwaysTilt={index === cardsData.length - 1}
  />
          </div>
        ))}
      </div>
          </div>
        </div>
      </div>
      </div>
     
      </div>
    </section>
  );
};

export default WebflowCCISection;
