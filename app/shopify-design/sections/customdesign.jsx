import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ShopifyDesignCards from '@/app/components/shopifydesigncards';

gsap.registerPlugin(ScrollTrigger);

const shopifycardData = [
  {

    title: "100% Unique & Branded Themes",
    text: "We design every WordPress theme from the ground up—fully aligned with your brand identity, goals, and voice. Nothing pre-made, nothing generic.",
 
},
  {

    title: "No Cookie-Cutter Templates",
    text: "Forget the off-the-shelf look. Every element is custom-crafted to stand out and speak directly to your audience—no reused layouts or duplicated code.",

  },
  {

    title: "Visual Storytelling Built In",
    text: "Each page is thoughtfully designed to guide users through your brand story, with intentional flow, engaging visuals, and meaningful content placement.",

},
  {

    title: "High-Fidelity Mockups First",
    text: "Before we code, we design in detail. You'll review pixel-perfect mockups that reflect the final product—ensuring clarity and alignment from the start.",

},
];
export default function Customdesign() {
  return (
   <section className=''>
    <div className='w-[100%] max-w-[1460px] mx-auto flex'>
     <div className="w-[100%] max-w-[608px] pl-[40px] pr-[10px]"> 
            <h2 className='text-[36px] font-[600] leading-[35px] mt-[20px] mb-[10px]'>Custom Design for Shopify</h2>
     </div> 
     <div className='w-[100%] max-w-[851px] px-[2.5rem] '>
           <div className={`wrapper`}> {/* gives enough scroll space */}
                       <ShopifyDesignCards cards={shopifycardData} />
                     </div>
     </div>
    </div>
   </section>
  )
}
