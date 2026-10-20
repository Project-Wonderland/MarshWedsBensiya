"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { MonogramBadge, FloralDivider } from "./Ornaments";

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-12 px-4 border-t border-[#C5A059]/30 bg-gradient-to-b from-transparent to-[#F3ECE2]/60 text-center">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        <MonogramBadge className="mb-4" />

        <h3 className="text-2xl sm:text-3xl font-serif text-[#132E22] font-normal tracking-wide">
          Arun Marshlin &amp; Gnana Bensiya
        </h3>

        <FloralDivider className="my-3" />

        <p className="font-serif italic text-base md:text-lg text-[#524B42] max-w-md mx-auto leading-relaxed">
          &ldquo;Two lives, two hearts, joined together in friendship, united
          forever in love.&rdquo;
        </p>

        <a
          href="https://maps.app.goo.gl/egGVsMvbf6EXfVQk6?g_st=ac"
          target="_blank"
          rel="noopener noreferrer"
          title="Open Illikkal Convention Center in Google Maps"
          className="text-xs uppercase tracking-[0.25em] text-[#85642B] hover:text-[#132E22] font-medium font-sans mt-3 inline-flex items-center gap-1 transition-colors"
        >
          <span>January 16, 2027 • Illikkal Convention Center, Kerala</span>
        </a>

        <div className="mt-6 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#132E22] text-[#E5CD8B] text-xs font-serif tracking-widest uppercase shadow">
          <span>#MarshlinWedsBensiya</span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Back to top"
          className="mt-8 p-3 rounded-full glass-card hover:bg-[#FAF7F2] text-[#85642B] hover:text-[#132E22] border border-[#C5A059]/40 transition shadow-sm hover:scale-110 active:scale-95"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        <p className="text-[11px] text-[#8C8071] font-sans mt-4 flex items-center gap-1 justify-center">
          <span>Made with</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
          <span>to celebrate Marshlin &amp; Bensiya</span>
        </p>
      </div>
    </footer>
  );
}
