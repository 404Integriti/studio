import Link from "next/link";

export default function Herobutton({
  btnpadfirst,
  btnpadsec,
  buttonwidth,
  buttonheight,
  firstButtonText,
  firstButtonlink,
  secondButtonText,
  secondButtonlink,
  playIcon,
  fontfamily,
}) {
  return (
    <div className="flex lg:gap-[47px] md:gap-[35px] sm:gap-[25px] gap-[20px] justify-center mt-[29px]">
      <Link
        href={firstButtonlink}
        className={` min-[770px]:!text-[18px] sm:text-[16px] text-[14px] tracking-[0em] hero_buttons hero_buttons-first rounded-[73.62px] text-white flex justify-center items-center gap-2 ${btnpadfirst} `}
        style={{
          fontFamily:
            fontfamily === "raleway"
              ? "var(--font-raleway)"
              : "var(--font-pops)",
          backgroundColor: "var(--hero-btn-bg-first)",
          width: buttonwidth,
          height: buttonheight,
        }}
      >
        {firstButtonText}
        {playIcon}
      </Link>

      <Link
        href={secondButtonlink}
        className={` tracking-[0em] hero_buttons-sec border !w-[400px] rounded-[73.62px] ${btnpadsec} hero_buttons flex items-center justify-center `}
        style={{
          fontFamily:
            fontfamily === "raleway"
              ? "var(--font-raleway)"
              : "var(--font-pops)",
          backgroundColor: "var(--hero-btn-bg-second)",
          width: buttonwidth,
          height: buttonheight,
          color: "#D81B60",
        }}
      >
        {secondButtonText}
      </Link>
    </div>
  );
}
