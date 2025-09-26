"use client"
import Image from "next/image"
import { whywebflowpoints } from "../../components/customThemePoints"

// Reusable Point Component
function ThemePoint({ img, text }) {
  return (
    <div className="flex items-center gap-4">
      {/* Logo */}

        <Image
          src={img || "/placeholder.svg"}
          alt={text}
          width={72}
          height={72}
          className=""
          unoptimized
        />

      {/* Text */}
      <p className="text-[16px] font-[400] text-center" style={{ fontFamily: "var(--font-raleway)" }}>
        {text}
      </p>
    </div>
  )
}

// Main Section Component
export default function WhyWebflow() {
  const leftPoints = whywebflowpoints.filter((p) => p.id % 2 === 1)
  const rightPoints = whywebflowpoints.filter((p) => p.id % 2 === 0)

  return (
    <section className="bg-[#f7f7f7]">
      <div className="max-w-[1080px] pt-[20px] sm:pt-[50px] mx-auto">
        {/* Heading */}
        <h2 className="text-[28px] font-[700] text-center text-[#2d3748]" style={{
          fontFamily: "var(--font-raleway)"
        }}>
          Why Webflow?
        </h2>
        {/* bottom section */}
        <div className="pl-[20px] md:pl-0 pb-[50px]">
             <p
          className="mx-auto font-[400] leading-[20px] text-[#333] text-[16px] sm:w-[70%] min-[1440px]:w-[50%] text-center pt-[10px] pr-[20px] md:pr-0"
          style={{ fontFamily: "var(--Open-sans)"}}
        >
          Webflow gives agencies and businesses flexibility to build, launch and grow without being chained to highly
          restrictive platforms. With clean code, visual design freedom and lightning fast performance. It’s the
          platform of choice for modern brands.
        </p>

        <div className="max-w-[1080px] grid grid-cols-1 md:grid-cols-2 pt-[20px] mx-auto gap-y-[25px]">
            {whywebflowpoints.map((item,index) => (
               <div key={index} className={`flex justify-start md:justify-center gap-y-[16px] ${index===3 && 'md:pl-[70px]'}`}>
                <ThemePoint img={item.img} text={item.text} />
              </div>
            ))}
        </div>
        </div>

       
      </div>
    </section>
  )
}
