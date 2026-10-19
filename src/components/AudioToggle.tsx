"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Play delicate romantic ambient melody via Web Audio API
  const startMelody = () => {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioContextClass) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }

      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;

      // Chord notes progression: D Major 9, G Major 7, B Minor 7, A Sus 4 (Dreamy romantic wedding frequencies)
      const notes = [
        293.66, 369.99, 440.0, 554.37, // D, F#, A, C#
        392.0, 493.88, 587.33, 739.99, // G, B, D, F#
        246.94, 293.66, 369.99, 440.0, // B, D, F#, A
        220.0, 277.18, 329.63, 440.0,  // A, C#, E, A
      ];

      let noteIndex = 0;

      const playChime = () => {
        if (!ctx || ctx.state === "closed") return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Warm sine wave with subtle triangle warmth
        osc.type = "sine";
        const freq = notes[noteIndex % notes.length];
        noteIndex++;

        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Soft bell/harp envelope
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.045, ctx.currentTime + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 1.85);
      };

      // Play immediately, then every 600ms with romantic cadence
      playChime();
      intervalRef.current = setInterval(playChime, 620);
      setIsPlaying(true);
    } catch {
      // Audio context might fail or be blocked by browser
    }
  };

  const stopMelody = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "running") {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopMelody();
    } else {
      startMelody();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={toggleAudio}
        type="button"
        aria-label={isPlaying ? "Mute Background Music" : "Play Wedding Chimes"}
        className="group relative flex items-center gap-2.5 px-3.5 py-2 rounded-full glass-card hover:bg-[#FAF7F2] text-[#132E22] shadow-lg shadow-[#132E22]/5 transition-all duration-300 hover:scale-105 active:scale-95 border border-[#C5A059]/40"
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          {isPlaying ? (
            <>
              <Volume2 className="w-4 h-4 text-[#C5A059] animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#AA8440]"></span>
              </span>
            </>
          ) : (
            <VolumeX className="w-4 h-4 text-[#85642B]/70 group-hover:text-[#AA8440]" />
          )}
        </span>

        <span className="text-xs font-medium tracking-wider uppercase text-[#132E22]/90 flex items-center gap-1 font-sans">
          {isPlaying ? (
            <span className="flex items-center gap-1">
              Melody
              <span className="inline-flex items-end gap-0.5 h-3">
                <span className="w-0.5 h-2 bg-[#C5A059] animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-0.5 h-3 bg-[#AA8440] animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-0.5 h-1.5 bg-[#C5A059] animate-bounce"></span>
              </span>
            </span>
          ) : (
            <span className="flex items-center gap-1 text-[#85642B]">
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              Music
            </span>
          )}
        </span>
      </button>
    </div>
  );
}
