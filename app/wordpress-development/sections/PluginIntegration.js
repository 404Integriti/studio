import Image from "next/image";
import { features } from "../../components/customThemePoints"; // adjust path to your features data
import SectionHeading from "../../components/secheading"; // adjust path

const PluginIntegration = () => {
  return (
    <section className="w-full max-w-[1060px] mx-auto px-[10px] py-[80px]">
      <h2 className="md:text-[36px] text-[30px] font-[600] text-center leading-[36px] text-[#333333] raleway lg:pb-[130px] md:pb-[90px] pb-[60px]"> Plugin Integration & Custom Functionality</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[35px] gap-y-[36px] justify-items-center ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-[20px]  flex flex-col items-center justify-center text-center transition-colors duration-300 bg-[#f8f8f8] w-[100%] max-w-[298px] h-[313px] px-[22px] md:mx-[0px] mx-auto "
          >
           
              <Image
                src={feature.icon}
                alt={feature.title}
                width={72}
                height={72}
              />
                          <h3 className="text-[18px] font-semibold mb-4 mt-4 text-[#333333] raleway">
              {feature.title}
            </h3>
            <p className="text-[#333333] text-[17px] raleway">{feature.description}</p>
            </div>

          
        ))}
      </div>
    </section>
  );
};

export default PluginIntegration;
