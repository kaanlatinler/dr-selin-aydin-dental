// src/components/WhatsAppWidget.tsx
"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

interface WhatsAppWidgetProps {
  phoneNumber?: string; // Ülke koduyla birlikte, '+' olmadan (Örn: 905320000000)
  defaultMessage?: string;
}

export function WhatsAppWidget({
  phoneNumber = "905325550192",
  defaultMessage = "Merhaba Dt. Selin Aydın Muayenehanesi, tedavi ve randevu süreçleri hakkında bilgi almak istiyorum.",
}: WhatsAppWidgetProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp üzerinden hızlı danışma başlat"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#18181B] text-[#FAF9F6] pl-4 pr-5 py-3 shadow-xl border border-stone-700/60 hover:bg-[#2D5A4C] hover:border-[#2D5A4C] transition-all duration-300"
    >
      <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366]/15 text-[#25D366] group-hover:bg-white/15 group-hover:text-white transition-colors">
        <MessageCircle className="w-4 h-4" />
        {/* Müsaitlik göstergesi */}
        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
        </span>
      </div>

      <div className="flex flex-col text-left">
        <span className="text-[10px] uppercase tracking-wider text-stone-400 group-hover:text-stone-200 leading-none">
          Hızlı Danışma
        </span>
        <span className="text-xs font-medium text-white mt-0.5">
          WhatsApp Asistanı
        </span>
      </div>
    </a>
  );
}
