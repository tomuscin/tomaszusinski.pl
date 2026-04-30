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
  openGraph: {
    title: "Buduję sprzedaż B2B, która działa",
    description: "Pomagam firmom zdobywać klientów i skalować sprzedaż B2B.",
    url: "https://tomaszuscinski.pl",
    siteName: "Tomasz Uściński",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={inter.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tomasz Uściński",
              jobTitle: "B2B Sales Executive",
              url: "https://tomaszuscinski.pl",
              sameAs: [
                "https://www.linkedin.com/in/tomaszuscinski/",
              ],
            }),
          }}
        />
        <StickyHeader />
        {children}
      </body>
    </html>
  );
}
