"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Herosection from "./herosection";
import Herobutton from "../herobuttons/herobutton";

export default function BlogsHero() {
  const { slug } = useParams();
  const [heading, setHeading] = useState("Blogs"); // default for main page
  const [loading, setLoading] = useState(false);

  // Fetch blog heading only if slug exists
  async function fetchBlogHeading(slug) {
    try {
      const res = await fetch(
        `https://websitesblogs.integritistaffing.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
        { cache: "no-store" }
      );

      if (!res.ok) throw new Error("Failed to fetch blog");

      const data = await res.json();
      return data[0]?.title?.rendered || "Blogs";
    } catch (err) {
      console.error(err);
      return "Blogs";
    }
  }

  useEffect(() => {
    if (!slug) return; // no slug, keep default

    setLoading(true);
    fetchBlogHeading(slug)
      .then((title) => setHeading(title))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-lg">Loading hero...</div>
      </div>
    );
  }

  // Conditional heading styles
  const headingColorClass = slug ? "text-[#ed8104]" : "text-black";
  const headingWidthClass = "w-full max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[930px]";
  const headingSizeClass = slug
    ? "text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px]"
    : "text-[24px] sm:text-[30px] md:text-[36px] lg:text-[60px]";

  // Conditional first button text
  const firstButtonText = slug ? "Let's Build" : "Get Started";

  return (
    <Herosection
      sectionpadding="lg:pt-[120px] md:pt-[60px] pt-[40px] lg:pb-[60px] pb-[40px]"
      heading={heading}
      headingClass={`mx-auto text-center mt-[20px] mb-[20px] font-[800] leading-[40px] sm:leading-[48px] md:leading-[56px] lg:leading-[68px] ${headingSizeClass} ${headingColorClass} ${headingWidthClass}`}
      paragraph={
        slug
          ? undefined
          : "Welcome to our blog where we share easy-to-follow tips, ideas, and updates. Whether you're building websites or running an online store, you'll find helpful content to learn and grow."
      }
      paragraphClass={
        slug
          ? undefined
          : "max-w-full sm:max-w-[400px] md:max-w-[600px] lg:max-w-[762px] mx-auto sans text-center lg:text-[20px] text-[18px] leading-[30px] lg:leading-[32px] text-[#333] px-4 sm:px-0"
      }
      buttons={
        <Herobutton
          btnpadfirst="px-[10px] py-[15px] raleway font-[400] lg:text-[20px] text-[18px] text-[#fce4ec]"
          btnpadsec="px-[15px] py-[10px] raleway text-[18px]"
          buttonwidth="200px"
          buttonheight="50px"
          firstButtonText={firstButtonText}
          secondButtonText="Learn More"
          firstButtonlink="/contact-us"
          secondButtonlink="/portfolio"
        />
      }
    />
  );
}
