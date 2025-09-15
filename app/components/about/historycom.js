import Image from "next/image"




export default function Historycom({ graphimg, imgwidth, imageheight, heading, headingclass, text, textclass, graphmobileimg, graphmobileimgwidth, graphmobileimgheight }) {
  return (
    <div className='historycom w-[100%] max-w-[1440px] relative mx-auto'>
      <Image src={graphimg} alt="History" width={imgwidth} height={imageheight} className="lg:block hidden" />
      <div className="lg:pt-[50px] flex flex-col pt-[10px] lg:pl-[137px] md:pl-[40px] sm:pl-[30px] pl-[20px] pr-[20px] lg:absolute relative lg:top-[0px] w-[100%] lg:max-w-[600px] max-w-[100%]">
        <h2 className={headingclass}>{heading}</h2>
        <p className={textclass}>{text}</p>
          <Image src={graphmobileimg} alt="History mobile" width={graphmobileimgwidth} height={graphmobileimgheight} className="lg:hidden block mx-auto object-cover" />
        </div>
    </div>
  )
}

