import Image from "next/image"




export default function Historycom({ graphimg, imgwidth, imageheight, heading, headingclass, text, textclass, graphmobileimg, graphmobileimgwidth, graphmobileimgheight }) {
  return (
    <div className='historycom  max-w-[1440px] relative mx-auto  '>
      <Image src={graphimg} alt="History" width={imgwidth} height={imageheight} className=" md:block hidden" />
      <div className="lg:pt-[50px] flex flex-col pt-[0px] md:pl-[52px] lg:pl-[115px]  sm:pl-[30px] pl-[20px] pr-[20px] md:absolute relative min-[1080px]:!top-[0px] md:top-[-40px]  w-[100%]  md:max-w-[600px] max-w-[100%] ">
        <h2 className={ headingclass}>{heading}</h2>
        <p className={textclass}>{text}</p>
          <Image src={graphmobileimg} alt="History mobile" width={graphmobileimgwidth} height={graphmobileimgheight} className="md:hidden block mx-auto object-cover" />
        </div>
    </div>
  )
}

