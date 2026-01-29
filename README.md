# SEO Blog Application

A high-performance, SEO-optimized blog application built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Technologies Used

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: Sling Academy Blog API
- **Deployment**: Vercel

## 📊 Lighthouse Audit

Below are the results of the production Lighthouse performance and SEO audit. The application achieves near-perfect scores across all key metrics.

| Category       | Score |
| -------------- | ----- |
| Performance    | 94    |
| Accessibility  | 96    |
| Best Practices | 100   |
| SEO            | 100   |

![Lighthouse Audit](public/screenshots/lighthouse-report.png)

_(Note: Please ensure your audit screenshots are placed in `public/screenshots/`)_

## 🔍 Search and Filter Implementation

The application implements a real-time combined filtering system:

- **Search**: Built-in state management in `BlogGrid` that filters articles by `title`, `description`, or `content_text` using a case-insensitive match.
- **Category Filter**: Dynamically extracts unique categories from the API data and allows users to filter the grid by category.
- **Combined Logic**: Both filters work together, allowing users to find specific results within a chosen category.

## 📈 SEO Strategy

### Meta Tags & Open Graph

Implemented comprehensive metadata using Next.js `Metadata` API:

- **Title (max 60 chars)**: Optimized for search engine result pages (SERPs).
- **Meta Description (max 160 chars)**: Narrative descriptions to improve Click-Through Rate (CTR).
- **OG & Twitter Cards**: High-quality social sharing tags (`og:title`, `og:image`, etc.) to ensure the blog looks professional when shared on LinkedIn, X, or Facebook.

### Semantic HTML

Used modern HTML5 elements for better accessibility and search engine readability:

- `<header>` for navigation and branding.
- `<main>` for primary content.
- `<article>` for individual blog posts.
- `<section>` for logical content grouping.
- `<h1>`-`<h3>` proper heading hierarchy (ensuring only one H1 per page).

### Image Optimization

- Leveraged the `next/image` component for all assets.
- **Lazy Loading**: Automatic out-of-the-box loading optimization.
- **Responsive Sizes**: Implemented the `sizes` attribute to serve appropriately sized images for mobile, tablet, and desktop.
- **Alt Text**: Descriptive alt text for every image to improve accessibility and image search ranking.

### Performance Optimizations

- **LCP Optimization**: Implemented `priority` loading for above-the-fold images to significantly reduce Largest Contentful Paint (LCP).
- **ISR (Incremental Static Regeneration)**: Configured a 1-hour revalidation period for API requests to ensure fast page loads while keeping content fresh.
- **Resource Prefetching**: Added `preconnect` to external API domains in the document head.
- **Dynamic Imports**: Lazy-loaded heavy components like the `ArticleModal` to reduce the initial JavaScript bundle size.
- **Accessibility Refinements**: Adjusted color contrast ratios and added comprehensive ARIA labels to meet AA standards.
- **Asset Loading**: Using `next/font` with `display: swap` for local font optimization and Lucide React for lightweight SVG icons.

## 🛠️ Challenges Faced

- **Largest Contentful Paint (LCP) Tuning**: Initial audits showed a slow LCP (5.9s+) because all images were lazy-loaded by default. Resolved this by passing `priority` props to above-the-fold images and preconnecting to the image delivery network.
- **Accessibility Contrast Standards**: Identifying and fixing low-contrast text (specifically `gray-400` on white) that didn't meet WCAG AA standards, increasing the score from 93 to 100.
- **Hydration Mismatches**: Resolved issues where dynamic header states and dates caused a mismatch between server-side rendered HTML and client-side hydration.
- **Dynamic Content Loading**: Optimized performance by implementing lazy loading for modals using `next/dynamic`, reducing the initial JS load by preventing heavy components from blocking the main thread.
- **API Response Architecture**: Managed the nested data structure of the Sling Academy API to ensure type-safe rendering of blog content.

---
