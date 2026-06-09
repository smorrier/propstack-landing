import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PropStack — Close Deals Faster. Manage Smarter.",
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
