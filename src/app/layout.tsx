import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/common/Header";
import { Volkhov } from 'next/font/google'
import Image from "next/image";

const volkhov = Volkhov({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-volkhov',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${volkhov.variable}`} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden mt-0`}
      >
          <div className="absolute top-0 right-0 -z-10">
        <Image
          src="/images/cover/Decore.svg"
          alt="background decoration"
          width={704}
          height={724}
          priority
        />
      </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
