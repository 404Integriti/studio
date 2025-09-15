import Marquee from "./components/marquee/page.js";

export default function Homesecmarquee() {
  const imageList = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png",
    "/11.png",
    "/new.png",
  ];

  return (
    <section className="py-[20px] bg-white">
      <Marquee images={imageList} speed={30} gap={60} />
    </section>
  );
}
