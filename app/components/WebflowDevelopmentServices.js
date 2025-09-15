import Image from 'next/image';
export default function WebflowDevelopmentServices({items,ImageSrc}){

  return (
    <div className=" md:w-full min-[767px]:pl-[30px] min-[767px]:pb-[100px] pt-[50px] min-[1280px]:pt-[60px]">
      <h2 className="text-[30px] block z-20 leading-10 md:text-[36px] text-[#333333] font-semibold min-[767px]:mt-[20px] mb-[10px]" style={{fontFamily:"var(--font-raleway)",}}>Our Webflow Development <br/>Services</h2>
      <div className="flex flex-col md:flex-row md:justify-between">
      
        <div className="w-[100%] md:max-w-[50%] max-w-[100%] md:mt-[99px] pr-[10px] md:h-[745px] lg:h-[1120px] md:flex flex-col justify-between">
          {items.map((service, index) => (
            <div
              key={index}
            >
              <h3 className="text-[25px] xs:text-[28px] md:text-[30px] font-semibold mb-[8px] mt-[20px] text-[#333]" style={{fontFamily:"var(--font-raleway)",}}>{service.title}</h3>
              <p className="w-[100%] md:max-w-[390px] mb-[10px] text-[#575757] text-[14px] font-normal " 
              style={{fontFamily: "var(--font-opensans)" ,}}
              >{service.text}</p>
            </div>
          ))}
        </div>
          <div className="w-[100%] md:max-w-[50%] max-w-[100%] flex justify-center pr-2  md:w-[55%] mb-6 md:mb-0 bg-grey md:sticky md:top-10 self-start">
          <Image
            src={ImageSrc}
            alt="Meeting Room"
            width={700}
            height={662}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
