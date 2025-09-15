
import Image from 'next/image';
import Shopservicers from "@/app/components/shopifyservices/page";
export default function Mianshopifyservices() {
  return (
  <section className='xl:px-[30px] px-[20px]'>
  <div className='w-[100%] max-w-[1440px] py-[60px] flex lg:flex-row flex-col mx-auto justify-center xl:gap-[60px] gap-[100px]'>
    <div className='w-[100%] lg:max-w-[562px] xl:mx-[0px] mx-[auto] flex justify-center items-center relative'>
        <Image
        src="/shopifyservice.png"
        width={505}
        height={380}
        alt='shopifyservice'
        className='relative z-[999]'
        />
        <Image 
        src="/bg.png"
        width={472}
        height={471}
        alt='shopifyservice'
        className='absolute z-[9] xl:left-[30px] md:left-[20%] sm:left-[5%] lg:top-[110px] top-[-20px]'
        
        />
    </div>
    <div className='w-[100%] lg:max-w-[599px] max-w-[100%]'>
        <h2 className='lg:text-[36px] text-[30px] font-[600] lg:leading-[50px] leading-[40px]  text-left text-[#333]' style={{
            fontFamily: "var(--font-raleway)",
        }}>Our Shopify Development Services</h2>
        <div className='mt-[45px]'>
        <Shopservicers />
        </div>
    </div>
  </div>
  </section>
  )
}
