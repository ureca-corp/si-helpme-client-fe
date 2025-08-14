import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "index, follow" }],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_MAIN_API_SERVER_URL || "https://admin-mu-rosy.vercel.app"}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
