import Image from "next/image";
 
export const CmsCard = ({ icon, title, description }) => {
  return (
    <div className="max-[480px]:w-[272px]  min-[767px]:w-[330px] min-[991px]:w-[222.396px] min-[1280px]:w-[288px] group relative bg-[#eefefc] border border-black max-[991px]:border-0  min-[767px]:p-[20px] rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer max-h-[100%] h-[128px] min-[479px]:h-[176px] min-[767px]:h-[340.8px] min-[991px]:h-[340.792px] min-[1280px]:h-[288px]">
      {/* Icon and Title - Always visible on large */}
      <div className="flex flex-col items-center justify-center h-full text-center z-10 relative">
        <Image src={icon} alt="icon" className="w-[83.1079px] h-[83.1979px] mb-6 brightness-0" />
        <h3 className="text-[20.8px] font-[600] leading-[20px] text-[#171717]" style={{fontFamily:"var(--font-raleway)",}}>{title}</h3>
      </div>
 
      {/* Hover Content (only on large screens) */}
      <div className="absolute inset-0 bg-teal-600 text-white p-4 md:p-6 flex-col justify-center
        transform translate-y-full opacity-0 pointer-events-none
        lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto
        transition-all duration-500 ease-in-out
        min-[991px]:flex hidden z-20">
        <h3 className="text-[18px] font-[600] mb-4 text-center" style={{fontFamily:"var(--font-raleway)",}}>{title}</h3>
        <p className="text-[13px] font-[400] text-center" style={{fontFamily:"var(--font-raleway)",}}>{description}</p>
      </div>
    </div>
  );
};
 
export const InitialCards = ({ icon, title, description }) => {
  return (
    <div className="min-[991px]:hidden w-full max-w-[437.5px] h-full bg-teal-600 text-white py-[20px] flex flex-col items-center text-center rounded-[20px]">
      <Image src={icon} alt="icon" className="w-11 h-11 invert brightness-0" />
      <h3 className="text-[21px] font-[600] pt-[10px] mb-[10px]" style={{fontFamily:"var(--font-raleway)",}}>{title}</h3>
      <p className="px-[20px] mb-[10px] leading-[20px] text-[14px] text-left" style={{fontFamily:"var(--font-opensans)",}} >{description}</p>
    </div>
  );
};