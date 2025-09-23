import Image from 'next/image';
import Link from 'next/link';


export default function Shopifyapproch() {
  return (
  <section className="bg-white bg-[linear-gradient(#fff,#fff_26%)] pt-[20px] pb-[60px]">
    <div className='w-[100%] max-w-[1480px] flex mx-auto justify-center lg:flex-row flex-col lg:gap-[0px] gap-[50px]'>
        <div className='w-[100%] lg:max-w-[720px] max-w-[100%] lg:pl-[60px] pl-[20px] pr-[20px] flex flex-col '>
            <h4 className='text-[#333] mt-[60px] pb-[25px] md:text-[36px] text-[30px] font-[600] leading-[36px]' style={{
                fontFamily: "var(--font-raleway)",
            }}>Our Approach to Shopify Design</h4>
            <p className='leading-[24px] text-[16px] text-[#575757] pb-[20px] font-[500]'style={{
                fontFamily: "var(--font-raleway)",
            }}>Our Shopify design approach starts with brand-first thinking—ensuring every layout reflects your unique identity. We combine mobile-first usability with conversion-focused structure, using real user behavior data to shape decisions that move the needle. Everything we design is scalable, flexible and built to evolve with your store.</p>
            <ul style={{
                        fontFamily: "var(--font-raleway)",
                    }}>
                <li className='flex justify-start items-start pb-[15px]'>
                    <Image src="/shopifycheck.svg" width={16} height={20} alt='check'/> <span className='text-[#575757] text-[14px] pl-[15px] font-[500]' >Mobile-friendly layouts that prioritize speed and ease of use.</span>
                </li>
               <li className='flex justify-start items-start pb-[15px]'>
                    <Image src="/shopifycheck.svg" width={16} height={20} alt='check'/> <span className='text-[#575757] text-[14px] pl-[15px] font-[500]' >Structure optimized for clicks, conversions  and repeat purchases.</span>
                </li>
                 <li className='flex justify-start items-start pb-[15px]'>
                    <Image src="/shopifycheck.svg" width={16} height={20} alt='check'/> <span className='text-[#575757] text-[14px] pl-[15px] font-[500]' >Flexible components that grow with your product catalog and brand.</span>
                </li>

            </ul>
            <Link href="/contact-us"  className='bg-[#e64a19] hover:bg-[#ed8104] text-center mt-[20px] pt-[15px] pb-[15px] text-[18px] font-[400] leading-[22px] text-[#fff] inline rounded-[30px] w-[100%] max-w-[220px]' style={{
                        fontFamily: "var(--font-raleway)",
                    }}> Work With Us</Link>
        </div>
        <div className='w-[100%] lg:max-w-[649px] max-w-[100%] lg:pr-[64px] pl-[20px] pr-[20px]'>
            <Image 
            src='/shopifylaptop.svg'
            height={450}
            width={584}
            className='footer-float'
            />
        </div>
    </div>
  </section>
  )
  
}
