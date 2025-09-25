import Herobutton from "@/app/components/herobuttons/herobutton";
import { WordpressDevelopment } from "@/app/components/wordpress-development-services/cards";
import Image from "next/image";

const solutions = [
  {
    icon: "/custom.svg",
    title: "Custom Builds for Any Vision",
    description:
      "From marketing sites to complex platforms, we build everything from scratch—fully tailored to your brand, goals, and audience.",
    cardStyle: "!bg-[#c7fff4] hover:!bg-[#B3FFF5] !w-[342px] !mx-[0px] ",
    // innerCard:'px-[20px]'
  },
  {
    icon: "/handshake.svg",
    title: "White Label Partnerships",
    description:
      "We work behind the scenes for agencies and creative studios, delivering clean code and fast turnarounds—while you take the credit.",
    cardStyle: "!bg-[#fbf4e3] hover:!bg-[#FDF3DD] !w-[342px] !mx-[0px]",
    // innerCard:'px-[20px]'
  },

  {
    icon: "/seo.svg",
    title: "Scalable, SEO-Ready Code",
    description:
      "We prioritize performance and search visibility from day one—ensuring your site is built to grow and rank.",
    cardStyle: "!bg-[#eeecfc] hover:!bg-[#EEECFC] !w-[342px]  !mx-[0px]",

    // innerCard:'px-[20px]'
  },
];

const WordpressSolutions = () => {
  return (
    <section className="bg-[#f8f8f8] py-[10px] sm:py-[40px]  w-full">
      <div className="  max-w-[1360px] mx-auto ">
        <h2 className="xs:text-[32px] text-[32px] font-[600] leading-[36px] text-center text-[#333333] raleway px-[30px] sm:px-[40px] pt-[20px] mb-[10px] ">
          WordPress Development Solutions
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
          firstButtonText="Expolre Wordpress Development"
          secondButtonText=""
          firstButtonlink="/wordpress-development"
          secondButtonlink="/portfolio"
        />
      </div>
    </section>
  );
};

export default WordpressSolutions;
