import Powerfulshopify from "../../components/websiteservices/powerfullshopfiy";
import Image from "next/image";
export default function PowerfulShopifymain() {



  return (
   <section  style={{
    backgroundImage: 'linear-gradient(#f5f1f1 100%, #fff)',
   }}>

<div className='w-[100%] max-w-[1440px]  mx-auto lg:px-[40px] px-[20px]  pb-[40px]'>
    <div className='pt-[60px] flex gap-[60px] lg:flex-row flex-col justify-center items-center'>
        <div className='w-[100%] max-w-[650px]'>
            <Image src="/ps.png" alt="Powerful Shopify" width={628} height={382} />
        </div>
        <div className='w-[100%] max-w-[650px]'>
            <Powerfulshopify 
            heading={
                <>
                Powerful <span className="hero-orange">Shopify</span> Stores That  Sell More
                </>
            } 
            headingClass="w-[100%] max-w-[500px] md:text-[36px] text-[30px] font-[600] leading-[42px] md:mt-[20px] mt-[10px] md:mb-[20px] mb-[10px] text-[#333]" 
            text="We don’t just build Shopify stores—we build online businesses. Whether you’re a startup launching your first collection or an established brand ready to scale with Shopify Plus, we craft stores designed to grow with you. No templates, no shortcuts—just thoughtful design, seamless integrations, and powerful custom features to help you sell more, faster and better." 
            textClass="w-[100%] max-w-[552px] text-[16px] mb-[10px] leading-[20px] " 
            listclass="leading-[40px] pl-[20px] md:text-[18px] text-[16px] leading-[24px] mt-[10px] w-[100%] md:max-w-[49%] max-w-[100%] text-[#333]"
            linktextf="Custom Builds"
            linktexts="Advanced Integrations"
            linktextt="Conversion Focused"
            linktextfo="Growth Ready"
             buttontext="Explore Shopify Services" 
             buttoncclass="px-[15px] mt-[30px] py-[10px] bg-[#e64a19] rounded-[30px] w-[100%] max-w-[241px] h-[42px]  text-center text-[16px] text-[#fce4ec] font-[400] leading-[22px] hover:bg-[#ED8104] duration-300 "
              buttonlink="/shopify-development-services" />
        </div>
    </div>
</div>
   </section>
   
  )
}
