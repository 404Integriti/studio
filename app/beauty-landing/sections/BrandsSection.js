import { WebflowMaintProCard } from "@/app/components/WebflowMaintProCard";
import Herobutton from "@/app/components/herobuttons/herobutton";

const maintenanceSupport = [
  {
    icon: "/new/icon1.png",
    title: "Tailored for Beauty Brands",
    description:
      "We understand the nuances of skincare and haircare marketing. Our builds reflect your brand's tone, mission and target audience with precision.",
    cardStyle:
      "rounded-[16px] pl-[20px] pr-[20px] pt-[30px] text-left transition-all duration-300 bg-white hover:shadow-[0_2px_10px_rgba(0,0,0,0.12)] h-[310px] w-auto",
    iconContainerStyle: "flex justify-start mb-6",
    titleStyle:
      "text-[22px] font-[600] mb-[10px] text-[#333333] leading-[30px]",
    descriptionStyle: "leading-[25px] text-[16px] w-[260px] text-[#454545]",
  },
  {
    icon: "/new/icon2.png",
    title: "Built to Convert",
    description:
      "From glowing product visuals to smooth checkout flows. Every section is designed to turn casual browsers into loyal customers.",
    cardStyle:
      "rounded-[16px] pl-[20px] pr-[20px] pt-[30px] text-left transition-all duration-300 bg-white hover:shadow-[0_2px_10px_rgba(0,0,0,0.12)] h-[310px] w-auto",
    iconContainerStyle: "flex justify-start mb-6",
    titleStyle:
      "text-[22px] font-[600] mb-[10px] text-[#333333] leading-[30px]",
    descriptionStyle: "leading-[25px] text-[16px] w-[260px] text-[#454545]",
  },
  {
    icon: "/new/icon3.png",
    title: "Fast, SEO-Ready Sites",
    description:
      "Your website won't just look good it will load fast, rank well and adapt beautifully to every screen.",
    cardStyle:
      "rounded-[16px] pl-[20px] pr-[20px] pt-[30px] text-left transition-all duration-300 bg-white hover:shadow-[0_2px_10px_rgba(0,0,0,0.12)] h-[310px] w-auto",
    iconContainerStyle: "flex justify-start mb-6",
    titleStyle:
      "text-[22px] font-[600] mb-[10px] text-[#333333] leading-[30px]",
    descriptionStyle: "leading-[25px] text-[16px] w-[260px] text-[#454545]",
  },
  {
    icon: "/new/icon4.png",
    title: "Personal Support",
    description:
      "We're not just developers, we are collaborators. Our team integrates seamlessly with yours. Providing proactive on-brand support.",
    cardStyle:
      "rounded-[16px] pl-[20px] pr-[20px] pt-[30px] text-left transition-all duration-300 bg-white hover:shadow-[0_2px_10px_rgba(0,0,0,0.12)] h-[310px] w-auto",
    iconContainerStyle: "flex justify-start mb-6",
    titleStyle:
      "text-[22px] font-[600] mb-[10px] text-[#333333] leading-[30px]",
    descriptionStyle: "leading-[25px] text-[16px] w-[260px] text-[#454545]",
  },
];

const BrandSection = () => {
  return (
    <section className="bg-[linear-gradient(to_bottom,#FFF,#f6f6f6_6%)]">
      <div className="w-full max-w-[1388px] mx-auto px-[20px] pt-[60px] pb-[80px]">
        <h2 className="xs:text-[32px] text-[32px] font-[600] leading-[36px] text-center text-[#333333] raleway mt-[10px] mb-[17px]">
          Why Beauty Brands Choose Integriti
        </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-[26px] justify-center align-items-center   pt-[30px] min-[1280px]:gap-[10px] min-[1440px]:gap-[36px]">
          {maintenanceSupport.map((feature, index) => (
            <WebflowMaintProCard
              key={index}
              data={{
                ...feature,
                cardStyle: `${feature.cardStyle} w-full max-w-[340px] mx-auto`,
              }}
            />
          ))}

          <div className="flex justify-center col-span-full">
            <Herobutton
              btnpadfirst="raleway customBrandBtn"
              btnpadsec="hidden"
              buttonwidth="230px"
              buttonheight="50px"
              firstButtonText="Design My Experience"
              secondButtonText="Meet Our Team"
              firstButtonlink="/contact-us"
              secondButtonlink="#meetourteam"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
