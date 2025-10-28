import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Ngit Software Solutions: Modern Web & App Development",
    template: "%s | Ngit Software Solutions",
  },
  description: "Ngit Software Solutions builds high-performance, modern websites and mobile applications using Next.js, React, and serverless technology. Contact us for custom software development.",
  openGraph: {
    title: "Ngit Software Solutions: Modern Web & App Development",
    description: "Ngit Software Solutions builds high-performance, modern websites and mobile applications.",
    url: "https://yourwebsite.com", // <-- Replace with your actual URL
    siteName: "Ngit Software Solutions",
    images: [
      {
        url: "/opengraph-image.png", // <-- Create a 1200x630 image in your /public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ngit Software Solutions",
    description: "Custom software development with Next.js and React.",
    images: ["/twitter-image.png"], // Optional: a 800x418 image
  },
  // Ensure favicon is still included
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 4. Apply the optimized font to the entire body */}
      <body className={`${inter.className} bg-background text-text`}>
        <main>{children}</main>
      </body>
    </html>
  );
}