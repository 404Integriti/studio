import Image from 'next/image';

import { cards } from "../../components/customThemePoints"; 
const WhyUs = () => {
  return (
    <div className=" whyus w-full md:max-w-[1440px] mx-auto px-[10px] py-8">
      <h2 className="text-[30px] md:text-[36px] mb-10 md:mb-20 text-center raleway text-[#333333] font-semibold">Why WordPress? Why Us?</h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[55%] mb-6 md:mb-0 md:sticky md:top-4 self-start">
          <Image
            src="/new/whyus-left.webp"
            alt="Meeting Room"
            width={1000}
            height={400}
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-[42%] md:pl-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`md:p-[25px] p-[10px] rounded-[20px] transition-colors duration-300 ${card.hoverColor}`}
            >
              <h3 className="text-[19px] md:text-[24px] font-semibold mb-2 raleway text-[#333]">{card.title}</h3>
              <p className="mb-2 text-[#575757] text-[16px] md:text-[18px] opensans">{card.description}</p>
              <a href={card.linkUrl} className="hover:underline text-[#009688] text-[18px] raleway">
                {card.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
