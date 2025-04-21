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
  title: "Euichan Kim (Daniel)",
  description: "Mathematics at University of Toronto",
  openGraph: {
    title: "Euichan Kim (Daniel)",
    description:
      "Mathematics student at the University of Toronto - Data Science Enthusiast",
    url: "https://danielkim.im",
    siteName: "Euichan Kim's Portfolio",
    images: [
      {
        url: "https://r2.danielkim.im/common/preview.png",
        width: 1200,
        height: 630,
        alt: "Euichan Kim Portfolio Preview Image",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
