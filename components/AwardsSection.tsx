const awards: { title: string; image?: string }[] = [
  { title: "Nagroda Byki i Niedźwiedzie" },
  { title: "Najciekawszy startup płatności bezgotówkowych" },
  { title: "MIT Enterprise Forum CEE" },
  { title: "TOP 25 Managerów w Finansach" },
  { title: "Cashless – mapa Insurtech" },
  { title: "Wyróżnienie Izby Domów Maklerskich" },
];

export default function AwardsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">
          Wyróżnienia i osiągnięcia
        </p>

        <div className="border-t border-gray-200 mb-12"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
          {awards.map(({ title, image }) => (
            <div
              key={title}
              className="group flex flex-col items-center text-center space-y-3 opacity-80 hover:opacity-100 hover:scale-[1.03] transition-all duration-200"
            >
              <div className="w-16 h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0">
                {image ? (
                  <img src={image} alt={title} className="w-12 h-12 object-contain" />
                ) : (
                  <span className="text-gray-400 text-xs">LOGO</span>
                )}
              </div>
              <p className="text-sm text-gray-900 font-semibold leading-snug mt-2 max-w-[140px] group-hover:text-black transition-colors duration-200">{title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
