'use client';

import Dijital from "./components/dijitalmajic/DigitalMajic";
export default function Dijitalmajic() {
  return (
    <Dijital
      laptopimg="/laptopImage.png"
      heading={
        <>
          Ready to Make <span className="hero-orange">Digital Magic Together?</span>
        </>
      }
     
      paragraphtext="From strategy to screen — we craft experiences that move people and grow brands. Let’s create your next digital masterpiece."
   
      buttonlink="/"
 
      buttontext="Lets Build Together"
    />
  );
}
