import BlogGrid from "@/components/blog/BlogGrid";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import { fetchBlogPosts } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Blog | Latest Articles & Insights",
  description: "Discover in-depth blog posts covering technology, business, and digital marketing topics.",
  openGraph: {
    title: "SEO Blog | Latest Articles & Insights",
    description: "Discover in-depth blog posts covering technology, business, and digital marketing topics.",
    url: "https://your-seo-blog.vercel.app",
    siteName: "SEO Blog",
    images: [
      {
        url: "https://your-seo-blog.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Blog | Latest Articles & Insights",
    description: "Discover in-depth blog posts covering technology, business, and digital marketing topics.",
    images: ["https://your-seo-blog.vercel.app/og-image.jpg"],
  },
};

export default async function Home() {
  const data = await fetchBlogPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SEO Blog",
    description: "Discover in-depth blog posts covering technology, business, and digital marketing topics.",
    url: "https://your-seo-blog.vercel.app",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <section className="py-10">
        <BlogGrid blogs={data.blogs} />
      </section>
      <Footer />
    </main>
  );
}
