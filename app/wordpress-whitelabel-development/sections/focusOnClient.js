import Image from "next/image";
 
export default function FocusOnClient() {
  return (
    <section className="w-full bg-[#ffede8] py-[51px]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div
          className="flex flex-col  items-start justify-between lg:items-center gap-10 min-[1440px]:px-[120px] px-[20px]"
          style={{ fontFamily: "var(--font-raleway)" }}
        >
          <div className="flex flex-col md:flex-row gap-10 lg:justify-end justify-between w-full    h-full">
            <div className="sm:w-[60%]   lg:w-[45%]">
             <h3 className=" text-[24px]  leading-[30px] font-[700] mt-[12px] text-[#333333]   flex   ">
              Focus on Your Clients, Let Us Handle the WordPress Work
            </h3>
            </div>
            <div className="flex md:flex-row  flex-col items-center md:items-stretch justify-end gap-10 ">
              <div className="flex flex-col group hover:bg-[#e64a19]  bg-[#d9d9d9] rounded-[20px]  w-[80%] md:w-[50%] lg:w-[220px] md:min-h-[170px] py-[10px]    ">
                   <Image
                width={75}
                height={75}
                src="/WordpressWhitelabel/focus1.svg"
                alt="focus-icon"
                className="px-4 pb-4 block group-hover:hidden"
              />
 
              {/* Hover image (visible on hover) */}
              <Image
                width={75}
                height={75}
                src="/WordpressWhitelabel/focushover1.svg"
                alt="focus-icon-hover"
                className="px-4 pb-4 hidden group-hover:block"
              />
                <p className="text-[#e64a19]  group-hover:text-[#d9d9d9] text-[19px] font-[700] leading-[20px] pt-0  px-[20px] pr-[30px]">
                  Take on more projects without stretching your team
                </p>
              </div>
 
              <div className="flex group flex-col hover:bg-[#e64a19]  bg-[#d9d9d9] rounded-[20px] lg:w-[220px] md:min-h-[170px] py-[10px] w-[80%] md:w-[50%]   ">
                   <Image
                width={75}
                height={75}
                src="/WordpressWhitelabel/focus2.svg"
                alt="focus-icon"
                className="px-4 pb-4 block group-hover:hidden"
              />
 
              {/* Hover image (visible on hover) */}
              <Image
                width={75}
                height={75}
                src="/WordpressWhitelabel/focushover2.svg"
                alt="focus-icon-hover"
                className="px-4 pb-4 hidden group-hover:block"
              />
                <p className="text-[#e64a19]  group-hover:text-[#d9d9d9] text-[19px] font-[700]  px-[20px] pr-[30px] leading-[22px]">
                  Skip hiring and training new developers
                </p>
              </div>
            </div>
          </div>
 
          {/* Bottom row (3 cards) */}
          <div className="flex md:flex-row  flex-col items-center md:items-stretch justify-end gap-10 w-[100%] ">
            <div className="flex  group flex-col hover:bg-[#e64a19]  bg-[#d9d9d9] rounded-[20px] lg:w-[220px] md:min-h-[170px] w-[80%]  md:w-[30%]  py-[10px]">
              <Image
                width={75}
                height={75}
                src="/WordpressWhitelabel/focus3.svg"
                alt="focus-icon"
                className="px-4 pb-4 block  group-hover:hidden"
              />
 
              {/* Hover image (visible on hover) */}
              <Image
                width={75}
                height={75}
                src="/WordpressWhitelabel/focushover3.svg"
                alt="focus-icon-hover"
                className="px-4 pb-4 hidden group-hover:block"
              />
              <p className="text-[#e64a19]  group-hover:text-[#d9d9d9] text-[19px] font-[700] px-[20px] pr-[50px] leading-[22px]">
                Keep full control of client communication
              </p>
            </div>
 
            <div className="flex group flex-col hover:bg-[#e64a19]  bg-[#d9d9d9] rounded-[20px] w-[80%]  md:w-[30%] lg:w-[220px] md:min-h-[170px] py-[10px]     ">
                 <Image
                width={75}
                height={75}
                src="/WordpressWhitelabel/focus4.svg"
                alt="focus-icon"
                className="px-4 pb-4 block group-hover:hidden"
              />
 
              {/* Hover image (visible on hover) */}
              <Image
                width={75}
                height={75}
                src="/WordpressWhitelabel/focushover4.svg"
                alt="focus-icon-hover"
                className="px-4 pb-4 hidden group-hover:block"
              />
              <p className="text-[#e64a19]  group-hover:text-[#d9d9d9] text-[19px] font-[700]  px-[20px] pr-[30px] leading-[22px]">
                Get fast, professional turnaround on every build
              </p>
            </div>
 
            <div className="flex group flex-col hover:bg-[#e64a19]  bg-[#d9d9d9] rounded-[20px] lg:w-[220px] md:min-h-[170px] py-[10px] w-[80%]  md:w-[30%]   ">
               <Image
                width={75}
                height={75}
                src="/WordpressWhitelabel/focus5.svg"
                alt="focus-icon"
                className="px-4 pb-4 block group-hover:hidden"
              />
 
              {/* Hover image (visible on hover) */}
              <Image
                width={75}
                height={75}
                src="/WordpressWhitelabel/focushover5.svg"
                alt="focus-icon-hover"
                className="px-4 pb-4 hidden group-hover:block"
              />
              <p className="text-[#e64a19]  group-hover:text-[#d9d9d9] text-[19px] font-[700]  px-[20px] pr-[30px] leading-[22px]">
                Scale your agency without added overhead
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}