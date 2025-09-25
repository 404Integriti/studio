'use client';
import Secheading from '../../components/secheading';
import ServiceCard from '../../components/services/page';


const pricipleCardsData = [
  {
    src: "/rulef.svg",
    alt: "DNA Image",
    width: 83,
    height: 83,
  heading: (
    <>
      Intuitive User <br /> Journeys
    </>
  ),
    imgbgcolor: "#",
    blockheight: "270",
    
    description:
    "We design pathways that make sense—guiding visitors naturally from first click to final conversion without friction or confusion.",
    blockwidth: "320px",
    imgClass:'mt-[-50]',
    },
  {
    src: "/rulesec.svg",
    alt: "DNA Image",
    width: 83,
    height: 83,
      heading: (
    <>
     Micro-Interactions  <br /> That Delight
    </>
  ),
  
      imgbgcolor: "#",
      blockheight: "270",
       blockwidth: "320px",
    description:
      "From hover states to subtle animations, every interaction adds clarity and feedback, making the user experience feel thoughtful and refined.",
      imgClass:'mt-[-50]'
  },
  {
    src: "/rulethree.svg",
    alt: "DNA Image",
    width: 83,
    height: 83,
      heading: (
    <>
     Clear Visual <br /> Hierarchy
    </>
  ),
     imgbgcolor: "#",
      blockheight: "270",
       blockwidth: "320px",
    description:
      "Using color, spacing, and typography, we direct attention to what matters most—your messages, CTAs, and conversion points.",
      imgClass:'mt-[-50]'

  },
];

export default function WordPressprinciples() {
  return (
    <section className="py-[40px] ">
      <div className="max-w-[1400px] mx-auto">
        <Secheading
          classheading=" md:text-[32px] text-[24px] font-semibold text-[#333] leading-[36px] pb-[80px]  text-center"
          heading="UI/UX Principles That Drive Engagement"
        />
     
        <div className="flex flex-wrap justify-around mt-[60px] gap-x-[18px] gap-y-[125px] md:pt-[50px] pt-[40px] md:pl-[30px] pl-[10px] md:pr-[30px] pr-[10px]">
          {pricipleCardsData.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
