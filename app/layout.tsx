import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const clashGrotesk = localFont({
  variable: "--font-clash-grotesk",
  src: [
    { path: "./fonts/ClashGrotesk-500.woff2", weight: "500" },
    { path: "./fonts/ClashGrotesk-600.woff2", weight: "600" },
    { path: "./fonts/ClashGrotesk-700.woff2", weight: "700" },
  ],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Vortex5 — Digital experiences that move businesses forward",
  description:
    "We help businesses grow and reach their full potential through creativity, technology, and innovation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${clashGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
