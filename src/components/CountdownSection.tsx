"use client";

import { useState, useEffect } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { motion } from "framer-motion";
import { Clock, CalendarPlus, Sparkles } from "lucide-react";
import { triggerConfetti, triggerGoldenShower } from "@/lib/confetti";
import { generateGoogleCalendarUrl } from "@/lib/calendar";
import { FloralDivider } from "./Ornaments";

function CountdownUnit({ value, label }: { value: number; label: string }) {
  const formattedValue = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 sm:w-24 md:w-28 h-20 sm:h-28 md:h-32 rounded-xl sm:rounded-2xl glass-card border border-[#C5A059]/40 flex items-center justify-center shadow-lg shadow-[#132E22]/10 overflow-hidden group">
        {/* Subtle Inner Highlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-[1px] bg-[#E5CD8B]" />

        {/* Value */}
        <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-semibold text-[#132E22] tracking-tight group-hover:scale-105 transition-transform duration-300">
          {formattedValue}
        </span>
      </div>

      <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#7A571E] font-medium font-sans">
        {label}
      </span>
    </div>
  );
}

export default function CountdownSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Target: Midnight January 16, 2027
  const weddingDate = new Date("2027-01-16T00:00:00");

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return (
        <div className="py-8 text-center">
          <p className="font-serif text-3xl text-[#132E22] mb-2">
            ✨ Today is the Joyous Day! ✨
          </p>
          <p className="text-sm text-[#524B42] font-sans">
            Celebrating the sacred marriage of Gnana Bensiya &amp; Arun Marshlin
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 justify-center max-w-xl mx-auto">
        <CountdownUnit value={days} label="Days" />
        <CountdownUnit value={hours} label="Hours" />
        <CountdownUnit value={minutes} label="Minutes" />
        <CountdownUnit value={seconds} label="Seconds" />
      </div>
    );
  };

  const handleCelebrate = () => {
    triggerConfetti();
    triggerGoldenShower();
  };

  return (
    <section className="relative py-20 px-4 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.9 }}
      >
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#132E22]/5 text-[#132E22] text-xs uppercase tracking-[0.2em] font-medium font-sans mb-3 border border-[#C5A059]/30">
          <Clock className="w-3.5 h-3.5 text-[#AA8440]" />
          <span>Counting Down The Moments</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif text-[#132E22] tracking-tight">
          Until We Say &ldquo;I Do&rdquo;
        </h2>

        <FloralDivider className="my-3" />

        <p className="text-sm md:text-base text-[#524B42] max-w-md mx-auto font-sans mb-10 leading-relaxed">
          Every second brings us closer to the most cherished day of our lives.
          We cannot wait to celebrate with you.
        </p>

        {/* Live Countdown Grid */}
        <div className="my-6">
          {mounted ? (
            <Countdown date={weddingDate} renderer={renderer} />
          ) : (
            <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 justify-center max-w-xl mx-auto">
              <CountdownUnit value={0} label="Days" />
              <CountdownUnit value={0} label="Hours" />
              <CountdownUnit value={0} label="Minutes" />
              <CountdownUnit value={0} label="Seconds" />
            </div>
          )}
        </div>

        {/* Interactive Action Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-10">
          <button
            onClick={handleCelebrate}
            type="button"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1B3D2F] to-[#132E22] text-[#FAF7F2] font-medium text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 border border-[#E5CD8B]/30"
          >
            <Sparkles className="w-4 h-4 text-[#E5CD8B] group-hover:rotate-45 transition-transform duration-300" />
            <span>Send Confetti Shower</span>
          </button>

          <a
            href={generateGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card hover:bg-[#F3ECE2] text-[#132E22] font-medium text-xs sm:text-sm tracking-wide border border-[#C5A059]/40 shadow-sm transition-all duration-300 active:scale-95"
          >
            <CalendarPlus className="w-4 h-4 text-[#AA8440]" />
            <span>Google Calendar</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
