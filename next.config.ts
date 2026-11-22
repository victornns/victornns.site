import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/sobre",
        permanent: false,
      },
      {
        source: "/en",
        destination: "/en/about",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
