import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

export default function InfoCard({ styleHeading,title, items, bgColor, textColor,tick}) {
  return (
    <div className={`flex-1 mx-auto px-[20px] rounded-[20px] w-[90%] md:max-w-[41%] gap-[40px] ${bgColor} ${textColor}`} style={{fontFamily:"var(--font-raleway)",}}>
      <h3 className={`text-center  text-[22px] font-[500] mt-[20px] mb-[10px] min-[479px]:mb-[6px] leading-[30px] ${styleHeading}`}>{title}</h3>
     
        {items.map((item, index) => (
          <div key={index}  className='flex items-start gap-3 py-[6px]'>
             <Image
      className={`flex-shrink-0 mt-[5px] ml-[-30px] ${
        tick === "first"
          ? "w-[24px] h-[24px]" // ✅ consistent size
          : "w-[20px] h-[20px]"
      }`}
      width={24}
      height={24}
      src={
        tick === "first"
          ? "/WordpressWhitelabel/whitebgtick.svg"
          : "/WordpressWhitelabel/whiteicontick.svg"
      }
      alt="icon"
    />       
            <div
      className={`text-[14px] font-[400] leading-[30px] ${
        tick === "first" && index === 0 ? "max-w-[80%]" : ""
      }`}
    >
      {item}
    </div>
            </div>
        ))}
    </div>
  );
}
