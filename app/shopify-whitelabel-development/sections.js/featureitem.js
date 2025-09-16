// components/FeatureItem.jsx
import Image from "next/image";

export default function FeatureItem({ icon, title, description,iconSize }) {
  return (
    <div className="flex flex-col items-center text-center" style={{fontFamily:"var(--font-raleway)",}}>
      {/* Icon */}
      <div>
        <Image src={icon} alt={title} width={iconSize} height={iconSize} />
      </div>

      {/* Title */}
      <h3 className={`text-[20px] font-[700] text-[#070707] mt-[20px] mb-[10px] leading-[26px]`} >
        {title}
      </h3>

      {/* Description */}
      <p className="text-[14px] font-[400] text-[#070707] leading-[20px] mb-[10px]">
        {description}
      </p>
    </div>
  );
}
