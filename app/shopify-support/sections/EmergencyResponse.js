import Image from "next/image";
import { realtimemonitoring } from "../../components/customThemePoints"; 


const ShopifymergencyResponse = () => {
  return (
    <section className="w-full max-w-[1216px] mx-auto px-[14px] pt-12 ">
    <h2 className="md:text-[36px] text-[24px] font-[600] leading-[42px] text-center pb-[30px] my-[10px]" style={{
                    fontFamily:'var(--font-raleway)',
      }}>Real-Time Monitoring & Support</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        {realtimemonitoring.map((emfeature, index) => (
          <div
            key={index}
            className="bg-[#e7e7e7a6] rounded-lg px-6 overflow-hidden flex gap-6 items-center"
          ><div>
            <Image
              src={emfeature.numberImage}
              alt={`Number ${emfeature.numberAlt}`}
              width={emfeature.imgwidth}
              height={emfeature.imgheight}
              className="pointer-events-none mt-15"
            />
            </div>
            <div>
              <h3 className="md:text-[24px] font-[600] mb-1 text-[#333333]" style={{
            fontFamily: "var(--font-raleway)"
          }}>
                {emfeature.title}
              </h3>
              <p className="text-[16px] w-[100%] max-w-[300px] text-[#5d5d5d]" style={{
                fontFamily:" var(--font-opensans)",
              }}>{emfeature.descr}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopifymergencyResponse;




