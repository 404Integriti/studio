import Image from "next/image";
import { maintenanceSupport } from "../../components/customThemePoints";


const StoreHealthMonitoring = () => {
  return (
    <section className="bg-[#f8f8f8]">
        <div className="w-full max-w-[1328px] mx-auto px-[10px] pt-[60px] pb-[80px] bg-[#f8f8f8]">

     <h2 className="md:text-[32px] text-[24px] font-[600] text-center    leading-[36px] text-[#333333] raleway mt-[30px] mb-[30px] pb-[25px]"> Custom Theme Development</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {maintenanceSupport.map((feature, index) => (
          <div
            key={index}
            className="rounded-[20px] pl-[20px] pr-[25px] py-8 text-left transition-colors duration-300 bg-[#FFF]"
          >
            <div className="flex justify-start mb-4">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={48}
                height={48}
              />

            </div>
            <h3 className="text-[22px] font-semibold mb-4 mt-4 text-[#333333]" style={{
                fontFamily: "var(--font-raleway)"
            }}>
              {feature.title}
            </h3>
            <p className="text-[#474747] text-[16px]" style={{
                fontFamily: "var(--font-opensans)"
            }}>{feature.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default StoreHealthMonitoring;











