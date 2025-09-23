import Herobutton from "@/app/components/herobuttons/herobutton";
import Image from "next/image";

export default function HowToConnect() {
  return (
    <section
      className="w-full  py-8 bg-[#f1f1f1] "
      style={{ fontFamily: "var(--font-raleway)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        {/* Title */}
        <h2 className=" text-[28px] font-bold text-[#000] mb-[15px]">
          How to Connect
        </h2>

        {/* Steps */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center  w-[100%]  mb-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center max-w-[80%]  lg:max-w-[60%] pt-[50px]">
            <div className="min-w-[68px] sm:min-w-[78px] lg:min-w-[140px] rounded-full bg-[#e64a19] flex items-center justify-center mb-6">
              <Image
                src="/WordpressWhitelabel/schedule.svg"
                alt="Deliver With Confidence"
                width={250}
                height={250}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "60px",
                }}
                className="min-w-[68px] sm:min-w-[78px] lg:min-w-[140px]"
              />
            </div>
            <h3 className="font-semibold text-[16px] mb-3">
              Schedule a Discovery Call
            </h3>
            <p className=" text-[15px]  font-[500] leading-[19px]" style={{ fontFamily: "var(--font-opensans)" }} >
              Tell us about your project, client needs, and expectations. We’ll
              share how we can integrate into your workflow.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center    max-w-[80%]  lg:max-w-[60%] pt-[50px]">
            <div className="min-w-[68px] sm:min-w-[78px] lg:min-w-[140px] rounded-full bg-[#8bc34a] flex items-center justify-center mb-6">
              <Image
                src="/WordpressWhitelabel/share.svg"
                alt="Deliver With Confidence"
                width={250}
                height={250}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "60px",
                }}
                className="min-w-[68px] sm:min-w-[78px] lg:min-w-[140px]"
              />
            </div>
            <h3 className="font-semibold  text-[16px] mb-3">Share Your Brief</h3>
            <p className=" text-[15px] font-[500]  leading-[19px]" style={{ fontFamily: "var(--font-opensans)" }} >
              Provide your designs, scope, and deadlines. We begin the build
              immediately with quality assurance baked into every step.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center sm:col-span-full lg:col-span-1 text-center  max-w-[80%] sm:max-w-[40%]  lg:max-w-[60%] pt-[50px]">
            <div className="min-w-[68px] sm:min-w-[78px] lg:min-w-[140px]  rounded-full bg-[#00bcd4] flex items-center justify-center mb-6">
              <Image
                src="/WordpressWhitelabel/deliver.svg"
                alt="Deliver With Confidence"
                width={250}
                height={250}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "60px",
                }}
                className="min-w-[68px] sm:min-w-[78px] lg:min-w-[140px]"
              />
            </div>
            <h3 className="font-semibold text-[16px] mb-3">
              Deliver With Confidence
            </h3>
            <p className=" text-[15px] font-[500] leading-[19px]" style={{ fontFamily: "var(--font-opensans)" }} >
              We work silently in the background while you present a polished
              product to your client. On time and on brand.
            </p>
          </div>
        </div>

        {/* Button */}
        {/* <button className="bg-[#e64a19] text-white  text-[18px] px-[35px] py-[10px] rounded-full hover:bg-[#d84315] transition">
          Get started in 3 simple steps
        </button> */}
         <Herobutton
                  btnpadfirst="!leading-[22px] !py-[0px] !raleway !max-w-[320px] !h-[46px] !w-[300px] sm:!h-[48px]  !text-[16px] sm:!text-[18px]  !mx-[40px] sm:mx-0"
                  buttonwidth="320px"
                  buttonheight="50px"
                  firstButtonText="Get started in 3 simple steps"
                  firstButtonlink="/contact-us"
                  btnpadsec="hidden"
                  secondButtonText=""
                  secondButtonlink=""
                  style={{ fontFamily: "var(--font-raleway)" }}
                />
      </div>
    </section>
  );
}
