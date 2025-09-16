
import ServiceCard from "@/app/components/services/page";

export default function WordpressWhitelabelServices() {

    const Data = [
  {
    src: "/WordpressWhitelabel/maintenance.svg",
    alt: "DNA Image",
    width: 83,
    height: 83,
    heading: "Ongoing Maintenance  & Support",
    headingWidth:"xl:!px-[40px] ",
    cardStyle:"skinCard !w-[95%] !h-[260px] md:!h-[280px] min-md:!w-[320px] lg:!h-[300px] lg:!w-[29.5%] xl:!h-[280px]",
    description:
      "Beyond development, we offer maintenance packages that keep your client sites updated, secure and running smoothly. So you can promise peace of mind without extra effort",
  },
   {
    src: "/WordpressWhitelabel/pixelperfect.svg", // Add your real path here
    alt: "DNA Image",
    width: 83,
    height: 83,
    headingWidth:"w-80%",
    heading: "Pixel Perfect Development from Figma",
    cardStyle:"skinCard !w-[95%] !h-[260px] md:!h-[280px] min-md:!w-[320px] lg:!h-[300px] lg:!w-[29.5%] xl:!h-[280px]",
    description:
      "Our front end developers take your Figma, Adobe XD or Sketch designs and convert them into pixel perfect WordPress sites. These match every detail and respond flawlessly across all screen sizes",
  },
  {
    src: "/WordpressWhitelabel/website.svg",
    alt: "DNA Image",
    width: 83,
    height: 83,
    headingWidth:"!px-[60px]",
    heading: "Website Development",
    cardStyle:"skinCard !w-[95%] !h-[260px] md:!h-[280px] min-md:!w-[320px] lg:!h-[300px] lg:!w-[29.5%] xl:!h-[280px]",
    description:
      "We create clean, responsive and high performance WordPress websites built to meet the exact specifications of your clients' needs",
  },
  {
    src: "/WordpressWhitelabel/laptop.svg",
    alt: "DNA Image",
    width: 83,
    height: 83,
    headingWidth:" ",
    heading: "Plugin Integration",
    cardStyle:"skinCard !w-[95%] !h-[200px] md:!h-[280px] min-md:!w-[320px]  lg:!w-[29.5%] lg:!h-[200px]",
    description:
      "Payment integration",
  },
 
];

  return (
       <section className="CommunityService w-[100%] flex justify-center  px-[20px] bg-[#f6f6f667] sm:px-[40px] lg:px-0 ">
         <div className="max-w-[1440px]">
          <div className="pt-[50px] w-[100%] max-w-[1200px]  mx-auto  pb-[60px] ">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px]  lg:text-[35px] text-center text-[#333] raleway font-[700]  sm:leading-[60px]  ">White Label WordPress Development Services</h2>
          <div className="flex  flex-wrap justify-evenly gap-x-[30px] gap-y-[125px] pt-[145px] ">
                {Data.map((card, index) => (
                  <ServiceCard key={index} {...card} className={`${card.cardStyle}`} desStyle="text-[14px] w-[100%] my-[auto] mb-[10px] text-[#575757] mt-[0px] font-normal leading-[20px]  text-center md:px-[0] !px-[10px] md:max-w-[90%]  max-w-[100%] pb-[40px] !text-wrap" imgClass={"mt-[-40px]"} />
                ))}
              </div>
         </div>
         </div>
       </section>
  )
}
