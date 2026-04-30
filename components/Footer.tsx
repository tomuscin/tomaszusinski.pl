import Link from "next/link";
import type { Locale } from "@/lib/dictionary";

export default function Footer({
  lang,
  privacyLabel,
}: {
  lang: Locale;
  privacyLabel: string;
}) {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Tomasz Uściński
        </p>
        <Link
          href={`/${lang}/privacy`}
          className="text-sm text-gray-400 hover:text-black transition-colors"
        >
          {privacyLabel}
        </Link>
      </div>
    </footer>
  );
}
