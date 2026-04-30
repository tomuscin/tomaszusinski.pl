"use client";

import { motion, type Variants } from "framer-motion";
import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/lib/dictionary";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HowIWork({ dict }: { dict: Dictionary["howIWork"] }) {
  return (
    <section id="process" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Headline */}
        <Reveal>
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-6">
          {dict.label}
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold max-w-3xl leading-tight">
          {dict.headline}
        </h2>
        <p className="text-lg text-gray-600 mt-4 md:mt-6 max-w-2xl">
          {dict.description}
        </p>
        </Reveal>

        {/* Kroki */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-12 mt-10 md:mt-16 lg:mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {dict.steps.map(({ num, title, desc, badge, highlight }) => (
            <motion.div
              key={num}
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
            {dict.footer}
          </p>
        </div>

      </div>
    </section>
  );
}
