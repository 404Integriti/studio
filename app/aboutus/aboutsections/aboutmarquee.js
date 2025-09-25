import Profilesmarquee from "../../components/marquee/profilesmarquee";
import Image from "next/image";
export default function Aboutmarquee() {
const imageList = [
  "/profiles/kamran.png",
  "/profiles/omer.png",
  "/profiles/ahmer.png",
  "/profiles/yousaf.png",
    "/profiles/haseeb.png",
    "/profiles/aman.svg",
      "/profiles/mahnoor.png",
  "/profiles/ravale.png",
   "/profiles/salman.png",
  "/profiles/Zoya.png",
  "/profiles/sajid.png",
  "/profiles/mahnoor.png",
  "/profiles/alia.png",
  "/profiles/ahsanarshad.png",
  
];

  return (
    <section id="meetourteam" className="py-[20px] bg-white">
        <h2 className="raleway text-[36px] font-[700] mt-[20px] text-[#333] leading-[30px] mb-[10px] text-center">Meet Our <span className="text-[#53dacd]">Team</span></h2>
      <Profilesmarquee images={imageList} speed={30} gap={60} />
    </section>
  );
}
