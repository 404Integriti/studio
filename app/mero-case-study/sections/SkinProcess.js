import ServiceCard from "../../components/services/page";
const SkinCardsData = [
  {
    src: "/tokyoIcon_two.png",
    alt: "values",
    width: 83,
    height: 83,
    heading: "Seamless Shopify Migration",
    description:" We carefully migrated all data from WooCommerce to Shopify, ensuring accuracy and smooth site functionality.",

    },
  {
    src: "/case_study_two.png",
    alt: "team",
    width: 83,
    height: 83,
    heading: "Website Redesign & Payment Integration",
    description:
      " Revamped the site layout with high-quality visuals and optimized descriptions, alongside integrating multiple secure payment gateways suited to the regional market. ",
   
  },
  {
    src: "/case_study_three.png",
    alt: "vision",
    width: 83,
    height: 83,
    heading: "Localized Market Strategy",
    description:
      "Implemented multi-currency support and tailored SEO strategies to engage UAE customers effectively.",
  },
];


export default function SkinProcess() {
  return (
 <section className="CommunityService px-[20px] bg-[#f6f6f667] sm:px-[40px] lg:px-0 ">
   <div className="pt-[50px] w-[100%] max-w-[1440px]  mx-auto  pb-[60px] ">
    <h2 className="text-[24px] sm:text-[28px] md:text-[32px]  lg:text-[36px] text-center text-[#333] raleway font-[600]  sm:leading-[60px]  ">What we did in the Process</h2>
    <div className="flex  flex-wrap justify-evenly gap-x-[12px] gap-y-[125px] pt-[145px] ">
          {SkinCardsData.map((card, index) => (
            <ServiceCard key={index} {...card}  className={"skinCard !w-[90%] !h-[250px] md:!h-[250px] min-md:!w-[454px] lg:!h-[250px] lg:!w-[29%]  "} desStyle="text-[16px]  my-[auto] mb-[10px] text-[#575757] mt-[0px] font-normal leading-[20px] text-center md:px-[0] !px-[36px] md:max-w-[100%]  max-w-[100%] pb-[40px] !text-wrap" imgClass={"mt-[-40px]"} />
          ))}
        </div>
   </div>
 </section>
  )
}