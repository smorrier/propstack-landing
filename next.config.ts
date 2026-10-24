import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // One canonical host: www would otherwise serve a duplicate copy of every page.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.propstack.ca" }],
        destination: "https://propstack.ca/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "Strict-Transport-Security", value: "max-age=63072000" }],
      },
    ];
  },
};

export default nextConfig;
