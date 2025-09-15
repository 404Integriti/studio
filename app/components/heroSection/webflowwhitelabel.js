import Herosection from "@/app/components/heroSection/herosection";
import IconOrangeButton from "@/app/components/OrangeButton/IconOrangeButton";

export default function Wordpresssupporthero() {
  return (
    <Herosection
      sectionpadding="lg:py-[120px] md:py-[60px] py-[40px] lg:pb-[100px] md:pb-[80px] pb-[60px] lg:pt-[100px] md:pt-[50px] lg:px-[0px] px-[15px]"
      heading={
        <>
          <span className="hero-orange">Webflow </span> White Label{" "}
          <span className="hero-orange">Development </span>
        </>
      }
      headingClass="lg:max-w-[900px] md:max-w-[740px] mx-auto text-center mt-[20px] mb-[20px] lg:leading-[68px] lg:text-[60px] md:text-[36px] text-[28px] md:leading-[55px] leading-[40px] font-[800]"
      paragraph="Looking for a Webflow partner who works like an extension of your agency? We work behind the scenes, helping you deliver powerful, high-performance Webflow websites to your clients while you take full credit. From development to launch, we stay invisible—you stay in control."
      paragraphClass="max-w-[722px] mx-auto text-center mt-[19px] lg:text-[20px] text-[16px] leading-[28px]"
      buttons={
        <div className="flex justify-center mt-6">
          <IconOrangeButton text="Start Your Partnership" href="/contact-us" />
        </div>
      }
    />
  );
}
