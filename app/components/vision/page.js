import Image from "next/image";


export default function Vision({
  leftimage,
  leftimageheight,
  leftimagewidth,
  toprighthead,
  toprightheadclass,
  toprighttext,
  toptextclass,
  sechead,
  secheadclass,
  thirdhead,
  thirdheadclass,
  thirdtext,
  thirdtextclass,
  lastimage,
  lastimageheight,
  lastimagewidth
}) {
  return (
    <div className="w-[100%] max-w-[1440px] lgLpl-[40px] md:pl-[20px] lg:pr-[40px] md:pr-[20px] mx-auto flex flex-col lg:pb-[100px] pb-[40px] lg:gap-[70px] gap-[16px]">
      <div className="w-[100%] max-w-[100%] flex md:flex-row flex-col justify-center items-center lg:gap-[47px] gap-[16px] lg:mt-[-270px] md:mt-[-190px] mt-[-220px] justify-between  lg:px-[0px] px-[20px]">
      <div className="w-full max-w-[600px]">
        <div className="w-full h-[auto] lg:pl-[40px] pl-[0px]">
          <Image src={leftimage} alt="Vision 1" width={leftimagewidth} height={leftimageheight} />
        </div>
      </div>

      <div className="w-full max-w-[656px] flex flex-col justify-center">
        <h2 className={toprightheadclass}>{toprighthead}</h2>
        <p className={toptextclass}>{toprighttext}</p>
      </div>
</div>
<div className="w-[100%] max-w-[100%] flex lg:flex-row flex-col lg:gap-[47px] gap-[16px]">
      <div className=" max-w-[650px] lg:ml-[96px] ml-[33px]">
        <h2 className={secheadclass}>{sechead}</h2>
        <h3 className={thirdheadclass}>{thirdhead}</h3>
        <p className={thirdtextclass}>{thirdtext}</p>
      </div>

      <div className="w-full max-w-[640px] flex flex-col justify-center items-center lg:mx-[0] mx-auto">
        <Image src={lastimage} alt="Vision 2" width={lastimagewidth} height={lastimageheight} />
      </div>
      </div>
    </div>
  );
}
