import ServiceCard from "../../components/services/page";
const SkinCardsData = [
  {
    src: "/tokyoIcon_two.png",
    alt: "values",
    width: 83,
    height: 83,
    heading: "Custom Shopify Store Build",
    description:" We developed a tailored Shopify store supporting both wholesale and retail operations, integrating customized checkout flows and pricing structures.",
  blockheight: "191px",
    },
  {
    src: "/tokyoIcon_five.png",
    alt: "team",
    width: 83,
    height: 83,
    heading: "Complete Rebranding",
    description:
      " Our team redesigned the logo and visual identity to reflect a bold, street-inspired aesthetic, bringing consistency across all digital touchpoints.",
       blockheight: "191px",
  },
  {
    src: "/tokyoIcon_one.png",
    alt: "vision",
    width: 83,
    height: 83,
    heading: "Enhanced UX & Navigation",
    description:
      " We crafted a clean, modern design with intuitive navigation to reduce bounce rates and increase time-on-site.",
       blockheight: "191px",
  },
];


export default function SkinProcess() {
  return (
 <section className="CommunityService px-[20px] bg-[#f6f6f667] sm:px-[40px] lg:px-0 ">
   <div className="pt-[50px] w-[100%] max-w-[1440px]  mx-auto  pb-[60px] ">
    <h2 className="text-[24px] sm:text-[28px] md:text-[32px]  lg:text-[36px] text-center text-[#333] raleway font-[600]  sm:leading-[36px]  ">What we did in the Process</h2>
    <div className="flex  flex-wrap justify-center gap-x-[30px] gap-y-[125px] pt-[145px] ">
          {SkinCardsData.map((card, index) => (
            <ServiceCard key={index} {...card}  className={"customskinCard !w-[30%] !h-[280px] md:!h-[340px] min-md:!w-[320px] lg:!h-[230px] lg:!w-[30%]  "}
            headingStyle="text-[20px] md:text-[22px] lg:text-[24px] font-[600] text-center text-[#070707] raleway leading-[30px] mb-[10px] mt-[20px]" 
            desStyle="text-[16px]  w-[100%] my-[auto] mb-[1px] text-[#575757] mt-[0px] font-[400] leading-[20px] text-center !px-[22px]  max-w-[95%] pb-[10px] !text-wrap" imgClass={"mt-[-70px]"} />
          ))}
        </div>
   </div>
 </section>
  )
}
