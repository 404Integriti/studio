"use client";
import FocusClientCard from "./focusclientcard";

const features = [
  {
    icon: "/WordpressWhitelabel/why/one.svg",
    text: "We represent your agency with the highest level of professionalism—your clients will never know we’re behind the scenes.",
    title:"Full White Label Support",
    size:'54'
  },
  {
    icon: "WordpressWhitelabel/focus1.svg",
    text: "Skip the hiring process. We scale with your workload, providing senior-level developers as your projects grow.",
    title:"No Recruitment Hassles",
    size:'43'
  },
  {
    icon: "/WordpressWhitelabel/why/three.svg",
    text: "You stay in full control of the client relationship while we take care of the heavy lifting behind the scenes.",
    title:"Transparent Workflow",
    size:'48'
  },
  {
    icon: "/WordpressWhitelabel/why/four.svg",
    text: "You reduce your operational stress and free up time to focus on growth, sales and strategy.",
    title:"Profit-First Collaboration",
    size:'51'
  },
];

export default function FocusClientSection() {
  return (
    <section className="bg-[#ffede8]">
      <div className="w-full max-w-[1440px] min-[1441px]:mx-auto pt-[20px]">
        {/* Heading */}
        <div className="flex justify-center">
          <h3 className="text-[#333] mt-[15px] mb-[10px] leading-[30px] px-[10px] text-[28px] font-[700] text-center max-w-[600px] max-h-[60px] " style={{fontFamily:"var(--font-raleway)",}}>
          Focus on Your Clients, Let Us Handle the Shopify Work
        </h3>
        </div>

        {/* Cards */}
        <div className="py-[40px] pl-[30px] min-[479px]:pl-[0px] grid grid-cols-1 min-[479px]:grid-cols-2 gap-[14px]">
          {features.map((item, index) => (
            <div key={index} className="flex justify-start min-[479px]:justify-center">
              <FocusClientCard key={index} icon={item.icon} title={item.title} text={item.text} size={item.size} />
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
