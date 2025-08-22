import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos", "pub-a56ed242ac824cd9a3ab5dac1b86a362.r2.dev"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-a56ed242ac824cd9a3ab5dac1b86a362.r2.dev",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
