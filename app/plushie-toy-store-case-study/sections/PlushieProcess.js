import ServiceCard from "../../components/services/page";
import Image from "next/image";
const PlushieCardsData = [
  {
    src: "/Shopifyicon.png",
    alt: "values",
    width: 83,
    height: 83,
    heading: "End-to-End Shopify Development",
    description:
      "Built the store from scratch with a clean, responsive design and intuitive navigation to provide a smooth shopping experience.",
  blockheight: "191px",
    },
  {
    src: "/GlobelIcom.png",
    alt: "team",
    width: 83,
    height: 83,
    heading: "Global Commerce Enablement",
    description:
      "Integrated multiple secure payment gateways and a currency converter to support international buyers seamlessly.  ",
       blockheight: "191px",
  },
  {
    src: "/boosted.png",
    alt: "vision",
    width: 83,
    height: 83,
    heading: "Boosted Customer Interaction",
    description:
      "Added live chat for real-time support, and integrated Judge.me review app and Instagram feed to encourage engagement and trust.",
       blockheight: "191px",
  },
];


export default function PlushieProcess() {
  return (
 <section className="CommunityService px-[20px] sm:px-[40px] bg-[#f6f6f667] lg:px-0">
   <div className="pt-[50px] w-[100%] max-w-[1440px]  mx-auto  pb-[60px] ">
    <h2 className="text-[24px] sm:text-[28px] md:text-[32px]  lg:text-[36px] text-center text-[#333] raleway font-[600]  sm:leading-[60px] ">What We Did – The Process & Traits</h2>
    <div className="flex  flex-wrap justify-evenly gap-x-[20px] gap-y-[125px] pt-[145px]">
          {PlushieCardsData.map((card, index) => (
            <ServiceCard key={index} {...card}  className={" dental-card !w-[90%] !h-[270px]  md:!h-[340px] min-md:!w-[40%] lg:!h-[280px] lg:!max-w-[29%]"} desStyle="text-[16px] w-[100%] my-[auto] md:mb-[10px] text-[#575757] mt-[0px] font-normal leading-[23px] text-center md:px-[0] px-[22px] md:max-w-[80%]  max-w-[100%] md:pb-[40px]  " imgClass={"mt-[-40px]"} />
          ))}
        </div>
   </div>
 </section>
  )
}
 

  
