import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/freebook",
        destination: "/download-your-free-ebook",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
