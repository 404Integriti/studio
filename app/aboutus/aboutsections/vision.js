import Vision from "../../components/vision/page.js";

export default function Mainvision() {
  return (
    <Vision 
    leftimage="/visionleft.svg"
    leftimageheight={299}
    leftimagewidth={600}
    toprighthead={
        <>
          <span className="hero-orange">Our </span>Philosophy
        </>
      }
    toprightheadclass="raleway lg:text-[36px] text-[30px] font-[600] mt-[20px] leading-[30px] mb-[10px] text-[#333]"
    toprighttext="At Integriti Studio, we’re all about keeping it real. We take your ideas and transform them into something that will benefit your company and look fantastic. We concentrate on what really counts: coming up with solutions that make sense for you, whether that means designing a seamless, useful website or customizing an e-commerce store that feels just right. "
    toptextclass="lg:text-[16px] text-[15px] leading-[22px] sans opacity-[.75] w-[100%] lg:max-w-[90%] xl:max-w-[78%]  mt-[20px] mb-[10px]"
    sechead={
        <>
          <span className="hero-orange">Marketing</span> Is More Than Simply Selling; It{"'"}s About Making A <span className="hero-orange">Difference.</span>That’s The Philosophy That Birthed <span className="hero-orange">Integriti Studio.</span>
        </>
      }
    secheadclass="lg:text-[38px] text-[25px] lg:leading-[48px] leading-[35px] raleway text-[#333] font-[700] mb-[10px] mr-[40px]"
    thirdhead={
        <>
          <span className="hero-orange">Our  </span> Vision
        </>
      }
    thirdheadclass="lg:text-[36px] text-[30px] font-[600] lg:leading-[44px] leading-[40px] raleway mt-[60px] mb-[10px] "
    thirdtext="We empower businesses through clear communication, strategic collaboration and a forward-thinking approach, driving measurable results and achieving their marketing goals."
    thirdtextclass="w-[100%] max-w-[77%] sans text-[16px] leading-[21px] mb-[10px] text-[#333] pr-[46px]"
    lastimage="/world.svg"
    lastimageheight={99}
    lastimagewidth={650}
  />
  )
}
