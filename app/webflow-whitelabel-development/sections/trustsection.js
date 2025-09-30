import InfoCard from './infocard';

const leftItems = [
  'Skilled in Webflow Interactions',
  'Proficient with Webflow Apps',
  'Experienced in CMS and Dynamic Content',
  'Advanced Animation Implementation',
  'Clean Code Structure and SEO-Optimized',
];

const rightItems = [
  'We work fully white label under signed NDAs.',
  'Your clients remain 100% yours—always.',
  'No portfolio sharing unless permitted by you.',
  'Trained to operate like your in-house team',
  'Private, secured communication and data handling.',
];

export default function WebflowTrustSection() {
  return (
    <section className=" bg-white">
      <div className='sm:px-[20px] pt-[15px] pb-[20px] md:pb-[80px] md:px-[0px] xl:mx-auto xl:w-[1030px] flex flex-col md:flex-row justify-center max-[991px]:gap-[26px] max-w-[1440px]'>
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
          styleHeading={'!text-[23px] !font-[700] min-[479px]:!font-[600]'}
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
