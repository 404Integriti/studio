import Herobutton from "@/app/components/herobuttons/herobutton";
import { WordpressDevelopment } from "@/app/components/wordpress-development-services/cards";
import Image from "next/image";

const solutions = [
  {
    icon: "/customshopify.svg",
    title: "Custom Shopify Builds ",
    description:
      "We build Shopify stores tailored to your brand, with every feature you need—fully scalable, fully optimized.",
    cardStyle: "!bg-[#c7fff4] hover:!bg-[#B3FFF5] !w-[342px] !mx-[0px] ",
    imgContainer: "!max-w-[55px]",
  },
  {
    icon: "/shopifyplus.svg",
    title: "Shopify Plus Expertise",
    description:
      "For brands ready to level up, we deliver enterprise-grade development built for big catalogs and bigger traffic.",
    cardStyle: "!bg-[#fbf4e3] hover:!bg-[#FDF3DD] !w-[342px] !mx-[0px]",
    imgContainer: "!max-w-[55px]",
  },

  {
    icon: "/advanceintegration.svg",
    title: "Advanced Integrations",
    description:
      "Inventory management, CRM, fulfillment—connect the tools you already use for seamless operations.",
    cardStyle: "!bg-[#eeecfc] hover:!bg-[#EEECFC] !w-[342px]  !mx-[0px]",
    imgContainer: "!max-w-[55px]",
    // innerCard:'px-[20px]'
  },
];

const ShopifySolutions = () => {
  return (
    <section className="bg-[#f8f8f8]  w-full py-[20px] mt-[-20px] sm:py-[20px]">
      <div className="  max-w-[1360px] mx-auto ">
        <h2 className="xs:text-[32px] text-[32px] font-[600] leading-[36px] text-center text-[#333333] raleway px-[30px] sm:px-[40px] pt-[20px] mb-[10px] ">
          Shopify Development
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
          firstButtonText="Expolre Shopify Development"
          secondButtonText=""
          firstButtonlink="/shopify-development"
          secondButtonlink="/portfolio"
        />
      </div>
    </section>
  );
};

export default ShopifySolutions;
