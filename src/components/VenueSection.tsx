"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  ExternalLink,
  Copy,
  Check,
  Navigation,
  Compass,
  Car,
  Plane,
} from "lucide-react";
import { CornerFlourish, FloralDivider } from "./Ornaments";

export default function VenueSection() {
  const [copied, setCopied] = useState(false);

  const venueAddress =
    "Chudalappra, Puthuparamba Rd, Chudalappara, Keralam 676501";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    venueAddress
  )}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(venueAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue-section" className="relative py-20 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.9 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#132E22]/5 text-[#132E22] text-xs uppercase tracking-[0.2em] font-medium font-sans mb-3 border border-[#C5A059]/30">
          <Navigation className="w-3.5 h-3.5 text-[#AA8440]" />
          <span>The Location</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif text-[#132E22] tracking-tight">
          Ceremony &amp; Celebration Venue
        </h2>

        <FloralDivider className="my-3" />

        <p className="text-sm md:text-base text-[#524B42] max-w-lg mx-auto font-sans leading-relaxed">
          We would be honored by your presence as we celebrate this sacred
          milestone in God&apos;s grace.
        </p>
      </motion.div>

      {/* Main Venue Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Venue Details & Actions */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-7 glass-card rounded-2xl p-7 md:p-10 relative flex flex-col justify-between border border-[#C5A059]/40 shadow-lg shadow-[#132E22]/5"
        >
          <CornerFlourish position="top-left" />
          <CornerFlourish position="bottom-right" />

          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#85642B] font-semibold mb-2">
              <Compass className="w-4 h-4 text-[#AA8440]" />
              <span>Destination</span>
            </div>

            <h3 className="text-2xl md:text-4xl font-serif text-[#132E22] mb-3 leading-snug">
              Chudalappara
            </h3>

            <p className="text-base md:text-lg text-[#3E3830] font-sans font-medium mb-1">
              Puthuparamba Rd, Chudalappara
            </p>
            <p className="text-sm text-[#706456] font-sans mb-6">
              Keralam 676501, India
            </p>

            {/* Event Itinerary Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#C5A059]/30">
                <span className="text-[11px] uppercase tracking-wider text-[#85642B] font-semibold block mb-1">
                  Wedding Matrimony
                </span>
                <p className="font-serif text-lg text-[#132E22] font-medium">
                  11:00 AM
                </p>
                <p className="text-xs text-[#706456] mt-0.5 font-sans">
                  Holy Nuptial Vows &amp; Blessing
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#C5A059]/30">
                <span className="text-[11px] uppercase tracking-wider text-[#85642B] font-semibold block mb-1">
                  Grand Feast &amp; Reception
                </span>
                <p className="font-serif text-lg text-[#132E22] font-medium">
                  12:00 PM Onwards
                </p>
                <p className="text-xs text-[#706456] mt-0.5 font-sans">
                  Lunch, Music &amp; Fellowship
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#C5A059]/20">
            {/* Open In Google Maps Button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#1B3D2F] to-[#132E22] text-[#FAF7F2] font-medium text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 border border-[#E5CD8B]/40"
            >
              <MapPin className="w-4 h-4 text-[#E5CD8B]" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#FAF7F2]/80 ml-0.5" />
            </a>

            {/* Copy Address Button */}
            <button
              onClick={handleCopyAddress}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass-card hover:bg-[#F3ECE2] text-[#132E22] font-medium text-xs sm:text-sm tracking-wide border border-[#C5A059]/40 shadow-sm transition-all duration-300 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">
                    Address Copied!
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#AA8440]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Right: Stylized Map Card & Travel Guide */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="lg:col-span-5 flex flex-col justify-between gap-4"
        >
          {/* Interactive Map Preview Card */}
          <div className="relative rounded-2xl overflow-hidden glass-card border border-[#C5A059]/40 p-4 shadow-lg shadow-[#132E22]/5">
            <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gradient-to-br from-[#1E4D3A] via-[#132E22] to-[#0D261A] flex flex-col items-center justify-center p-6 text-center text-[#FAF7F2]">
              {/* Subtle Map Grid lines */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#E5CD8B_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#E5CD8B]/20 backdrop-blur-md flex items-center justify-center mb-3 border border-[#E5CD8B]/60 shadow-lg animate-bounce">
                  <MapPin className="w-7 h-7 text-[#E5CD8B]" />
                </div>

                <p className="font-serif text-xl font-normal text-[#E5CD8B] tracking-wide mb-1">
                  Chudalappara, Kerala
                </p>
                <p className="text-xs text-[#E6EFEA]/80 font-sans max-w-xs mb-4">
                  PIN: 676501 • Puthuparamba Rd
                </p>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-sans tracking-wide transition-colors backdrop-blur-sm border border-white/30"
                >
                  <span>View Satellite &amp; Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Travel Assistance Card */}
          <div className="glass-card rounded-2xl p-5 border border-[#C5A059]/40 text-xs text-[#524B42] space-y-3">
            <p className="font-serif text-sm font-semibold text-[#132E22] tracking-wide uppercase">
              Guest Transit Reference
            </p>

            <div className="flex items-start gap-3">
              <Plane className="w-4 h-4 text-[#AA8440] shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-[#132E22]">
                  Calicut Int&apos;l Airport (CCJ):
                </span>{" "}
                ~30-40 km via NH66. Taxis and airport cabs readily available.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Car className="w-4 h-4 text-[#AA8440] shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-[#132E22]">By Road &amp; Rail:</span>{" "}
                Accessible via Tirur / Parappanangadi Railway stations with smooth
                road connections to Puthuparamba Rd.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
