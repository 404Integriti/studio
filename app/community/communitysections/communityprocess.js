import Image from "next/image"
import Secheading from "../../components/secheading"

export default function Communityprocess() {
  return (
    <div className="w-[100%] max-w-[100%]" style={{
            backgroundImage: "linear-gradient(#f8f8f8, #fff)",
      }}>
    <div className="process-container w-full max-w-[1440px] mx-auto flex items-start lg:flex-row flex-col pt-[60px]" >
      
      <div className="process-image relative w-full lg:max-w-[750px] max-w-[100%] lg:pt-[0px] pt-[30px] lg:px-[0px] px-[20px] ">
        <Image 
          src="/comprocess.png" 
          alt="Process Image" 
          width={720}
          height={862}
        />
      </div>
      
      <div className="process-content lg:mt-[60px] mt-[10px] lg:mb-[0px] mb-[0px] pb-[20px] w-full lg:max-w-[650px] max-w-[100%] lg:h-[686px] h-auto flex flex-col items-center justify-center" style={{
            backgroundImage: "linear-gradient(#f8f8f8, #fff)",
      }}>
        <Secheading
          heading="Our Mission in Action"
        classheading="text-center lg:text-[50px] md:text-[36px] text-[24px] font-[600] lg:leading-[36px] leading-[36px] mt-[20px] mb-[10px] text-[#000]"
          paragraph="At Integriti Studio, our mission goes beyond words—it lives in what we do every day. From designing with purpose to volunteering in our communities, we lead with empathy, creativity, and impact."
             classparagraph="mb-[20px] text-center md:text-[18px] text-[15px] text-[#575757] w-full max-w-[390px] mt-[15px] font-[500] leading-[26px] process-text sans-serif"
          
        />
      </div>
    </div>
    </div>
  )
}
