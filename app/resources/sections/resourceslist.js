"use client";

import { useState, useEffect, useCallback } from "react";
import ResourcesCard from "../sections/resourcescard";

export default function Resourceslist() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);

  const fetchAllPosts = useCallback(async (attempt = 1, maxAttempts = 3) => {
    try {
      const res = await fetch(
        `https://websitesblogs.integritistaffing.com/wp-json/wp/v2/posts?categories=4&per_page=100`,
        { cache: "no-store" }
      );
      if (!res.ok) throw new Error("Failed to fetch posts");
      return await res.json();
    } catch (err) {
      if (attempt < maxAttempts) {
        console.warn(`Retrying... attempt ${attempt + 1}`);
        return await fetchAllPosts(attempt + 1, maxAttempts);
      } else {
        throw err;
      }
    }
  }, []);

  useEffect(() => {
    setMounted(true);

    async function fetchPosts() {
      try {
        setLoading(true);
        const allPosts = await fetchAllPosts();
        setPosts(allPosts);
      } catch (err) {
        setError(`Failed after 3 attempts: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, [fetchAllPosts]);

  if (!mounted || loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-24 h-24 border-4 border-[#009688] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-500">
        Error: {error}
      </div>
    );
  }

  if (posts.length === 0) {
    return <div className="py-20 text-center">No resources found.</div>;
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto pt-[40px] pb-[60px] flex justify-center flex-wrap items-center sm:gap-[55px] gap-[30px] ">
      {posts.map((post) => (
        <ResourcesCard
          key={post.id}
          title={post.title.rendered}
          link={`/resources/${post.slug}`}
        />
      ))}
    </div>
  );
}
