"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20 bg-zinc-950 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-2">Tentang Saya</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ringkasan Profil</h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-800">
            {portfolioData.summary}
          </p>
        </motion.div>
      </div>
    </section>
  );
}