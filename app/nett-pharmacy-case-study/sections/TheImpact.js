import ImpactCard from "@/app/components/skincare/ImpactCard";

export default function Impact() {
const impacts = [
  {
    title: "Complete SEO",
    description: "optimization implemented, including metadata, keywords, and alt text, to significantly improve search engine rankings and organic visibility.",
    bgColor: "bg-[#cceae7]",
    image: '/cost.png',
    headingClass: "text-[32px] font-[600] mb-[-15px] text-[#333] leading-[36px]", 
    paraClass: "text-[16px] leading-[22px] font-[400] text-[#666] px-[20px]" 
  },
  {
    title: "4000+",
    description: "4,000+ products optimized with clear, engaging descriptions to improve user experience, encourage conversions, and reduce bounce rates.",
    bgColor: "bg-[#fadbd1]",
    image: '/improved.png',
    headingClass: "text-[32px] font-[600] mb-[-15px] text-[#333] leading-[36px]", 
    paraClass: "text-[16px] leading-[22px] font-[400] text-[#666] px-[20px]" 
  },
  {
    title: "Custom app",
    description: "developed for real-time inventory sync based on location, ensuring accurate stock levels across multiple stores and regions.",
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