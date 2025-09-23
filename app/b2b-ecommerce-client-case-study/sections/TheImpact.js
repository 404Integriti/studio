import ImpactCard from "@/app/components/skincare/ImpactCard";

export default function Impact() {
const impacts = [
  {
      title: <>Pricing<br />Accuracy</>,
    description: "Achieved a 95% improvement in real-time pricing precision across all customer segments.",
    bgColor: "bg-[#cceae7]",
    image: '/cost.png',
    headingClass: "text-[32px] font-[600] mt-[21px] mb-[10px]  text-[#333] leading-[33px]", 
    paraClass: "text-[16px] leading-[22px] font-[400] text-[#575757] " 
  },
  {
    title: <>Performance<br />Boost</>,
    description: "Reduced update delays by 80%, ensuring faster and more reliable pricing during peak traffic.",
    bgColor: "bg-[#fadbd1]",
    image: '/improved.png',
    headingClass: "text-[32px] font-[600] mt-[21px] mb-[10px]  text-[#333] leading-[34px]", 
    paraClass: "text-[16px] leading-[22px] font-[400] text-[#575757] " 
  },
  {
    title: "Customer Satisfaction",
    description: "Streamlined checkout with accurate pricing significantly enhanced overall user experience and trust.",
    bgColor: "bg-[#cceae7]",
    image: '/cost.png',
    headingClass: "text-[32px] font-[600] mt-[21px] mb-[10px]  text-[#333] leading-[34px]",
    paraClass: "text-[16px] mb-[10px] leading-[20px] font-[400] text-[#575757] "
  },
];
  return (
    <section className="px-6 md:px-0 my-6 lg:my-2 leading-[20px] text-[#333333]">
      <h2 className="md:text-[40px] leading-[36px] text-center text-[26px] raleway font-[600] mt-[20px] pb-[20px] mb-[20px]">
        The Impact
      </h2>

      <div className="flex justify-center flex-wrap mx-auto space-y-10 ">
        {impacts.map((impact, i) => (
          <ImpactCard 
            key={i} 
            impact={impact} 
            heading={impact.headingClass} 
            para={impact.paraClass} 
          />
        ))}
      </div>
    </section>
  );
}