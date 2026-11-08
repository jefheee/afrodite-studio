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
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { STUDIO_ROOMS, type StudioRoom } from "@/data/studioData";
import { useBooking } from "@/context/BookingContext";
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

  const handleSelectProcedure = (roomId: string, procedureName: string) => {
    trackCTAClick(`Salas_${roomId}_Proc_${procedureName}`);
    openBookingModal({
      initialRoomId: roomId,
      initialProcedureId: procedureName,
    });
  };

  return (
    <section
      id="salas"
      aria-labelledby="salas-heading"
      className="py-16 md:py-24 px-5 md:px-[6%] lg:px-[8%] bg-[#F3ECE3] border-b border-[#E6DFD5]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 text-xs text-[#B84A39] uppercase tracking-wider font-semibold mb-3">
            <DoorOpen className="w-4 h-4 text-[#B84A39]" aria-hidden="true" />
            Estrutura Arquitetural • Pme Offices Tower
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

        {/* Spatial Switcher Tabs */}
        <div className="bg-[#FAF7F2] border border-[#E6DFD5] rounded-3xl p-4 sm:p-6 mb-10 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#E6DFD5]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1C1815] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B84A39]" aria-hidden="true" />
              Selecione uma sala para explorar detalhes e procedimentos:
            </span>
            <span className="text-xs text-[#6E6259]">
              Recepção central pela <strong>Sala 01 (Salão Principal)</strong>
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
                  className={`text-left p-4 rounded-2xl border transition-colors cursor-pointer flex flex-col justify-between gap-3 ${
                    isSelected
                      ? "bg-[#1C1815] text-[#FAF7F2] border-[#26221E] shadow-sm"
                      : "bg-white hover:bg-[#F3ECE3] text-[#1C1815] border-[#E6DFD5]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap ${
                        isSelected
                          ? "bg-[#C6934B] text-[#1C1815]"
                          : "bg-[#F3ECE3] text-[#6E6259]"
                      }`}
                    >
                      {room.number}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "bg-white/10 text-[#C6934B]"
                          : "bg-[#F3ECE3] text-[#1C1815]"
                      }`}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>

                  <div>
                    <span className="font-headline-md text-base sm:text-lg font-semibold block leading-snug">
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

        {/* Active Room Detailed Flat Panel (2-Column Architecture) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoom.id}
            id={`panel-${activeRoom.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeRoom.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Coluna 1 (7 cols): Editorial Typography, Room Specs & Specialties */}
            <div className="lg:col-span-7 bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E6DFD5] shadow-xs flex flex-col justify-between">
              <div>
                {/* Editorial Big Number & Badges */}
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-[#E6DFD5]">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="bg-[#1C1815] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full whitespace-nowrap">
                      {activeRoom.number}
                    </span>
                    <span className="bg-[#F3ECE3] text-[#B84A39] border border-[#E6DFD5] text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full whitespace-nowrap">
                      {activeRoom.badge}
                    </span>
                  </div>

                  <span className="font-headline-xl text-3xl sm:text-4xl font-bold text-[#E6DFD5]">
                    {activeRoom.number.replace("SALA ", "0")}
                  </span>
                </div>

                <h3 className="font-headline-lg text-2xl sm:text-3xl text-[#1C1815] mb-3 leading-snug">
                  {activeRoom.fullTitle}
                </h3>

                <p className="font-body-md text-[#6E6259] text-sm sm:text-base leading-relaxed mb-6">
                  {activeRoom.description}
                </p>

                {/* Architectural Specs */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E6DFD5] mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B84A39] block mb-2">
                    Infraestrutura &amp; Padrão da Sala:
                  </span>
                  <ul className="space-y-1.5">
                    {activeRoom.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-xs text-[#1C1815]">
                        <ShieldCheck className="w-4 h-4 text-[#C6934B] shrink-0" aria-hidden="true" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specialties Grid */}
                <div className="space-y-4">
                  {activeRoom.specialties.map((spec, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-5 border border-[#E6DFD5]"
                    >
                      <h4 className="font-headline-md text-base sm:text-lg text-[#1C1815] font-semibold mb-1">
                        {spec.category}
                      </h4>
                      <p className="text-xs text-[#6E6259] leading-relaxed mb-3">
                        {spec.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {spec.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-[#1C1815]"
                          >
                            <CheckCircle2
                              className="w-3.5 h-3.5 text-[#B84A39] shrink-0 mt-0.5"
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

              {/* Room Bottom CTAs */}
              <div className="mt-8 pt-6 border-t border-[#E6DFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => handleRoomCTA(activeRoom)}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#1C1815] hover:bg-[#2A2420] text-[#FAF7F2] border border-[#26221E] text-xs uppercase tracking-wider font-semibold px-6 py-4 rounded-xl transition-colors cursor-pointer whitespace-nowrap min-h-[48px]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#C6934B]" />
                  <span>{activeRoom.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <a
                  href={activeRoom.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#1C1815] hover:text-[#B84A39] bg-[#F3ECE3] px-4 py-3 rounded-xl border border-[#E6DFD5] transition-colors whitespace-nowrap"
                >
                  <InstagramIcon className="w-4 h-4 text-[#B84A39]" />
                  <span>Ver portfólio no {activeRoom.instagramHandle}</span>
                </a>
              </div>
            </div>

            {/* Coluna 2 (5 cols): Procedimentos em Grid Editorial Sólido */}
            <div className="lg:col-span-5 bg-[#1C1815] text-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#26221E] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-[#26221E]">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C6934B] block">
                      Catálogo de Atendimento
                    </span>
                    <h4 className="font-headline-md text-xl sm:text-2xl text-[#FAF7F2] font-semibold">
                      Procedimentos da {activeRoom.number}
                    </h4>
                  </div>
                  <span className="text-xs text-[#FAF7F2]/60 whitespace-nowrap">
                    {activeRoom.procedures.length} procedimentos
                  </span>
                </div>

                <p className="text-xs text-[#FAF7F2]/75 mb-4 leading-relaxed">
                  Selecione um procedimento para abrir o atendimento direto com
                  especificações personalizadas no WhatsApp:
                </p>

                {/* Procedures List */}
                <div className="space-y-2.5">
                  {activeRoom.procedures.map((proc) => (
                    <button
                      key={proc.id}
                      type="button"
                      onClick={() => handleSelectProcedure(activeRoom.id, proc.name)}
                      className="w-full text-left p-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#FAF7F2] border border-[#26221E] hover:border-[#332D27] transition-colors flex items-center justify-between gap-3 cursor-pointer group"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <span className="text-xs font-semibold text-[#FAF7F2] group-hover:text-[#C6934B] transition-colors">
                            {proc.name}
                          </span>
                          {proc.highlight && (
                            <span className="text-[9px] font-bold uppercase tracking-wider bg-[#C6934B]/20 text-[#C6934B] px-2 py-0.5 rounded-full whitespace-nowrap">
                              {proc.highlight}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-[#FAF7F2]/60 block">
                          Categoria: {proc.category}
                        </span>
                      </div>

                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#C6934B] group-hover:text-[#1C1815] transition-colors">
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Informative Guidance */}
              <div className="mt-8 pt-6 border-t border-[#26221E] space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-[#FAF7F2]/70">
                  <Calendar className="w-4 h-4 text-[#C6934B] shrink-0" />
                  <span>Atendimento com horário marcado de Terça a Sábado</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleRoomCTA(activeRoom)}
                  className="w-full py-3.5 rounded-xl bg-[#FAF7F2] hover:bg-[#F3ECE3] text-[#1C1815] text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  Agendar Consulta para Esta Sala
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
