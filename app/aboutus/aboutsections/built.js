import BuiltForYou from "@/app/components/about/builtforyou";


const builtCardsData = [
  {
    heading: "Expertise That Delivers Results",
    text: "With 85% mastery in web development and Shopify, we bring technical precision to every project, ensuring seamless functionality and performance.",
    bgcolor: "#ebe8ff",
},
    {
    heading: "Designs That Speak for Your Brand",
    text: "Our 90% expertise in UX/UI concepts guarantees user-friendly, visually captivating designs that enhance engagement and customer satisfaction.",
     bgcolor: "#fff2d5",
},
{
    heading: "Tailored to Your Vision",
    text: "We specialize in creating branding strategies and digital solutions that resonate with your business goals and audience.",
     bgcolor: "#c7fff4",
},
 {
    heading: "A Team You Can Count On",
    text: "At Integriti Studio, teamwork is key to our operations. We take the time to comprehend your demands and turn them into outcomes that have an impact.",
   bgcolor: "#ebe8ff",
},
   {
    heading: "Striving for Excellence",
    text: "Whether it’s building a Shopify store or crafting a unique UX design, we combine creativity with technical skill to deliver exceptional outcomes every time.",
    bgcolor: "#fff2d5", 
},
     {
    heading: "Your Growth is Our Priority",
    text: "From scalable web solutions to memorable branding, we ensure our skills translate into meaningful growth for your business.",
    bgcolor: "#c7fff4",
},

];


export default function Built() {
  return (
    <section className='built-for-you'>
        <div className='w-[100%] max-w-[1240px] md:pt-[123px] mx-auto mb-[80px]'>
          <h2 className='raleway  md:text-[36px] text-[30px] font-[600] text-center mt-[20px] leading-[30px] mb-[10px] text-[#333]'><span className='text-[#00b8a9]'>Built </span>For You, <span className='text-[#00b8a9]'>By Integriti </span></h2>
          
<div className="flex flex-wrap justify-center md:justify-between gap-[20px] sm:gap-[16px] pt-[20px] px-[20px]">
             {builtCardsData.map((card, index) => (
                      <BuiltForYou 
                      key={index}
                      heading={card.heading}
                      text={card.text}
                      bgcolor={card.bgcolor}
                    />
                  ))}
               </div>
        </div>
    </section>
  )
}
