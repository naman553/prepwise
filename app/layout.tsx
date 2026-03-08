import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An Ai powered platform for preparing for mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
