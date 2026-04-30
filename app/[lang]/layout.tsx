import type { Metadata } from "next";
import StickyHeader from "@/components/StickyHeader";
import { getDictionary, locales, type Locale } from "@/lib/dictionary";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords:
      lang === "pl"
        ? [
            "sprzedaż B2B",
            "pipeline sprzedaży",
            "konsultant sprzedaży",
            "jak zdobywać klientów B2B",
            "skalowanie sprzedaży",
          ]
        : [
            "B2B sales",
            "sales pipeline",
            "sales consultant",
            "how to acquire B2B clients",
            "scaling sales",
          ],
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: lang === "pl" ? "https://tomaszuscinski.pl/pl" : "https://tomaszuscinski.pl/en",
      siteName: "Tomasz Uściński",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
      locale: lang === "pl" ? "pl_PL" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://tomaszuscinski.pl/${lang}`,
      languages: {
        pl: "https://tomaszuscinski.pl/pl",
        en: "https://tomaszuscinski.pl/en",
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <>
      <StickyHeader dict={dict.nav} lang={lang as Locale} />
      {children}
    </>
  );
}
