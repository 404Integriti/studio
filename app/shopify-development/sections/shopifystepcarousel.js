'use client';
import StepCarousel from '@/app/components/StepCarousel/page';


import { 
  Palette, 
  Wrench, 
  Search, 
  Key 
} from 'lucide-react';

const shopifyStepCarousel = () => {
  const steps = [
    {
      number: 1,
      icon: "/icon1.svg",
      title: "eCommerce That Leads",
      description: "An industry-leading eCommerce platform, trusted by over one million brands, delivering exceptional scalability, performance, and reliability.",
      bgcolor: "#009688"
    },
    {
      number: 2,
      icon: "/icon2.svg",
      title: "Built-In for Success",
      description: "We specialize in custom Shopify builds that go beyond standard themes, tailored for unique brand experiences and advanced functionality.",
      bgcolor: "#3ecdb5"
    },
    {
      number: 3,
      icon: "/icon3.svg",
      title: "Truly Custom Builds",
      description: "We specialize in custom Shopify builds that go beyond standard themes, tailored for unique brand experiences and advanced functionality.",
      bgcolor: "#3ecdb5"
    },
    {
      number: 4,
      icon: "/icon4.svg",
      title: "Diverse Industry Experience",
      description: "Proven experience across diverse industries—from fashion and fitness to tech and lifestyle—delivering impactful eCommerce ",
      bgcolor: "#009688"
    }
  ];

  const handleStepChange = (stepIndex) => {
    // Step change handler
  };

  return (
    <div className="flex justify-center items-center px-[30px]">
      <div className="w-[100%] max-w-[100%] mx-auto">
     
        
        <StepCarousel 
          steps={steps} 
          activeStep={0} 
          onStepChange={handleStepChange}
        />
        
      
      </div>
    </div>
  );
};

export default shopifyStepCarousel;
