import InfoCard from './infocard';

const leftItems = [
  'Senior Shopify specialists only—no juniors learning on your client’s budget.',
  'Reliable & deadline driven delivery.',
  'Transparent pricing with no hidden costs.',
  'Proven success stories across numerous industries.',
];

const rightItems = [
  'We work fully white label under signed NDAs.',
  'Your clients remain 100% yours—always.',
  'No portfolio sharing unless permitted by you.',
  'Private, secured communication and data handling.',
];

export default function TrustSection() {
  return (
    <section className=" bg-white ">
      <div className='px-[20px] py-[40px] md:px-[0px] xl:mx-auto xl:w-[1030px] flex flex-col md:flex-row justify-center max-[991px]:gap-[26px] max-w-[1440px]'>
        <InfoCard
          title="Why Agencies Trust Integriti Studio"
          items={leftItems}
          bgColor="bg-[#EF4D23]"
          textColor="text-white"
          iconColor="text-white"
          tick={"first"}
        />
        <InfoCard
          title="Confidentiality & NDA-First Culture"
          styleHeading={'!text-[23px] !font-[600] '}
          items={rightItems}
          bgColor="bg-[#F3EEEE]"
          textColor="text-[#EF4D23]"
          iconColor="text-[#EF4D23]"
          tick={"second"}
        />
      </div>
    </section>
  );
}
