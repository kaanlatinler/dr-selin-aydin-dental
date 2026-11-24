// src/app/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppointmentDrawer } from "@/components/AppointmentDrawer";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import {
  ArrowUpRight,
  Award,
  Check,
  MapPin,
  Phone,
  ScanFace,
  ShieldCheck,
} from "lucide-react";

const IMAGES = {
  doctorPortrait:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85",
  clinicInterior:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
  dentalEquipment:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
  smileCase1:
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=85",
  smileCase2:
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=85",
};

export default function DentistPortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ÜST NAVİGASYON */}
      <header className="sticky top-0 z-40 bg-[#FAF9F6]/85 backdrop-blur-md border-b border-stone-200/60">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex flex-col">
            <span className="font-serif text-2xl tracking-tight text-stone-900">
              Dt. Selin Aydın
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-stone-500">
              Estetik & Restoratif Diş Hekimliği
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-stone-600">
            <a
              href="#tedaviler"
              className="hover:text-stone-900 transition-colors"
            >
              Tedaviler
            </a>
            <a
              href="#vakalar"
              className="hover:text-stone-900 transition-colors"
            >
              Klinik Vakalar
            </a>
            <a
              href="#teknoloji"
              className="hover:text-stone-900 transition-colors"
            >
              Teknoloji & Klinik
            </a>
            <a
              href="#iletisim"
              className="hover:text-stone-900 transition-colors"
            >
              İletişim
            </a>
          </nav>

          <AppointmentDrawer triggerText="Randevu Al" />
        </div>
      </header>

      <main className="flex-1">
        {/* HERO BÖLÜMÜ */}
        <section className="max-w-6xl mx-auto px-6 pt-14 pb-24 md:pt-20 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EFE9] border border-stone-200/80 text-xs text-stone-700">
                <span className="w-2 h-2 rounded-full bg-[#2D5A4C]" />
                İstanbul, Nişantaşı Özel Muayenehane • TDB Üyesi
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-[68px] leading-[1.06] tracking-tight text-stone-900 font-normal">
                Yapaylıktan uzak,{" "}
                <span className="italic text-[#2D5A4C]">yüzünüze ait</span>{" "}
                doğal bir gülüş.
              </h1>

              <p className="text-lg text-stone-600 max-w-xl leading-relaxed">
                Minimal invaziv yaklaşımlar, mikroskobik hassasiyet ve 3D
                dijital planlama ile diş dokunuzu koruyarak kalıcı estetik ve
                fonksiyon sunuyoruz.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <AppointmentDrawer triggerText="Ön Görüşme Planla" />
                <a
                  href="#vakalar"
                  className="inline-flex items-center gap-2 px-6 h-11 rounded-full border border-stone-300 text-sm font-medium text-stone-800 hover:bg-stone-100 transition-colors"
                >
                  Vaka Örneklerini İncele <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-200/80 max-w-lg">
                <div>
                  <p className="font-serif text-3xl text-stone-900">12+ Yıl</p>
                  <p className="text-xs text-stone-500 mt-1">Klinik Deneyim</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-stone-900">3.400+</p>
                  <p className="text-xs text-stone-500 mt-1">Tamamlanan Vaka</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-stone-900">%100</p>
                  <p className="text-xs text-stone-500 mt-1">
                    Dijital Ölçü Akışı
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sağ Taraf - Gerçek Hekim Portre Fotoğrafı */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-[28px] bg-[#EFECE6] p-3.5 border border-stone-200/80 shadow-sm">
                <div className="aspect-[4/5] rounded-[20px] relative overflow-hidden bg-stone-200">
                  <Image
                    src={IMAGES.doctorPortrait}
                    alt="Dt. Selin Aydın — Estetik Diş Hekimi"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 z-10 bg-[#FAF9F6]/95 backdrop-blur-md p-5 rounded-2xl border border-stone-200/70 shadow-sm">
                    <p className="font-serif text-xl text-stone-900">
                      Dt. Selin Aydın
                    </p>
                    <p className="text-xs text-stone-600 mt-0.5">
                      İstanbul Üniversitesi Diş Hekimliği Fakültesi Mezunu
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-[11px] text-[#2D5A4C] font-medium">
                      <Award className="w-3.5 h-3.5 shrink-0" /> Avrupa Estetik
                      Diş Hekimliği Akademisi (EAED) Üyesi
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TEDAVİ ALANLARI */}
        <section
          id="tedaviler"
          className="bg-[#F2EFE9]/70 py-24 border-y border-stone-200/70"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold">
                Uzmanlık Alanları
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 mt-2 font-normal">
                Kişiye özel planlanan modern tedaviler
              </h2>
            </div>

            <Tabs defaultValue="estetik" className="w-full">
              <TabsList className="bg-white/80 border border-stone-200 p-1.5 rounded-full h-auto flex-wrap justify-start mb-10">
                <TabsTrigger
                  value="estetik"
                  className="rounded-full px-5 py-2.5 text-sm data-[state=active]:bg-[#2D5A4C] data-[state=active]:text-white"
                >
                  Estetik Gülüş Tasarımı
                </TabsTrigger>
                <TabsTrigger
                  value="implant"
                  className="rounded-full px-5 py-2.5 text-sm data-[state=active]:bg-[#2D5A4C] data-[state=active]:text-white"
                >
                  İmplantoloji & Cerrahi
                </TabsTrigger>
                <TabsTrigger
                  value="ortodonti"
                  className="rounded-full px-5 py-2.5 text-sm data-[state=active]:bg-[#2D5A4C] data-[state=active]:text-white"
                >
                  Şeffaf Plak (Invisalign)
                </TabsTrigger>
                <TabsTrigger
                  value="koruyucu"
                  className="rounded-full px-5 py-2.5 text-sm data-[state=active]:bg-[#2D5A4C] data-[state=active]:text-white"
                >
                  Mikroskobik Endodonti
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="estetik"
                className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200/80"
              >
                <div className="grid md:grid-cols-12 gap-10 items-center">
                  <div className="md:col-span-7 space-y-5">
                    <h3 className="font-serif text-3xl text-stone-900">
                      Porselen Lamina & Biyomimetik Restorasyonlar
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      Diş minesine minimum dokunuşla (0.3 mm inceliğinde)
                      hazırlanan yaprak porselenler ile ışık geçirgenliği doğal
                      dişten ayırt edilemeyen gülüşler tasarlıyoruz. Tedaviye
                      başlamadan önce 3D Mock-up ile sonucu ağzınızda
                      görürsünüz.
                    </p>
                    <ul className="space-y-2.5 pt-2">
                      {[
                        "Tedavi öncesi dijital gülüş provası (Mock-up)",
                        "Sağlam diş dokusunu koruyan prepless teknikler",
                        "2 ile 3 seans arasında tamamlanan hızlı süreç",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-sm text-stone-700"
                        >
                          <span className="w-5 h-5 rounded-full bg-[#2D5A4C]/10 text-[#2D5A4C] flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-5">
                    <div className="relative h-72 rounded-2xl overflow-hidden border border-stone-200/70">
                      <Image
                        src={IMAGES.dentalEquipment}
                        alt="Dijital Gülüş Tasarımı ve Estetik Diş Hekimliği"
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent
                value="implant"
                className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200/80"
              >
                <h3 className="font-serif text-3xl text-stone-900 mb-3">
                  Navigasyonlu (Dikişsiz) İmplant Cerrahisi
                </h3>
                <p className="text-stone-600 max-w-2xl leading-relaxed">
                  3D dental tomografi verileriyle hazırlanan cerrahi rehberler
                  sayesinde dikişsiz, kanamasız ve maksimum iyileşme konforu
                  sunan implant uygulamaları gerçekleştiriyoruz.
                </p>
              </TabsContent>

              <TabsContent
                value="ortodonti"
                className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200/80"
              >
                <h3 className="font-serif text-3xl text-stone-900 mb-3">
                  Telsiz Ortodontik Tedavi
                </h3>
                <p className="text-stone-600 max-w-2xl leading-relaxed">
                  Sosyal yaşamınızı etkilemeyen şeffaf plaklarla diş
                  çapraşıklıklarını dijital simülasyon eşliğinde adım adım
                  düzeltiyoruz.
                </p>
              </TabsContent>

              <TabsContent
                value="koruyucu"
                className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200/80"
              >
                <h3 className="font-serif text-3xl text-stone-900 mb-3">
                  Dental Mikroskop Altında Kanal Tedavisi
                </h3>
                <p className="text-stone-600 max-w-2xl leading-relaxed">
                  25x büyütme sağlayan klinik mikroskoplar ile gözle görülemeyen
                  mikro kanalları tespit ederek doğal dişlerinizi ağızda
                  tutuyoruz.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* VAKA KARŞILAŞTIRMA BÖLÜMÜ (Gerçek Fotoğraflı Sürgü) */}
        <section id="vakalar" className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#B08D57] font-semibold">
                Klinik Arşiv
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 mt-2 font-normal">
                Öncesi & Sonrası Karşılaştırma
              </h2>
            </div>
            <p className="text-sm text-stone-500 max-w-sm">
              Sürgüyü sağa ve sola kaydırarak tedavi öncesi ve sonrası ton ve
              doku uyumunu inceleyebilirsiniz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <BeforeAfterSlider
              title="Vaka #14 — Minimal Porselen Lamina"
              procedure="8 Üst Ön Diş E-max Restorasyon"
              duration="10 Gün (3 Seans)"
              beforeImage={IMAGES.smileCase1}
              afterImage={IMAGES.smileCase1}
            />
            <BeforeAfterSlider
              title="Vaka #29 — Diş Eti Estetiği & Beyazlatma"
              procedure="Lazer Gingivektomi + Ofis Tipi Beyazlatma"
              duration="2 Seans"
              beforeImage={IMAGES.smileCase2}
              afterImage={IMAGES.smileCase2}
            />
          </div>
        </section>

        {/* BENTO GRID TEKNOLOJİ & MUAYENEHANE VİTRİNİ */}
        <section id="teknoloji" className="max-w-6xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative rounded-3xl overflow-hidden text-white p-8 md:p-10 flex flex-col justify-between min-h-[300px]">
              <Image
                src={IMAGES.clinicInterior}
                alt="Modern Nişantaşı Diş Muayenehanesi İç Mekan"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C382F]/95 via-[#2D5A4C]/75 to-[#2D5A4C]/40" />

              <ScanFace className="relative z-10 w-8 h-8 text-[#D8C39E]" />
              <div className="relative z-10 space-y-2 pt-12">
                <h3 className="font-serif text-3xl font-normal">
                  Geleneksel Ölçü Kaşıklarına Veda Edin
                </h3>
                <p className="text-stone-100 text-sm max-w-lg leading-relaxed">
                  iTero Element 5D ağız içi optik tarayıcı ile saniyeler içinde
                  dişlerinizin 3 boyutlu dijital kopyasını çıkarıyor, bulantı
                  refleksi olmadan hassas ölçü alıyoruz.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-[#F2EFE9] border border-stone-200/80 p-8 flex flex-col justify-between">
              <ShieldCheck className="w-8 h-8 text-[#2D5A4C]" />
              <div className="space-y-2 pt-8">
                <h3 className="font-serif text-2xl text-stone-900">
                  Ağrısız Dijital Anestezi
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Bilgisayar destekli basınç kontrolü sayesinde enjeksiyon
                  hissini ortadan kaldıran konforlu anestezi protokolü.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ALT BİLGİ (FOOTER) */}
      <footer id="iletisim" className="bg-stone-900 text-stone-300 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <p className="font-serif text-2xl text-white">Dt. Selin Aydın</p>
            <p className="text-sm text-stone-400 leading-relaxed">
              Estetik ve Restoratif Diş Hekimliği Muayenehanesi. Bilimsel,
              şeffaf ve insan odaklı yaklaşım.
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-white font-medium mb-3">Muayenehane Adresi</p>
            <p className="flex items-start gap-2 text-stone-400">
              <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-1" />
              Teşvikiye Mah. Vali Konağı Cad. No: 42 Kat: 3, Nişantaşı /
              İstanbul
            </p>
            <p className="flex items-center gap-2 text-stone-400 pt-1">
              <Phone className="w-4 h-4 text-[#B08D57]" /> +90 (212) 555 01 92
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-white font-medium">Çalışma Saatleri</p>
            <p className="text-sm text-stone-400">
              Pazartesi – Cumartesi: 09:30 – 19:00
            </p>
            <div className="pt-2">
              <AppointmentDrawer triggerText="Online Randevu Al" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
