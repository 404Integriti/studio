import Image from 'next/image';
import Shopservicers from "@/app/components/webflowWhitelabel/page";

export default function WhyMakeIntegriti() {
  return (
    <section className='pb-[40px]'>
      {/* Heading */}
     <div className='flex justify-center'>
       <h3
        className="w-full min-[991px]:w-[54%] xl:w-[40%] leading-[35px] text-[28px] text-[#333] font-bold mt-[60px] pb-[30px] text-center"
        style={{ fontFamily: "var(--font-raleway)" }}
      >
        Why Make Integriti Studio Your White Label Webflow Agency?
      </h3>
     </div>

      {/* Content Wrapper */}
      <div className="w-full max-w-[1300px] min-[1290px]:max-w-[1440px] flex md:flex-row flex-col mx-auto gap-[60px]">
        
        {/* Left Side Image */}
        <div className="hidden md:flex w-[50%] items-start relative">
          <Image
            src="https://cdn.prod.website-files.com/683f4d103b2510d5796dca20/685ef5addba351a911a75cdb_Integriti%20icon.svg"
            width={1000}
            height={1000}
            alt="Shopify Services Icon"
            className="relative z-[999]  w-[72%] min-[990px]:max-w-[100%] min-[1153px]:w-[673px] min-[1280px]:w-[clamp(600px,calc(600px+((100vw-1280px)/2)),673px)]
                       md:h-[400px] lg:h-[600px]"
            unoptimized
          />
        </div>

        {/* Right Side with Services */}
        <div className="w-full min-[479px]:max-w-[100%] min-[991px]:w-[480px] min-[991px]:max-w-[940px] min-[1280px]:ml-[77px] xl:ml-[0px] ">
  <div className="mt-[40px]">
    <div className=' max-[768px]:flex justify-center'>
      <Shopservicers />
    </div>
  </div>
        </div>
      </div>
    </section>
  );
}
