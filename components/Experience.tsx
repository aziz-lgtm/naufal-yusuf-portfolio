"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-2">Karir</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Pengalaman Kerja</h2>
        </motion.div>

        <div className="space-y-8">
          {portfolioData.experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 p-6 sm:p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-emerald-400 font-medium text-sm sm:text-base">{exp.company}</p>
                </div>
                <span className="inline-block bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs font-semibold w-fit">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 text-zinc-300 text-sm sm:text-base list-disc list-inside">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}