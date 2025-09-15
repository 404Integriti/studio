import ImpactCard from "@/app/components/skincare/ImpactCard";
import Image from "next/image";

// components/ImpactSection.jsx
export default function Impact() {
  const impacts = [
    {
      title: "Conversion",
      description:
        "Faster navigation and a clean checkout experience resulted in higher sales.",
      bgColor: "bg-[#cceae7]",
      image:'/cost.png'
    },
    {
      title: "User Engagement",
      description:
        "The engaging interface and improved layout led to a significant rise in user interactions.",
      bgColor: "bg-[#fadbd1]",
      image:'/improved.png'
    },
    {
      title: "Trust",
      description:
        "The refined, professional design elevated customer confidence and positioned the brand as a premium provider.",
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
         <ImpactCard key={i} impact={impact} />
        ))}
      </div>
    </section>
  );
}
