"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-zinc-950 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-2">Kredensial</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Sertifikasi & Lisensi</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between"
            >
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-emerald-400 text-sm font-medium">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}