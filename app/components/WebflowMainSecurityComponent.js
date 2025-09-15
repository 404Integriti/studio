import Image from "next/image"


export default function WebflowMainSecurityComponent({ title, items, imageSrc }) {
  return (
    <section className="securitybackup">
    <div className="px-[10px] min-[479px]:px-[40px] min-[1440px]:mx-[144px]">
        <div className="w-[100%] py-[40px]  max-w-[1440px] mx-auto flex lg:flex-row flex-col lg:gap-[0px] gap-[50px] relative z-40">
        {/* Left column */}
        <div className="lg:w-[45%] w-full">
          <h2
            className="text-center min-[991px]:text-left lg:text-[42px] md:text-[36px] text-[28px] lg:leading-[58px] md:leading-[50px] leading-[40px] text-[#333] font-[700] pb-[10px] "
            style={{ fontFamily: "var(--font-raleway)" }}
            dangerouslySetInnerHTML={{ __html: title }}
          >
          </h2>
        </div>

        {/* Right column */}
        <div className="lg:w-[65%] lg:mx-[0px] w-full">
          <div className="flex flex-col gap-[20px] security">
            {items.map((item, index) => (
              <div
                key={index}
                className={`z-40 min-[479px]:w-[85%] rounded-[8px] p-[15px] pr-0 min-h-[110px] text-[#333333] ${item.align}`}
                style={{
                  backgroundColor: item.bgcolor,
                  // margin: item.margin,
               
                }}
              >
                <h3
                  className="lg:text-[24px] text-[21px] font-[600] leading-[30px] mb-[10px]"
                  style={{ fontFamily: "var(--font-raleway)" }}
                >
                  {item.heading}
                </h3>
                <p
                  className="text-[16px] font-[400] pr-[20px]"
                  style={{ fontFamily: "var(--font-opensans)" }}
                >
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Image
            src={imageSrc}
            height={357}
            width={700}
            className="absolute top-[33%] bottom-auto left-[10px]  z-30"
            alt="security"
        />
      </div>
    </div>
    </section>
  );
}
