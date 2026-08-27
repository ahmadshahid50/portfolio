import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmadshahid.dev"),
  title: "Ahmad Shahid | Frontend Developer",
  description:
    "Frontend developer building modern, responsive web experiences with React, Next.js, and thoughtful product-focused UI systems.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Lahore Frontend Engineer",
    "Web Developer Pakistan",
  ],
  openGraph: {
    title: "Ahmad Shahid | Frontend Developer",
    description:
      "Frontend developer building modern, responsive web experiences with React, Next.js, and thoughtful product-focused UI systems.",
    url: "https://ahmadshahid.dev",
    siteName: "Ahmad Shahid",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Shahid | Frontend Developer",
    description:
      "Frontend developer building modern, responsive web experiences with React, Next.js, and thoughtful product-focused UI systems.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full  bg-[#050505] text-zinc-50">{children}</body>
    </html>
  );
}
