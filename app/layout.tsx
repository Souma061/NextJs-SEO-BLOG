import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEO Blog | Latest Articles & Insights",
  description: "Discover in-depth blog posts covering technology, business, and digital marketing topics.",
  keywords: "blog, articles, technology, business, SEO",
  openGraph: {
    title: "SEO Blog | Latest Articles & Insights",
    description: "Discover in-depth blog posts covering technology, business, and digital marketing topics.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Blog | Latest Articles & Insights",
    description: "Discover in-depth blog posts covering technology, business, and digital marketing topics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
