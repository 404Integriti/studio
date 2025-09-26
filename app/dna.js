import Secheading from './components/secheading'
import DnaCard from './components/dna/page'


const dnaCardsData = [
  {
    src: "/ist.svg",
    alt: "DNA Image",
    width: 83,
    height: 83,
    heading: "Design with Purpose",
    description:
      "We believe great design isn’t just pretty — it’s powerful. Every pixel we place serves a goal.",
  },
  {
    src: "/2nd.svg",
    alt: "DNA Image",
    width: 48,
    height: 80,
    heading: "People First, Always",
    description:
      "Behind every brand is a human.\nWe listen, collaborate, and create with empathy.",
 

  },
  {
    src: "/3rd.svg",
    alt: "DNA Image",
    width: 48,
    height: 80,
    heading: "Bold is Better",
    description:
      "We take creative risks, push\nboundaries and make brands unforgettable.",
  },
  {
    src: "/4th.svg",
    alt: "DNA Image",
    width: 48,
    height: 80,
    heading: "Obsessed with Detail",
    description:
      "We sweat the small stuff —\nanimations, transitions,\nresponsiveness — it all matters.",
  },
  {
    src: "/5th.svg",
    alt: "DNA Image",
    width: 48,
    height: 80,
    heading: "Built for Results",
    description:
      "A website should work. We\ndesign to convert, impress and\ngrow your bottom line.",
  },
  {
    src: "/6th.svg", // Add your real path here
    alt: "DNA Image",
    width: 48,
    height: 80,
    heading: "Code Like Craftsmen",
    description:
      "Our code isn’t just functional. It’s elegant, fast, and made with care like digital architecture.",
  },
];

export default function DnaPage() {
  return (
<section className="pt-[60px] md:pt-[80px] pb-[60px] is-dna-section">
      <div className="max-w-[1400px] mx-auto">
        <Secheading
          classheading=" text-[24px] sm:text-[36px] text-[#333333] lg:text-[50px] font-[600] text-[#000] leading-[36px] lg:leading-[28px] pb-[25px] lg:pb-[40px] mb-[10px] md:mt-[20px] mt-[0px] px-[20px] text-center"
          heading="The DNA of Integriti Studio"
        />
        <div className="is-divider"></div>
        <div className="flex flex-wrap justify-around gap-x-[20px] md:gap-y-[125px] gap-y-[90px] mt-[100px] lg:pt-[50px]
                          pt-[30px]">
          {dnaCardsData.map((card, index) => (
            <DnaCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
