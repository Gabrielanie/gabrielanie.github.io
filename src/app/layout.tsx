import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Anie – Full Stack Developer",
  description:
    "Full Stack Developer specialising in React, Next.js, TypeScript, Node.js and mobile development. Based in Nigeria, working remotely worldwide.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Gabriel Anie",
    "Web Developer Nigeria",
  ],
  authors: [{ name: "Gabriel Anie", url: "https://gabrielanie.github.io" }],
  openGraph: {
    title: "Gabriel Anie – Full Stack Developer",
    description: "Building performant, scalable web & mobile applications.",
    url: "https://gabrielanie.github.io",
    siteName: "Gabriel Anie Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
