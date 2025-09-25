import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ image, title, link }) {
  return (
    <div className="blog-card max-w-[294px] sm:w-[220px] md:w-[250px] lg:w-[294.8px] mx-auto">
      <div className="bg-white border border-[#e64a19]  shadow-sm overflow-hidden !h-[310px]  flex flex-col">
        <div className="flex flex-col justify-between items-center px-4 py-4 sm:py- h-full">
          {/* Image */}
          <div className="w-[164px]  h-[158px]  sm:h-[158px] md:h-[162px] lg:!h-[158px] lg:w-[164px] relative">
            <Image
              src={image || "/new.png"}
              alt={title || "Blog post image"}
              fill
              className="object-cover "
              
            />
          </div>

          {/* Title */}
          <div className="h-[60px] flex align-baseline p-0">
          <h1
            className="text-[#1c1c1c] text-center  font-semibold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[14px] leading-[20px] sm:leading-[22px] lg:leading-[20px] w-full max-[253px] px-2 "
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            {title || "Blog Title"}
          </h1>
             </div>
      
          {/* Button */}
          <Link
            href={link || "#"}
            className="bg-[#e64a19] hover:bg-[#ed8104] text-center rounded-[40px] w-full max-w-[150px] py-2 px-4 text-[16px] sm:text-[17px]  lg:text-[14px] text-white font-semibold mt-3 block"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            READ MORE
          </Link>
           
        </div>
      </div>
    </div>
  );
}
