import Image from "next/image"

export default function CommunityPurpose() {
  return (
    <section className="community-purpose-section">
        <div className="w-[100%] max-w-[1905px] lg:px-[110px] lg:h-[550px] 2xl:h-[710px] h-autoflex flex lg:flex-row flex-col-reverse pl-[25px] items-center mx-auto " style={{
                backgroundImage: "linear-gradient(#fff, #f6f6f6 4% 11%)",
            }}>
         
                <div className="w-[100%] lg:max-w-[838px] max-w-[100%] lg:pt-[50px] 2xl:pb-[15px] pt-[60px]">
                    <Image className="footer-float lg:mx-[0] mx-auto lg:px-[0px] sm:px-[100px]  block" src="/community.svg" width={804} height={675} alt="" />
                </div>
                <div className="w-[100%] lg:max-w-[680px] max-w-[100%] mt-[82px] lg:pr-[30px] pr-[20px] lg:pl-[0px] pl-[20px] lg:pb-[60px] pb-[10px]">
                    <h2 className="lg:text-[42px] text-[36px] font-[600] text-[#333] lg:mt-[60px] mt-[30px] pb-[25px] raleway leading-[36px] lg:mb-[10px] mb-[0px]">Built on Care. Driven by Purpose</h2>
                   <p className="lg:text-[20px] text-[18px] leading-[28px] text-[#575757] pb-[20px] font-[500] lg:b-[10px] b-[0px] raleway ">We’re more than a creative studio—we’re a community in action. From local initiatives to internal wellness, we show up for each other and for the world around us. Every hour spent serving is part of our mission to lead with heart.</p>
                  <ul className="flex flex-col gap-[20px] mb-[10px] pl-[15px] list-disc">
                    <li className="lg:text-[20px] text-[18px] text-[#575757] font-[400] leading-[20px] sans">Service with purpose, heart and impact beyond the workplace.</li>
                    <li className="lg:text-[20px] text-[18px] text-[#575757] font-[400] leading-[20px] sans">Wellness and mindfulness are woven into our daily culture.</li>
                    <li className="lg:text-[20px] text-[18px] text-[#575757] font-[400] leading-[20px] sans">Diversity fuels creativity, connection and bold new ideas.</li>
                    </ul>             
                </div>
            </div>
     
    </section>
  )
}
