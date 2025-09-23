import Secheading from './components/secheading'
import ServiceCard from './components/services/page';


const ServiceCardsData = [
  {
    src: "/service1.svg",
    alt: "DNA Image",
    link:'/wordpress-development',
    width: 48,
    height: 80,
    heading: "WordPress Development",
    imgbgcolor: "#009688",
    blockheight: "278px",
    description:
    "We craft WordPress sites that are flexible, secure and built to grow. Every line of code is clean, scalable and made with purpose.",
    buttontext: "Learn More",
    buttonclass: "py-[13px] px-[47px] rounded-[30px] bg-[#009688] hover:bg-[#00776c] font-[500] text-[14px] text-[#ffffff]",

    },
  {
    src: "/service2.svg",
    alt: "DNA Image",
    link:'/shopify-development',
    width: 48,
    height: 80,
    heading: "Shopify Development",
      imgbgcolor: "#009688",
      blockheight: "278px",
    description:
      "More than just a store. Your Shopify site becomes a sales machine.  Fast, fluid and optimized to convert from the very first click.",
    buttontext: "Learn More",
     buttonclass: "py-[13px] px-[47px] rounded-[30px] bg-[#009688] hover:bg-[#00776c] font-[500] text-[14px] text-[#ffffff]",
  },
  {
    src: "/service3.svg",
    alt: "DNA Image",
    link:'/webflow-development',
    width: 48,
    height: 80,
    heading: "Webflow Development",
     imgbgcolor: "#009688",
     blockheight: "278px",
    description:
      "Design freedom meets structured precision in every Webflow build. We blend creativity with control. For websites that truly stand out.",
    buttontext: "Learn More",
     buttonclass: "py-[13px] px-[47px] rounded-[30px] bg-[#009688] hover:bg-[#00776c] font-[500] text-[14px] text-[#ffffff]",
  },
];

export default function Services() {
  return (
    <section className="py-[40px] ">
      <div className="max-w-[1400px] mx-auto">
        <Secheading
          classheading=" md:text-[32px] text-[24px] font-semibold text-[#333] leading-[36px] md:pb-[80px] pb-[60px] text-center"
          heading="Our Services"
        />
     
        <div className="flex flex-wrap justify-around gap-x-[18px] gap-y-[125px] md:pt-[50px] pt-[40px] md:pl-[30px] pl-[10px] md:pr-[30px] pr-[10px]">
          {ServiceCardsData.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
