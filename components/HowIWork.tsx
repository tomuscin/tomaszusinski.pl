"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const steps = [
  {
    num: "01",
    title: "1. Diagnoza",
    desc: "Rozumiem Twój biznes, ofertę i obecną sprzedaż. Identyfikujemy gdzie są blokady i dlaczego nie ma pipeline.",
    badge: null,
    highlight: false,
  },
  {
    num: "02",
    title: "2. Budowa procesu",
    desc: "Projektuję proces sprzedażowy — od targetowania, przez pipeline, po zamykanie klientów.",
    badge: null,
    highlight: false,
  },
  {
    num: "03",
    title: "3. Outbound i AI",
    desc: "Buduję kampanie outbound z wykorzystaniem Apollo i agentów AI. Docieramy do właściwych osób i skalujemy działania.",
    badge: "AI + automatyzacja",
    highlight: true,
  },
  {
    num: "04",
    title: "4. Spotkania i zamykanie",
    desc: "Pracujemy na realnych rozmowach, kwalifikacji leadów i zamykaniu klientów. Sprzedaż ma dowozić wynik.",
    badge: null,
    highlight: false,
  },
];

export default function HowIWork() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Headline */}
        <Reveal>
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-6">
          Proces pracy
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold max-w-3xl leading-tight">
          Jak buduję sprzedaż B2B
        </h2>
        <p className="text-lg text-gray-600 mt-6 max-w-2xl">
          To nie jest zbiór taktyk. To uporządkowany proces, który prowadzi od braku
          klientów do przewidywalnej sprzedaży.
        </p>
        </Reveal>

        {/* Kroki */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {steps.map(({ num, title, desc, badge, highlight }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className={`p-8 rounded-2xl flex flex-col gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ${
                highlight
                  ? "bg-white border-2 border-black shadow-xl scale-[1.02]"
                  : "bg-gray-50 border border-gray-100"
              }`}
            >
              <span className="text-4xl font-bold text-gray-200 leading-none">{num}</span>
              <p className="text-base font-semibold text-gray-900">{title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              {badge && (
                <span className="text-xs text-gray-500 mt-auto">{badge}</span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Blok końcowy */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Efekt: stały pipeline, więcej klientów i przewidywalna sprzedaż.
          </p>
        </div>

      </div>
    </section>
  );
}
