'use client';
import IconOrangeButton from "./components/OrangeButton/IconOrangeButton";
import { FaPlay, FaGithub, FaInstagram } from "react-icons/fa";
import SocialMediaIcon from "./components/SocialMediaIcon/SocialMediaIcon.jsx";
import VideoSection from "./videosection";
import Herohome from "./components/heroSection/herohome";
import Marquee from "./marqee";
import Dna from "./dna";
import Dijitalmajic from "./dijitalmajic";
import Services from "./services";
import Secondmarquee from "./homesecondmarqee";
import Portfolio from "./components/portfolio/portfolio";
import Mainprocess from "./process";
import Maintestimonial from "./testimonial";
import Footercreative from "./components/footercreatice/page";
import Footer from "./components/footer/page";
export default function Home() {

  const handleClick = () => {
    console.log("Demo started!");
  };
  
  return (
    <>
   <VideoSection />
   <Herohome />
   <Marquee />
   <Dna />
   <Dijitalmajic />
   <Services />
   <Secondmarquee />
   <Portfolio />
   <Mainprocess />
   <Maintestimonial />
 
    </>
  );
}
