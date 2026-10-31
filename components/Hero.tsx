"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className=" h-[700px] flex items-center justify-center bg-black text-white px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-6">
            Tersedia untuk Peluang Karir & Kolaborasi · Onsite, Hybrid & Remote
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            Halo, Saya <span className="text-emerald-400">{portfolioData.name.split(" ").slice(0, 2).join(" ")}</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {portfolioData.title} yang berpengalaman dalam IT Support Infrastructure serta pengembangan aplikasi web.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-emerald-400 text-black font-bold px-8 py-3 rounded-lg hover:bg-emerald-300 transition-colors"
            >
              Mari Terhubung
            </a>
            <a
              href="#experience"
              className="w-full sm:w-auto bg-zinc-900 border border-zinc-800 text-white font-medium px-8 py-3 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Lihat Pengalaman
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}