import { WebflowMaintProCard } from "@/app/components/WebflowMaintProCard";
const maintenanceSupport = [
  {
    icon: "/new/crm.svg",
    title: "CMS Cleanup & Structure Reviews",
    description: "We audit your content regularly to ensure everything is organized, searchable and functioning properly. ",
  },
  {
    icon: "/new/updated.svg",
    title: "Form & Interaction Updates",
    description: "We update key interactive features to ensure they’re working smoothly across devices.",
  },
  {
    icon: "/new/tick.svg",
    title: "Accessibility Checks",
    description: "We review and improve accessibility to ensure your site meets WCAG standards. ",
  },
  {
    icon: "/new/checkout.svg",
    title: "Quality Testing",
    description: "Every change undergoes rigorous QA to maintain design integrity and functionality.",
  },
];

const ProactiveMaintenanceSection = () => {
  return (
    <section className="bg-[#f8f8f8] sm:pt-[40px] pb-[80px] w-full">
        <div className=" bg-[#f8f8f8] px-[40px] max-w-[1440px] mx-auto">

     <h2 className="xs:text-[32px] text-[32px] font-[600] leading-[36px] text-center text-[#333333] raleway mt-[20px] mb-[10px]">Proactive Maintenance That Delivers</h2>

      <div className="pt-[40px] mx-auto flex flex-wrap centerpt-[40px] min-[767px]:w-[636px] min-[991px]:w-[972px] min-[1280px]:w-[1230px] gap-[36px] min-[1280px]:gap-[10px] min-[1440px]:gap-[36px] min-[1440px]:w-[1308px] min-[1920px]:w-[1353px] min-[1920px]:gap-[51px]">
        {maintenanceSupport.map((feature, index) => (
         <WebflowMaintProCard key={index} data={feature}/>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ProactiveMaintenanceSection;











