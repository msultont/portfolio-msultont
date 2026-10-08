import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-msultont.vercel.app"),
  title:
    "Muhammad Sulton Tauhid | Software Engineer & Full-Stack Web Developer",
  description:
    "Muhammad Sulton Tauhid is a Software Engineer and Full-Stack Web Developer in Indonesia, building React, Django, PostgreSQL, and WebGIS applications.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Muhammad Sulton Tauhid — Software Engineer",
    title:
      "Muhammad Sulton Tauhid | Software Engineer & Full-Stack Web Developer",
    description:
      "Explore the work and experience of Muhammad Sulton Tauhid, a Software Engineer building React applications, Django WebGIS platforms, and data-driven software.",
    locale: "en_ID",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Muhammad Sulton Tauhid | Software Engineer & Full-Stack Web Developer",
    description:
      "Explore the work and experience of Muhammad Sulton Tauhid, a Software Engineer building React applications, Django WebGIS platforms, and data-driven software.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
