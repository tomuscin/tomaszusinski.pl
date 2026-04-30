import Reveal from "@/components/Reveal";

export default function CTASection() {
  return (
    <section id="contact" className="py-32 bg-black text-white">
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
            href="#about"
            className="border border-white/30 px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-200"
          >
            Zobacz więcej
          </a>
        </div>

        <div className="mt-10 text-gray-400 text-sm space-y-1">
          <p>tomasz@tomaszuscinski.pl</p>
          <p>+48 787 417 293</p>
          <a
            href="https://www.linkedin.com/in/uscinski/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-gray-400 hover:text-white transition-colors pt-1"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
        </Reveal>

      </div>
    </section>
  );
}
