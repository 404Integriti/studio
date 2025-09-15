"use client";
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the Lottie Player to avoid SSR issues
const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), {
  ssr: false,
  loading: () => <div className="w-full max-w-[500px] lg:h-[500px] h-full bg-gray-100 animate-pulse rounded-lg"></div>
});


const freedomcard = [
    {
    text: 'Our designers work seamlessly with your Figma files to create exact replicas, pixel-perfect and fully responsive.',
    bgcolor: '#ffd99d33',
    marginleft: '0'
    },
    {
        text: 'From subtle motion to complex animations, we help your site feel alive and interactive to engage users.',
        bgcolor: '#c5e3e0',
        marginleft: '50px'
    },
    {
    text: 'No bloated templates—only lean, lightweight and optimized builds that boost performance, SEO and conversions.',
        bgcolor: '#c5e3e0',
        marginleft: '80px'
    },
    {
    text: 'No bloated templates—only lean, lightweight and optimized builds that boost performance, SEO and conversions.',
        bgcolor: '#c5e3e0',
        marginleft: '110px'
    }
]

export default function Freedom() {
  return (
    <section className='freedom md:py-[40px] py-[20px]'>
        <div className='w-[100%] max-w-[1440px]  mx-auto lg:px-[40px] px-[20px]'>
           <h2 className='md:text-[36px] text-[30px] text-center font-[600] leading-[42px] mt-[20px] mb-[10px] w-[100%] max-w-[600px] mx-auto' style={{ fontFamily: 'raleway', }}>Creative Freedom Meets Clean Code with <span className='hero-orange'>Webflow</span></h2>
        <div className='flex gap-[40px] justify-center lg:flex-row flex-col items-center mt-[50px]'>
           
            <div className='w-[100%] lg:max-w-[40%] max-w-[60%]'>
              <div className='w-[100%] max-w-[500px] lg:h-[500px] h-[100%]'>
              <Player
                  autoplay
                  loop
                  src="/lottie.json"
                  style={{ height: '1005', width: '100%' }}
                />
                </div>
             </div>
            <div className="w-[100%] lg:max-w-[60%] max-w-[100%] flex flex-col gap-[30px] ">


              {freedomcard.map((card, index) => (
                    <div
                    key={index}
                    className="creative-free-card rounded-[2px_20px_20px_2px] p-[20px] w-[100%] lg:max-w-[633px] max-w-[100%] text-[#575757] "
                    style={{
                        marginLeft: card.marginleft,
                        backgroundColor: card.bgcolor,
                        fontFamily: 'sans-serif',
                    }}
                    >
                    <p>{card.text}</p>
                    </div>
                ))}

            <Link href="/" className='px-[15px] mt-[10px] py-[10px] bg-[#e64a19] rounded-[30px] w-[100%] max-w-[241px] h-[42px]  text-center text-[16px] text-[#fce4ec] font-[400] leading-[22px] lg:ml-[110px] mx-auto'>Explore Shopify Services </Link>      
             </div>
        </div>
      </div>
    </section>
  )
}
