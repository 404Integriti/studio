import Image from "next/image"
import Link from "next/link"

export default function Casestudycom({ data }) {
  const cardLink = data.link_one || data.link_two || '#';
  return (
    <div className="py-[30px] px-[20px] flex flex-col items-center shadow-[0_0_10px_4px_#0003] w-[100%] max-w-[446px] rounded-[12px] max-h-[515px] hover:shadow-[0_0_20px_6px_#0003] ">
      <Link href={cardLink}>
        <div className="flex flex-col items-center text-center">
           
          {/* If logoimage exists → show logo */}
          {data.logoimage && (
             <div className="h-[75px] flex items-center justify-center">
            <Image 
              src={data.logoimage} 
              alt="Case Study Logo" 
              width={data.imagewidth ? parseInt(data.imagewidth) : 150} 
              height={data.height ? parseInt(data.height) : 50} 
            />
            </div>
          )}

          {/* If heading exists → show heading */}
          {data.heading && (
            <h2 className="text-[38px] mt-[20px] mb-[10px] text-[#333] font-[600] leading-[44px]" style={{ fontFamily: "var(--font-raleway)" }}>
              {data.heading}
            </h2>
          )}

          {/* Title (always shown) */}
          <h4 className="text-[18px] my-[30px] text-[#333] font-[700] leading-[24px]" style={{ fontFamily: "var(--font-raleway)" }}>
            {data.title}
          </h4>

          {/* Laptop image (always shown) */}
          {data.laptop && (
            <Image 
              src={data.laptop} 
              alt="Case Study Laptop" 
              width={406} 
              height={270} 
            />
          )}
        </div>
      </Link>
    </div>
  )
}
