import Shopifymarquee from "../../components/marquee/shopifymarqee";
export default function TextMarquee() {
const items = [
  "Fashion Brand ",
    "Luxury Fashion Brand ",
    "B2B Streetwear  ",
    "Luxury Home Decor ",
    "Petcare Store ",
    "Healthcare eCommerce Store  ",
    

  
];


  return (
    <div className="relative bg-[#3a3a3a] mt-3 ">
  <Shopifymarquee images={items} speed={30} gap={170} />
    </div>
  );
}
