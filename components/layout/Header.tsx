"use client";

import { PenLine, Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const handleSearchClick = () => {
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => searchInput.focus(), 500);
    }
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900">
          <PenLine className="w-6 h-6 text-blue-600" />
          <span>SEO<span className="text-blue-600">BLOG</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <Link href="/" className="text-gray-900 hover:text-blue-600 transition-colors">Home</Link>
          <a href="#categories" className="text-gray-900 hover:text-blue-600 transition-colors">Categories</a>
          <button
            onClick={handleSearchClick}
            className="text-gray-900 hover:text-blue-600 transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}
