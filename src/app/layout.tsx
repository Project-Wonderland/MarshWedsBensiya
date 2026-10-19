import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat, Alex_Brush } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#132E22",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Gnana Bensiya & Arun Marshlin | Wedding Celebration",
  description:
    "Together with their families, Gnana Bensiya & Arun Marshlin joyfully invite you to celebrate their wedding on January 16, 2027 at Chudalappara, Kerala.",
  openGraph: {
    title: "Gnana Bensiya & Arun Marshlin - Wedding Invitation",
    description: "Save the Date: January 16, 2027 • Chudalappara, Kerala",
    type: "website",
    locale: "en_US",
    siteName: "Gnana & Arun Wedding",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${alexBrush.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-[#242424] font-sans antialiased selection:bg-[#C5A059]/20 selection:text-[#132E22]">
        {children}
      </body>
    </html>
  );
}
