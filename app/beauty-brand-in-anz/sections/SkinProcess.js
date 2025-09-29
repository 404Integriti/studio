import ServiceCard from "../../components/services/page";
import Image from "next/image";
const SkinCardsData = [
  {
    src: "/shopifyblue.png",
    alt: "values",
    width: 83,
    height: 83,
    heading: "Complete Store Redesign",
    description:
      "We redesigned both the Australian and New Zealand Shopify stores from the ground up, focusing on visual consistency, speed, and usability. Custom banners, product layouts, and brand-aligned design elements were introduced.",
  blockheight: "191px",
    },
  {
    src: "/case_study_two.png",
    alt: "team",
    width: 83,
    height: 83,
    heading: "Checkout Flow Enhancements",
    description:
      "Using Shopify Checkout Scripts and UI extensions, we customized the checkout page for smoother navigation and better engagement. This included dynamic recommendation steps and payment visibility improvements.",
       blockheight: "191px",
  },
  {
    src: "/case_study_three.png",
    alt: "vision",
    width: 83,
    height: 83,
    heading: "Technical & Analytics Integration",
    description:
      "Integrated a smart recommendation engine and simplified checkout to boost conversions and reduce cart abandonment. Set up Google Analytics for both stores and configured all major payment methods, including Visa, Mastercard, Apple Pay, PayPal, Recharge, and Shop Pay.",
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
            <ServiceCard key={index} {...card}  className={"skinCard !w-[90%]   min-md:!w-[320px] !h-auto  lg:!w-[29%]  "} desStyle="text-[16px] w-[100%]  mb-[10px] !h-[160px]  text-[#575757]  font-normal leading-[20px] text-center md:px-[0] !px-[10px] md:max-w-[85%]  max-w-[100%] pb-[40px] !text-wrap" imgClass={"mt-[-40px]"} headingStyle='md:text-[24px] mt-[20px] !min-h-[70px] text-[19px] font-[600]   text-[#070707] leading-[30px]   text-center' />
          ))}
        </div>
   </div>
 </section>
  )
}
