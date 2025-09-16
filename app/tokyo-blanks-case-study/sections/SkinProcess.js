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
    <h2 className="text-[24px] sm:text-[28px] md:text-[32px]  lg:text-[36px] text-center text-[#333] raleway font-[600]  sm:leading-[60px]  ">What we did in the Process</h2>
    <div className="flex  flex-wrap justify-evenly gap-x-[12px] gap-y-[125px] pt-[145px] ">
          {SkinCardsData.map((card, index) => (
            <ServiceCard key={index} {...card}  className={" !w-[90%] !h-[240px] md:!h-[230px] min-md:!w-[320px] lg:!h-[255px] lg:!w-[29%]  "} desStyle="text-[16px] w-[100%] my-[auto]  text-[#575757] mt-[0px] font-normal leading-[20px] text-center md:px-[0] !px-[10px] md:max-w-[85%]  max-w-[100%]  !text-wrap" imgClass={"mt-[-40px]"} />
          ))}
        </div>
   </div>
 </section>
  )
}
