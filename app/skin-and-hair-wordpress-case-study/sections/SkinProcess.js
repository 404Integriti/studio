
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
 <section className="CommunityService px-[20px] bg-[#f6f6f667] sm:px-[40px] lg:px-0 ">
   <div className="pt-[50px] w-[100%] max-w-[1440px]  mx-auto  pb-[60px] ">
    <h2 className="text-[24px] sm:text-[28px] md:text-[32px]  lg:text-[36px] text-center text-[#333] raleway font-[600]  sm:leading-[60px]  ">What we did in the Process</h2>
    <div className="flex  flex-wrap justify-evenly gap-x-[12px] gap-y-[125px] pt-[145px] ">
          {SkinCardsData.map((card, index) => (
            <ServiceCard key={index} {...card}  className={" !w-[90%] !h-[250px] md:!h-[250px] min-md:!w-[320px] lg:!h-[245px] lg:!w-[29%]  "} desStyle="text-[16px] w-[100%] my-[auto]  text-[#575757] mt-[0px] font-normal leading-[20px] text-center md:px-[0] !px-[10px] md:max-w-[85%]  max-w-[100%]  !text-wrap" imgClass={"mt-[-40px]"} />
          ))}
        </div>
   </div>
 </section>
  )
}

