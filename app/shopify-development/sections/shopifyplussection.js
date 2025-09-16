import shopifyData from '@/app/components/customThemePoints';
import Image from 'next/image';

export default function ShopifyPlusSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-10 lg:px-[10px] px-[20px] bg-white max-w-[1440px] mx-auto">
      <div className="w-full md:max-w-[550px] md:ml-[60px] text-left md:text-left mb-6 md:mb-0">
        <h2 className='text-[#333333] text-[30px] md:text-[36px] text-left mb-4 font-semibold' style={{
            fontFamily: "var(--font-raleway)",
        }}>Shopify Plus Expertise</h2>
        <p className="text-gray-600 text-[16px] mb-6 opensans">
          Built for high-growth brands, our solution offers scalable architecture to handle high traffic and large catalogs. We deliver enterprise-level integrations, customizations, and white-glove onboarding, including expert setup and performance tuning.
        </p>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {shopifyData.map((item, index) => (
            <div key={index} className="text-left">
              <h3 className="text-[34px] font-semibold text-[#333333] raleway">{item.value}</h3>
              <p className="text-[#333333] text-[16px] opensans">{item.title}</p>
            </div>
          ))}
        </div>
        <button className="bg-[#009688] text-white px-10 py-2 rounded-full hover:bg-teal-700 transition text-[18px]raleway">
          Contact Now
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <div className="relative">
          <Image
          
            src="/new/shopify-plus.svg"
                 width={622}
            height={392}
            alt="Shopify Store"
            className=""
          />
        </div>
      </div>
    </section>
  );
}





