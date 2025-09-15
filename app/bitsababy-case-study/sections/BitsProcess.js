import ServiceCard from "../../components/services/page";
import Image from "next/image";
const BitsCardData = [
  {
    src: "/redesign.png",
    alt: "values",
    width: 83,
    height: 83,
    heading: "Redesigned for Lifestyle Appeal",
    description:
      "We created a modern, visually driven Shopify store that reflects lifestyle and pet care trends, helping the brand emotionally connect with its audience.",
  blockheight: "191px",
    },
  {
    src: "/navigation.png",
    alt: "team",
    width: 83,
    height: 83,
    heading: "Simplified Navigation",
    description:
      "The site was restructured with clear categories and user-friendly menus to guide shoppers more intuitively through their purchase journey.",
       blockheight: "191px",
  },
  {
    src: "/marketingTools.png",
    alt: "vision",
    width: 83,
    height: 83,
    heading: "Connected Marketing Tools",
    description:
      "Integrated essential platforms like email marketing and social media to allow seamless promotions, retargeting, and audience engagement.",
       blockheight: "191px",
  },
];


export default function BitsProcess() {
  return (
 <section className="CommunityService px-[20px] sm:px-[40px] lg:px-0 bg-[#f6f6f667]">
   <div className="pt-[50px] w-[100%] max-w-[1440px]  mx-auto  pb-[60px] ">
    <h2 className="text-[24px] sm:text-[28px] md:text-[32px]  lg:text-[36px] text-center text-[#333] raleway font-[600]  sm:leading-[60px] ">What we did in the Process</h2>
    <div className="flex  flex-wrap justify-evenly gap-x-[20px] gap-y-[125px] pt-[145px]">
          {BitsCardData.map((card, index) => (
            <ServiceCard key={index} {...card}  className={" dental-card !w-[90%] !h-[270px]  md:!h-[340px] min-md:!w-[40%] lg:!h-[280px] lg:!max-w-[29%]"} desStyle="text-[16px] w-[100%] my-[auto] md:mb-[10px] text-[#575757] mt-[0px] font-normal leading-[20px] text-center md:px-[0] px-[22px] md:max-w-[80%]  max-w-[100%] md:pb-[40px]  " imgClass={"mt-[-40px]"} />
          ))}
        </div>
   </div>
 </section>
  )
}
 

  
