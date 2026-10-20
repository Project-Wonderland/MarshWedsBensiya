export function MonogramBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      {/* Outer Rotating/Pulsing Glow Ring */}
      <div className="absolute inset-0 rounded-full border border-[#C5A059]/30 scale-110 pointer-events-none" />
      <div className="absolute inset-0 rounded-full border border-dashed border-[#AA8440]/40 scale-125 pointer-events-none animate-[spin_60s_linear_infinite]" />

      {/* Main Medallion */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#1E4D3A] to-[#0D261A] p-[2px] shadow-xl shadow-[#132E22]/15 flex items-center justify-center">
        <div className="w-full h-full rounded-full border border-[#E5CD8B]/50 flex flex-col items-center justify-center p-2 bg-[#132E22]/90 backdrop-blur-sm">
          <span className="font-serif text-lg md:text-xl font-light text-[#E5CD8B] tracking-widest flex items-center gap-0.5">
            <span>A</span>
            <span className="text-xs font-script text-[#C5A059] italic px-0.5">&amp;</span>
            <span>B</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#C5A059]/80 font-sans mt-0.5">
            2027
          </span>
        </div>
      </div>
    </div>
  );
}

export function FloralDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
      <span className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-[#C5A059]/60 to-[#C5A059]" />
      <svg
        className="w-5 h-5 text-[#C5A059]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2C9 6 6 8 6 12s3 6 6 10c3-4 6-6 6-10s-3-6-6-10z" />
        <path d="M2 12c4-3 6-6 10-6s6 3 10 6c-4 3-6 6-10 6s-6-3-10-6z" />
      </svg>
      <span className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent via-[#C5A059]/60 to-[#C5A059]" />
    </div>
  );
}

export function CornerFlourish({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const getTransform = () => {
    switch (position) {
      case "top-left":
        return "top-3 left-3";
      case "top-right":
        return "top-3 right-3 rotate-90";
      case "bottom-left":
        return "bottom-3 left-3 -rotate-90";
      case "bottom-right":
        return "bottom-3 right-3 rotate-180";
    }
  };

  return (
    <div className={`absolute ${getTransform()} pointer-events-none opacity-40 text-[#C5A059]`}>
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M2 2h20c6 0 10 4 10 10v20" />
        <path d="M2 8h14c4 0 7 3 7 7v14" />
        <circle cx="5" cy="5" r="2" fill="currentColor" />
      </svg>
    </div>
  );
}
