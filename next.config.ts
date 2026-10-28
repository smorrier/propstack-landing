import type { NextConfig } from "next";
import { APP_URL } from "./src/lib/constants";

// Top-level routes of the app (app.propstack.ca), which used to be served from propstack.ca.
// /learn is not here: the landing site owns it.
const APP_SECTIONS = [
  "admin", "api", "auth", "compare", "dashboard", "deal", "deals", "forgot-password", "login",
  "oauth", "onboarding", "portfolio", "pricing", "privacy", "ref", "reset-password", "scenarios",
  "settings", "share", "signup", "terms", "try", "verify-email",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // One canonical host: www would otherwise serve a duplicate copy of every page.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.propstack.ca" }],
        destination: "https://propstack.ca/:path*",
        permanent: true,
      },
      // Old links and indexed URLs for app pages would otherwise 404 here.
      {
        source: `/:section(${APP_SECTIONS.join("|")})/:rest*`,
        destination: `${APP_URL}/:section/:rest*`,
        permanent: true,
      },
      // Social posts link to this slug; the guide lives at /learn/gross-rent-multiplier.
      {
        source: "/learn/what-is-a-good-gross-rent-multiplier",
        destination: "/learn/gross-rent-multiplier",
        permanent: true,
      },
      // The app's old CMHC calculator page (removed) is still indexed; this guide covers the same topic.
      {
        source: "/cmhc-calculator",
        destination: "/learn/cmhc-mli-select-explained",
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
