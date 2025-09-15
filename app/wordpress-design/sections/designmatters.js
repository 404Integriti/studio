'use client';
import Image from "next/image";
import { designmatters } from "../../components/customThemePoints"; // adjust path to your designmatters data


const PluginIntegration = () => {
  return (
    <section className="  py-[80px] bg-[#f8f8f8]">
      <div className="w-full max-w-[1052px] mx-auto ">
      <h2 className="md:text-[36px] text-[30px] font-[600] text-center leading-[36px] text-[#333333] raleway :pb-[60px] md:pb-[50px] pb-[40px]"> Why Design Matters in WordPress</h2>
      <div className="flex justify-center items-center flex-wrap lg:gap-x-[35px] gap-x-[0px] lg:gap-y-[36px] gap-y-[0px]">
        {designmatters.map((feature, index) => (
          <div
            key={index}
            className="rounded-[20px] flex flex-col items-center justify-center text-center transition-colors duration-300 bg-[#f8f8f8] w-[100%] max-w-[298px] h-[313px] px-[22px] md:mx-[0px] mx-auto"
          >
           
              <Image
                src={feature.icon}
                alt={feature.title}
                width={40}
                height={40}
              />
                          <h3 className="text-[18px] font-semibold mb-4 mt-4 text-[#333333] raleway">
              {feature.title}
            </h3>
            <p className="text-[#333333] text-[17px] raleway">{feature.description}</p>
            </div>

          
        ))}
      </div>
      </div>
    </section>
  );
};

export default PluginIntegration;
