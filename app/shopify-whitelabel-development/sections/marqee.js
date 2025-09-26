import Image from "next/image";
import WhitelabelMarquee from "./whitelabelmarqee";

const experienceImages = [
      {source: "/ShopifyWhitelabel/lorenza.svg",
     width: "180",
     height : "47"
    },
      {source:  "/ShopifyWhitelabel/symmetry.svg",
     width: "180",
     height : "47"
    },
      {source: "/ShopifyWhitelabel/trendz.svg",
     width: "180",
     height : "47"
    },
      {source: "/ShopifyWhitelabel/prestige.svg",
     width: "180",
     height : "47"
    },
      {source:  "/ShopifyWhitelabel/dawn.svg",
     width: "130",
     height : "46"
    },
    {source:  "/ShopifyWhitelabel/impulse.svg",
        width: "180",
        height : "47"
    },
    {source:  "/ShopifyWhitelabel/ella.svg",
   width: "130",
   height : "46"
  },
      {source: "/ShopifyWhitelabel/bitdefender.svg",
     width: "200",
     height : "47"
    },
     {source: "/ShopifyWhitelabel/lorenza.svg",
     width: "180",
     height : "47"
    },
      {source:  "/ShopifyWhitelabel/symmetry.svg",
     width: "180",
     height : "47"
    },
      {source: "/ShopifyWhitelabel/trendz.svg",
     width: "180",
     height : "47"
    },
      {source: "/ShopifyWhitelabel/prestige.svg",
     width: "180",
     height : "47"
    },
      {source:  "/ShopifyWhitelabel/dawn.svg",
     width: "130",
     height : "46"
    },
      {source: "/ShopifyWhitelabel/bitdefender.svg",
     width: "200",
     height : "47"
    },
    {source: "/ShopifyWhitelabel/lorenza.svg",
     width: "180",
     height : "47"
    },
      {source:  "/ShopifyWhitelabel/symmetry.svg",
     width: "180",
     height : "47"
    },
    {source: "/ShopifyWhitelabel/prestige.svg",
        width: "180",
        height : "47"
    },
    {source: "/ShopifyWhitelabel/trendz.svg",
   width: "180",
   height : "47"
  },
      {source:  "/ShopifyWhitelabel/dawn.svg",
     width: "130",
     height : "46"
    },
      {source: "/ShopifyWhitelabel/bitdefender.svg",
       width: "200",
     height : "47"
    },
  ];
const paymentImages = [
      {source: "/ShopifyWhitelabel/stripe.svg",
     width: "141",
     height : "47"
    },
      {source: "/ShopifyWhitelabel/amazon.svg",
     width: "200",
     height : "49"
    },
      {source: "/ShopifyWhitelabel/klarna.svg",
     width: "180",
     height : "40"
    },
      {source:  "/ShopifyWhitelabel/paypal.svg",
     width: "200",
     height : "52"
    },
      {source: "/ShopifyWhitelabel/shopify.svg",
     width: "260",
     height : "46"
    },
      {source: "/ShopifyWhitelabel/pay.svg",
     width: "140",
     height : "46"
    },
      {source: "/ShopifyWhitelabel/authorize.svg",
     width: "270",
     height : "51"
    },
      {source: "/ShopifyWhitelabel/stripe.svg",
     width: "141",
     height : "47"
    },
      {source: "/ShopifyWhitelabel/amazon.svg",
     width: "200",
     height : "49"
    },
      {source: "/ShopifyWhitelabel/klarna.svg",
     width: "180",
     height : "49"
    },
      {source:  "/ShopifyWhitelabel/paypal.svg",
     width: "200",
     height : "52"
    },
      {source: "/ShopifyWhitelabel/shopify.svg",
     width: "260",
     height : "46"
    },
      {source: "/ShopifyWhitelabel/pay.svg",
     width: "140",
     height : "46"
    },
      {source: "/ShopifyWhitelabel/authorize.svg",
     width: "270",
     height : "51"
    },
      {source: "/ShopifyWhitelabel/stripe.svg",
     width: "141",
     height : "47"
    },
      {source: "/ShopifyWhitelabel/amazon.svg",
     width: "200",
     height : "49"
    },
     {source: "/ShopifyWhitelabel/shopify.svg",
     width: "260",
     height : "46"
    },
      {source: "/ShopifyWhitelabel/pay.svg",
     width: "140",
     height : "46"
    },
      {source: "/ShopifyWhitelabel/authorize.svg",
     width: "270",
     height : "51"
    },
    
  ];

  const pageBuilderImages = [
    {source:"/ShopifyWhitelabel/replo.svg",
     width: "149",
     height : "74"
    },
    {source:"/ShopifyWhitelabel/gempages.svg",
     width: "163",
     height : "80"
    },
    {source:"/ShopifyWhitelabel/pagefly.svg",
     width: "175",
     height : "105"
    },
    {source:"/ShopifyWhitelabel/shogun.svg",
     width: "180",
     height : "91"
    },]
export default function MyMarqeee() {
  return (
      <section className="pb-[60px] ">
        {/* first */}
        <h3 className="my-[20px] text-center text-[28px] font-[700] leading-[30px]" style={{fontFamily:"var(--font-raleway)"}}>
            Shopify Theme Experience
        </h3>
        <div className="w-full  overflow-hidden mx-auto">
            <WhitelabelMarquee images={experienceImages} speed={50} gap={32} styleImage={'w-full h-full max-w-[130px] max-h-[34px] sm:max-w-[174px] sm:max-h-[45px] md:max-w-[180px] sm:max-h-[47px]'}/>

        </div>  
        {/* second */}
        <h3 className="mt-[20px] text-center text-[28px] font-[700] leading-[30px]">Page builder</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 max-[479px]:gap-[15px] px-[40px] py-[40px] md:pb-[10px] mx-auto max-w-[1440px]">
            {pageBuilderImages.map((image,index)=>
                (
                    <div key={index} className={`flex justify-center ${index === 3 && 'pt-[40px]'}`}>
                        <Image src={image.source} alt="Image" width={image.width} height={image.height} className="!max-w-[70%] min-[991px]:!max-w-[100%] " />
                    </div>
                ))}

        </div>
         {/* third */}
        <h3 className="my-[20px] text-center text-[28px] font-[700] leading-[30px]" style={{fontFamily:"var(--font-raleway)"}}>
            Payment gateways
        </h3>
        <div className="w-full  overflow-hidden mx-auto">
                <WhitelabelMarquee images={paymentImages} speed={50} gap={32} styleImage={'w-full h-full max-w-[130px] max-h-[34px] sm:max-w-[174px] sm:max-h-[45px] md:max-w-[180px] sm:max-h-[47px]'} />

        </div>
        </section>
  )
}
