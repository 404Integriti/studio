import Herosection from '../components/heroSection/herosection'
import Image from 'next/image'
import Link from 'next/link'

// ✅ Portfolio data
const portfolioData = [
  {
    id: 1,
    bg: "bg-[#f8f8f8]",
    layout: "left-text", // text on left, image on right
    image: { src: "/list1.png", width: 380, height: 209, alt: "list" },
    heading: "Dermatology clinic Shopify store & Dermatology clinic wordpress website",
    paragraph: (
      <>
        Skin and Hair center website is powered using WordPress providing features like appointment scheduling, eCommerce for products, Service offerings and more.
        <br /><br />
        Skin and Hair Center website was developed for leading aesthetic and derma care doctors in Kansas.
      </>
    ),
    headingClass:"text-[#333] font-[600] raleway md:md:text-[33px] text-[28px] text-[28px] leading-[40px] capitalize my-[10px]",
    paragraphClass:"text-[#575757] sans w-[100%] md:max-w-[440px] max-w-[100%] leading-[20px] text-[16px] my-[10px] font-[400]",
    link: "/skin-and-hair-wordpress-case-study"
  },
  {
    id: 2,
    bg: "bg-[#fff]",
    layout: "left-image", // image on left, text on right
    image: { src: "/list2.png", width: 412, height: 226, alt: "list" },
    heading: "Dental Products",
        headingClass:"text-[#333] font-[600] raleway md:md:text-[33px] text-[28px] text-[28px] leading-[40px] capitalize my-[10px]",
    paragraph: (
      <>
        For real-time pricing updates, we developed a custom Shopify app that is integrated with their SAP system.
        <br /><br />
        This solution guarantees accurate, current pricing, boosts productivity, and keeps a quick, responsive store for a great customer experience.
      </>
    ),
    link: "/zendura-dental-case-study"
  },
  {
    id: 3,
    bg: "bg-[#f8f8f8]",
    layout: "left-text",
    image: { src: "/list3.png", width: 380, height: 209, alt: "list" },
    heading: "Luxury Home Decor",
     headingClass:"text-[#333] font-[600] raleway md:md:text-[33px] text-[28px] text-[28px] leading-[40px] capitalize my-[10px]",
    paragraph: (
      <>
        For us to fully match the client{"'"}s brand and user experience objectives, we modified Shopify{"'"}s default themes.
        <br /><br />
        A responsive, eye-catching store with smooth navigation and simple content administration is the end product.
      </>
    ),
    paragraphClass:"text-[#575757] sans w-[100%] md:max-w-[440px] max-w-[100%] leading-[20px] text-[16px] my-[10px] font-[400]",
    link: "/mero-case-study"
  },
  {
    id: 4,
    bg: "bg-[#fff]",
    layout: "left-image",
    image: { src: "/list4.png", width: 412, height: 226, alt: "list" },
    heading: "Organic Goods",
        headingClass:"text-[#333] font-[600] raleway md:text-[33px] text-[28px] leading-[40px] capitalize my-[10px]",
    paragraph: (
      <>
        We developed an aesthetically pleasing and intuitive eCommerce website that highlights their organic goods.
        <br /><br />
        Their identity and goals are reflected in the distinctive design, which was made after giving considerable thought to their target market and sector.
      </>
    ),
    paragraphClass:"text-[#575757] sans w-[100%] md:max-w-[440px] max-w-[100%] leading-[20px] text-[16px] my-[10px] font-[400]",
    link: "/farmette-case-study"
  },
    {
    id: 5,
    bg: "bg-[#f8f8f8]",
    layout: "left-text",
    image: { src: "/listb.svg", width: 380, height: 209, alt: "list" },
    heading: "Shopify Custom Solution for B2B eCommerce",
     headingClass:"text-[#333] font-[600] raleway md:text-[33px] text-[28px] leading-[40px] capitalize my-[10px]",
    paragraph: (
      <>
        For us to fully match the client{"'"}s brand and user experience objectives, we modified Shopify{"'"}s default themes.  
        <br /><br />
        A responsive, eye-catching store with smooth navigation and simple content administration is the end product. 
      </>
    ),
    paragraphClass:"text-[#575757] sans w-[100%] md:max-w-[440px] max-w-[100%] leading-[20px] text-[16px] my-[10px] font-[400]",
    link: "/b2b-ecommerce-client-case-study"
  },
    {
    id: 6,
    bg: "bg-[#fff]",
    layout: "left-image",
    image: { src: "/list7.png", width: 412, height: 226, alt: "list" },
    heading: "Pharmaceutical and beauty shopify ecommerce store",
        headingClass:"text-[#333] font-[600] raleway md:text-[33px] text-[28px] leading-[40px] capitalize my-[10px]",
    paragraph: (
      <>
       We developed an aesthetically pleasing and intuitive eCommerce website that highlights their organic goods.
        <br /><br />
       Their identity and goals are reflected in the distinctive design, which was made after giving considerable thought to their target market and sector.  
      </>
    ),
    paragraphClass:"text-[#575757] sans w-[100%] md:max-w-[440px] max-w-[100%] leading-[20px] text-[16px] my-[10px] font-[400]",
    link: "/nett-pharmacy-case-study"
  },
       {
    id: 7,
    bg: "bg-[#f8f8f8]",
    layout: "left-text",
    image: { src: "/listnew.png", width: 380, height: 209, alt: "list" },
    heading: "Protein supplement ecommerce store",
     headingClass:"text-[#333] font-[600] raleway md:text-[33px] text-[28px] leading-[40px] capitalize my-[10px]",
    paragraph: (
      <>
      We approached their digital transformation with a clear focus on usability, scale, and performance. By combining clean design, structured navigation, SEO-optimized content, and smart automation, we built a store that supports 14,000+ products without overwhelming the user.
        <br />  <br />
       Every feature was designed to serve a purpose—making product discovery easier, checkout faster, and backend operations smoother.
      </>
    ),
    paragraphClass:"text-[#575757] sans w-[100%] md:max-w-[440px] max-w-[100%] leading-[20px] text-[16px] my-[10px] font-[400]",
    link: "/protein-supplement-ecommerce-store"
  },
     {
    id: 6,
    bg: "bg-[#fff]",
    layout: "left-image",
    image: { src: "/list8.png", width: 412, height: 226, alt: "list" },
    heading: "Beauty Brand In ANZ",
        headingClass:"text-[#333] font-[600] raleway md:text-[33px] text-[28px] leading-[40px] capitalize my-[10px]",
    paragraph: (
      <>
      A collaboration with a fast-growing beauty brand in Australia and New Zealand to elevate the digital shopping journey. The entire checkout flow was reimagined with custom scripts and UI extensions to reduce drop-offs and boost conversions.
        <br />
      A tailored recommendation quiz helped personalize the product selection process, while multi-shipping logic ensured seamless regional fulfillment.  
      <br /> <br/>
      The result: a sleek, high-performing Shopify storefront that matched the brand’s premium identity and delivered a noticeably smoother customer experience.
      </>
    ),
    paragraphClass:"text-[#575757] sans w-[100%] md:max-w-[440px] max-w-[100%] leading-[20px] text-[16px] my-[10px] font-[400]",
    link: "/beauty-brand-in-anz"
  },
];

