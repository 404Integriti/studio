import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ image, title, link }) {
  return (
    <div className="blog-card w-full sm:w-[220px] md:w-[250px] lg:w-[294.8px] mx-auto">
      <div className="bg-white border border-[#e64a19] rounded-[10px] shadow-sm overflow-hidden h-[380px] flex flex-col">
        <div className="flex flex-col justify-between items-center px-4 py-4 sm:py-5 h-full">
          {/* Image */}
          <div className="w-full h-[160px] sm:h-[158px] md:h-[162px] lg:h-[162px] relative">
            <Image
              src={image || "/new.png"}
              alt={title || "Blog post image"}
              fill
              className="object-cover rounded-[10px]"
            />
          </div>

          {/* Title */}
          <h2
            className="text-[#1c1c1c] text-center mt-4 font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] min-h-[60px] w-full px-2 flex items-center justify-center"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            {title || "Blog Title"}
          </h2>

          {/* Button */}
          <Link
            href={link || "#"}
            className="bg-[#e64a19] hover:bg-[#ed8104] text-center rounded-[40px] w-full max-w-[150px] py-2 px-4 text-[16px] sm:text-[17px] text-white font-semibold mt-3 block"
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
