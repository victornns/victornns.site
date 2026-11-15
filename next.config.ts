import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
