import Image from "next/image";
import Herobutton from "@/app/components/herobuttons/herobutton";
import Wordpressservices from "@/app/components/wordpressServices/wordpressServices";
export default function WordpressServices() {
  return (
    <section className=" w-[100%] mx-auto text-[#333333] bg-[#F8F8F8]">
      <div className=" max-w-[1440px]  px-[20px] sm:p-[60px] flex lg:flex-row flex-col space-y-[80px] mx-auto justify-center ">
        <div
          className=" lg:w-[60%]  relative"
          style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
              WordPress Design: <br />
              The Modular Experience
            </h3>
            <p className="text-[14px] w-[84%] ">
              Why limit your creativity to static templates? We design modular,
              interactive systems that empower your team to manage content with
              agility.
            </p>
            <div className="flex justify-baseline ">
              <Herobutton
                btnpadfirst="hero-btn-dental !text-[18px] !max-w-[400px] !mt-[0px] raleway !px-[32px] !py-[10px] !font-[400] flex"
                btnpadsec="hidden"
                buttonwidth=" sm:!280px"
                buttonheight="!18px"
                firstButtonText="Expolre Wordpress Design"
                secondButtonText=""
                firstButtonlink="/wordpress-design"
                secondButtonlink="/portfolio"
              />
            </div>
          </div>
        </div>
        <div className="   flex justify-center">
          <Wordpressservices />
        </div>
      </div>
    </section>
  );
}
