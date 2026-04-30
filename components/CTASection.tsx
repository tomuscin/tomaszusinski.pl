import Reveal from "@/components/Reveal";

export default function CTASection() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
        <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
          Porozmawiajmy o Twojej sprzedaży
        </h2>

        <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
          Jeśli chcesz uporządkować sprzedaż, zbudować pipeline i zacząć
          zdobywać klientów B2B — napisz lub zadzwoń.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:tomasz@tomaszuscinski.pl"
            className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-100 hover:scale-[1.03] transition-all duration-200"
          >
            Skontaktuj się
          </a>
          <a
            href="#o-mnie"
            className="border border-white/30 px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-200"
          >
            Zobacz więcej
          </a>
        </div>

        <div className="mt-10 text-gray-400 text-sm space-y-1">
          <p>tomasz@tomaszuscinski.pl</p>
          <p>+48 787 417 293</p>
        </div>
        </Reveal>

      </div>
    </section>
  );
}
