import Blogshero from "../components/heroSection/blogshero";
import BlogList from "./sections/bloglist";

export const metadata = {
  title: "Blogs",
};
export default function page() {
  return (
    <>
      <Blogshero />
      <BlogList />
    </>
  );
}
