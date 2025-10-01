"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BlogsHeroSlug from "../../components/heroSection/blogshero";
import BlogContent from "./sections/blogContent";
import AuthorCard from "./sections/authorCard";
import ShareSection from "./sections/shareSection";
import { useBlogStore } from "@/store/postStore";
import Head from "next/head";

export default function BlogDetail() {
  const { slug } = useParams();
  const { posts } = useBlogStore(); // ✅ Get global posts
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    // ✅ Try to find the post from global state
    const matchedPost = posts.find((p) => p.slug === slug);

    if (matchedPost) {
      // 🎉 Found in global store — no second request needed
      setPost(matchedPost);
      setLoading(false);
    } else {
      // ❌ If not found (e.g. direct page refresh), fetch fallback
      (async () => {
        try {
          const res = await fetch(
            `https://websitesblogs.integritistaffing.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
            { cache: "no-store" }
          );
          if (!res.ok) throw new Error("Failed to fetch blog");
          const data = await res.json();
          setPost(data[0] || null);
        } catch (err) {
          console.error("Error fetching single post:", err);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [slug, posts]);


  if (loading)
    return <div className="flex justify-center items-center py-20 text-lg">Loading blog...</div>;

  if ( !post)
    return <div className="flex justify-center items-center py-20 text-red-500">Error loading blog</div>;

  return (
    <>
      <Head>
      <title>Blogs</title>
      <meta
        name="description"
        content={"Read our latest blog post."}
      />
    </Head>

      {/* Hero Section */}
      <BlogsHeroSlug slug={slug} />

<div className="bg-[#f6f6f6] pt-[50px] pb-[20px] h-auto pl-[50px] pr-[165px]">
  <div className="max-w-[1380px] mx-auto pr-[40px] pl-4 flex flex-col md:flex-row md:gap-4 lg:gap-12">
    
    {/* AuthorCard on top for mobile (<768px) */}
    <div className="block md:hidden mb-6 mx-auto">
      <AuthorCard />
    </div>

    {/* Left: Blog Content */}
    <BlogContent content={post.content?.rendered} className="w-full md:w-3/5 lg:w-3/4" />

    {/* Right Sidebar for ≥768px */}
    <div className="w-full md:w-2/5 lg:w-1/4 mt-8 md:mt-0">
      <div className="hidden md:flex flex-col sticky top-24 space-y-6">
        <AuthorCard />
        <ShareSection slug={slug} />
      </div>
    </div>

    {/* ShareSection below content for mobile (<768px) */}
    <div className="block md:hidden mt-4">
      <ShareSection slug={slug} />
    </div>
  </div>
</div>

    </>
  );
}
