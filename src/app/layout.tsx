import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PropStack — Close Deals Faster. Manage Smarter.",
    template: "%s | PropStack",
  },
  description:
    "The all-in-one calculator and portfolio platform for modern real estate investors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
