import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

export default function InfoCard({ styleHeading,title, items, bgColor, textColor,tick}) {
  return (
    <div className={`flex-1 mx-auto sm:px-[20px] px-[10px] rounded-[20px] w-[90%] md:max-w-[45%] gap-[40px] ${bgColor} ${textColor}`} style={{fontFamily:"var(--font-raleway)",}}>
      <h3 className={`text-center  text-[22px] font-[500] mt-[20px] mb-[10px] min-[479px]:mb-[6px]  leading-[30px] ${styleHeading}`}>{title}</h3>
     
        {items.map((item, index) => (
          <div key={index}  className='flex  items-start gap-3 py-[6px]'>
             <Image
      className={`flex-shrink-0 lg:mt-[5px] md:mt-[6px] mt-[5px]  sm:ml-[-30px] ${
        tick === "first"
          ? "sm:w-[24px] sm:h-[24px] w-[18px] h-[18px] " // ✅ consistent size
              : "sm:w-[24px] sm:h-[24px] w-[15px] h-[15px]"
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
      className={`text-[14px] font-[400] sm:leading-[30px] leading-[25px] ${
        tick === "first" && index === 0 ? "max-w-[90%] " : ""
      }`}
    >
      {item}
    </div>
            </div>
        ))}
    </div>
  );
}
