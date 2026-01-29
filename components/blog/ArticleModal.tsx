import { formatDate } from "@/lib/utils";
import { BlogPost } from "@/types";
import { Calendar, Tag, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface ArticleModalProps {
  article: BlogPost;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-gray-950/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 z-50 transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-[2rem] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-white/80 backdrop-blur-md hover:bg-white rounded-full text-gray-400 hover:text-gray-900 shadow-sm border border-gray-100 z-20 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-[25rem] w-full">
          <Image
            src={article.photo_url || "/placeholder.jpg"}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <article className="px-8 pb-12 -mt-16 relative z-10">
          <div className="flex flex-wrap gap-4 items-center mb-8 text-sm font-semibold text-gray-500">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full">
              <Tag className="w-3.5 h-3.5" />
              <span>{article.category}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time dateTime={article.created_at}>{formatDate(article.created_at)}</time>
            </div>
          </div>

          <h2 id="modal-title" className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
            {article.title}
          </h2>

          <div className="prose prose-blue max-w-none">
            {article.content_html ? (
              <div
                dangerouslySetInnerHTML={{ __html: article.content_html }}
                className="text-gray-600 leading-talk text-lg"
              />
            ) : (
              <p className="text-gray-600 leading-talk text-lg">
                {article.content_text}
              </p>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
