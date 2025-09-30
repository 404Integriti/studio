"use client";

import { useState, useEffect } from "react";
import BlogCard from "../sections/blogcard";
import { useBlogStore } from "@/store/postStore";



export default function BlogList() {
  const { posts, setPosts } = useBlogStore();

  const [loading, setLoading] = useState(posts.length === 0);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);

  async function fetchAllPosts() {
    try {
      const res = await fetch(
        `https://websitesblogs.integritistaffing.com/wp-json/wp/v2/posts?categories=3&_embed&per_page=100`,
        { cache: "no-store" }

      );
console.log(res);

      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await res.json();

      // Posts fetched successfully

      return data;
    } catch (err) {
      console.error("Error fetching posts:", err);
      throw err;
    }
  }

  useEffect(() => {
    setMounted(true);

    async function fetchPosts() {
      if (posts.length > 0) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const allPosts = await fetchAllPosts();
        setPosts(allPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (!mounted || loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-24 h-24 border-4 border-[#009688] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-red-500">Error loading blogs: {error}</div>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="max-w-[1440px] w-full bg-[#fff] mx-auto">
        <div className="max-w-[1310px] w-full bg-[#fff] mx-auto flex flex-wrap gap-[40px] justify-center">
          {posts.map((post, index) => {
            const imageUrl =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/new.png";

            // Decode HTML entities from title
            const decodedTitle = post.title.rendered
              .replace(/&#038;/g, '&')
              .replace(/&#8217;/g, '&')
              .replace(/&amp;/g, '&')
              .replace(/&lt;/g, '<')
              .replace(/&gt;/g, '>')
              .replace(/&quot;/g, '"')
              .replace(/&#039;/g, "'");

            return (
              <div key={post.id} className="flex justify-center">
                <BlogCard
                  image={imageUrl}
                  title={decodedTitle}
                  link={`/blogs/${post.slug}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
