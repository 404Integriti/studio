import Image from 'next/image';
import Shopservicers from "@/app/components/webflowWhitelabel/page";

export default function Mianshopifyservices() {
  return (
    <section>
      {/* Heading */}
      <h2
        className="flex w-[45%] text-[28px] text-[#333] font-bold mt-[60px] pb-[30px] mx-auto text-center"
        style={{ fontFamily: "var(--font-raleway)" }}
      >
        Why Make Integriti Studio Your White Label Webflow Agency?
      </h2>

      {/* Content Wrapper */}
      <div className="w-full max-w-[1440px] py-[60px] 
                      flex md:flex-row flex-col mx-auto gap-[60px]">
        
        {/* Left Side Image */}
        <div className="hidden md:flex w-full md:max-w-[400px] lg:max-w-[562px] items-start relative">
          <Image
            src="https://cdn.prod.website-files.com/683f4d103b2510d5796dca20/685ef5addba351a911a75cdb_Integriti%20icon.svg"
            width={1000}
            height={1000}
            alt="Shopify Services Icon"
            className="relative z-[999] translate-y-20 
                       md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]"
            unoptimized
          />
        </div>

        {/* Right Side with Services */}
        <div className="w-full lg:max-w-[940px]">
  <div className="mt-[45px]">
    <Shopservicers />
  </div>
        </div>
      </div>
    </section>
  );
}
