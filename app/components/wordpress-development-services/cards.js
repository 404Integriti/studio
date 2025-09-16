import Image from "next/image";

export const WordpressDevelopment = ({ data }) => {
  const { icon, title, description, cardStyle, innerCard, iconContainerStyle, titleStyle,descriptionStyle  } = data;

  return (
    <div className={`rounded-[20px] px-[20px] text-left transition-all duration-300  hover:shadow-[0_2px_10px_rgba(0,0,0,0.20)] h-[286px] w-[270px] min-[279px]:w-[300px] mx-auto flex flex-col justify-baseline ${cardStyle}`}>
      <div className={`pt-[30px] ${innerCard}`}>
        <div className="flex justify-start mb-4 min-w-[60px] ">
        <Image src={icon} alt="icon" width={60} height={60} />
      </div>
      <h3
        className={titleStyle || "text-[22px] font-semibold mb-[10px] mt-4 text-[#333333] "}
        style={{ fontFamily: "var(--font-raleway)" }}
      >
        {title}
      </h3>
      <p
        className="text-[#474747] text-[16px]"
        style={{ fontFamily: "var(--font-opensans)" }}
      >
        {description}
      </p>
      </div>
    </div>
  );
};