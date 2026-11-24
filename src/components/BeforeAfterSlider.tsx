// src/components/BeforeAfterSlider.tsx
"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterProps {
  title: string;
  procedure: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  title,
  procedure,
  duration,
  beforeImage,
  afterImage,
  beforeLabel = "Tedavi Öncesi",
  afterLabel = "Dijital Lamina Sonrası",
}: BeforeAfterProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <div className="group space-y-4">
      <div
        ref={containerRef}
        onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onClick={(e) => handleMove(e.clientX)}
        className="relative h-[380px] w-full overflow-hidden rounded-2xl border border-stone-200/80 select-none cursor-ew-resize bg-stone-200"
      >
        {/* SONRASI (Tam Arka Plan) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center pointer-events-none"
          />
          <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-[#2D5A4C]/90 backdrop-blur-sm text-white text-xs font-medium">
            {afterLabel}
          </span>
        </div>

        {/* ÖNCESİ (Kırpılan Katman - clipPath ile fotoğraf bozulmadan kesilir) */}
        <div
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          className="absolute inset-0"
        >
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center pointer-events-none sepia-[.25] brightness-90 contrast-95"
          />
          <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-sm text-white text-xs font-medium">
            {beforeLabel}
          </span>
        </div>

        {/* Dikey Ayırıcı Çizgi ve Tutamaç */}
        <div
          style={{ left: `${sliderPos}%` }}
          className="absolute inset-y-0 -translate-x-1/2 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none"
        >
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-lg border border-stone-200 flex items-center justify-center text-[#2D5A4C] transition-transform group-hover:scale-110">
            <MoveHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1">
        <div>
          <h4 className="font-serif text-xl font-medium text-stone-900">
            {title}
          </h4>
          <p className="text-sm text-stone-500">{procedure}</p>
        </div>
        <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#F2EFE9] text-stone-700 border border-stone-200">
          Süre: {duration}
        </span>
      </div>
    </div>
  );
}
