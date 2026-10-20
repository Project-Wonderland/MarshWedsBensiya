"use client";

import { motion } from "framer-motion";
import { Heart, Users } from "lucide-react";
import { CornerFlourish, FloralDivider } from "./Ornaments";

export default function HostsSection() {
  return (
    <section
      id="hosts-section"
      className="relative py-20 px-4 md:px-8 max-w-5xl mx-auto"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#132E22]/5 text-[#132E22] text-xs uppercase tracking-[0.2em] font-medium font-sans mb-3 border border-[#C5A059]/30">
          <Users className="w-3.5 h-3.5 text-[#AA8440]" />
          <span>With Our Families</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif text-[#132E22] tracking-tight">
          Together in Love &amp; Gratitude
        </h2>

        <FloralDivider className="my-3" />

        <p className="text-sm md:text-base text-[#524B42] max-w-xl mx-auto font-sans leading-relaxed">
          &ldquo;Together with their families, we invite you to share in our joy as we
          unite our lives and exchange our vows in the presence of God and loved
          ones.&rdquo;
        </p>
      </motion.div>

      {/* Parents Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

        {/* Groom's Parents Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative glass-card rounded-2xl p-8 md:p-10 text-center shadow-lg shadow-[#132E22]/5 hover:shadow-xl transition-all duration-300 border border-[#C5A059]/40 group"
        >
          <CornerFlourish position="top-right" />
          <CornerFlourish position="bottom-left" />

          <div className="inline-block p-3 rounded-full bg-[#FAF7F2] border border-[#C5A059]/30 mb-4 text-[#AA8440] group-hover:scale-110 transition-transform duration-300">
            <Heart className="w-5 h-5 fill-[#C5A059]/20" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-[#85642B] font-semibold block mb-2">
            Groom&apos;s Parents
          </span>

          <h3 className="text-2xl md:text-3xl font-serif text-[#132E22] mb-3 leading-snug">
            Vijaya Kumar <br />
            <span className="text-lg md:text-xl font-light text-[#AA8440] italic font-serif">
              &amp;
            </span>{" "}
            Nirmala
          </h3>

          <div className="h-[1px] w-16 mx-auto bg-[#C5A059]/40 my-4" />

          <p className="text-xs text-[#7A6E5F] font-sans tracking-wide uppercase mb-1">
            Joyfully invite you to celebrate
          </p>
          <p className="text-xs text-[#7A6E5F] font-sans tracking-wide uppercase mb-2">
            their beloved son
          </p>

          <p className="text-xl md:text-2xl font-serif text-[#132E22] font-medium tracking-wide">
            Arun Marshlin
          </p>
        </motion.div>
        {/* Bride's Parents Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative glass-card rounded-2xl p-8 md:p-10 text-center shadow-lg shadow-[#132E22]/5 hover:shadow-xl transition-all duration-300 border border-[#C5A059]/40 group"
        >
          <CornerFlourish position="top-left" />
          <CornerFlourish position="bottom-right" />

          <div className="inline-block p-3 rounded-full bg-[#FAF7F2] border border-[#C5A059]/30 mb-4 text-[#AA8440] group-hover:scale-110 transition-transform duration-300">
            <Heart className="w-5 h-5 fill-[#C5A059]/20" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-[#85642B] font-semibold block mb-2">
            Bride&apos;s Parents
          </span>

          <h3 className="text-2xl md:text-3xl font-serif text-[#132E22] mb-3 leading-snug">
            Vincent Paulraj <br />
            <span className="text-lg md:text-xl font-light text-[#AA8440] italic font-serif">
              &amp;
            </span>{" "}
            Prakasi
          </h3>

          <div className="h-[1px] w-16 mx-auto bg-[#C5A059]/40 my-4" />

          <p className="text-xs text-[#7A6E5F] font-sans tracking-wide uppercase mb-1">
            Cordially invite you to celebrate
          </p>
          <p className="text-xs text-[#7A6E5F] font-sans tracking-wide uppercase mb-2">
            their beloved daughter
          </p>

          <p className="text-xl md:text-2xl font-serif text-[#132E22] font-medium tracking-wide">
            Gnana Bensiya
          </p>
        </motion.div>


      </div>
    </section>
  );
}
