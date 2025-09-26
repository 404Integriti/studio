"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { responsiveDesign } from "@/app/components/customThemePoints";
import IconOrangeButton from "@/app/components/OrangeButton/IconOrangeButton";
import Secheading from "@/app/components/secheading";

const ResponsiveDesign = () => {
  return (
    <>
      {responsiveDesign.map((item, index) => (
        <section
          key={index}
          className="w-full  flex flex-col lg:flex-row items-center justify-between 
             pr-4 sm:pr-6 md:pr-12 lg:pr-20 xl:pr-32
             pl-0
             py-10 sm:py-14 md:py-16 lg:py-20 gap-12 lg:gap-48 
             bg-gradient-to-t from-blue-50 via-white to-white"
        >
          {/* Left Side - Image */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="flex justify-center w-full lg:w-[60%] lg:justify-start"
          >
            <Image
              src={item.leftImg.src}
              alt={item.leftImg.alt}
              width={1600}
              height={1200}
              className="object-contain w-full max-w-[600px]"
            />
          </motion.div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 text-left text-[14px] px-[10px]">
            <div
              className="w-full 
                  max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[300px] 
                  xl:max-w-[350px]"
            >
              <Secheading
                heading={item.title}
                classheading="text-[24px] sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#333] leading-snug"
              />
            </div>

            <p className="sans text-gray-600 leading-relaxed mt-1">
              {item.desc}
            </p>

            <ul className="space-y-3 text-left">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Image
                    src={feature.icon}
                    alt="Tick Icon"
                    width={18}
                    height={18}
                    className="mt-1"
                  />
                  <p className="sans text-gray-700">{feature.text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-3 flex justify-start">
              <IconOrangeButton
                text={item.button.text}
                href={item.button.href}
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ResponsiveDesign;
