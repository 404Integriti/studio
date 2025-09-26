
import { customthemedevfirst } from "../../components/customThemePoints";
import { customthemedevsec } from "../../components/customThemePoints";
import Image from "next/image";


export default function wordpresssupport() {
  return (
    <section className="onging-support xl:px-[60px] lg:px-[40px] md:px-[30px] px-[20px] pb-[60px] ">
      <div className="w-[100%] max-w-[1440px] mx-auto flex xl:flex-row flex-col">
        <div className="w-[100%] xl:max-w-[539px]  max-w-[100%]">
            <div className="xl:ml-[92px] lg::ml-[30px] ml-[0px] lg:mt-[138px] sm:mt-[20px]">
                <h2 className="md:text-[36px] text-[24px] font-[600] md:leading-[42px] leading-[px] my-[10px]" style={{
                    fontFamily:'var(--font-raleway)',
                }}>Why Ongoing Support Is Crucial</h2>
                <p className="w-[100%] lg:max-w-[360px] max-w-[600px] lg:text-[20px] text-[18px] leading-[28px] font-[400]" style={{
                    fontFamily:'var(--font-raleway)',
                }}>Keeping your WordPress site healthy requires more than just updates. Ongoing support helps you avoid performance bottlenecks, stay compatible with new technologies, and prevent small issues from becoming big problems. We act as your safety net—proactively monitoring, updating, and optimizing in real time.</p>
            </div>
        </div>
        <div className="w-[100%] xl:max-w-[808px]  max-w-[100%] flex flex-wrap justify-center md:flex-row flex-col gap-[20px]">
            <div className="w-[100%] max-w-[330px]  md:mx-[0px] mx-auto flex flex-col justify-center md:gap-[30px] gap-[20px]">
                {customthemedevfirst.map((feature, index) => (
                        <div
                            key={index}
                            className="
                            rounded-[20px] w-[100%] pl-[20px] pr-[25px] py-8 text-left transition-colors hovercard duration-300 bg-[#FFF]" style={{
                                maxWidth: feature.width,
                            }}
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
              <div className="w-[100%] max-w-[330px] lg:mt-[100px] mt-[0px] md:mx-[0px] mx-auto flex flex-col justify-center gap-[30px]">
                 {customthemedevsec.map((feature, index) => (
                        <div
                            key={index}
                            className="
                            rounded-[20px] w-[100%] pl-[20px] pr-[25px] py-8 text-left transition-colors hovercard duration-300 bg-[#FFF]" style={{
                                maxWidth: feature.width,
                            }}
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
      </div>
    </section>
  )
}
