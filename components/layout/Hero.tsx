import { Newspaper } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white border-b border-gray-100 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-2 mb-4 bg-blue-50 rounded-2xl">
          <Newspaper className="w-5 h-5 text-blue-600" />
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Insights for the <span className="text-blue-600">Modern Digital</span> World
        </h1>
        <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
          Explore expert perspectives on technology, business strategy, and the future of digital marketing.
        </p>
      </div>
    </section>
  );
}
