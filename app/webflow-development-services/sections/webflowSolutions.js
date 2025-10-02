import Herobutton from "@/app/components/herobuttons/herobutton";
import { WordpressDevelopment } from "@/app/components/wordpress-development-services/cards";
import Image from "next/image";

const solutions = [
  {
    icon: "/customshopify.svg",
    title: "Figma-to-Webflow Execution",
    description:
      "We transform Figma designs into very flawless Webflow builds that are pixel perfect, fully responsive and SEO-optimized.",
    cardStyle: "!bg-[#c7fff4] hover:!bg-[#B3FFF5] !w-[342px] !mx-[0px] ",
    imgContainer: "!max-w-[55px]",
  },
  {
    icon: "/shopifyplus.svg",
    title: "CMS & Dynamic Content",
    description:
      "We build powerful CMS collections to help you manage and scale content easily as your business grows.",
    cardStyle: "!bg-[#fbf4e3] hover:!bg-[#FDF3DD] !w-[342px] !mx-[0px]",
    imgContainer: "!max-w-[55px]",
  },

  {
    icon: "/advanceintegration.svg",
    title: "Custom Code & Integrations",
    description:
      "Need something beyond Webflow’s native features? No problem—we can extend your build with custom code.",
    cardStyle: "!bg-[#eeecfc] hover:!bg-[#EEECFC] !w-[342px]  !mx-[0px]",
    imgContainer: "!max-w-[55px]",
    // innerCard:'px-[20px]'
  },
];

const WebflowSolutions = () => {
  return (
    <section className="bg-[#f8f8f8]  w-full py-[10px] mt-[-10px] sm:py-[40px]">
      <div className="  max-w-[1360px] mx-auto ">
        <h2 className="xs:text-[32px] text-[32px] font-[600] leading-[36px] text-center text-[#333333] raleway px-[30px] sm:px-[40px] pt-[20px] mb-[10px] ">
          Webflow Development
        </h2>

        <div className="flex flex-wrap gap-[36px] !justify-center !items-center pt-[40px] px-[5px]">
          {solutions.map((feature, index) => (
            <WordpressDevelopment key={index} data={feature} />
          ))}
        </div>
        <Herobutton
          btnpadfirst="hero-btn-dental !text-[18px] !mt-[2px] !max-w-[300px]  !px-[1px] md:!max-w-[400px] raleway md:!px-[20px] lg:!px-[32px] !py-[10px] !font-[400]"
          btnpadsec="hidden "
          buttonwidth="!280px"
          buttonheight="!20px"
          firstButtonText="Expolre Webflow Development"
          secondButtonText=""
          firstButtonlink="/webflow-development"
          secondButtonlink="/portfolio"
        />
      </div>
    </section>
  );
};

export default WebflowSolutions;
