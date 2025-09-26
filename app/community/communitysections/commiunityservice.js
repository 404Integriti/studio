import ServiceCard from "../../components/services/page";
import Image from "next/image";
const CommunityCardsData = [
  {
    src: "/communityservice1.png",
    alt: "values",
    width: 83,
    height: 83,
    heading: "Our Values",
    description:
      "We believe in compassion, integrity and dedication to making a real difference in children's lives.",
  blockheight: "191px",
    },
  {
    src: "/communityservice2.png",
    alt: "team",
    width: 83,
    height: 83,
    heading: "Our Team",
    description:
      "Our dedicated staff and volunteers work tirelessly to create positive change for children in need.",
       blockheight: "191px",
  },
  {
    src: "/communityservice3.png",
    alt: "vision",
    width: 83,
    height: 83,
    heading: "Our Vision",
    description:
      "A world where every child has access to education, nutrition, healthcare and emotional support.",
       blockheight: "191px",
  },
];


export default function CommunityService() {
  return (
 <section className="CommunityService">
   <div className="pt-[10px] w-[100%] max-w-[1440px] mx-auto mt-[40px] pb-[60px] ">
    <h2 className="text-[24px] text-center text-[#333] raleway font-[600] pb-[81px] px-[5px] leading-[32px]">Who We Are & What We Stand For</h2>
  <div className="flex flex-wrap justify-around gap-x-[20px] gap-y-[125px] px-[10px] pt-[80px]">
          {CommunityCardsData.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
   </div>
 </section>
  )
}
