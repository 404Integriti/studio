import Image from "next/image";
 
export default function WordPressWhitelabelCard({
  className,
  src,
  alt,
  width,
  height,
  heading,
  description,
  headingStyle = "md:text-[24px] text-[19px] font-semibold text-[#070707] mt-[20px] mb-[10] md:leading-[30px] leading-[24px] my-[17.3px]",
  desStyle = "text-[16px] text-[#575757] font-normal leading-[23px] text-center max-w-[75%] w-[100%]",
}) {
  return (
    <div className={`flex justify-center flex-col items-center w-[100%] max-w-[346px] h-[200px] dna-card-hover mt-[-35px] rounded-[20px] dnacard ${className ?? ''}`}>
      <div className="w-[83px] h-[83px] bg-[#009688] rounded-[50%] flex justify-center items-center mt-[-70px]">
        {src && (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
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