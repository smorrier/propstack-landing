import type { Metadata } from "next";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PropStack — Close Deals Faster. Manage Smarter.",
    template: "%s | PropStack",
  },
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
