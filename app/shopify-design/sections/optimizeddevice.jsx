
"use client";



import dynamic from 'next/dynamic';

// Dynamically import the Lottie Player to avoid SSR issues
const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), {
  ssr: false,
  loading: () => <div className="w-full max-w-[500px] lg:h-[500px] h-full bg-gray-100 animate-pulse rounded-lg"></div>
});

export default function OptimizedDevice() {
  return (
  <section>
    <div className='w-[100%] max-w-[1350px] mx-auto flex lg:flex-row flex-col justify-center pt-[100px] gap-[25px] pb-[30px] lg:px-[10px] px-[20px]'>
        <div className='w-[100%] max-w-[570px] px-[10px] '>
    
                <Player
                  autoplay
                  loop
                    src="/shopifydesign.json" 
                  style={{ height: '612', width: '639' }}
                />
                </div>
     
        <div className='w-[100%] max-w-[570px] px-[10px]  flex flex-col justify-center'>
            <h2 className="lg:text-[34px] text-[28px] font-[600] leading-[40px] mt-[20px] mb-[10px] text-[#333]" style={{
                fontFamily: "var(--font-raleway)",
            }}>Optimized for Every Device</h2>
            <p className="text-[16px] leading-[28px] font-[400] text-[#333]" style={{
                fontFamily: "var(--open-sans)",
            }}>
                Our mobile optimization ensures your Shopify store looks and performs flawlessly on every device. From tap-friendly buttons to responsive layouts and lightning-fast load times, we design with a mobile-first mindset—making sure your customers enjoy a seamless shopping experience, wherever they are.

            </p>
        </div>
    </div>
    </section>
  )
}
