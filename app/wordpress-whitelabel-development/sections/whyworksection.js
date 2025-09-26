"use client";
import WhyWorkCard from "./whyworkcard";

const features = [
  {
    icon: "/wordpressWhitelabel/why/one.svg",
    text: "You can expand your service offering instantly without hiring or training in-house developers.",
    size:'54'
  },
  {
    icon: "/wordpressWhitelabel/why/two.svg",
    text: "Deadlines become easier to manage because we work on your timeline and adjust to your processes.",
    size:'60'
  },
  {
    icon: "/wordpressWhitelabel/why/three.svg",
    text: "You stay in full control of the client relationship while we take care of the heavy lifting behind the scenes.",
    size:'48'
  },
  {
    icon: "/wordpressWhitelabel/why/four.svg",
    text: "You reduce your operational stress and free up time to focus on growth, sales and strategy.",
    size:'51'
  },
];

export default function WhyWorkSection() {
  return (
    <section className="bg-[#f8f8f8] w-full">
      <div className="mx-auto max-w-[1440px]  pt-[30px] md:pt-[0px]">
        {/* Heading */}
        <div className="flex justify-center">
          <h3 className="text-[#333] mt-[15px] mb-[10px] leading-[30px] text-[22px] sm:text-[28px] font-[700] text-center " style={{fontFamily:"var(--font-raleway)",}}>
          Why Work With a White Label <br />
          <span>WordPress Development Agency?</span>
        </h3>
        </div>

        {/* Cards */}
        <div className="py-[40px] pl-[30px] min-[479px]:pl-[0px] grid grid-cols-1 min-[479px]:grid-cols-2 gap-[14px]">
          {features.map((item, index) => (
            <div key={index} className="flex min-[478px]:justify-center">
              <WhyWorkCard key={index} icon={item.icon} text={item.text} size={item.size} />
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
