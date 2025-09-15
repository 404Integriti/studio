import Secheading from "./components/secheading"
import Testimonial from "./components/testimonial/testimonial"

const testiCardsData = [
  {
    authorname: "Matthew N.",
    testimonialtext: "Absolutely satisfied with Integriti Studio and the team. They were able to achieve the desired result with great communication throughout the process.",
  },
    {
    authorname: "Shawn S.",
    testimonialtext: "Integriti studio was very good to work with as the project kind of morphed and they just took it in stride!",
  },
      {
    authorname: "Sarah K.",
    testimonialtext: "Integriti Studio team is amazing! Hiring them now for my next Shopify web build! Fast, efficient turnarounds, with fewer edits than I was expecting. A+ team.",
  },
     {
    authorname: "Jacinta G.",
    testimonialtext: "Great communication and strong attention to detail. Delivered quality work and was responsive throughout the project. Will definitely work with Integriti Studio again.",
  },
       {
    authorname: "Hardik V.",
    testimonialtext: "Professional team. I recommend them to everyone.",
  },
       {
    authorname: "Larry L.",
    testimonialtext: "Excellent store builder and design for Shopify",
  },
      {
    authorname: "Lorne F.",
    testimonialtext: "Great fast and knowledgable, pleasure to work with and will use them again!",
  },
        {
    authorname: "Hamid M.",
    testimonialtext: "professional with great knowledge for shopify development able to solve problem quickly",
  },
          {
    authorname: "Yalcin D.",
    testimonialtext: "Integriti studio team is a very talented and precisely working freelancer. I can highly recommend them and I am very glad that I decided for them. I will definetly hit back on them, when I need help again on any tasks about Shopify",
  },
        {
    authorname: "Laura S.",
    testimonialtext: "Integriti Studio is extremely responsive, talented and does great work! I highly recommend working with them!",
  },
];

export default function Maintestimonial() {
  return (
    <section className='testimonial lg:pt-[120px] md:pt-[80px] pt-[40px] pb-[20px]' style={{
        backgroundImage: "radial-gradient(circle farthest-corner at 9% 0%, #fbcfc1, #f8f8f8 27%)"
    }}>
      <Secheading
      heading="Clients Testimonials"
      classheading="text-[#333] pb-[20px] lg:text-[47px] md:text-[36px] text-[24px] font-[600] leading-[39px] text-center pt-[20px] "
      paragraph="We sweat the small stuff — animations, transitions, responsiveness — it all matters."
      classparagraph="lg:text-[22px] md:text-[20px] text-[18px] font-[400] text-center lg:pb-[80px] pb-[40px] text-[#000]"

      />

    <div className="flex flex-wrap justify-center gap-[16px] pl-[20px] pr-[20px]">
      {testiCardsData.map((card, index) => (
        <Testimonial
          key={index}
          authorname={card.authorname}
          testimonialtext={card.testimonialtext}
        />
      ))}
    </div>

    </section>
  )
}

