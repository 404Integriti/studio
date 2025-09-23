import Image from "next/image";

export default function FocusClientCard({ icon,title, text, size }) {
  return (
    <div className="w-full max-w-[63%] xl:max-w-[54%]" style={{fontFamily:"var(--font-raleway)",}}>
      {/* Icon */}
      <div>
        <Image className="brightness-0" src={icon} alt="icon" width={size} height={size} />
      </div>
      <h3 className="my-[10px] text-[24px] font-[700]">
        {title}
      </h3>
      {/* Text */}
      <p className="text-[#070707] text-[14px] font-[400] mb-[10px] leading-[20px] min-[1440px]:w-[76%]"  >{text}</p>
    </div>
  );
}
