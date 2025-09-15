'use client'
import {InitialCards,CmsCard} from "@/app/components/WebflowDevelopmentCMSCard";
import { useState, useEffect } from "react";
 
export default function WhyWebflow() {
//state to store the width of the screen
const [isMobile, setIsMobile] = useState(false);
 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 991);
    };
 
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
 
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  //data for the component
  const cards = [
    {
        icon:'/new/crm.svg',
        title:"Easy-to-Edit",
        description:"Intuitive content structures designed for easy editing, efficient updates, and smooth collaboration across teams—empowering marketers, designers, and developers to work seamlessly with minimal.",
 
     },
    {
        icon:'/new/updated.svg',
        title:"Built for Easy Updates",
        description:"CMS filters, tags, and collections designed for organized site growth, improved navigation, enhanced user experience, better SEO, simplified content management, and scalable structures.",
 
     },
    {
       icon:'/new/settings.svg',
        title:"Scalable CMS Systems",
        description:"Intuitive content structures for easy editing, fast updates, team collaboration, and long-term content scalability—empowering seamless content management without developer "
 
     },
    {
       icon:'/new/readycontent.svg',
        title:"Ready Content",
        description:"Easily scalable content systems built to grow with your business—ensuring flexibility, performance, future-ready expansion, streamlined management, consistent structure, and improved collaboration."
 
 
     },
   
  ];
  return (
      <section className="bg-[#F8F8F8] flex justify-center min-[1280px]:py-[30px]  max-[991px]:px-[40px]" >
        <div className="max-w-[1440px] w-full h-full flex flex-col min-[991px]:items-center items-stretch pb-[100px]">
         <h1 className="max-[479px]:text-[30px] leading-[34px] text-center text-[36px] font-[600] mt-[30px] max-[991]:mb-[20px] mb-[60px]" style={{fontFamily:"var(--font-raleway)",}}>Webflow CMS & Dynamic Content</h1>
       {isMobile ? (
          <div className="grid max-[479px]:grid-cols-1 max-[991px]:grid-cols-2 h-full gap-y-4 grid-cols-4 gap-x-5 max-[991px]:gap-x-[35px] max-[991px]:gap-y-[35px] ">
         {cards.map((card, index) => (
         <InitialCards
         key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}/>
        ))}
     
        </div>
       ):(
           <div className="flex justify-center w-full max-w-[1440px] gap-[19.2px] min-[1920px]:gap-[33.6px]">
         {cards.map((card, index) => (
         <CmsCard
         key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}/>
        ))}
     
        </div>
       )}
         </div>  
 
      </section>
  );
}
 
 