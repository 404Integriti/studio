import Image from "next/image";

export default function Herosection({
  heading,
  paragraph,
  buttons,
  headingClass,
  paragraphClass,
  sectionpadding,
  playIcon,
  subheading,
  subheadingClass,
  btnContainer
}) {
  return (
    <section className={`hero-section-bg  ${sectionpadding}`}
    style={{
  backgroundImage: "url('/hero-section-bg.webp')",
  }}
    >
        <div className="max-w-[1440px] mx-auto">
      <h2
        className={` tracking-normal ${headingClass}`}
        style={{
          fontFamily: "var(--font-montserrat)",
        }}
      >
        {heading}
      </h2>


        <h3 className={` tracking-normal ${subheadingClass}`}>
          {subheading}
          
        </h3>
      <p
        className={`tracking-normal ${paragraphClass}`}
        style={{
          fontFamily: "var(--font-opensans)",
        }}
      >
        {paragraph}
      </p>

      <div className={`${btnContainer} hero-buttons `}>
        {buttons}
      </div>
</div>
    </section>
  );
}
