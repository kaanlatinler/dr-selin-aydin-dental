// src/components/AppointmentDrawer.tsx
"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CheckCircle2, Clock, Sparkles } from "lucide-react";

const TREATMENTS = [
  {
    id: "smile",
    name: "Dijital Gülüş Tasarımı",
    duration: "45 Dk (3D Tarama Dahil)",
  },
  { id: "implant", name: "İmplant & Cerrahi Konsültasyon", duration: "40 Dk" },
  { id: "whitening", name: "Lazerle Diş Beyazlatma", duration: "60 Dk" },
  { id: "checkup", name: "Rutin Kontrol & Detartraj", duration: "30 Dk" },
];

export function AppointmentDrawer({
  triggerText = "Randevu Planla",
}: {
  triggerText?: string;
}) {
  const [selected, setSelected] = useState(TREATMENTS[0]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Sheet onOpenChange={(open) => !open && setSubmitted(false)}>
      <SheetTrigger
        className={cn(
          buttonVariants(),
          "rounded-full bg-[#2D5A4C] hover:bg-[#23473C] text-white px-6 h-11 text-sm font-medium transition-all shadow-sm cursor-pointer",
        )}
      >
        {triggerText}
      </SheetTrigger>

      {/* p-0 verip iç katmanlara rahat px-7 / sm:px-9 boşlukları tanımlıyoruz */}
      <SheetContent className="bg-[#FAF9F6] border-l border-stone-200 w-full sm:max-w-[500px] p-0 overflow-y-auto">
        <div className="px-7 py-8 sm:px-9 sm:py-10 flex flex-col min-h-full">
          <SheetHeader className="text-left p-0 pb-6 border-b border-stone-200/80 space-y-2 pr-8">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B08D57] font-semibold">
              Özel Muayenehane
            </span>
            <SheetTitle className="font-serif text-3xl sm:text-[34px] leading-tight font-normal text-stone-900">
              Kişisel Randevu Talebi
            </SheetTitle>
            <SheetDescription className="text-stone-600 text-sm leading-relaxed pt-1">
              İlk muayenede panoramik değerlendirme ve 3D ağız içi dijital
              tarama planlaması yapılır.
            </SheetDescription>
          </SheetHeader>

          {submitted ? (
            <div className="my-auto py-16 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#2D5A4C]/10 text-[#2D5A4C] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl text-stone-900">
                Talebiniz Alındı
              </h3>
              <p className="text-sm text-stone-600 max-w-xs mx-auto leading-relaxed">
                Asistanımız <strong>{selected.name}</strong> randevunuz için en
                uygun saat dilimini onaylamak üzere sizinle iletişime
                geçecektir.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-7 pt-7 flex-1 flex flex-col"
            >
              {/* Tedavi Seçimi */}
              <div className="space-y-3">
                <Label className="text-[11px] uppercase tracking-[0.15em] text-stone-500 font-semibold block">
                  İlgilendiğiniz Tedavi
                </Label>
                <div className="grid grid-cols-1 gap-2.5">
                  {TREATMENTS.map((item) => {
                    const isActive = selected.id === item.id;
                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setSelected(item)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isActive
                            ? "border-[#2D5A4C] bg-[#2D5A4C]/[0.06] text-stone-900 shadow-xs"
                            : "border-stone-200/90 bg-white hover:border-stone-300 text-stone-700"
                        }`}
                      >
                        <span className="text-sm font-medium pr-3">
                          {item.name}
                        </span>
                        <span
                          className={`text-xs flex items-center gap-1.5 shrink-0 ${
                            isActive
                              ? "text-[#2D5A4C] font-medium"
                              : "text-stone-500"
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5" /> {item.duration}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Hasta Bilgileri */}
              <div className="space-y-5 pt-1">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-stone-800"
                  >
                    Adınız Soyadınız
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder="Örn: Ahmet Yılmaz"
                    className="h-11 px-4 rounded-xl bg-white border-stone-200 focus-visible:border-[#2D5A4C]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-stone-800"
                    >
                      Telefon Numaranız
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="05XX XXX XX XX"
                      className="h-11 px-4 rounded-xl bg-white border-stone-200 focus-visible:border-[#2D5A4C]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="date"
                      className="text-sm font-medium text-stone-800"
                    >
                      Tercih Ettiğiniz Tarih
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      required
                      className="h-11 px-4 rounded-xl bg-white border-stone-200 focus-visible:border-[#2D5A4C]"
                    />
                  </div>
                </div>
              </div>

              {/* Bilgi Notu */}
              <div className="p-4 rounded-xl bg-[#F2EFE9] border border-stone-200/60 flex items-start gap-3 text-xs text-stone-600 leading-relaxed">
                <Sparkles className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                <span>
                  Randevularımız hastalarımıza yeterli vakit ayırabilmek adına{" "}
                  <strong className="text-stone-800">
                    tek hasta prensibiyle
                  </strong>{" "}
                  planlanmaktadır.
                </span>
              </div>

              {/* Gönder Butonu */}
              <div className="pt-2 mt-auto">
                <Button
                  type="submit"
                  className="w-full h-12 rounded-full bg-[#2D5A4C] hover:bg-[#23473C] text-white text-sm font-medium shadow-sm cursor-pointer"
                >
                  Randevu Oluştur
                </Button>
              </div>
            </form>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
