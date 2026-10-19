"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Heart, Sparkles, ChevronDown } from "lucide-react";
import { MonogramBadge, FloralDivider } from "./Ornaments";
import { triggerConfetti } from "@/lib/confetti";
import { generateGoogleCalendarUrl } from "@/lib/calendar";

export default function HeroSection() {
  const handleSaveTheDate = () => {
    triggerConfetti();
    const calendarUrl = generateGoogleCalendarUrl();
    window.open(calendarUrl, "_blank", "noopener,noreferrer");
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-between px-4 py-8 md:py-12 overflow-hidden text-center">
      {/* Background Ambience & Subtle Floating Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-radial from-[#FAF7F2] via-[#F6EFE6] to-[#EDE3D4] opacity-90" />

      {/* Decorative Golden Ambient Vignette */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#E5CD8B]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#132E22]/10 blur-3xl pointer-events-none" />

      {/* Subtle Floating Sparkle Petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#C5A059]/40"
            style={{
              top: `${15 + i * 14}%`,
              left: `${10 + (i * 17) % 80}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      {/* Top Monogram Seal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 md:mt-4 mb-8 md:mb-12"
      >
        <MonogramBadge />
      </motion.div>

      {/* Grand Envelope / Matrimony Content Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto my-auto flex flex-col items-center z-10 w-full px-2"
      >
        {/* Intro Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="h-[1px] w-6 bg-[#C5A059]/60" />
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#7A571E] font-medium font-sans">
            Together with their families
          </p>
          <span className="h-[1px] w-6 bg-[#C5A059]/60" />
        </motion.div>

        {/* Invitation Invitation Prompt */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-sm md:text-base text-[#4A453F] max-w-md font-sans italic font-light mb-4 leading-relaxed"
        >
          We joyfully invite you to celebrate the union of love and marriage
        </motion.p>

        {/* Couple Names - Grand Typography */}
        <div className="my-2 md:my-4 flex flex-col items-center">


          {/* Groom's Name */}
          <motion.h2
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.95, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#132E22] tracking-tight leading-none"
          >
            Arun Marshlin
          </motion.h2>

          {/* Elegant Ampersand / Script Connector */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.85, ease: "backOut" }}
            className="my-1 sm:my-2 flex items-center justify-center gap-3"
          >
            <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]/80" />
            <span className="font-script text-3xl sm:text-4xl md:text-5xl text-[#C5A059] italic px-2">
              and
            </span>
            <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]/80" />
          </motion.div>

          {/* Bride's Name */}
          <motion.h1
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.65, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#132E22] tracking-tight leading-none"
          >
            Gnana Bensiya
          </motion.h1>

        </div>

        <FloralDivider className="my-3 md:my-5" />

        {/* Wedding Date & Place Pill Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 my-2 text-xs sm:text-sm text-[#132E22]"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#C5A059]/40 shadow-sm">
            <Calendar className="w-4 h-4 text-[#AA8440]" />
            <span className="font-medium tracking-wide">
              Saturday, January 16, 2027
            </span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#C5A059]/40 shadow-sm">
            <MapPin className="w-4 h-4 text-[#AA8440]" />
            <span className="font-medium tracking-wide">
              Chudalappara, Kerala
            </span>
          </div>
        </motion.div>

        {/* Action Buttons: Save the Date + RSVP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.35 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mt-6 w-full sm:w-auto"
        >
          {/* Save The Date Celebration Button */}
          <button
            onClick={handleSaveTheDate}
            type="button"
            className="group relative inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#1B3D2F] via-[#132E22] to-[#0D261A] text-[#FAF7F2] font-medium text-sm tracking-wide shadow-lg shadow-[#132E22]/20 hover:shadow-xl hover:shadow-[#132E22]/30 active:scale-95 transition-all duration-300 border border-[#E5CD8B]/40 hover:border-[#E5CD8B]"
          >
            <Sparkles className="w-4 h-4 text-[#E5CD8B] group-hover:rotate-12 transition-transform duration-300" />
            <span>Save the Date</span>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5CD8B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C5A059]"></span>
            </span>
          </button>

          {/* Quick RSVP / Well Wishes anchor */}
          {/* <button
            onClick={() => scrollToSection("rsvp-section")}
            type="button"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full glass-card hover:bg-[#F3ECE2] text-[#132E22] font-medium text-sm tracking-wide border border-[#C5A059]/50 shadow-sm hover:shadow transition-all duration-300 active:scale-95"
          >
            <Heart className="w-4 h-4 text-[#AA8440]" />
            <span>RSVP &amp; Blessings</span>
          </button> */}
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
        className="mt-4 flex flex-col items-center gap-1.5 cursor-pointer text-[#7A571E]/80 hover:text-[#132E22] transition-colors"
        onClick={() => scrollToSection("hosts-section")}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-sans font-medium">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[#C5A059]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
