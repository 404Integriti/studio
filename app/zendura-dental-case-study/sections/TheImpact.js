import ImpactCard from "@/app/components/skincare/ImpactCard";
import Image from "next/image";

// components/ImpactSection.jsx
export default function Impact() {
  const impacts = [
    {
      title: "Cost Efficiency",
      description:
        "Avoided need for Shopify Plus by building custom features within existing plan.",
      bgColor: "bg-[#cceae7]",
      image:'/cost.png'
    },
    {
      title: "Improved UX",
      description:
        "Customers experienced faster, more transparent checkout with automatic discounts.",
      bgColor: "bg-[#fadbd1]",
      image:'/improved.png'
    },
    {
      title: "Operational Streamlining",
      description:
        "Reduced manual tasks and improved system reliability with ERP automation.",
      bgColor: "bg-[#cceae7]",
      image:'/cost.png'
    },
  ];

  return (
    <section className="px-6 md:px-0 my-6 lg:my-2 text-[#333333]">
      <h2 className="md:text-[36px] lg:text-[40px] text-center pb-[14px] text-[26px] raleway font-[600] mb-[20px] min-w-[1429]:text-[40px]">
        The Impact
      </h2>

      <div className="flex justify-center flex-wrap mx-auto  space-y-10 ">
        {impacts.map((impact, i) => (
          <ImpactCard key={i} impact={impact} heading={"!px-20 !min-h-[100px]"} para={"lg:!px-[30px]"}/>
        ))} 
      </div>
    </section>
  );
}
