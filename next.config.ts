import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["api.slingacademy.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
