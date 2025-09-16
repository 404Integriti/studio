import Herosection from "@/app/components/heroSection/herosection";
import Herobutton from "@/app/components/herobuttons/herobutton";

export default function Shopifydesignhero() {
  return (
     <Herosection
        sectionpadding="lg:py-[120px] md:py-[60px] py-[40px] lg:pb-[100px] md:pb-[80px] pb-[60px] lg:pt-[100px] md:pt-[50px] lg:px-[0px] px-[15px] text-[]"
        heading={
          <>
           <span className="hero-orange">Beautifully Designed Stores That Convert </span> 
          </>
        }
        headingClass="lg:max-w-[916px] md:max-w-[740px] mx-auto text-center mt-[20px] mb-[20px] lg:leading-[68px] lg:text-[50px] md:text-[36px] text-[28px] md:leading-[55px] leading-[40px] font-[800]
                      "
        paragraph="Your online store is more than a product catalog—it's your brand's first impression. At Integriti Studio, we design visually stunning Shopify storefronts that not only wow the visitors but also drive real sales. We combine strategy, storytelling and design precision to build custom themes that feel premium and perform like powerhouses. Design is where emotion meets function—and we get both right."
        paragraphClass="max-w-[740px] mx-auto text-center mt-[19px] lg:text-[18px] text-[#333] text-[16px] leading-[32px] leading-[28px] "
        buttons={
          <Herobutton 
            btnpadfirst="px-[10px] py-[15px] lg:text-[20px] text-[14px] mt-[20px] raleway"
            btnpadsec="hidden"
            buttonwidth="200px"
            buttonheight="50px"
            firstButtonText="Get Started"
            secondButtonText=""
            firstButtonlink="/contact-us"
            secondButtonlink=""
          />
     
        }
      />
  )
}
