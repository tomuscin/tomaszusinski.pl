import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  return {
    title: dict.privacy.metaTitle,
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const { privacy } = dict;

  return (
    <main className="max-w-3xl mx-auto py-32 px-6">
      <Link
        href={`/${lang}`}
        className="text-sm text-gray-400 hover:text-black transition-colors mb-12 inline-block"
      >
        ← {lang === "pl" ? "Wróć" : "Back"}
      </Link>

      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
        {privacy.title}
      </h1>

      <div className="space-y-10">
        {privacy.sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-base font-semibold text-gray-900 mb-2">
              {section.title}
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
