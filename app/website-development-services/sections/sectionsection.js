import Link from "next/link";
import Herosection from "@/app/components/heroSection/herosection";
import DemoStepCarousel from "./card-carousel";

export default function SectionSection() {
  return (
    <section
      className="custom-wordpress-solution"
      style={{
        backgroundImage: "linear-gradient(#f9f8f84d, #f5f1f1 8%)",
      }}
    >
      <div
        className="w-[100%] max-w-[1440px] mx-auto xl:px-[50px] flex lg:flex-row flex-col justify-center items-center
                         gap-[46px] sm:pt-[30px] lg:pb-[120px] md:pb-[80px] pb-[60px]"
      >
        <div className="w-[100%] max-w-[700px] lg:max-w-[40%] lg:pl-[40px] px-[20px]">
          <Herosection
            heading={
              <>
                Custom <span className="hero-orange">WordPress</span> Solutions,
                Built for Flexibility & Scale
              </>
            }
            headingClass="text-left leading-[42px] text-[#333] md:text-[36px] text-[30px] font-[600] mb-[10px] creativebtn "
            paragraph="Trusted by over one million brands, our industry-leading eCommerce platform offers powerful built-in tools for sales, marketing and scalability—everything you need to grow. We specialize in custom builds that go beyond off-the-shelf themes, delivering unique solutions tailored to your business. With proven experience across a wide range of industries—from fashion to fitness—our transparent, collaborative process ensures results that drive success."
            paragraphClass="mb-[25px] text-[16px] leading-[28px] text-[#333] pb-[15px]"
          />
          <Link
            href="/wordpress-development-services"
            className="px-[15px] py-[10px] h-[22px] bg-[#e64a19] rounded-[30px] w-[100%] max-w-[241px] 
                       text-[16px] text-[#fce4ec] font-[400] hover:bg-[#ED8104] duration-300"
            style={{
              fontFamily: "Raleway, sans-serif",
            }}
          >
            Explore WordPress Services
          </Link>
        </div>
        <div className="w-[100%] max-w-[851px] lg:max-w-[60%] lg:px-[40px] xl:pl-[101px] ">
          <DemoStepCarousel />
        </div>
      </div>
    </section>
  );
}
