import ImpactCard from "@/app/components/skincare/ImpactCard";

export default function Impact() {
const impacts = [
  {
    title: "Entry",
    description: "Successful launch in the UAE with a fully localized eCommerce presence.",
    bgColor: "bg-[#cceae7]",
    image: '/cost.png',
    headingClass: "text-[32px] font-[600] mb-[-15px] text-[#333] leading-[36px]", 
    paraClass: "text-[16px] leading-[22px] font-[400] text-[#666] px-[20px]" 
  },
  {
    title: "Sales Growth",
    description: "Optimized product pages and smooth checkout boosted conversion rates significantly.",
    bgColor: "bg-[#fadbd1]",
    image: '/improved.png',
    headingClass: "text-[32px] font-[600] mb-[-15px] text-[#333] leading-[36px]", 
    paraClass: "text-[16px] leading-[22px] font-[400] text-[#666] px-[20px]" 
  },
  {
    title: "Engagement",
    description: " Enhanced UI/UX drove longer sessions and increased customer interaction.",
    bgColor: "bg-[#cceae7]",
    image: '/cost.png',
    headingClass: "text-[32px] font-[600] mb-[-15px] text-[#333] leading-[36px]",
    paraClass: "text-[16px] leading-[22px] font-[400] text-[#666] px-[20px]"
  },
];
  return (
    <section className="px-6 md:px-0 my-6 lg:my-2 leading-[20px] text-[#333333]">
      <h2 className="md:text-[40px] leading-[36px] text-center text-[26px] raleway font-[600] mt-[20px] pb-[20px] mb-[20px]">
        The Impact
      </h2>

      <div className="flex justify-center flex-wrap mx-auto space-y-10">
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