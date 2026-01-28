"use client";

import Link from "next/link";


export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          SEO BLOG
        </Link>
        <div className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <a href="#categories" className="text-gray-700 hover:text-blue-600">Categories</a>
        </div>
      </nav>
    </header>
  );
}
