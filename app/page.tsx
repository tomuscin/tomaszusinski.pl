import Hero from "@/components/Hero";
import About from "@/components/About";
import HowIWork from "@/components/HowIWork";
import AwardsSection from "@/components/AwardsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <HowIWork />
      <AwardsSection />
      <CTASection />
    </main>
  );
}
