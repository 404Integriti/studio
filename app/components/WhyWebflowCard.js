'use client';

import { useState } from 'react';

export default function Card({ icon, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={` transition-all transform duration-300 ease-in-out rounded-2xl p-6
        ${isHovered ? 'bg-teal-600 text-white rotate-[-2deg]' : 'bg-teal-50 text-[#070707]'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="flex items-center text-3xl">
       
          <div className='flex items-center justify-center'>
            <img
          src={icon}
          alt="icon"
          className={`w-8 h-8 transition-all brightness-0 duration-500 ease-in-out ${isHovered ? 'invert brightness-0':'brightness-0'}`}
        />
          </div>
          {/* Title */}
      <h3 className="text-[21px] font-[600] mt-[20px] mb-[10px] ml-3" style={{fontFamily:"var(--font-raleway)",}}>{title}</h3>
      
      </div>


      {/* Description */}
      <p className="text-[15px] leading-[20px] "   style={{ fontFamily: "var(--font-opensans)" }}>{description}</p>
    </div>
  );
}
