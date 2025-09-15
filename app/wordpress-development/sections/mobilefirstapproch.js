
import { MobileApproach } from "../../components/customThemePoints";
import Image from "next/image";
const StoreFeatures = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-10 px-4 bg-[#f5f5f0]">
      <div className="container mx-auto max-w-[1300px] flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:max-w-[550px] text-left mb-6 md:mb-0">
             <h2 className="md:text-[36px] text-[30px] font-[600] text-left mb-[20px] leading-[36px] text-[#333333] raleway">Mobile-First Approach</h2>
          <p className="text-[#333333] text-[15px] md:mb-6 md:pb-6 max-w-[470px] opensans">
            We create fully responsive websites optimized for all devices and screen sizes. With fast mobile load speeds, touch-friendly design, and user-focused interactions, we ensure a seamless experience. Our solutions work consistently across all browsers and platforms, delivering reliable performance and intuitive navigation no matter where or how users access your site.
          </p>
        </div>
        <div className="w-full flex justify-start md:flex-start mt-6 md:mt-0">
          <div
            className="relative flex flex-col items-center md:items-start md:ml-[160px]"
            style={{
              backgroundImage: `url('/mobilebg.svg')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
                }}
          >
            {MobileApproach.map((mbpr, index) => (
              <div
  key={index}
  className={`flex items-center p-4 mb-12 w-full rounded-[20px] border border-[#ede9e9] max-w-[400px]  ${index === 0 || index === 2 ? 'md:mr-[120px]' : ''} ${index === 1 ? 'md:ml-[-120px]' : ''}`}
  style={{
    backgroundColor: '#FFFFFF',
  }}
>
                <Image
                  src={mbpr.numberImage}
                  alt={`${mbpr.title} icon`}
                  className="w-15 h-auto mr-4"
                />
                <div>
                  <h3 className="text-[#575757] text-[18px] font-bold raleway">{mbpr.title}</h3>
                  <p className="text-[#575757] text-[15px] raleway ${geistSans.variable}">{mbpr.descrp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreFeatures;