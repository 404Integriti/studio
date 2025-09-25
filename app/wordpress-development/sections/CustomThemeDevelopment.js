import Image from "next/image";
import { customThemePoints } from "../../components/customThemePoints"; 
import Link from "next/link";


const CustomThemeDevelopment = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-[10]  md:pt-[80px]  md:pb-[80px] pb-[40px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="md:ml-15">
             <h2 className="md:text-[36px] text-[30px] font-[600] text-left leading-[36px] text-[#333333] raleway mt-[20px] md:mt-[60px] pb-[25px]"> Custom Theme Development</h2>
        <ul className="space-y-4 mb-8 opensans">
          {customThemePoints.map((point, index) => (
            <li key={index} className="flex items-center gap-3">
            <Image
              src="/new/Tick-icon.svg"
              alt="Custom Theme Development"
              width={28}
              height={20}
              className="object-contain "
            />
              <span className="text-[#575757] text-[16px]">{point}</span>
            </li>
          ))}
        </ul>
        <Link href="/contact-us" className="bg-[#F15A24] text-white text-[18px] font-medium py-3 px-6 rounded-full hover:bg-[#ED8104] transition raleway">
          Let’s build Smarter
        </Link>
      </div>
      <div className="flex justify-center md:mr-[15]">
        <Image
          src="/new/theme-dev-img.svg"
          alt="Custom Theme Development"
          width={500}
          height={500}
          className="object-contain footer-float"
        />
      </div>
    </section>
  );
};

export default CustomThemeDevelopment;