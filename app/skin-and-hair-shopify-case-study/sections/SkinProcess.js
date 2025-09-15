import ServiceCard from "../../components/services/page";
import Image from "next/image";
const SkinCardsData = [
  {
    src: "/endtoend.png",
    alt: "values",
    width: 83,
    height: 83,
    heading: "End-to-End Design & Development",
    description:
      "Developed and launched the store on Shopify, enabling easy inventory management, secure payment processing and a user-friendly backend for streamlined operations.",
  blockheight: "191px",
    },
  {
    src: "/performance.png",
    alt: "team",
    width: 83,
    height: 83,
    heading: "Performance-Driven Enhancements",
    description:
      "Integrated essential features including product filtering, customer reviews, a simplified checkout experience, logistics syncing and Google Maps for physical store locations.",
       blockheight: "191px",
  },
  {
    src: "/content.png",
    alt: "vision",
    width: 83,
    height: 83,
    heading: "Content & Image Optimization",
    description:
      "Built a custom application to enable real-time inventory synchronization by location and automated the upload of 14,000 SKUs to ensure operational efficiency. ",
       blockheight: "191px",
  },
];


export default function SkinProcess() {
  return (
 <section className="CommunityService px-[20px] bg-[#f6f6f667] sm:px-[40px] lg:px-0 ">
   <div className="pt-[50px] w-[100%] max-w-[1440px]  mx-auto  pb-[60px] ">
    <h2 className="text-[24px] sm:text-[28px] md:text-[32px]  lg:text-[36px] text-center text-[#333] raleway font-[600]  sm:leading-[60px]  ">What We Did – The Process & Traits</h2>
    <div className="flex  flex-wrap justify-evenly gap-x-[12px] gap-y-[125px] pt-[145px] ">
          {SkinCardsData.map((card, index) => (
            <ServiceCard key={index} {...card}  className={"skinCard !w-[90%] !h-[280px] md:!h-[340px] min-md:!w-[320px] lg:!h-[280px] lg:!w-[29%]  "} desStyle="text-[16px] w-[100%] my-[auto] mb-[10px] text-[#575757] mt-[0px] font-normal leading-[20px] text-center md:px-[0] !px-[10px] md:max-w-[85%]  max-w-[100%] pb-[40px] !text-wrap" imgClass={"mt-[-40px]"} />
          ))}
        </div>
   </div>
 </section>
  )
}
