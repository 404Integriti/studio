import { create } from "zustand";

export const useBlogStore = create((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));
