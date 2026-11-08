"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scissors,
  HeartHandshake,
  Microscope,
  Flower2,
  CheckCircle2,
  ArrowRight,
  DoorOpen,
  Sparkles,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import Image from "next/image";
import { STUDIO_ROOMS, type StudioRoom } from "@/data/studioData";
import { useBooking } from "@/context/BookingContext";
import { FullscreenMediaWrapper } from "@/components/ui/FullscreenMediaWrapper";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { trackCTAClick } from "@/utils/analytics";

const ROOM_ICONS: Record<string, React.ElementType> = {
  "sala-01": Scissors,
  "sala-02": HeartHandshake,
  "sala-03": Microscope,
  "sala-04": Flower2,
};

export function FourRoomsSection() {
  const [activeRoomId, setActiveRoomId] = useState<string>("sala-01");
  const { openBookingModal } = useBooking();

  const activeRoom: StudioRoom =
    STUDIO_ROOMS.find((r) => r.id === activeRoomId) ?? STUDIO_ROOMS[0];

  const handleRoomCTA = (room: StudioRoom) => {
    trackCTAClick(`Salas_${room.id}_CTA`);
    openBookingModal({ initialRoomId: room.id });
  };

  return (
    <section
      id="salas"
      aria-labelledby="salas-heading"
      className="py-16 md:py-24 px-5 md:px-[6%] lg:px-[8%] bg-[#F3ECE3]/65 border-b border-[#C6934B]/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 font-label-sm text-xs text-[#A66E4E] uppercase tracking-[0.2em] font-bold mb-3">
            <DoorOpen className="w-4 h-4 text-[#C6934B]" aria-hidden="true" />
            Tour Interativo • Pme Offices Tower
          </span>
          <h2
            id="salas-heading"
            className="font-headline-lg text-3xl sm:text-4xl md:text-[42px] text-[#1C1815] leading-tight mb-4"
          >
            A Arquitetura do Cuidado — Nossas 4 Salas Especializadas
          </h2>
          <p className="font-body-md text-[#6E6259] text-base md:text-lg leading-relaxed">
            Projetado para unir acolhimento, privacidade e excelência técnica. O{" "}
            <strong className="text-[#1C1815]">Salão Principal (Sala 01)</strong>{" "}
            recepciona você e dá acesso direto às nossas{" "}
            <strong className="text-[#1C1815]">3 salas privativas especializadas</strong>.
          </p>
        </div>

        {/* Interactive Spatial Architecture Map / Switcher */}
        <div className="bg-[#FAF7F2] border border-[#C6934B]/30 rounded-3xl p-4 sm:p-6 mb-10 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#DFD5C8]">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1C1815] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C6934B]" aria-hidden="true" />
              Mapa Espacial Interativo — Selecione uma Sala para Explorar:
            </span>
            <span className="text-xs text-[#6E6259]">
              Recepção e fluxo central pela <strong>Sala 01 (Salão Principal)</strong>
            </span>
          </div>

          <div
            role="tablist"
            aria-label="As 4 Salas Especializadas do Studio Michele Afrodite"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {STUDIO_ROOMS.map((room) => {
              const Icon = ROOM_ICONS[room.id] || Sparkles;
              const isSelected = activeRoomId === room.id;
              return (
                <button
                  key={room.id}
                  type="button"
                  role="tab"
                  id={`tab-${room.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${room.id}`}
                  onClick={() => setActiveRoomId(room.id)}
                  className={`relative text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 ${
                    isSelected
                      ? "bg-[#12100E] text-[#FAF7F2] border-[#C6934B] shadow-lg scale-[1.01]"
                      : "bg-white hover:bg-[#F3ECE3] text-[#1C1815] border-[#DFD5C8]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full ${
                        isSelected
                          ? "bg-[#C6934B] text-[#12100E]"
                          : room.isCentralHub
                          ? "bg-[#A66E4E]/15 text-[#A66E4E]"
                          : "bg-[#F3ECE3] text-[#6E6259]"
                      }`}
                    >
                      {room.number}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isSelected
                          ? "bg-white/10 text-[#C6934B]"
                          : "bg-[#F3ECE3] text-[#1C1815]"
                      }`}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>

                  <div>
                    <span className="font-headline-md text-lg font-bold block leading-snug">
                      {room.shortTitle}
                    </span>
                    <span
                      className={`text-[11px] block mt-0.5 ${
                        isSelected ? "text-[#C6934B]" : "text-[#6E6259]"
                      }`}
                    >
                      {room.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Room Detailed Bento Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoom.id}
            id={`panel-${activeRoom.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeRoom.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left / Main Bento Info Card (7 cols) */}
            <div className="lg:col-span-7 bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#C6934B]/30 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span className="bg-[#12100E] text-[#C6934B] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                    {activeRoom.number}
                  </span>
                  <span className="bg-[#F3ECE3] text-[#A66E4E] border border-[#A66E4E]/30 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                    {activeRoom.badge}
                  </span>
                </div>

                <h3 className="font-headline-lg text-2xl sm:text-3xl text-[#1C1815] mb-3 leading-snug">
                  {activeRoom.fullTitle}
                </h3>

                <p className="font-body-md text-[#6E6259] text-sm sm:text-base leading-relaxed mb-8">
                  {activeRoom.description}
                </p>

                {/* Specialties Grid */}
                <div className="space-y-4">
                  {activeRoom.specialties.map((spec, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-5 border border-[#DFD5C8] hover:border-[#C6934B]/60 transition-colors"
                    >
                      <h4 className="font-headline-md text-lg sm:text-xl text-[#1C1815] font-bold mb-1.5">
                        {spec.category}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6E6259] leading-relaxed mb-3">
                        {spec.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {spec.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-[#1C1815]"
                          >
                            <CheckCircle2
                              className="w-4 h-4 text-[#C6934B] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contextual CTA + Instagram Link */}
              <div className="mt-8 pt-6 border-t border-[#DFD5C8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => handleRoomCTA(activeRoom)}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#12100E] hover:bg-[#C6934B] text-[#FAF7F2] hover:text-[#12100E] font-label-sm text-xs uppercase tracking-widest font-bold px-6 py-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group min-h-[50px]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#C6934B] group-hover:text-[#12100E]" />
                  <span>{activeRoom.ctaLabel}</span>
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </button>

                <a
                  href={activeRoom.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#1C1815] hover:text-[#C6934B] bg-[#F3ECE3] px-4 py-3 rounded-xl border border-[#C6934B]/25 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#C6934B]" />
                  <span>Ver no {activeRoom.instagramHandle}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Bento Gallery & Quick Procedure Selector (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Visual Mosaic */}
              <div className="grid grid-cols-2 gap-3.5 flex-1 min-h-[300px]">
                {activeRoom.galleryImages.map((img, idx) => (
                  <FullscreenMediaWrapper
                    key={idx}
                    src={img.src}
                    type="image"
                    className={`relative rounded-2xl overflow-hidden border border-[#C6934B]/25 shadow-md group block ${
                      activeRoom.galleryImages.length === 3 && idx === 0
                        ? "col-span-2 min-h-[210px]"
                        : activeRoom.galleryImages.length === 2
                        ? "col-span-2 min-h-[180px]"
                        : "min-h-[160px]"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={`${activeRoom.shortTitle} - ${img.label}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12100E]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#FAF7F2] tracking-wide">
                        {img.label}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-[#C6934B] bg-[#12100E]/80 px-2.5 py-0.5 rounded-full">
                        Ampliar
                      </span>
                    </div>
                  </FullscreenMediaWrapper>
                ))}
              </div>

              {/* Quick Direct Procedure Trigger Card */}
              <div className="bg-[#12100E] text-[#FAF7F2] rounded-3xl p-6 border border-[#C6934B]/30 shadow-lg">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C6934B] block mb-1.5">
                  Agendamento Rápido • {activeRoom.number}
                </span>
                <h4 className="font-headline-md text-xl text-[#FAF7F2] mb-3">
                  Procedimentos mais procurados nesta sala:
                </h4>
                <div className="space-y-2">
                  {activeRoom.procedures.map((proc) => (
                    <button
                      key={proc.id}
                      type="button"
                      onClick={() => {
                        trackCTAClick(`QuickProc_${proc.id}`);
                        openBookingModal({
                          initialRoomId: activeRoom.id,
                          initialProcedureId: proc.name,
                        });
                      }}
                      className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-[#C6934B] text-[#FAF7F2] hover:text-[#12100E] border border-white/10 hover:border-[#C6934B] transition-all flex items-center justify-between gap-2 group cursor-pointer"
                    >
                      <span className="text-xs font-medium leading-snug">
                        {proc.name}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C6934B] group-hover:text-[#12100E] shrink-0 flex items-center gap-1">
                        Selecionar
                        <ArrowRight className="w-3 h-3" aria-hidden="true" />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
