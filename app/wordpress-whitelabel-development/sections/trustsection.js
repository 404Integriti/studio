import InfoCard from './infocard';

const leftItems = [
  'Every project starts with a legally binding NDA',
  '100% white-label — your agency stays invisible to clients',
  'We follow your tone, processes, and brand guidelines',
  'Trained to operate like your in-house team',
  'Fully aligned with your tools, platforms, and workflows',
];

const rightItems = [
  'Always on-time, with quality that exceeds expectations',
  'Proactive and clear communication, led by expert PMs',
  'Clean, scalable code optimized for performance and security',
  'Seamless white-label support  your agency stays front and center',
];

export default function TrustSection() {
  return (
    <section className=" bg-white">
      <div className='px-[20px] py-[40px] md:px-[0px] xl:mx-auto xl:w-[1030px] flex flex-col md:flex-row justify-center max-[991px]:gap-[26px] max-w-[1440px]'>
        <InfoCard
          title="Confidentiality & NDA-First Culture"
          items={leftItems}
          bgColor="bg-[#EF4D23]"
          textColor="text-white"
          iconColor="text-white"
          tick={"first"}
        />
        <InfoCard
          title="Why Agencies Trust Integriti Studio"
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
