import { BlogPost } from "@/types";
import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import { formatDate } from "../../lib/utils";

interface BlogCardProps {
  blog: BlogPost;
  onClick: () => void;
}

export default function BlogCard({ blog, onClick }: BlogCardProps) {
  return (
    <article
      onClick={onClick}
      className="group bg-white rounded-3xl border border-gray-100 p-2 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all cursor-pointer overflow-hidden"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
    >
      <div className="relative h-60 w-full rounded-2xl overflow-hidden">
        <Image
          src={blog.photo_url || "/placeholder.png"}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            {blog.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-gray-400 text-xs mb-3 font-medium">
          <Clock className="w-3.5 h-3.5" />
          <time dateTime={blog.created_at}>{formatDate(blog.created_at)}</time>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
          {blog.title}
        </h3>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
          {blog.description}
        </p>
        <div className="flex items-center text-sm font-bold text-blue-600">
          <span>Read Story</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </article>
  );
}
