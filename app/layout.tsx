import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tomasz Uściński",
  description: "B2B Sales Executive",
  metadataBase: new URL("https://tomaszuscinski.pl"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.variable}>
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
                "https://www.linkedin.com/in/uscinski/",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
