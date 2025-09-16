import Image from "next/image";

export default function FocusClientCard({ icon, text, size }) {
  return (
    <div className="w-full max-w-[63%] xl:max-w-[54%]">
      {/* Icon */}
      <div>
        <Image src={icon} alt="icon" width={size} height={size} />
      </div>

      {/* Text */}
      <p className="text-[#070707] text-[14px] font-[400] pt-[10px] mb-[10px] leading-[20px] min-[1440px]:w-[76%]"  style={{fontFamily:"var(--font-raleway)",}}>{text}</p>
    </div>
  );
}
