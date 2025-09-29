import Image from "next/image";

export default function ImpactCard({ impact, card, heading,para }) {
  return (
  <div className=" left-0 flex justify-center w-[310px] h-[258px] lg:w-[390px] lg:h-[290px] relative  ">
             {/* Decorative background image */}
             <Image
               src={impact.image}
               fill
               className="object-contain z-40  absolute"
               alt={impact.image}
             />
 
             {/* Foreground content */}
             <div
               className={`z-50 inset-0 w-[285px] h-[240px] lg:w-[324px] lg:h-[271px] p-[10px] py-[30px] flex flex-col justify-items-start  items-center rounded-[40px] text-center  ${impact.bgColor} my-[9px] mx-[12px] ${card}`}
             >
               <h3 className={`md:text-[32px] lg:mt-[20px] min-h-[80px]  text-[26px] raleway font-[600] leading-[27px] md:leading-[33px] ${heading}`}>
                 {impact.title}
               </h3>
               <p className={`text-gray-700 flex justify-center items-center  px-[20px] lg:px-[40px] text-[16px] leading-[20px] mx-[5px] ${para}`}>{impact.description}</p>
             </div>
           </div>
  );
}
