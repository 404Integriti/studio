import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

export default function InfoCard({ styleHeading,title, items, bgColor, textColor,tick}) {
  return (
    <div className={`flex-1 rounded-[20px] px-[20px] min-[479px]:pl-[0px] min-[991px]:pl-[20px] min-[991px]:mx-auto min max-[991px]:h-[324px] h-auto min-[991px]:h-[250px] w-full md:max-w-[45%] min-[991px]:max-w-[44%] min-[1280px]:max-w-[45%] leading-[20px]  ${bgColor} ${textColor}`} style={{fontFamily:"var(--font-raleway)",}}>
      <h3 className={`text-center text-[22px] font-[500] mt-[20px] mb-[10px] min-[479px]:mb-[6px] leading-[30px] ${styleHeading}`}>{title}</h3>
     
        {items.map((item, index) => (
          <div key={index}  className='flex'>
            <Image className={`ml-[-10] min-[990px]:ml-[-31] justify-start ${tick==="first"?"w-[21.31px] sm:!w-[20.09px] md:!w-[26.49px] lg:!w-[27.26px] !h-[40px]":"w-[17.76px] h-[27.76] sm:!w-[16.76px] sm:!h-[60px] md:!w-[21.93px] lg:!w-[21.02px] lg:!h-[31.02px] pt-[10px]" } `} width={22} height={22} src={tick === "first" ? "/WordpressWhitelabel/whitebgtick.svg" :"/WordpressWhitelabel/whiteicontick.svg"  } alt="icon" />         
            <div className={`pt-[10px] pl-[15px] text-[14px] font-[400] leading-[20px] w-full ${tick=== "first" && index === 0 && "max-w-[70%]"}  ${index === 0 ? "pb-0 leading-[31px]" : "py-[10px]"
      }`} >{item}</div>
            </div>
        ))}
    </div>
  );
}
