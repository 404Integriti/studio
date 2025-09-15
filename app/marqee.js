import Marquee from "./components/marquee/page.js";

export default function HomePage() {
  const imageList = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/7.png",
    "/8.png",
    "/9.png",
  ];

  return (
    <section className="lg:py-[10px] py-[0px] bg-white">
      <Marquee images={imageList} speed={30} gap={60} />
    </section>
  );
}
