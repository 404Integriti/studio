import ServiceCard from "../../components/services/page";
const SkinCardsData = [
  {
    src: "/ProteinSupplLogo_one.png",
    alt: "values",
    width: 83,
    height: 83,
    heading: "User Research & Navigation Redesign",
    description:" Conducted in-depth customer behavior analysis to redesign product categories for a seamless browsing experience.",

    },
  {
    src: "/ProteinSupplLogo_two.png",
    alt: "team",
    width: 83,
    height: 83,
    heading: "Enhanced Product Content",
    description:
      " Updated product pages with high-quality images, engaging descriptions, and video content to better attract and retain customers.",
   
  },
  {
    src: "/ProteinSupplLogo_three.png",
    alt: "vision",
    width: 83,
    height: 83,
    heading: "Personalization & Checkout Optimization",
    description:
      "Integrated a smart recommendation engine and simplified the checkout process to boost conversions and reduce cart abandonment.",
  },
];


export default function SkinProcess() {
  return (
 <section className="CommunityService px-[20px] bg-[#f6f6f667] sm:px-[40px] lg:px-0 ">
   <div className="pt-[50px] w-[100%] max-w-[1440px]  mx-auto  pb-[60px] ">
    <h2 className="text-[24px] sm:text-[28px] md:text-[32px]  lg:text-[36px] text-center text-[#333] raleway font-[600]  sm:leading-[60px]  ">What we did in the Process</h2>
    <div className="flex  flex-wrap justify-evenly gap-x-[12px] gap-y-[125px] pt-[145px] ">
          {SkinCardsData.map((card, index) => (
            <ServiceCard key={index} {...card}  className={"skinCard !w-[375px] !h-[253px] md:!h-[240px] md:!w-[351px] md:pb-[20px] lg:!h-[240px] lg:!w-[29%]  "} desStyle="text-[16px]  my-[auto] mb-[10px] text-[#575757] mt-[0px] font-normal leading-[20px] text-center md:px-[0] !px-[22px] md:max-w-[100%]  max-w-[100%] pb-[40px] !text-wrap" imgClass={"mt-[-40px]"} />
          ))}
        </div>
   </div>
 </section>
  )
}