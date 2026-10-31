"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-2">Keahlian</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Keahlian Teknis & Soft Skills</h2>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">Programming & Web</h3>
            <div className="flex flex-wrap gap-2">
              {skills.programming.map((skill, i) => (
                <span key={i} className="bg-zinc-800 text-zinc-200 px-3 py-1.5 rounded-lg text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">IT Support</h3>
            <div className="flex flex-wrap gap-2">
              {skills.itSupport.map((skill, i) => (
                <span key={i} className="bg-zinc-800 text-zinc-200 px-3 py-1.5 rounded-lg text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">Tools & Software</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, i) => (
                <span key={i} className="bg-zinc-800 text-zinc-200 px-3 py-1.5 rounded-lg text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl"
          >
            <h3 className="text-lg font-semibold text-emerald-400 mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.softSkills.map((skill, i) => (
                <span key={i} className="bg-zinc-800 text-zinc-200 px-3 py-1.5 rounded-lg text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}