import Image from "next/image";
import { whitelabelwebflowservices } from "../../components/customThemePoints";

export default function Shopservicers() {
  return (
    <div className="shopify-service-block flex flex-col gap-[50px]">
      {whitelabelwebflowservices.map((item, index) => (
  <div key={index} className="flex ">
    {/* Left column */}
    <div className="flex  flex-col justify-start items-center w-[100%] max-w-[60px] relative">
      <div className="bg-[#ed8104]  z-50 rounded-[100%] w-[100%] max-w-[60px] h-[60px] flex justify-center items-center left-col relative">
        <Image src={item.image} height={36} width={36} alt={item.heading} />
      </div>
      {/* Render line only if not the last item */}
      {index !== whitelabelwebflowservices.length - 1 && (
        <div className="straight-line"></div>
      )}
    </div>

    {/* Right column */}
    <div className="right-col flex flex-col gap-[40px] ">
      <div className="ml-[20px]">
        <h3
          className="text-[20px] font-[600] mt-[10px] leading-[24px] mb-[10px]"
          style={{ fontFamily: "var(--font-raleway)" }}
        >
          {item.heading}
        </h3>
        <p
          className="text-[15px] text-[#333] w-[100%] max-w-[400px] leading-[20px]"
          style={{ fontFamily: "var(--font-opensans)" }}
        >
          {item.text}
        </p>
      </div>
    </div>
  </div>
))}

    </div>
  );
}
