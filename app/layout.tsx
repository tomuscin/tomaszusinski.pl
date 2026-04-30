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
  title: "Tomasz Uściński – Buduję sprzedaż B2B, która działa",
  description: "Pomagam firmom budować sprzedaż B2B, generować pipeline i zdobywać klientów. Sprzedaż oparta o proces i AI.",
  keywords: [
    "sprzedaż B2B",
    "pipeline sprzedaży",
    "konsultant sprzedaży",
    "jak zdobywać klientów B2B",
    "skalowanie sprzedaży",
  ],
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
