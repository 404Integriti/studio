'use client';
import StepCarousel from '@/app/components/StepCarousel/page';


import { 
  Palette, 
  Wrench, 
  Search, 
  Key 
} from 'lucide-react';

const DemoStepCarousel = () => {
  const steps = [
    {
      number: 1,
      icon: "/icon1.svg",
      title: "Custom Themes & Plugins",
      description: "Fully tailored WordPress builds crafted from scratch—optimized for SEO, mobile, and performance with no generic templates.",
      bgcolor: "#009688"
    },
    {
      number: 2,
      icon: "/icon2.svg",
      title: "White Label Solutions",
      description: "We help agencies deliver polished WordPress sites behind the scenes, blending seamlessly into your process with full confidentiality.",
      bgcolor: "#3ca392"
    },
    {
      number: 3,
      icon: "/icon3.svg",
      title: "SEO Optimization",
      description: "Comprehensive search engine optimization strategies to improve your site's visibility and ranking in search results.",
      bgcolor: "#46ada4"
    },
    {
      number: 4,
      icon: "/icon4.svg",
      title: "Security & Maintenance",
      description: "Ongoing security updates, backups, and maintenance to keep your WordPress site running smoothly and securely.",
      bgcolor: "#3ecdb5"
    }
  ];

  const handleStepChange = (stepIndex) => {
    // Step change handler
  };

  return (
    <div className="flex justify-center  items-center sm:px-[0px] px-[30px]">
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

export default DemoStepCarousel;
