import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StickyHeader from "@/components/StickyHeader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "tomaszuscinski.pl",
  description: "Personal website of Tomasz Uściński",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={inter.variable}>
      <body className="antialiased">
        <StickyHeader />
        {children}
      </body>
    </html>
  );
}
