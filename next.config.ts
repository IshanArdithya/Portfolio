import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "radnaabazar.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
