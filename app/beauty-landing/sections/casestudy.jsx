import { casestudybeauty } from "../../components/customThemePoints";
import Casestudycom from '../../components/casestudycom/casestudycom';
import React from 'react'

export default function Casestudy() {
  return (
    <section className="casestudy-section py-[40px]">
      <div className='w-[100%] max-w-[1440px] mx-auto px-[20px]'>
        <div>
          <h2 
            className='mt-[20px] mb-[50px] text-[40px] text-center text-[#333] leading-[36px] font-[600]'
            style={{ fontFamily: "var(--font-raleway)" }}
          >
            Case Studies
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] justify-items-center'>
            {casestudybeauty.map((item, index) => (
              <Casestudycom key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}