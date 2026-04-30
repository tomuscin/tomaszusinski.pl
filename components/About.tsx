import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

export default function About() {
  return (
    <section id="about" className="w-full py-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
        {/* Headline */}
        <div className="mb-24">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
            15+ lat budowania i skalowania sprzedaży B2B
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            Pracowałem jako CEO, founder i Head of Sales.
            Dziś pomagam właścicielom firm budować sprzedaż, która generuje realne przychody.
          </p>
        </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Lewa — story */}
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p className="text-base font-semibold text-gray-900">
              Nie jestem tylko sprzedawcą.
            </p>
            <p className="text-base">
              Budowałem firmy jako CEO i founder, odpowiadając za sprzedaż, marketing,
              produkt i P&L. Pozyskiwałem finansowanie VC i rozwijałem projekty
              technologiczne w modelu B2B.
            </p>
            <p className="text-base">
              Dziś wykorzystuję to doświadczenie, żeby pomagać właścicielom firm
              budować sprzedaż, która działa — od strategii, przez pipeline,
              po zamykanie klientów.
            </p>
          </div>

          {/* Prawa — kompetencje */}
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-[0.15em] mb-5">
              Obszary pracy
            </p>
            <ul className="space-y-3">
              {[
                "Budowa sprzedaży od zera",
                "Skalowanie pipeline i przychodów",
                "Tworzenie procesów sprzedażowych B2B",
                "Go-to-market i komercjalizacja produktów",
                "Praca z CEO i zarządami",
                "Outbound i kampanie AI (Apollo + agenci AI)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                  <span className="text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Proof — liczby */}
        <div className="border-t border-gray-200 mt-24" />
        <div className="mt-16 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-gray-900">
              <CountUp to={15} suffix="+ lat" />
            </p>
            <p className="text-sm text-gray-500 mt-2">doświadczenia w sprzedaży i komercjalizacji B2B</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">C-level & Founder</p>
            <p className="text-sm text-gray-500 mt-2">CEO, Board Member, Head of Sales w spółkach technologicznych</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">FinTech / SaaS / B2B</p>
            <p className="text-sm text-gray-500 mt-2">projekty technologiczne, startupy VC i firmy usługowe</p>
          </div>
        </div>

        {/* Blok na dole */}
        <div className="mt-16 pt-10 border-t border-gray-100">
          <p className="text-base text-gray-500 max-w-2xl">
            Doświadczenie zdobywałem w FinTech, SaaS i usługach B2B,
            pracując z firmami technologicznymi i zarządami spółek.
          </p>
        </div>

      </div>
    </section>
  );
}
