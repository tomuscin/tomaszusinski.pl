import Hero from "@/components/Hero";
import About from "@/components/About";
import HowIWork from "@/components/HowIWork";
import AwardsSection from "@/components/AwardsSection";
import CTASection from "@/components/CTASection";
import { getDictionary, type Locale } from "@/lib/dictionary";

export default async function LangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <main>
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <HowIWork dict={dict.howIWork} />
      <AwardsSection dict={dict.awards} lang={lang as Locale} />
      <CTASection dict={dict.cta} />
    </main>
  );
}
