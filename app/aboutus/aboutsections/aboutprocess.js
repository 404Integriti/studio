import Image from "next/image"
import Secheading from "../../components/secheading"

export default function Aboutprocess() {
  return (
    <section className="w-full">
       <div className="process-container  max-w-[1440px] sm:px-[80px] mx-auto flex  items-center lg:flex-row flex-col pt-[60px]">
      
      <div className="process-image text-center  flex justify-center relative w-full lg:max-w-[750px] max-w-[100%] lg:pt-[0px] pt-[30px] lg:px-[0px] px-[20px]  ">
        <Image 
          src="/processabout.svg" 
          alt="Process Image" 
          width={720}
          height={728}
        />
      </div>
      
      <div className="process-content lg:mt-[60px] mt-[10px] lg:mb-[0px] mb-[40px] pb-[20px] w-full lg:max-w-[650px] max-w-[100%] lg:h-[auto] h-auto flex flex-col items-center justify-center" style={{
            backgroundImage: "linear-gradient(#f8f8f8, #fff)",
      }}>
        <Secheading
          heading="Our Process"
          classheading="text-enter lg:text-[50px] md:text-[36px] text-[24px] font-[600] lg:leading-[36px] leading-[36px] mt-[20px] mb-[10px] text-[#000]"
          paragraph="We sweat the small stuff — animations, transitions, responsiveness — it all matters."
          classparagraph="mb-[20px] text-center md:text-[18px] text-[15px] text-[#575757] w-full max-w-[390px] mt-[15px] font-[500] leading-[26px] process-text sans-serif"
          buttontext="Book an Appointment"
          buttonclass="px-[30px] py-[13px] text-[#fff] rounded-[30px] leading-[20px] bg-[#009688] hover:bg-[#00776c] transition-normal transition-all"
          buttonlink="contact-us"
        />
      </div>

    </div>
    </section>
   
  )
}
