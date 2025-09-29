import Image from "next/image"

export default function CommunityPurpose() {
  return (
    <section className="community-purpose-section">
        <div className="w-[100%] max-w-[1905px] xl:px-[110px] lg:h-[515px] 2xl:h-[710px] h-autoflex flex lg:flex-row flex-col-reverse pl-[25px] items-center mx-auto " style={{
                backgroundImage: "linear-gradient(#fff, #f6f6f6 4% 11%)",
            }}>
         
                <div className="w-[100%] lg:max-w-[838px] max-w-[100%] lg:pt-[35px] 2xl:pb-[15px] pt-[60px]">
                    <Image className="footer-float lg:mx-[0] mx-auto lg:px-[0px] sm:px-[100px]  block" src="/community.svg" width={570} height={478} alt="" />
                </div>
                <div className="w-[100%] lg:max-w-[680px] max-w-[100%]  lg:pr-[30px] pr-[20px] lg:pl-[0px] pl-[20px] lg:pb-[110px] pb-[100px]">
                    <h2 className="lg:text-[36px] text-[36px] font-[600] text-[#333] lg:mt-[60px] mt-[30px]  raleway leading-[36px] lg:mb-[10px] mb-[0px]">Built on Care. Driven by Purpose</h2>
                   <p className="xl:text-[16px] lg:text-[15px] text-[18px] leading-[24px] text-[#575757] pb-[30px] font-[500] lg:b-[10px] b-[0px] raleway ">We’re more than a creative studio—we’re a community in action. From local initiatives to internal wellness, we show up for each other and for the world around us. Every hour spent serving is part of our mission to lead with heart.</p>
                  <ul className="flex flex-col gap-[20px] mb-[10px] pl-[15px] list-disc">
                    <li className=" text-[15px] text-[#575757] font-[400] leading-[20px] sans">Service with purpose, heart and impact beyond the workplace.</li>
                    <li className=" text-[15px] text-[#575757] font-[400] leading-[20px] sans">Wellness and mindfulness are woven into our daily culture.</li>
                    <li className=" text-[15px] text-[#575757] font-[400] leading-[20px] sans">Diversity fuels creativity, connection and bold new ideas.</li>
                    </ul>             
                </div>
            </div>
     
    </section>
  )
}
