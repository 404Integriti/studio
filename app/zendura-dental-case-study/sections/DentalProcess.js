import ServiceCard from "../../components/services/page";
import Image from "next/image";
const DentalCardsData = [
  {
    src: "/customDiscount.png",
    alt: "values",
    width: 83,
    height: 83,
    heading: "Custom Discount Logic ",
    description:
      "Built a custom API to connect Shopify with SAP ERP. This enabled real-time pricing based on customer-specific account details. ",
  blockheight: "191px",
    },
  {
    src: "/realTime.png",
    alt: "team",
    width: 83,
    height: 83,
    heading: "Real-Time ERP Integration",
    description:
      "Used a theme-app-extension and custom checkout fields to avoid webhook delays, improving pricing accuracy during busy times. ",
       blockheight: "191px",
  },
  {
    src: "/streamLine.png",
    alt: "vision",
    width: 83,
    height: 83,
    heading: "Streamlined Checkout Experience ",
    description:
      "Added session-based tokens and draft orders to handle sensitive data securely while supporting live pricing updates. ",
       blockheight: "191px",
  },
];


export default function DentalProcess() {
  return (
 <section className="CommunityService px-[20px] sm:px-[40px] bg-[#f6f6f667] lg:px-0">
   <div className="pt-[50px] w-[100%] max-w-[1440px]  mx-auto  pb-[60px] ">
    <h2 className="text-[24px] sm:text-[28px] md:text-[32px]  lg:text-[36px] text-center text-[#333] raleway font-[600]  sm:leading-[60px] ">What we did in the Process</h2>
    <div className="flex  flex-wrap justify-evenly gap-x-[20px] gap-y-[125px] pt-[145px]">
          {DentalCardsData.map((card, index) => (
            <ServiceCard key={index} {...card}  className={" dental-card !w-[90%] !h-[270px]  md:!h-[340px] min-md:!w-[40%] lg:!h-[280px] lg:!max-w-[29%]"} desStyle="text-[16px] w-[100%] my-[auto] md:mb-[10px] text-[#575757] mt-[0px] font-normal leading-[23px] text-center md:px-[0] px-[22px] md:max-w-[80%]  max-w-[100%] md:pb-[40px]  " imgClass={"mt-[-40px]"} />
          ))}
        </div>
   </div>
 </section>
  )
}
 

  
