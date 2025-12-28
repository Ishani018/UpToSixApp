import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UptoSix Kids - Interactive Phonics Apps for Children | Learn Bengali | Kids Education",
  description: "Master reading and spelling with synthetic phonics. Made by teachers, trusted by parents. Interactive self-learning apps for kids aged 3-8. Learn Bengali with Sahaj Bangla, explore phonics with Barnoporichoy.",
  keywords: [
    "Phonics app",
    "Learn Bengali",
    "Kids education",
    "Barnoporichoy",
    "Synthetic phonics",
    "Reading app for kids",
    "Phonics learning",
    "Educational apps for children",
    "UptoSix Phonics",
    "Kids learning apps",
    "Phonics PLUS",
    "Spell Board",
    "Letter Formation",
    "Early childhood education",
    "Reading skills for kids",
  ],
  openGraph: {
    title: "UptoSix Kids - Interactive Phonics Apps for Children",
    description: "Master reading and spelling with synthetic phonics. Made by teachers, trusted by parents. Interactive self-learning apps for kids aged 3-8.",
    type: "website",
    locale: "en_US",
    siteName: "UptoSix Kids",
  },
  twitter: {
    card: "summary_large_image",
    title: "UptoSix Kids - Interactive Phonics Apps for Children",
    description: "Master reading and spelling with synthetic phonics. Made by teachers, trusted by parents.",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
