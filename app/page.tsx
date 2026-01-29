import BlogGrid from "@/components/blog/BlogGrid";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import { fetchBlogPosts } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Blog | Latest Articles & Insights",
  description: "Discover in-depth blog posts covering technology, business, and digital marketing topics.",
};

export default async function Home() {
  const data = await fetchBlogPosts();

  return (
    <main>
      <Header />
      <Hero />
      <section className="py-10">
        <BlogGrid blogs={data.blogs} />
      </section>
      <Footer />
    </main>
  );
}
