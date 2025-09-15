import Shopifymarquee from "../../components/marquee/shopifymarqee";
export default function TextMarquee() {
const items = [
  "Luxury Home Decor",
    "Petcare Store",
    "Dental Products",
    "Healthcare ECommerce Store",
    "Luxury Fashion Brand",
    "B2B Streetwear",
  
];


  return (
    <div className="relative bg-[#3a3a3a] ">
  <Shopifymarquee images={items} speed={30} gap={170} />
    </div>
  );
}
