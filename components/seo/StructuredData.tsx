// components/seo/StructuredData.tsx
import { BlogPost } from "@/types";

interface StructuredDataProps {
  article: BlogPost;
}

export default function StructuredData({ article }: StructuredDataProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.photo_url,
    datePublished: article.created_at,
    dateModified: article.updated_at,
    author: {
      "@type": "Organization",
      name: "SEO Blog",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
