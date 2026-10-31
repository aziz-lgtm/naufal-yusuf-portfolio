"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault();
    const email = portfolioData.email;
    const subject = encodeURIComponent(`Pesan dari Portofolio - ${name}`);
    const body = encodeURIComponent(`Halo Naufal,\n\n${message}\n\nPengirim: ${name}`);
    
    // Membuka Gmail web compose di tab baru
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-2">Kontak</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mari Terhubung</h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Apakah Anda memiliki proyek yang ingin dikembangkan, mencari talenta untuk posisi IT Support atau Web Developer, atau sekadar ingin berdiskusi — saya siap mendengarkan
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleEmailSend}
          className="bg-zinc-900/50 border border-zinc-800 p-6 sm:p-10 rounded-2xl space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Nama Anda</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Pesan</label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis pesan atau keperluan Anda di sini..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-400 transition-colors"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-400 text-black font-bold py-3 rounded-lg hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Kirim Pesan Gmail</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}