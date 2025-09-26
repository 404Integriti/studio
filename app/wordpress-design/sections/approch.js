'use client';
import Image from "next/image"
import { approach } from "../../components/customThemePoints"
import Sectionheading from "../../components/secheading"

export default function Approch() {
  return (
  <section className='approch lg:pt-[80px] md:pt-[60px] pt-[40px]'>
    <div className='w-[100%] max-w-[1350px] mx-auto flex xl:flex-row flex-col-reverse xl:gap-[0px] gap-[40px] xl:px-[0] lg:px-[30px] px-[20px]'>
        <div className='w-[100%] xl:max-w-[50%] lg:max-w-[70%] max-w-[100%] xl:mx-[0px] mx-auto xl:pl-[100px] lg:pl-[50px] pl-[0px] pr-[10px] flex flex-wrap gap-[29px] xl:justify-start justify-center'>
     
      {approach.map((item, index) => (
    <div
      key={index}
      className="shadow-[0_2px_20px_-7px #575757] approch_card pt-[30px] gap-[10px] flex flex-col justify-center items-center skew-x-[-1deg] skew-y-[-3deg] rounded-[20px] w-[100%] max-w-[249px] h-[242px] bg-[#f8f8f8]"
    >
      <Image
        src={item.image}
        width={75}
        height={75}
        alt={item.text}
        className="without"
      />
        <Image
        src={item.imagetwo}
        width={75}
        height={75}
        alt={item.text}
        className="with"
      />
      <h3
        className="w-[100%] max-w-[160px] text-[18px] text-[#009688] font-[600] leading-[25px] mb-[10px] text-center"
        style={{ fontFamily: "var(--font-raleway)" }}
      >
        {item.text}
      </h3>
    </div>
  ))}
        </div>
        <div className='w-[100%] xl:max-w-[50%] lg:max-w-[50%] max-w-[100%] flex flex-col justify-center'>
            <Sectionheading
            heading = "Our Approach to WordPress Design"
             classheading = "text-[32px] leading-[44px] font-[600] mt-[20px] mb-[30px] my-[21px] text-[#333]"
              paragraph = "Our user-first philosophy puts your audience at the center, with designs built on strategy—not just style. Every element aligns with business goals and conversion paths, supported by flexible systems for long-term scalability and seamless handoff to development."
               classparagraph = "w-[100%] max-w-[580px] text-[#333] text-[#333] sans"
                buttontext = "Get Started"
                 buttonclass = "bg-[#ff5722] w-[180px] pt-[12px] pb-[12px] text-[#fce4ec] text-[20px] leading-[22px] rounded-[30px] text-center mt-[25px] transition-all duration-300 hover:bg-[#ED8104]"
              buttonlink="/contact-us"
            />
        </div>
    </div>
  </section>
  )
}
