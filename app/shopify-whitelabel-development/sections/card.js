 
import Image from "next/image";
 
export default function ShopifyWhitelabelCard({
  className,
  src,
  alt,
  width,
  height,
  heading,
  description,
  headingStyle = "md:text-[24px] text-[19px] font-semibold text-[#070707] mt-[20px] mb-[10] md:leading-[30px] leading-[24px] my-[17.3px]",
  desStyle = "text-[15px] px-[22px] mb-[10px] text-[#575757] font-normal leading-[20px] text-center w-auto",
}) {
  return (
    <div className={`flex justify-center flex-col items-center w-[100%] max-w-[346px] h-[200px] dna-card-hover mt-[-35px] rounded-[20px] dnacard ${className ?? ''}`}>
      <div className=" bg-[#009688] rounded-[50%] flex justify-center items-center mt-[-70px]">
        {src && (
          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            className="w-[65px] h-[65px] sm:w-[78px] sm:h-[78px] md:w-[83px] md:h-[83px]"
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
      <h3 dangerouslySetInnerHTML={{__html:heading}} className={headingStyle} style={{ fontFamily: 'var(--font-raleway)' }}>
      </h3>
      <p className={desStyle} style={{ fontFamily: 'var(--font-opensans)' }}>
        {description}
      </p>
    </div>
  );
}
 
 