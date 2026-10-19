"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Send,
  Sparkles,
  Share2,
  CheckCircle2,
  MessageSquareHeart,
} from "lucide-react";
import { triggerConfetti, triggerGoldenShower } from "@/lib/confetti";
import { CornerFlourish, FloralDivider } from "./Ornaments";

interface Blessing {
  id: string;
  name: string;
  attendance: string;
  message: string;
  timestamp: string;
}

const DEFAULT_BLESSINGS: Blessing[] = [
  {
    id: "1",
    name: "Uncle Joseph & Family",
    attendance: "attending",
    message: "Wishing Gnana & Arun a lifetime of divine grace, boundless joy, and eternal love!",
    timestamp: "Just now",
  },
  {
    id: "2",
    name: "Dr. Maria & Family",
    attendance: "attending",
    message: "May your home always be filled with laughter and sweet peace. Looking forward to Jan 16!",
    timestamp: "1 hour ago",
  },
  {
    id: "3",
    name: "Pradeep & Sunita",
    attendance: "attending",
    message: "Hearty congratulations to Vincent & Prakasi, and Vijaya Kumar & Nirmala! Cheers to the couple!",
    timestamp: "Yesterday",
  },
];

export default function RsvpSection() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("attending");
  const [message, setMessage] = useState("");
  const [blessings, setBlessings] = useState<Blessing[]>(DEFAULT_BLESSINGS);
  const [submitted, setSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("gnana_arun_blessings");
      if (stored) {
        setBlessings(JSON.parse(stored));
      }
    } catch {
      // LocalStorage error handled
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newBlessing: Blessing = {
      id: Date.now().toString(),
      name: name.trim(),
      attendance,
      message: message.trim() || "Heartfelt congratulations and blessings to the lovely couple!",
      timestamp: "Just now",
    };

    const updated = [newBlessing, ...blessings];
    setBlessings(updated);
    try {
      localStorage.setItem("gnana_arun_blessings", JSON.stringify(updated));
    } catch {
      // fallback
    }

    setSubmitted(true);
    triggerConfetti();
    triggerGoldenShower();

    setName("");
    setMessage("");
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      "✨ You're warmly invited! Celebrate the wedding of Gnana Bensiya & Arun Marshlin on Saturday, January 16, 2027 in Chudalappara, Kerala. View the digital invitation here: " +
        (typeof window !== "undefined" ? window.location.href : "")
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const handleShareLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <section id="rsvp-section" className="relative py-20 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.9 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#132E22]/5 text-[#132E22] text-xs uppercase tracking-[0.2em] font-medium font-sans mb-3 border border-[#C5A059]/30">
          <MessageSquareHeart className="w-3.5 h-3.5 text-[#AA8440]" />
          <span>Blessings &amp; RSVP</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif text-[#132E22] tracking-tight">
          Send Your Love &amp; Wishes
        </h2>

        <FloralDivider className="my-3" />

        <p className="text-sm md:text-base text-[#524B42] max-w-lg mx-auto font-sans leading-relaxed">
          Your warm wishes, prayers, and presence make our celebration truly
          complete.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form: RSVP & Well-Wish Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-6 glass-card rounded-2xl p-7 md:p-9 relative border border-[#C5A059]/40 shadow-lg shadow-[#132E22]/5"
        >
          <CornerFlourish position="top-left" />
          <CornerFlourish position="bottom-right" />

          {submitted ? (
            <div className="py-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4 text-[#132E22] border border-[#C5A059]/40">
                <CheckCircle2 className="w-9 h-9 text-emerald-600" />
              </div>
              <h3 className="font-serif text-2xl text-[#132E22] mb-2">
                Thank You from the Heart!
              </h3>
              <p className="text-sm text-[#524B42] font-sans max-w-xs mb-6">
                Your loving message has been added to our wedding blessing wall.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                type="button"
                className="text-xs uppercase tracking-wider text-[#AA8440] font-semibold underline hover:text-[#7A571E]"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="guest-name"
                  className="block text-xs uppercase tracking-wider text-[#7A571E] font-semibold mb-1.5 font-sans"
                >
                  Your Name(s) *
                </label>
                <input
                  id="guest-name"
                  type="text"
                  required
                  placeholder="e.g. Maria &amp; Family"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-[#C5A059]/40 text-[#132E22] placeholder:text-[#9C8F80] text-sm focus:outline-none focus:ring-2 focus:ring-[#AA8440]/40 transition"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#7A571E] font-semibold mb-1.5 font-sans">
                  Will You Be Joining Us?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setAttendance("attending")}
                    className={`px-3 py-2.5 rounded-xl text-xs font-medium border text-center transition ${
                      attendance === "attending"
                        ? "bg-[#132E22] text-[#FAF7F2] border-[#132E22] shadow"
                        : "bg-white/80 text-[#524B42] border-[#C5A059]/30 hover:bg-[#FAF7F2]"
                    }`}
                  >
                    Joyfully Attending 🤍
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance("afar")}
                    className={`px-3 py-2.5 rounded-xl text-xs font-medium border text-center transition ${
                      attendance === "afar"
                        ? "bg-[#132E22] text-[#FAF7F2] border-[#132E22] shadow"
                        : "bg-white/80 text-[#524B42] border-[#C5A059]/30 hover:bg-[#FAF7F2]"
                    }`}
                  >
                    Wishing from Afar 🕊️
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="guest-message"
                  className="block text-xs uppercase tracking-wider text-[#7A571E] font-semibold mb-1.5 font-sans"
                >
                  Blessing / Message
                </label>
                <textarea
                  id="guest-message"
                  rows={3}
                  placeholder="Share a heartfelt prayer or congratulatory wish..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-[#C5A059]/40 text-[#132E22] placeholder:text-[#9C8F80] text-sm focus:outline-none focus:ring-2 focus:ring-[#AA8440]/40 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#1B3D2F] to-[#132E22] text-[#FAF7F2] font-medium text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] border border-[#E5CD8B]/30"
              >
                <Send className="w-4 h-4 text-[#E5CD8B]" />
                <span>Submit Blessing &amp; Celebrate</span>
              </button>
            </form>
          )}

          {/* Social Share Bar */}
          <div className="mt-6 pt-5 border-t border-[#C5A059]/20 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-[#7A6E5F] font-sans">Share with friends:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShareWhatsApp}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium transition shadow-sm"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={handleShareLink}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card hover:bg-[#F3ECE2] text-[#132E22] font-medium border border-[#C5A059]/40 transition"
              >
                {copiedLink ? "Link Copied!" : "Copy Link"}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Wall: Live Guest Wishes Wall */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="lg:col-span-6 space-y-3.5"
        >
          <div className="flex items-center justify-between px-1">
            <h3 className="font-serif text-xl text-[#132E22] font-semibold flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#AA8440] fill-[#C5A059]" />
              <span>Blessing Wall</span>
            </h3>
            <span className="text-xs text-[#7A6E5F] font-sans">
              {blessings.length} {blessings.length === 1 ? "Wish" : "Wishes"}
            </span>
          </div>

          <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
            {blessings.map((b) => (
              <div
                key={b.id}
                className="p-4 rounded-xl glass-card border border-[#C5A059]/30 shadow-sm hover:border-[#C5A059]/60 transition"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-serif text-base text-[#132E22] font-semibold">
                    {b.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#85642B] font-sans">
                    {b.timestamp}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#524B42] font-sans leading-relaxed italic">
                  &ldquo;{b.message}&rdquo;
                </p>
              </div>
            ))}
          </div>

          {/* Floating Confetti Mini Trigger */}
          <div className="text-center pt-2">
            <button
              onClick={() => {
                triggerConfetti();
                triggerGoldenShower();
              }}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs text-[#AA8440] hover:text-[#7A571E] font-medium transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Shower Love on the Couple</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
