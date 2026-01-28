// components/layout/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">SEO Blog</h3>
            <p>Quality content for tech enthusiasts and business leaders.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Technology</a></li>
              <li><a href="#" className="hover:text-white">Business</a></li>
              <li><a href="#" className="hover:text-white">Marketing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; {currentYear} SEO Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
