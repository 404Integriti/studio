
import Image from 'next/image'
export default function Performance() {
  return (
   <section className='performance lg:py-[60px] md:py-[40px] py-[20px]'>
    <div className='w-[100%] max-w-[1216px] mx-auto lg:px-[40px] px-[20px] flex lg:flex-row flex-col justify-center items-center lg:gap-[0] gap-[40px]'>
        <div className='w-[100%] lg:max-w-[327px] md:max-w-[600px] max-w-[100%]'>
            <div className='flex flex-col'>
               <h2 className='lg:mt-[60px] md:mt-[30px] mt-[20px] mb-[25px] md:text-[36px] text-[30px] font-[600] leading-[36px]' style={{
                fontFamily: 'var(--font-raleway)',
               }}>Built for Performance</h2>
               <p>We deliver speed-optimized code and a lightweight structure for a smoother user experience. SEO best practices are integrated from day one and our accessible, WCAG-compliant design ensures inclusivity for all users.</p>
            </div>
        </div>
        <div className='w-[100%] max-w-[729px]'>
          <div className='left-set flex md:flex-row flex-col gap-[10px] lg:justify-end justify-center'>
            <div className='first-set flex flex-col justify-center items-center'>
              <div className='rounded-[20px] flex flex-col item-center bg-[#f8f8f8]  px-[30px] py-[20px]'>
                <Image 
                src="/firstset.svg"
                height={184}
                width={260} 
                alt=""
                />
                <h3 className='text-[24px] font-[600] mt-[20px] leading-[30px] mb-[10px] text-[#333]' style={{
                  fontFamily: "var(--font-raleway)",
                }}>Performance First</h3>
                <p className='w-[100%] max-w-[280px] text-[#333] text-[14px] leading-[24px]' style={{
                       fontFamily: "var(--font-Opensans)",
                }}>Speed-optimized code and assets ensure fast load times, smooth performance, improved user experience and higher search rankings.</p>
              </div>
            </div>
            <div className='sec-set flex flex-col justify-center items-center gap-[10px]'>
             <div className='rounded-[20px]  flex flex-col item-center bg-[#f8f8f8] px-[30px] py-[20px]'>
                <Image 
                src="seccolf.svg"
                height={184}
                width={260} 
                alt=""
                />
                <h3 className='text-[24px] font-[600] mt-[20px] leading-[30px] mb-[10px] text-[#333]' style={{
                  fontFamily: "var(--font-raleway)",
                }}>Built for Accessibility</h3>
                <p className='w-[100%] max-w-[280px] text-[#333] text-[14px] leading-[24px]' style={{
                       fontFamily: "var(--font-Opensans)",
                }}>Accessible and WCAG-compliant design ensures inclusivity, usability, legal adherence and improved user satisfaction.</p>
              </div>
                <div className='rounded-[20px] flex flex-col item-center bg-[#f8f8f8] px-[30px] py-[20px]'>
                <Image 
                src="/seccolsec.svg"
                height={184}
                width={260} 
                alt=""
                />
                <h3 className='text-[24px] font-[600] mt-[20px] leading-[30px] mb-[10px] text-[#333]' style={{
                  fontFamily: "var(--font-raleway)",
                }}>Clean & User-Friendly</h3>
                <p className='w-[100%] max-w-[280px] text-[#333] text-[14px] leading-[24px]' style={{
                       fontFamily: "var(--font-Opensans)",
                }}>Clean, lightweight structure for better UX, faster navigation, increased engagement, reduced bounce rates and improved accessibility across devices and platforms.</p>
              </div>

            </div>
          </div>
        </div>
    </div>
   </section>
  )
}
