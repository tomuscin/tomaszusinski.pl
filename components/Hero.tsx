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

            <div className="flex items-center justify-center lg:justify-start mt-10">
              <a
                href="#kontakt"
                className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 hover:scale-[1.03] transition-all duration-200"
              >
                Skontaktuj się
              </a>
              <a
                href="#o-mnie"
                className="inline-block border border-gray-300 bg-transparent text-black px-6 py-3 rounded-xl ml-4 hover:bg-gray-100 transition-all duration-200"
              >
                Zobacz więcej
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
