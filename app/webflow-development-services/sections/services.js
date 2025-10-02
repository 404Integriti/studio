import Herobutton from "@/app/components/herobuttons/herobutton";
import WebflowDevelopment from "@/app/components/webflowdevelopmentservices/webflowdevelopment";
export default function WebflowServices() {
  return (
    <section className=" w-[100%] mx-auto text-[#333333]  bg-[#F8F8F8]">
      <div className=" max-w-[1440px]  px-[20px] sm:p-[60px] flex lg:flex-row flex-col space-y-[80px] mx-auto justify-center ">
        <div
          className=" lg:w-[60%]  relative"
          style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#F8F8F8",
          }}
        >
          <div className="flex flex-col  mt-[40px] sm:mt-[80px] max-w-[620px]  lg:mx-[34px] xl:mx-[48px] ">
            <h3
              className="font-[600] text-[31px] leading-[38px] mt-[0px] mb-[10px] lg:w-[80%]"
              style={{
                fontFamily: "var(--font-raleway)",
              }}
            >
              Webflow Design
            </h3>
            <p className="text-[14px] w-[84%] ">
              Web design isn’t just how your website looks—it’s how your brand
              feels online. At Integriti Studio, we use Webflow to bridge bold
              creative with flawless execution. Your website should tell a
              story, guide the user, and turn visitors into believers. It’s not
              just design—it’s your brand, brought to life with intent and
              precision.
            </p>
            <div className="flex justify-baseline ">
              <Herobutton
                btnpadfirst="hero-btn-dental !text-[18px] !max-w-[400px] !mt-[0px] raleway !px-[32px] !py-[10px] !font-[400] flex"
                btnpadsec="hidden"
                buttonwidth=" sm:!280px"
                buttonheight="!18px"
                firstButtonText="Expolre Webflow Design"
                secondButtonText=""
                firstButtonlink="/webflow-design"
                secondButtonlink="/portfolio"
              />
            </div>
          </div>
        </div>
        <div className="   flex justify-center">
          <WebflowDevelopment />
        </div>
      </div>
    </section>
  );
}
