"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { BlogPost } from "../../types";
import ArticleModal from "./ArticleModal";
import BlogCard from "./BlogCard";
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";

interface BlogGridProps {
  blogs: BlogPost[];
}

export default function BlogGrid({ blogs }: BlogGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  //unique categories from blogs
  const categories = Array.from(new Set(blogs.map((b) => b.category)));
  // filter blogs based on search query and selected category

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      !searchQuery ||
      blog.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
      blog.description.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
      blog.content_text.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase());

    const matchesCategory =
      !selectedCategory || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-10 mb-16">
        <div className="max-w-2xl mx-auto w-full">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="border-y border-gray-100 py-6">
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
      </div>

      {filteredBlogs.length === 0 ? (
        <div className="text-center py-24 sm:py-32 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <div className="max-w-xs mx-auto">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">No articles found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory || "Latest Stories"}
            </h2>
            <p className="text-sm font-medium text-gray-400">
              {filteredBlogs.length} results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onClick={() => setSelectedArticle(blog)}
              />
            ))}
          </div>
        </>
      )}

      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </section>
  );
}
