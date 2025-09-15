import Differencecard from "@/app/components/differencecard/page";

const ServiceCardsData = [
  {
    heading: "25+",
    headingclass: "lg:text-[60px] text-[36px] text-center font-[600] leading-[34px]  mt-[21px] mb-[10px] text-[#333]",
    Paragraph: "Team-Led Initiatives",
    Paragraphclass: "pt-[10px] text-center lg:text-[24px] text-[20px] leading-[35px] w-[100%] max-w-[71%] mb-[10px] font-[400]",
    width:"342px",
    height: "290px",
    bgcolor: "#fff",
    },
  {
    heading: "570+",
    headingclass: "lg:text-[60px] text-[36px] text-center font-[600] leading-[34px]  mt-[21px] mb-[10px] text-[#333]",
    Paragraph: "Community Service Hours",
    Paragraphclass: "pt-[10px] text-center lg:text-[24px] text-[20px] leading-[35px] w-[100%] max-w-[71%] mb-[10px] font-[400]",
    width:"342px",
    height: "290px",
    bgcolor: "#fadbd1",
    },
      {
    heading: "100%",
    headingclass: "lg:text-[60px] text-[36px] text-center font-[600] leading-[34px]  mt-[21px] mb-[10px] text-[#333]",
    Paragraph: "Team Participation",
    Paragraphclass: "pt-[10px] text-center lg:text-[24px] text-[20px] leading-[35px] w-[100%] max-w-[71%] mb-[10px] font-[400]",
    width:"342px",
    height: "290px",
    bgcolor: "#fff",
    },
];

export default function Difference() {
  return (
   <section className='difference-section'>
    <div className='w-[100%] max-w-[1440px] mx-auto lg:pt-[70px] md:pt-[40px] pt-[20px]  md:pb-[60px] pb-[40px]'>
        <h2 className='text-center lg:text-[40px] md:text-[36px] text-[24px] font-[600] lg:mt-[20px] mt-[00px] mb-[20px] pb-[20px] md:leading-[36px] leading-[30px]  ' style={{
           fontFamily: "var(--font-raleway)"
        }}>
            Proud to Make a Difference
            </h2>
            <div className='flex gap-[40px] justify-center items-center max-w-[1105px] w-[100%] mx-auto lg:-px-[0px] px-[20px] lg:flex-nowrap flex-wrap'>
               {ServiceCardsData.map((card, index) => (
                   <Differencecard
                       key={index}
                       heading={card.heading}
                       headingClass={card.headingclass}
                       paragraph={card.Paragraph}
                       paragraphClass={card.Paragraphclass}
                       bgcolor={card.bgcolor}
                       height={card.height}
                       width={card.width}
                   />
               ))}
            </div>
    </div>
   </section>
  )
}
