"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-zinc-950 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-2">Akademik</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Pendidikan</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">{edu.period}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">{edu.degree}</h3>
              </div>
              <p className="text-zinc-400 text-sm">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}