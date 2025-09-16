import DnaCard from "@/app/components/dna/page";
import WordPressWhitelabelCard from "./card";

export default function WordpressWhitelabelServices() {

    const Data = [
  {
    src: "/WordpressWhitelabel/1st.svg",
    alt: "DNA Image",
    width: 83,
    height: 83,
    heading: "Ongoing Maintenance <br/> & Support",
    description:
      "Beyond development, we offer maintenance packages that keep your client sites updated, secure and running smoothly. So you can promise peace of mind without extra effort",
  },
   {
    src: "/WordpressWhitelabel/2nd.svg", // Add your real path here
    alt: "DNA Image",
    width: 83,
    height: 83,
    heading: "Pixel Perfect Development from Figma",
    description:
      "Our front end developers take your Figma, Adobe XD or Sketch designs and convert them into pixel perfect WordPress sites. These match every detail and respond flawlessly across all screen sizes",
  },
  {
    src: "/WordpressWhitelabel/4th.svg",
    alt: "DNA Image",
    width: 83,
    height: 83,
    heading: "Website <br/> Development",
    description:
      "We create clean, responsive and high performance WordPress websites built to meet the exact specifications of your clients' needs",
  },
  {
    src: "/WordpressWhitelabel/4th.svg",
    alt: "DNA Image",
    width: 83,
    height: 83,
    heading: "Plugin Integration",
    description:
      "Payment integration",
  },
 
];

  return (
        <section className="pt-[60px] md:pt-[80px] pb-[60px] w-full ">
              <div className="max-w-[1400px] px-[20px] mx-auto">
                <h3 className="text-center mb-[10px] xl:mt-[60px] font-[700] text-[35px] text-[#333] " style={{fontFamily:"var(--font-raleway)",}}>White Label WordPress Development Services</h3>
                <div className="flex flex-wrap xl:gap-x-[40px] justify-center xl:!justify-evenly boder gap-x-[20px] md:gap-y-[125px] gap-y-[90px] mt-[100px] lg:pt-[50px] pt-[30px]">
                  {Data.map((card, index) => (
                    <WordPressWhitelabelCard key={index} {...card} className={`!max-w-[385px] !min-w-[173px]
        ${index === 3 ? "!h-[190px]" : "!min-h-[280px]"}`} headingStyle="px-[20px] !text-[19px] sm:!text-[24px] !font-[600] mt-[20px] mb-[10px] text-center " desStyle="text-[#333] text-[14px] font-[400] leading-[20px] min-[1440px]:leading-[23px] pl-[20px] sm:pl-[22px] pr-[22px] mb-[10px] min-[1440px]:mx-auto text-center"/>
                  ))}
                </div>
              </div>
            </section>
  )
}
