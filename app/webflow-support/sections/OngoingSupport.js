
import { customsupportthemedevfirst } from "../../components/customThemePoints";
import { customsupportthemedevsec } from "../../components/customThemePoints";
import Image from "next/image";


export default function OngoingSupport() {
    return (
        <section className="onging-support xl:px-[60px] lg:px-[40px] md:px-[30px] px-[20px] md:pt-[20px] pb-[60px]">
            <div className="w-[100%] max-w-[1440px] mx-auto flex xl:flex-row flex-col">
                <div className="w-[100%] xl:max-w-[539px]  max-w-[100%]">
                    <div className="xl:ml-[92px] lg::ml-[30px] ml-[0px] lg:mt-[138px] ">
                        <h2 className="md:text-[36px] text-[24px] text-[#333333] font-[600] md:leading-[42px] leading-[px] my-[10px]" style={{
                            fontFamily: 'var(--font-raleway)',
                        }}>Why Ongoing Support Matters</h2>
                        <p className="w-[100%] lg:max-w-[360px] max-w-[600px] lg:text-[20px] text-[18px] leading-[28px] font-[400]" style={{
                            fontFamily: 'var(--font-raleway)',
                        }}>Webflow websites need ongoing attention to
                            perform at their best. From staying on top of
                            platform changes to ensuring everything runs
                            smoothly day-to-day, ongoing support helps
                            prevent costly issues before they start.</p>
                    </div>
                </div>
                <div className="w-[100%] xl:max-w-[808px]  max-w-[100%] flex flex-wrap justify-center md:flex-row flex-col gap-[20px]">
                    <div className="w-[100%] xl:max-w-[808px] max-w-[100%] grid xl:grid-cols-2 grid-cols-1 gap-[20px]">
                        {customsupportthemedevfirst.map((feature, index) => (
                            <div
                                key={`first-${index}`}
                                className="rounded-[20px] w-full pl-[20px] pr-[25px] py-8 text-left transition-colors hovercard duration-300 bg-[#FFF]"
                            >
                                <div className="flex justify-start mb-4">
                                    <Image src={feature.icon} alt={feature.title} width={48} height={48} />
                                </div>
                                <h3
                                    className="text-[22px] font-semibold mb-4 mt-4 text-[#333333]"
                                    style={{
                                        fontFamily: "var(--font-raleway)",
                                    }}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className="text-[#474747] text-[16px]"
                                    style={{
                                        fontFamily: "var(--font-opensans)",
                                    }}
                                >
                                    {feature.description}
                                </p>
                            </div>
                        ))}

                        {customsupportthemedevsec.map((feature, index) => (
                            <div
                                key={`sec-${index}`}
                                className="rounded-[20px] w-full pl-[20px] pr-[25px] py-8 text-left transition-colors hovercard duration-300 bg-[#FFF]"
                            >
                                <div className="flex justify-start mb-4">
                                    <Image src={feature.icon} alt={feature.title} width={48} height={48} />
                                </div>
                                <h3
                                    className="text-[22px] font-semibold mb-4 mt-4 text-[#333333]"
                                    style={{
                                        fontFamily: "var(--font-raleway)",
                                    }}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className="text-[#474747] text-[16px]"
                                    style={{
                                        fontFamily: "var(--font-opensans)",
                                    }}
                                >
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
