import Image from "next/image";

export default function Valuescom({ mainHeading, highlight, intro, values }) {
  return (
    <div className="w-full max-w-[1370px] md:px-[30px] px-[20px] mx-auto lg:mt-[40px] mt-[0px] flex flex-col lg:flex-row  lg:gap-[40px] gap-[0px]">
      
      {/* Left section */}
      <div className="flex-1 lg:mt-[40px] mt-[0px] lg:mt-[100px]">
        <div className="w-[100%] lg:max-w-[465px] max-w-[816px] lg:ml-auto md:mx-auto md:pl-[20px]">
          <h3 className="lg:my-[24px] mt-[0px] mb-[20px] leading-[44px] mb-[10px] raleway lg:text-[36px] text-[30px] font-[600] text-[#333]">
            {mainHeading}
            <span className="text-[#00b8a9]">{highlight}</span>
          </h3>
          <p className="sans mb-[10px] text-[#333] text-[14px] leading-[20px]">
          {intro}
        </p>
        </div>
      </div>

      {/* Right section */}
      <div className="flex-1 mt-[33px] flex lg:justify-end justify-center xl:pr-[0px] lg:pr-[20px] ">
        <div className="flex flex-col md:max-w-[816px] lg:ml-auto gap-[24px] w-full md:pl-[20px]">
          {values.map((item, index) => (
            <div
              key={index}
              className="rounded-tr-[45px] valuecard  rounded-br-[45px] w-[100%] lg:max-w-[502px] max-w-[816px] border border-[#e2dbf0] p-[16px] flex lg:justify-start md:justify-center gap-[16px]"
              style={{ backgroundColor: item.bgcolor, marginLeft: item.padleft }}
            >
              <Image src={item.icon} alt={item.heading} width={48} height={49} className="object-contain" />
              <div className="flex-1 w-[100%] max-w-[379px]">
                <h3 className="raleway text-[20px] font-[600] leading-[30px] mb-[6px] text-[#333]">
                  {item.heading}
                </h3>
                <p className="sans text-[14px] font-[400] text-[#333]">
                  {item.subheading}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
