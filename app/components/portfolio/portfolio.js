import Secheading from '../secheading';
import PortfolioSlider from "../portfolioslider/page"; // ✅ not from page.js

export default function Portfolio() {
  const portfolioImages = [
    '/portfolio1.png',
    '/portfolio2.png',
    '/portfolio3.png',
    '/portfolio5.png',
    '/portfolio6.png',
    '/portfolio7.png'
  ];

  return (
    <div className="portfolio-container lg:pb-[150px] pt-[50px] pb-[80px]">
      <Secheading
        heading="Our Portfolio"
        classheading="md:text-[50px] text-[35px] font-[600] leading-[78px] md:leading-[35px] pb-[10px] text-[#333] mt-[20px] mb-[10px] text-center"
        classparagraph="mb-[10px] text-[#333] md:text-[24px] sm:text-[20px] text-[17px] md:leading-[32px] leading-[28px] md:px-[0] px-[15px] text-center"
        paragraph="We sweat the small stuff — animations, transitions, responsiveness — it all matters."
      />

      <PortfolioSlider images={portfolioImages} />
    </div>
  );
}
