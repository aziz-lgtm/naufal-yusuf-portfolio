import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-400 selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <Contact />
      <footer className="py-8 bg-zinc-950 border-t border-zinc-900 text-center text-xs text-zinc-500">
        © 2026 Naufal Yusuf Dinda Fahreza Harahap.
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-zinc-300">
          <p>📧 {portfolioData.email}</p>
          <p>📞 {portfolioData.phone}</p>
          <p>📍 {portfolioData.location}</p>
        </div>
      </footer>
    </main>
  );
}