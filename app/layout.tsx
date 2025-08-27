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
  title: "Daniel Kim - Portfolio",
  description: "Math & Stats @ University of Toronto",
  openGraph: {
    title: "Daniel Kim - Portfolio",
    description: "Math & Stats @ University of Toronto",
    url: "https://danielkim.im",
    siteName: "Daniel Kim - Portfolio",
    images: [
      {
        url: "https://r2.danielkim.im/common/preview_v2.png",
        width: 1200,
        height: 630,
        alt: "Daniel Kim Portfolio Preview Image",
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
