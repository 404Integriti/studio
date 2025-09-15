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
          width={50}
          height={50}
          className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
          unoptimized
        />

      {/* Text */}
      <p className="text-[16px] text-center" style={{ fontFamily: "var(--Open-sans)", fontWeight: 400 }}>
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
    <section className="bg-[#f7f7f7] py-12">
      <div className="max-w-[1080px] mx-auto">
        {/* Heading */}
        <h2 className="text-[28px] font-bold text-center text-[#2d3748] mb-6" style={{
          fontFamily: "var(--font-raleway)"
        }}>
          Why Webflow?
        </h2>

        <p
          className="mx-auto text-[16px] w-[70%] text-center pt-[10px]"
          style={{ fontFamily: "var(--Open-sans)", fontWeight: 400, color: "#333" }}
        >
          Webflow gives agencies and businesses flexibility to build, launch and grow without being chained to highly
          restrictive platforms. With clean code, visual design freedom and lightning fast performance. It’s the
          platform of choice for modern brands.
        </p>

        {/* Two-column points */}
        <div className="max-w-[1080px] grid grid-cols-1 md:grid-cols-2 pt-[20px] pl-[50px] mx-auto gap-8">
          {/* Left side */}
          <div className="flex flex-col md:items-center items-left gap-8">
            {leftPoints.map((point) => (
              <ThemePoint key={point.id} img={point.img} text={point.text} />
            ))}
          </div>

          {/* Right side */}
          <div className="flex flex-col items-left gap-8">
            {rightPoints.map((point) => (
              <ThemePoint key={point.id} img={point.img} text={point.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
