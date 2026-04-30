"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/lib/dictionary";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const awards: { title: string; image?: string }[] = [
  { title: "Nagroda Byki i Niedźwiedzie" },
  { title: "Najciekawszy startup płatności bezgotówkowych" },
  { title: "MIT Enterprise Forum CEE" },
  { title: "TOP 25 Managerów w Finansach" },
  { title: "Cashless – mapa Insurtech" },
  { title: "Wyróżnienie Izby Domów Maklerskich" },
];

export default function AwardsSection({ dict }: { dict: Dictionary["awards"] }) {
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
          {awards.map(({ title, image }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="group flex flex-col items-center text-center space-y-3 opacity-80 hover:opacity-100 hover:scale-[1.03] transition-all duration-200"
            >
              <div className="w-16 h-16 bg-white rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0">
                {image ? (
                  <Image src={image} alt={title} width={48} height={48} className="object-contain" />
                ) : (
                  <span className="text-gray-400 text-xs">LOGO</span>
                )}
              </div>
              <p className="text-sm text-gray-900 font-semibold leading-snug mt-2 max-w-[140px] group-hover:text-black transition-colors duration-200">{title}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
