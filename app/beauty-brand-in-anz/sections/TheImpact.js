import ImpactCard from "@/app/components/skincare/ImpactCard";

export default function Impact() {

  const defaultHeadingClass = "text-[32px] font-[600] mt-[21px] mb-[10px] text-[#333] leading-[33px]";
  const defaultParaClass = "text-[14px] ]leading-[20px] pt-[10px] text-[#666] px-[20px] font-sans";

  const impacts = [
    {
      title: "Improved User Experience",
      description: "Both sites now deliver a faster, cleaner, and more enjoyable shopping experience.",
      bgColor: "bg-[#cceae7]",
      image: '/cost.png'
    },
    {
      title: "Higher Conversion Rates",
      description: "Optimized checkout flows and payment integration reduced drop-offs and increased purchase completions.",
      bgColor: "bg-[#fadbd1]",
      image: '/improved.png'
    },
    {
      title: "Stronger Regional Performance",
      description: "Localized enhancements helped this brand grow independently across AU and NZ markets.",
      bgColor: "bg-[#cceae7]",
      image: '/cost.png'
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
            heading={defaultHeadingClass} 
            para={defaultParaClass} 
          />
        ))}
      </div>
    </section>
  );
}