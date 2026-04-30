"use client";

import { motion, type Variants } from "framer-motion";
import Reveal from "@/components/Reveal";
import type { Dictionary, Locale } from "@/lib/dictionary";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const awards = [
  {
    image: "/pictures/byki-niedzwiedzie.png",
    title_pl: "Nagroda Byki i Niedźwiedzie",
    title_en: "Bulls and Bears Award",
  },
  {
    image: "/pictures/mit-enterprise.png",
    title_pl: "MIT Enterprise Forum CEE",
    title_en: "MIT Enterprise Forum CEE",
  },
  {
    image: "/pictures/top25-managerow.png",
    title_pl: "TOP 25 Managerów w Finansach",
    title_en: "Top 25 Finance Managers",
  },
  {
    image: "/pictures/startup-platnosci.png",
    title_pl: "Najciekawszy startup płatności bezgotówkowych",
    title_en: "Most Promising Cashless Payments Startup",
  },
  {
    image: "/pictures/izba-maklerska.png",
    title_pl: "Wyróżnienie Izby Domów Maklerskich",
    title_en: "Polish Chamber of Brokerage Houses Distinction",
  },
  {
    image: "/pictures/cashless-insurtech.png",
    title_pl: "Cashless – mapa Insurtech",
    title_en: "Cashless Insurtech Landscape",
  },
];

export default function AwardsSection({
  dict,
  lang,
}: {
  dict: Dictionary["awards"];
  lang: Locale;
}) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal>
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">
            {dict.label}
          </p>
        </Reveal>

        <div className="border-t border-gray-200 mb-12"></div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {awards.map((award) => {
            const title = lang === "pl" ? award.title_pl : award.title_en;
            return (
              <motion.div
                key={award.image}
                variants={itemVariants}
                className="group flex flex-col items-center text-center opacity-80 hover:opacity-100 hover:scale-[1.03] transition-all duration-200"
              >
                <div className="w-16 h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={award.image}
                    alt={title}
                    className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition duration-200"
                  />
                </div>
                <p className="text-sm text-gray-900 font-semibold leading-snug mt-2 text-center max-w-[140px]">
                  {title}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
