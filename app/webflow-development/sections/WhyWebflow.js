import Card from '@/app/components/WhyWebflowCard';
import Link from 'next/link';

export default function Home() {
  const cards = [
    {
      icon: '/WhyWebflow/pen.svg',
      title: 'Design Meets Code',
      description:
        'Seamless visual development paired with clean, production-ready code for high-performance, scalable and visually stunning E-Commerce sites.',
    },
    {
      icon: '/WhyWebflow/puzzle.svg',
      title: 'Zero Plugins, Full Control',
      description:
        'No plugins, no bloat—just streamlined, custom-tailored solutions designed for optimal performance, scalability, security and seamless user experiences.',
    },
    {
      icon: '/WhyWebflow/clock.svg',
      title: 'Fast, Flexible, Scalable',
      description:
        'Faster time-to-market through flexible, scalable design systems that streamline development and adapt seamlessly to evolving brand needs and trends.',
    },
    {
      icon: '/WhyWebflow/calend.svg',
      title: 'Design-to-Dev Precision',
      description:
        'We specialize in design-to-development precision using Figma and Webflow for seamless, efficient, pixel-perfect and fully responsive E-Commerce experiences.',
    },
    {
      icon: '/WhyWebflow/cart.svg',
      title: 'Seamless & Scalable',
      description:
        'Seamless handoff, pixel-perfect execution, and scalable front-end architecture for robust, high-performance, future-proof and easily maintainable E-Commerce solutions.',
    },
  ];

  return (
    <section className=" bg-[#F8F8F8] max-[479px]:mt-[100px] max-[479px]:mx-[10px] max-[479px]:my-[20px] min-[479px]:mt-[10px] min-[990px]:mt-0 pt-[40px] pb-[80px] px-[20px]">
      <div className='max-w-[1320px] mx-auto px-6'>
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 min-[991px]:grid-cols-3 gap-x-10 gap-y-10">
        {/* First box with H1 and button */}
        <div className="flex flex-col justify-center pl-[10px] leading-[20px] relative pr-[20px]">
          <h2 className="raleway text-[#070707] text-[30px] font-[600] leading-[36px] mt-[20px] mb-[10px] lg:pr-[40px]">Why Webflow? Why Us?</h2>
          <p className="text-[#070707] mb-[10px] text-[14px]" style={{fontFamily: "var(--font-opensans)" ,}}
>
            Clean visual development, no bloat—fast, precise Figma-to-Webflow custom solutions.
          </p>
          <Link href='/contact-us' className="raleway text-[18px] bg-teal-600 hover:bg-teal-700 text-white font-[500] cursor-pointer px-[30] py-[15px] self-start rounded-full">
            Work With Us
          </Link>
        </div>

        {/* Remaining boxes with cards */}
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      </div>
    </section>
  );
}
