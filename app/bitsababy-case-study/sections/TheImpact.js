import ImpactCard from "@/app/components/skincare/ImpactCard";
import Image from "next/image";

// components/ImpactSection.jsx
export default function Impact() {
  const impacts = [
    {
      title: "User Engagement",
      description:" Sleek UI and smooth browsing led to longer sessions and repeat visits.",
      bgColor: "bg-[#cceae7]",
      image:'/cost.png'
    },
    {
      title: "Mobile  Reach",
      description:
        "Optimized design significantly increased visits and sales from mobile users.",
      bgColor: "bg-[#fadbd1]",
      image:'/improved.png'
    },
    {
      title: "Sales  Uplift",
      description:
        " A cleaner UX and better checkout process resulted in higher conversions.",
      bgColor: "bg-[#cceae7]",
      image:'/cost.png'
    },
  ];

  return (
    <section className="px-6 md:px-0 my-6 lg:mb-2  text-[#333333]">
      <h2 className="md:text-[36px] lg:[text-40px] text-center pb-[14px] lg:my-[100px] text-[26px] raleway font-[600] mb-[20px]">
        The Impact
      </h2>

      <div className="flex justify-center flex-wrap mx-auto  space-y-10 ">
        {impacts.map((impact, i) => (
          <ImpactCard key={i} impact={impact} heading={" !min-h-[100px]"} para={"lg:!px-[30px]"}/>
        ))} 
      </div>
    </section>
  );
}
