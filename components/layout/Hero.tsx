// components/layout/Hero.tsx
export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to SEO Blog
        </h1>
        <p className="text-lg md:text-xl text-blue-100">
          Discover in-depth articles on technology, business, and digital marketing
        </p>
      </div>
    </section>
  );
}
