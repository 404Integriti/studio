import ImpactCard from "@/app/components/skincare/ImpactCard";
import Image from "next/image";

// components/ImpactSection.jsx
export default function Impact() {
  const impacts = [
    {
      title: "Brand  Revamp",
      description:
        " The new branding aligned perfectly with the target audience, building stronger recognition and loyalty.",
      bgColor: "bg-[#cceae7]",
      image:'/cost.png'
    },
    {
      title: "User Journey Upgrade",
      description:
        " Improved site flow and design led to longer sessions and more engagement.",
      bgColor: "bg-[#fadbd1]",
      image:'/improved.png'
    },
    {
      title: "Boost in  Conversions",
      description:
        "Better functionality and visual appeal directly contributed to a notable rise in sales.",
      bgColor: "bg-[#cceae7]",
      image:'/cost.png'
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
