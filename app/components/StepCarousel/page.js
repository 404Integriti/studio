'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const StepCarousel = ({ steps=[], activeStep = 0, onStepChange }) => {
  const [currentStep, setCurrentStep] = useState(activeStep);

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
    if (onStepChange) {
      onStepChange(stepIndex);
    }
  };

  const handlePrevious = () => {
    const newStep = currentStep > 0 ? currentStep - 1 : steps.length - 1;
    handleStepClick(newStep);
  };

  const handleNext = () => {
    const newStep = currentStep < steps.length - 1 ? currentStep + 1 : 0;
    handleStepClick(newStep);
  };

  return (
    <div className="flex flex-col md:flex-row lg:justify-end md:justify-center items-center  gap-0">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`relative transition-all duration-500 ease-in-out cursor-pointer ${
            index === currentStep
              ? `w-full md:w-[284px] h-auto md:h-[382px] min-h-[200px] md:min-h-[382px] rounded-2xl px-[16px] py-[20px] md:py-[40px] text-white`
              : `w-full md:w-[92px] h-auto md:h-[382px] min-h-[80px] md:min-h-[382px] rounded-2xl px-[16px] md:px-[22px] py-[16px] md:py-[40px] text-white`
          }`}
          style={{ backgroundColor: step.bgcolor }}
          onClick={() => handleStepClick(index)}
        >
          {/* Step Number and Navigation */}
          <div className="flex items-center justify-between md:mb-4 mb-2">
            <div className="bg-opacity-20 rounded-full flex items-center justify-center border border-white h-[3rem] w-[3rem]">
              <span className="text-white text-[2.125rem] font-[600] leading-[2.2] min-h-[3rem]">{step.number}</span>
            </div>
            
            {/* Navigation arrows - only show on active step */}
            {index === currentStep && (
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-white border-opacity-30 hover:bg-opacity-30 transition-all"
                >
                  {/* Show up/down arrows on mobile, left/right on desktop */}
                  <ChevronUp className="w-4 h-4 text-white md:hidden" />
                  <ChevronLeft className="w-4 h-4 text-white hidden md:block" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="w-8 h-8 bg-opacity-20 rounded-full flex items-center justify-center border border-white border-opacity-30 hover:bg-opacity-30 transition-all"
                >
                  {/* Show up/down arrows on mobile, left/right on desktop */}
                  <ChevronDown className="w-4 h-4 text-white md:hidden" />
                  <ChevronRight className="w-4 h-4 text-white hidden md:block" />
                </button>
              </div>
            )}
          </div>

          {/* Step Icon */}
          <div className={`flex justify-center md:pb-4 pb-2 ${
            index === currentStep ? 'scale-125' : 'scale-100'
          } transition-transform duration-300`}>
            <div className="w-16 text-white">
              <Image src={step.icon} alt={`Step ${step.number} Icon`} width={48} height={48} />
            </div>
          </div>

          {/* Step Content - only show on active step */}
          {index === currentStep && (
            <div className="text-center">
              <h3 className="text-[18px] font-[600] leading-[26px] md:mt-[20px] mt-[10px] md:mb-[20px] mb-[10px]" style={{
                fontFamily: 'Raleway, sans-serif',
              }}>{step.title}</h3>
              <p className="w-[100%] md:max-w-[222px] max-w-[calc(100%-40px)] text-[16px] leading-[23px] mx-auto" style={{
                fontFamily: 'Raleway, sans-serif',
              }}>{step.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepCarousel;
