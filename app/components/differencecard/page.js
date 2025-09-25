import Image from "next/image"

export default function Differencecard({
  heading, 
  headingClass, 
  paragraph, 
  paragraphClass,   // <-- capital C
  bgcolor,
  height,
  width
}) {
  return (
    <div
      className={`rounded-[40px] w-[100%] max-w-[342px] lg:h-[290px] md:h-[260px] h-[240px] block relative`}
      style={{ height: height, width: width }}
    >
      <Image
        src={`${(bgcolor == "#CCEAE7") ? "/diffbg.png" : "/redcorner.png"}`}
        alt="Difference Background"
        fill
        className=" z-40 absolute " 
      />
      <div 
        className="absolute top-[10px] left-[10px]  right-[10px] bottom-[10px] rounded-[40px] flex flex-col items-center justify-start gap-[14] pt-[57px]" 
        style={{ backgroundColor: bgcolor }}
      >
        <h3
          className={headingClass}
          style={{ fontFamily: "var(--font-raleway)" }}
        >
          {heading}
        </h3>
        <p
          className={paragraphClass}   // <-- capital C
          style={{ fontFamily: "var(--hero-p-font-family)" }}
        >
          {paragraph}
        </p>
      </div>
    </div>
  )
}
