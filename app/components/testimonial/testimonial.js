import testimonial from "@/app/testimonial"
import Image from "next/image"

export default function Testimonial({ authorname, testimonialtext }) {
  return (
    <div className='flex flex-col bg-[#fff] w-[100%] max-w-[330px] border border-[#ede9e9] border-solid rounded-[15px] min-h-[284.875px] pt-[10px] pr-[10px] pl-[5px] pb-[30px]'>
        <div className='testimonial-header flex items-start'>
            <div className="w-[100%] max-w-[70%] flex">
       <Image
         src="/testilogo.png"
         alt="Testimonial Image"
         width={70}
         height={70}
         className=""
       />
       <p className="text-[15.5px] font-[600] pl-[5px] text-[#1c1c1c] leading-[20px] mt-[10px]" style={{
        fontFamily: 'var(--font-raleway)'
       }}>{authorname}</p>
       </div>
       <Image
         src="/testirrow.png"
         alt="Author Image"
         width={21}
         height={60}
         className="ml-[45px] pt-[40px]"
       />
        </div>
        <div className='testimonial-content'>
            <p className="text-left mt-[5px pl-[10px] pr-[20px] text-[14px] font-[400] leading-[21px] min-h-[130px] max-h-[none] h-[auto] flex flex-col justify-center items-center ">{testimonialtext}</p>
        </div>
        <div className='testimonial-footer'>
         <Image
           src="/star.svg"
           alt="Rating Star"
           width={134}
           height={21}
           className="pl-[10px] pt-[20px]"
         />
         
        </div>
    </div>
  )
}
