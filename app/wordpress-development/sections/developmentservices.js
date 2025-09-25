import Secheading from '../../components/secheading';
import ServiceCard from '../../components/services/page';


const devServiceCardsData = [
  {
    src: "/devservies.svg",
    alt: "DNA Image",
    width: 83,
    height: 83,
    heading: "End-to-End Site Solutions",
    imgbgcolor: "#009688",
    blockheight: "Smooth Site Migrations",
    description:
    "End to end development for both new and existing sites",
    buttontext: "Learn More",
        blockheight: "255px",
    buttonclass: "py-[13px] px-[47px] rounded-[30px] bg-[#009688] hover:bg-[#00776c] font-[500] text-[14px] text-[#ffffff]",
    link:'/portfolio'

    },
  {
    src: "/devservies2.svg",
    alt: "DNA Image",
    width: 83,
    height: 83,
    heading: "Smooth Site Migrations",
      imgbgcolor: "#009688",
        blockheight: "255px",
    description:
      "Seamless migrations from outdated platforms or builders",
    buttontext: "Learn More",
     buttonclass: "py-[13px] px-[47px] rounded-[30px] bg-[#009688] hover:bg-[#00776c] font-[500] text-[14px] text-[#ffffff]",
     link:'/portfolio'
  },
  {
    src: "/devservies3.svg",
    alt: "DNA Image",
    width: 83,
    height: 83,
    heading: "WooCommerce",
     imgbgcolor: "#009688",
        blockheight: "255px",
    description:
      "WooCommerce and third party tool integration",
    buttontext: "Learn More",
     buttonclass: "py-[13px] px-[47px] rounded-[30px] bg-[#009688] hover:bg-[#00776c] font-[500] text-[14px] text-[#ffffff]",
     link:'/portfolio'
  },
];

export default function Developmentservices() {
  return (
    <section className="py-[40px] ">
      <div className="max-w-[1400px] mx-auto">
        <Secheading
          classheading=" md:text-[32px] lg:text-[36px] lg:pb-[170px] text-[24px] font-semibold text-[#333] leading-[36px] md:pb-[80px] pb-[80px] text-center"
          heading="Our WordPress Development Services"
        />
     
        <div className="flex flex-wrap justify-around gap-x-[18px] gap-y-[125px] md:pt-[50px] pt-[40px] md:pl-[30px] pl-[10px] md:pr-[30px] pr-[10px]">
          {devServiceCardsData.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
