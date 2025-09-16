import ServiceCard from "../../components/services/page";
const SkinCardsData = [
  {
    src: "/endtoend.png",
    alt: "values",
    width: 83,
    height: 83,
    heading: "Design & Development",
    description:"We designed and developed the entire WordPress website using Elementor and Hello Theme, ensuring a clean layout and smooth user experience from the ground up.",

    },
  {
    src: "/icon_skin_one.png",
    alt: "team",
    width: 83,
    height: 83,
    heading: "Booking Flow Optimization",
    description:
      "Integrated Contact Form 7 with conditional fields to provide a streamlined and tailored appointment booking journey.",
   
  },
  {
    src: "/icon_skin_two.png",
    alt: "vision",
    width: 83,
    height: 83,
    heading: "Performance Focus",
    description:
      "We compressed all images in WebP format and ensured mobile responsiveness, boosting performance and accessibility across all devices.",
   
  },
];


export default function SkinProcess() {
  return (
 <section className="CommunityService  bg-[#f6f6f667] sm:px-[40px] lg:px-0 ">
   <div className="pt-[50px] w-[100%] max-w-[1440px]  mx-auto  pb-[60px] ">
    <h2 className="text-[24px] sm:text-[28px] md:text-[32px]  lg:text-[36px] text-center text-[#333] raleway font-[600]  sm:leading-[60px]  ">What we did in the Process
</h2>
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
