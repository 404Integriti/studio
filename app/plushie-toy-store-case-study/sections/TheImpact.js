import ImpactCard from "@/app/components/skincare/ImpactCard";
import Image from "next/image";

// components/ImpactSection.jsx
export default function Impact() {
  const impacts = [
    {
      title: "Rapid  Deployment",
      description:
        "Successfully launched a full Shopify store in 7 days, meeting the urgent deadline.",
      bgColor: "bg-[#cceae7]",
      image:'/cost.png'
    },
    {
      title: "Customer Experience",
      description:
        "Enhanced navigation and real-time support led to a smoother shopping journey and better satisfaction.",
      bgColor: "bg-[#fadbd1]",
      image:'/improved.png'
    },
    {
      title: "Higher Engagement",
      description:
        "Increased traffic and a 30% drop in bounce rate contributed to stronger online sales performance.",
      bgColor: "bg-[#cceae7]",
      image:'/cost.png'
    },
  ];

  return (
    <section className="px-6 md:px-0 my-6 lg:my-2 text-[#333333]">
      <h2 className="md:text-[36px] lg:[text-40px] text-center pb-[14px] text-[26px] raleway font-[600] mb-[20px]">
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
