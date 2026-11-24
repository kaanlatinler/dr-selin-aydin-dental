// src/app/layout.tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { DentistSchema } from "@/components/DentistSchema";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dt. Selin Aydın | Estetik Diş Hekimliği & Dijital Gülüş Tasarımı",
  description:
    "Doğal estetik, mikroskobik hassasiyet ve ağrısız dijital diş hekimliği deneyimi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${serif.variable} ${sans.variable} scroll-smooth`}
    >
      <body className="bg-[#FAF9F6] text-[#18181B] font-sans antialiased selection:bg-[#2D5A4C] selection:text-white">
        <DentistSchema />
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
