import Image from "next/image";

export default function AuthorCard() {
  return (
    <div
      className="
        bg-[#009688] rounded-[12px] flex flex-col justify-center items-center 
        w-[266px] p-[30px_20px] shadow-2xl raleway
        sm:w-[266px] md:w-[266px] lg:w-[266px]
        max-w-full
      "
    >
<Image
  src="https://cdn.prod.website-files.com/683f4d103b2510d5796dca20/6849535d3afbbd0aeaf76e83_Frame%201597884324.svg"
  alt="Author"
  className="
    w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
    object-contain mb-2
    align-middle max-w-full inline-block border-0
  "
/>


      {/* Author label */}
      <span className="text-white text-[16px] my-3 font-medium">Author</span>

      {/* Divider line */}
      <div className="w-28 sm:w-36 md:w-48 h-[1px] bg-white mb-3"></div>

      {/* Author name */}
      <span className="text-white font-bold text-lg md:text-xl lg:text-xl text-center">
        Integriti Studio
      </span>
    </div>
  );
}
