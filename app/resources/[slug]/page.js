import Herosection from "@/app/components/heroSection/herosection";
import CallToAction from "../sections/calltoaction";
import ShareButton from "../sections/sharebutton";
import { FaXTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa6";
import { OtherResourcesCard } from "../sections/otherresourcescard";
import ContentRenderer from "../sections/contentrenderer";
import Head from "next/head";

export default async function ResourceDetail({ params}) {
  const { slug } = await params;

  // fetch single post by slug
  const res = await fetch(
    `https://websitesblogs.integritistaffing.com/wp-json/wp/v2/posts?slug=${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <div className="p-10 text-center text-red-500">Failed to load resource</div>;
  }

  const data = await res.json();
  const post = data[0];

  if (!post) {
    return <div className="p-10 text-center">Resource not found</div>;
  }

  // fetch all resources from category
  const resAll = await fetch(
    `https://websitesblogs.integritistaffing.com/wp-json/wp/v2/posts?categories=4&per_page=100`,
    { cache: "no-store" }
  );

  const allResources = await resAll.json();

  // filter out current post
  const filtered = allResources.filter((p) => p.id !== post.id);

  // shuffle and take 3 random posts
  const randomResources = filtered
    .sort(() => 0.5 - Math.random()) // shuffle
    .slice(0, 3);

  return (
    <div className="">
      <Head>
            <title>Resources</title>
            
          </Head>
          {/* Hero section */}
        <section className="max-[991px]:pb-[40px] pb-[20px] ">
          <div>
          <Herosection
        sectionpadding= " w-full max-[479px]:px-[3px] px-0 min-[479px]:pt-[40px] min-[991px]:pt-[60px] min-[1280px]:pt-[100px] min-[479px]:pb-[40px] min-[991px]:pb-[60px] min-[1280px]:pb-[100px]"
        heading={<span className="hero-orange">{post.title.rendered}</span>}
        headingClass="mx-auto w-[100%] max-w-[935px] text-center font-[800] lg:leading-[68px] md:leading-[48px] leading-[40px] lg:text-[50px] min-[479px]:text-[39px] md:text-[42px] text-[28px] mt-[40px] mb-[20px] min-[479px]:my-[20px] max-[480px]:px-[20px]"
      />
        </div>
        </section>
        {/* Issue background */}
      <section className="">
        <section className="pt-[10px] pb-[20px] min-[767px]:pt-[60px] ">
          <div className="px-[10px] min-[479px]:px-[40px] mx-auto w-[100%] max-w-[1400px]">
             <div
        className=" grid grid-cols-1 md:grid-cols-[66%_30%] gap-y-5 gap-x-20 mb-[60px]  "
        style={{ fontFamily: "var(--font-raleway)", lineHeight: "30px" }}
      >
        <div className="prose max-[479px]:px-[10px]">
                <ContentRenderer html={post.content.rendered} />
                <CallToAction />
              </div>
        <div className="sticky top-12 self-start">
          <h3 className="text-[#2F9688] md:text-[#333333] text-[28px] font-[700] leading-[34px] mb-[10px]">
            Share
          </h3>
          <div className="flex gap-4 text-green-600 text-xl mt-[20px]">
            <ShareButton
              icon={<FaXTwitter  size={14} />}
              link={
                "https://x.com/?lang=en/share?url=https://www.integritistudio.com/blogs-2/" +
                post.slug
              }
            />
            <ShareButton
              icon={<FaFacebookF size={14} />}
              link={
                "https://facebook.com/share?url=https://www.integritistudio.com/blogs-2/" +
                post.slug
              }
            />
            <ShareButton
              icon={<FaInstagram size={14} />}
              link={
                "https://instagram.com/share?url=https://www.integritistudio.com/blogs-2/" +
                post.slug
              }
            />
            <ShareButton
              icon={<FaGithub size={14} />}
              link={
                "https://github.com/share?url=https://www.integritistudio.com/blogs-2/" +
                post.slug
              }
            />
          </div>
        </div>
      </div>
          </div>
      </section>
      </section>
        {/* Other resources */}
      <div className="max-w-[1440px] mx-auto raleway ">
        <h3 className="text-[30px] text-[#333333] leading-[30px] md:text-[36px] font-[600] text-center mt-[20px] mb-[40px]">
          Other Resources Post
        </h3>
        <div className="flex flex-wrap justify-center gap-16 pb-[40px]">
          {randomResources.map((p) => (
            <OtherResourcesCard
              key={p.id}
              title={p.title.rendered}
              description={p.excerpt.rendered}
              btntitle={"Learn more"}
              path={`/resources/${p.slug}?from=otherResources`} // link to detail page
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}
