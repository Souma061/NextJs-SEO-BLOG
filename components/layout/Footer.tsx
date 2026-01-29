import { Github, Linkedin, PenLine, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 mb-6">
              <PenLine className="w-6 h-6 text-blue-600" />
              <span>SEO<span className="text-blue-600">BLOG</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Delivering high-quality insights on technology and digital growth to a global audience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Platform</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Latest Articles</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Popular Topics</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Authors</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Subscribe</h4>
            <p className="text-gray-500 text-sm mb-4">Get the latest insights directly in your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm w-full outline-none focus:border-blue-500 transition-colors"
              />
              <button className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-bold hover:bg-blue-700 transition-colors">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-medium">
          <p>&copy; {currentYear} SEO BLOG. Built with Next.js</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
