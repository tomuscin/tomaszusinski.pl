import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import type { Dictionary } from "@/lib/dictionary";

export default function About({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section id="about" className="w-full py-20 md:py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
        {/* Headline */}
        <div className="mb-12 md:mb-20 lg:mb-24">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
            {dict.headline}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mt-4 md:mt-6">
            {dict.subheadline}
          </p>
        </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16">

          {/* Lewa - story */}
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p className="text-base font-semibold text-gray-900">
              {dict.storyLead}
            </p>
            <p className="text-base">{dict.storyP1}</p>
            <p className="text-base">{dict.storyP2}</p>
          </div>

          {/* Prawa - kompetencje */}
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-[0.15em] mb-5">
              {dict.areasLabel}
            </p>
            <ul className="space-y-3">
              {dict.areas.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                  <span className="text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Proof - liczby */}
        <div className="border-t border-gray-200 mt-12 md:mt-20 lg:mt-24" />
        <div className="mt-16 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {dict.proof.map((item) => (
            <div key={item.desc}>
              <p className="text-3xl font-bold text-gray-900">
                {item.kind === "number" ? (
                  <CountUp to={item.value} suffix={item.suffix} />
                ) : (
                  item.label
                )}
              </p>
              <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Blok na dole */}
        <div className="mt-16 pt-10 border-t border-gray-100">
          <p className="text-base text-gray-500 max-w-2xl">
            {dict.footer}
          </p>
        </div>

      </div>
    </section>
  );
}
