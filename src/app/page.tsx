import AudioToggle from "@/components/AudioToggle";
import HeroSection from "@/components/HeroSection";
import HostsSection from "@/components/HostsSection";
import CountdownSection from "@/components/CountdownSection";
import VenueSection from "@/components/VenueSection";
import RsvpSection from "@/components/RsvpSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FAF7F2] text-[#222222] overflow-x-hidden selection:bg-[#C5A059]/20 selection:text-[#132E22]">
      {/* Floating Audio Ambient Player */}
      <AudioToggle />

      {/* Hero Section (Grand entrance, full-screen, envelope reveal) */}
      <HeroSection />

      {/* Parents & Hosts Section */}
      <HostsSection />

      {/* Countdown Section (react-countdown to Midnight Jan 16, 2027) */}
      <CountdownSection />

      {/* Venue Section (Google Maps linking, address copy, schedule) */}
      <VenueSection />

      {/* RSVP, Well-Wishes Wall & Celebration Hub */}
      {/* <RsvpSection /> */}

      {/* Footer Section */}
      <FooterSection />
    </main>
  );
}