export default function Porfoliolist() {
  return (
    <div className="porfolio-list">
      {portfolioData.map((item,index) => {
        const isLeftText = item.layout === "left-text";
        const isLeftImage = item.layout === "left-image";

        return (
          <div key={index} className={`${item.bg}`}>
            <div className="py-[40px] w-[100%] max-w-[1000px] flex md:flex-row flex-col mx-auto lg:px-[0px] md:px-[30px]  px-[20px] md:gap-[0px]">
              
              {/* ✅ If text is left */}
              {isLeftText && (
                <>
                  <div className="list-content w-[100%] md:max-w-[580px] max-w-[100%] flex flex-col items-start pr-[10px]   ">
                    <Herosection
                    sectionpadding={'!bg-none'}
                      heading={item.heading}
                      headingClass={item.headingClass}
                      paragraph={item.paragraph}
                      paragraphClass={item.paragraphClass}
                    />
                    <Link href={item.link} className="text-[#1c1c1c] border border-[#e64a19] rounded-[20px] mt-[20px] py-[9px] px-[15px] text-[15px] leading-[20px] font-[600] hover:text-[#e64a19]">
                      Learn More
                    </Link>
                  </div>
                  <div className="list-image w-[100%] max-w-[450px] hidden md:flex flex-col items-center justify-center pr-[10px]">
                    <Image src={item.image.src} width={item.image.width} height={item.image.height} alt={item.image.alt} />
                  </div>
                </>
              )}

              {/* ✅ If image is left */}
              {isLeftImage && (
                <>
                  <div className="list-image w-[100%] md:max-w-[580px]  hidden md:flex flex-col  items-start justify-center pr-[10px]">
                    <Image src={item.image.src} width={item.image.width} height={item.image.height} alt={item.image.alt} />
                  </div>
                  <div className="list-content w-[100%] md:max-w-[450px] max-w-[100%] flex flex-col items-start md:pl-[40px] pl-[0px]">
                    <Herosection
                      heading={item.heading}
                      
                      headingClass={item.headingClass}
                      paragraph={item.paragraph}
                      paragraphClass={item.paragraphClass}
                      sectionpadding={"!bg-none"}
                    />
                    <Link href={item.link} className="text-[#1c1c1c] border border-[#e64a19] hover:text-[#e64a19] rounded-[20px] mt-[20px] py-[9px] px-[15px] text-[15px] leading-[20px] font-[600]">
                      Learn More
                    </Link>
                  </div>
                </>
              )}

            </div>
          </div>
        );
      })}
    </div>
  )
}
