"use client"
import Link from "next/link";

export default function ResourcesCard({ title, link }) {
  return (
    <div   className="w-full max-w-[380px] h-[300px] flex flex-col justify-center items-center bg-cover bg-center"
          style={{ backgroundImage: `url("/resourcesbg.svg")` }}>
   
 
          <div className="w-full max-w-[91%] px-[10px] flex flex-col relative">
            <h3
              className="text-[22px] w-[80%] text-center mx-auto pt-[10px] font-[600] text-[#283338] leading-[28px] mt-[20px] h-[120px]"
              style={{ fontFamily: "var(--font-raleway)" }}
              dangerouslySetInnerHTML={{ __html: title || "Resource Title" }}
            />
            <div className="flex justify-center items-center relative">
              <Link
                href={link || "#"}
                className="bg-[#ed8104] absolute bottom-[-95px] w-[180px] text-center left-[30px] hover:bg-[#e64a19] transition-all duration-300 text-[20px] font-[500] py-[8px] text-white px-[20px] rounded-[20px]"
              >
                Read More
              </Link>
            </div>
          </div>
      

    </div>
  );
}
