export default function Hero() {
  return (
    <section className="w-full py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Lewa strona */}
          <div className="text-center lg:text-left">
            <p className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-4">
              B2B Sales Executive
            </p>

            <h1 className="text-4xl lg:text-5xl font-bold leading-[1.05] max-w-[560px] mx-auto lg:mx-0 mb-6">
              Buduję sprzedaż B2B,{" "}
              <span className="bg-gradient-to-r from-gray-800 to-gray-400 bg-clip-text text-transparent">
                która generuje klientów i przychody
              </span>
            </h1>

            <p className="text-lg text-gray-500 max-w-md mx-auto lg:mx-0 mb-8">
              Pomagam właścicielom firm uporządkować sprzedaż, zbudować pipeline
              i zdobywać klientów. Wykorzystuję AI i automatyzację (m.in. Apollo.io),
              żeby skalować outreach i przyspieszać wyniki.
              Bez przypadkowych działań — tylko proces, który działa.
            </p>

            <a
              href="https://www.linkedin.com/in/uscinski/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors mb-8"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>Zobacz profil LinkedIn</span>
            </a>

            <div className="mt-8 text-sm text-gray-600 text-center lg:text-left">
              Skontaktuj się bezpośrednio:{" "}
              <a
                href="tel:+48787417293"
                className="font-medium text-gray-900 hover:underline"
              >
                +48 787 417 293
              </a>{" "}
              lub{" "}
              <a
                href="mailto:tomasz@tomaszuscinski.pl"
                className="font-medium text-gray-900 hover:underline"
              >
                tomasz@tomaszuscinski.pl
              </a>
            </div>
          </div>

          {/* Prawa strona — karta sprzedażowa */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 space-y-5">

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-[0.15em] mb-1">Przykładowy efekt</p>
                <h3 className="text-base font-semibold text-gray-900">Efekty pracy nad sprzedażą</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-500">Pipeline sprzedaży</span>
                    <span className="text-sm font-semibold text-green-600">+120%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full">
                    <div className="h-1.5 bg-green-500 rounded-full" style={{ width: "90%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-500">Liczba spotkań</span>
                    <span className="text-sm font-semibold text-gray-900">+60%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full">
                    <div className="h-1.5 bg-black rounded-full" style={{ width: "70%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-500">Konwersja</span>
                    <span className="text-sm font-semibold text-gray-900">+25%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full">
                    <div className="h-1.5 bg-gray-700 rounded-full" style={{ width: "55%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-500">Outbound (AI + Apollo)</span>
                    <span className="text-sm font-semibold text-green-600">+180%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full">
                    <div className="h-1.5 bg-green-400 rounded-full" style={{ width: "95%" }} />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm text-gray-500">
                  Efekt:{" "}
                  <span className="font-semibold text-gray-900">więcej klientów i przewidywalna sprzedaż</span>
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
