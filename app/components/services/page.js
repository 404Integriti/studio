import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({
  className,
  src,
  alt,
  width,
  height,
  heading,
  imgbgcolor,
  description,
  link,
  blockheight,
  headingStyle = "md:text-[24px] text-[19px] font-[600] text-[#070707] leading-[30px] mt-[20px] mb-[10px] text-center",
  desStyle = "text-[16px] w-[100%] my-[auto] mb-[10px] text-[#575757] mt-[0px] font-normal leading-[23px] text-center md:px-[0] px-[22px] md:max-w-[78%] max-w-[100%]",
  buttontext,
  buttonclass,
  blockwidth,
  headingheight,
  imgClass,
}) {
  return (
    <div
      className={`flex justify-center flex-col items-zz w-[100%] max-w-[434px] border-[#f5eded] border-[1px] border-solid dna-card-hover mt-[-35px] rounded-[20px] dnacard ${
        className ?? ""
      }`}
      style={{ height: blockheight, maxWidth: blockwidth }}
    >
      <div
        className={`w-[83px] h-[83px] rounded-[50%] flex justify-center items-center ${ imgClass|| 'mt-[-70px]'} `  }
        style={{ backgroundColor: imgbgcolor }}
      >
        {src && (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={{ objectFit: "contain" }}
            className={`sm:max-w-[100%]  h-[100%]` }
          />
        )}
      </div>

      <h3
        className={`${headingStyle} `}
        style={{
          fontFamily: "var(--font-raleway)",
          minHeight: headingheight,
        }}
      >
        {heading}
      </h3>

      <p className={desStyle} style={{ fontFamily: "var(--font-opensans)" }}>
        {description}
      </p>

      {/* ✅ Only render button if buttontext exists */}
      {buttontext && (
        <div className="py-[20px]">
          <Link
            href={`${link}`}
            className={buttonclass}
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            {buttontext}
          </Link>
        </div>
      )}
    </div>
  );
}
