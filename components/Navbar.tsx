"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false); // Tutup menu mobile/tablet

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 70; // Offset navbar sticky
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 150);
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-bold tracking-wider text-lg">
          NAUFAL<span className="text-emerald-400">.</span>
        </a>

        {/* Desktop & Tablet-Wide Nav (Hidden below lg) */}
        <nav className="hidden lg:flex space-x-8 text-sm text-zinc-400">
          <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="hover:text-emerald-400 transition-colors cursor-pointer">Tentang</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, "experience")} className="hover:text-emerald-400 transition-colors cursor-pointer">Pengalaman</a>
          <a href="#education" onClick={(e) => handleNavClick(e, "education")} className="hover:text-emerald-400 transition-colors cursor-pointer">Pendidikan</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, "skills")} className="hover:text-emerald-400 transition-colors cursor-pointer">Keahlian</a>
          <a href="#certifications" onClick={(e) => handleNavClick(e, "certifications")} className="hover:text-emerald-400 transition-colors cursor-pointer">Sertifikasi</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="hover:text-emerald-400 transition-colors cursor-pointer">Kontak</a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="bg-emerald-400 text-black font-semibold px-4 py-2 rounded-lg text-sm hover:bg-emerald-300 transition-colors cursor-pointer"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Hamburger Button (Visible on iPad & Mobile up to lg) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-zinc-400 hover:text-white focus:outline-none p-2 cursor-pointer"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for Mobile & iPad */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-4 pb-6 space-y-4 shadow-xl"
          >
            <div className="flex flex-col space-y-3 text-zinc-300 text-sm">
              <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="hover:text-emerald-400 transition-colors py-1 cursor-pointer">Tentang</a>
              <a href="#experience" onClick={(e) => handleNavClick(e, "experience")} className="hover:text-emerald-400 transition-colors py-1 cursor-pointer">Pengalaman</a>
              <a href="#education" onClick={(e) => handleNavClick(e, "education")} className="hover:text-emerald-400 transition-colors py-1 cursor-pointer">Pendidikan</a>
              <a href="#skills" onClick={(e) => handleNavClick(e, "skills")} className="hover:text-emerald-400 transition-colors py-1 cursor-pointer">Keahlian</a>
              <a href="#certifications" onClick={(e) => handleNavClick(e, "certifications")} className="hover:text-emerald-400 transition-colors py-1 cursor-pointer">Sertifikasi</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="hover:text-emerald-400 transition-colors py-1 cursor-pointer">Kontak</a>
            </div>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="block w-full text-center bg-emerald-400 text-black font-semibold px-4 py-2.5 rounded-lg text-sm hover:bg-emerald-300 transition-colors cursor-pointer"
              >
                Hubungi Saya
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}