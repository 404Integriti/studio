import Image from "next/image";

export const WebflowMaintProCard = ({ data }) => {
  const { icon, title, description, cardStyle, iconContainerStyle, titleStyle,descriptionStyle  } = data;

  return (
    <div className="rounded-[20px] px-[20px] text-left transition-all duration-300 bg-[#FFF] hover:shadow-[0_2px_10px_rgba(0,0,0,0.12)] h-[286px] w-[270px] min-[279px]:w-[300px] mx-auto">
      <div className="pt-[30px]">
        <div className="flex justify-start mb-4">
        <Image src={icon} alt="icon" width={48} height={48} />
      </div>
      <h3
        className={titleStyle || "text-[22px] font-semibold mb-4 mt-4 text-[#333333]"}
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