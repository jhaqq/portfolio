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
  title: "Jacob Haqq",
  description: "Jacob Haqq's Personal Showcase",
  openGraph: {
    title: "Jacob Haqq",
    description: "Jacob Haqq's Personal Showcase",
    images: [
      {
        url: "/favicon.ico",
        alt: "Favicon image", 
      },
    ],
    url: "https://jacobhaqq.com", // This should also be a string
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <div className="flex flex-col min-h-screen w-full scroll-smooth">
          {children}
        </div>
      </body>
    </html>
  );
}
