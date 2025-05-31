import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "cdn.classlink.com" },
      { hostname: "cf.quizizz.com" },
      { hostname: 'www.gimkit.com' },
      { hostname: 'www.ixl.com' },
    ]
  }
};

export default nextConfig;
