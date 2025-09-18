import ServiceCard from "../../components/services/page";
const SkinCardsData = [
  {
    src: "/pharmanotesLogothree.png",
    alt: "values",
    width: 83,
    height: 83,
    heading: "Store Setup & Shopify Foundation",
    description:"Developed and launched the store on Shopify, enabling easy inventory management, secure payment processing, and a user-friendly backend for streamlined operations.",

    },
  {
    src: "/pharmanotesLogotwo.png",
    alt: "team",
    width: 83,
    height: 83,
    heading: "Advanced Feature Integration",
    description:
      "Integrated essential features including product filtering, customer reviews, a simplified checkout experience, logistics syncing and Google Maps for physical store locations.",
   
  },
  {
    src: "/pharmanotesLogo.png",
    alt: "vision",
    width: 83,
    height: 83,
    heading: "Custom App & Automation",
    description:
      "Built a custom application to enable real-time inventory synchronization by location and automated the upload of 14,000 SKUs to ensure operational efficiency.",
  },
];


export default function SkinProcess() {
  return (
 <section className="CommunityService px-[20px] bg-[#f6f6f667] sm:px-[40px] lg:px-0 ">
   <div className="pt-[50px] w-[100%] max-w-[1440px]  mx-auto  pb-[60px] ">
    <h2 className="text-[24px] sm:text-[28px] md:text-[32px]  lg:text-[36px] text-center text-[#333] raleway font-[600]  sm:leading-[60px]  ">What we did in the Process</h2>
    <div className="flex  flex-wrap justify-evenly gap-x-[12px] gap-y-[125px] pt-[145px] ">
          {SkinCardsData.map((card, index) => (
            <ServiceCard key={index} {...card}  className={"skinCard !w-[375px] !h-[253px] md:!h-[240px] md:!w-[351px] md:pb-[20px] lg:!h-[250px] lg:!w-[29%]  "} desStyle="text-[16px]  my-[auto] mb-[10px] text-[#575757] mt-[-10px] font-normal leading-[20px] text-center md:px-[0] !px-[22px] md:max-w-[100%]  max-w-[100%] pb-[40px] !text-wrap" imgClass={"mt-[-40px]"} />
          ))}
        </div>
   </div>
 </section>
  )
}