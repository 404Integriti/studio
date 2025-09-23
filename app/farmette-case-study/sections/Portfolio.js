import PortfolioSlider from '@/app/components/portfolioslider/page';
import Secheading from '@/app/components/secheading';
 // ✅ not from page.js

export default function Portfolio() {
 const portfolioImages = [
    {img:'/portfolio1.png',
      link:'/mero-case-study'
    },
    {img:'/portfolio2.png',
      link:'/nett-pharmacy-case-study'
    },
    {img:'/portfolio3.png',
      link:'/skin-and-hair-shopify-case-study'
    },
    {img:'/portfolio5.png',
      link:'/zendura-dental-case-study'
    },
    {img:'/portfolio6.png',
      link:'/skin-and-hair-wordpress-case-study'
    },
    {img:'/portfolio7.png',
      link:'/protein-supplement-ecommerce-store'
    },
  ];

  return (
    <div className="portfolio-container lg:pb-[150px] pt-[50px] pb-[80px]">
      <Secheading
        heading="Other Case Studies"
        classheading="md:text-[50px] text-[35px] font-[600] leading-[78px] md:leading-[35px] pb-[22px] text-[#333] mt-[20px] mb-[10px] text-center"
        classparagraph="mb-[10px] text-[#333] md:text-[24px] sm:text-[20px] text-[17px] md:leading-[32px] leading-[28px] md:px-[0] px-[15px] text-center"
        paragraph="We sweat the small stuff — animations, transitions, responsiveness — it all matters."
      />

      <PortfolioSlider images={portfolioImages} />
    </div>
  );
}
