"use client";

import { Sparkles, CheckCircle2, CalendarCheck } from "lucide-react";
import { BookingBuilderCore } from "@/components/booking/BookingConcierge";
import { STUDIO_ROOMS } from "@/data/studioData";
import { useBooking } from "@/context/BookingContext";

export function Services() {
  const { selectedRoomId, selectedProcedures } = useBooking();

  return (
    <section
      id="servicos"
      aria-labelledby="servicos-heading"
      className="py-16 md:py-24 px-5 md:px-[6%] lg:px-[8%] bg-[#FAF7F2] border-b border-[#C6934B]/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 font-label-sm text-xs text-[#A66E4E] uppercase tracking-[0.2em] font-bold mb-3">
            <CalendarCheck className="w-4 h-4 text-[#C6934B]" aria-hidden="true" />
            Catálogo Completo &amp; Motor de Agendamento
          </span>
          <h2
            id="servicos-heading"
            className="font-headline-lg text-3xl sm:text-4xl md:text-[42px] text-[#1C1815] leading-tight mb-4"
          >
            Monte Seu Atendimento Personalizado
          </h2>
          <p className="font-body-md text-[#6E6259] text-base md:text-lg leading-relaxed">
            Escolha a sala, selecione um ou mais procedimentos (inclusive combinando áreas diferentes no mesmo dia) e envie sua preferência diretamente para nossa recepção no WhatsApp.
          </p>
        </div>

        {/* Quick Overview Grid of All 4 Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {STUDIO_ROOMS.map((room) => (
            <div
              key={room.id}
              className="bg-[#F3ECE3]/75 rounded-2xl p-5 border border-[#C6934B]/25 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#A66E4E]">
                    {room.number}
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-[#C6934B]" aria-hidden="true" />
                </div>
                <h3 className="font-headline-md text-lg text-[#1C1815] font-bold mb-2">
                  {room.shortTitle}
                </h3>
                <ul className="space-y-1.5 mb-3">
                  {room.procedures.slice(0, 4).map((p) => (
                    <li
                      key={p.id}
                      className="flex items-start gap-1.5 text-xs text-[#6E6259]"
                    >
                      <CheckCircle2
                        className="w-3.5 h-3.5 text-[#C6934B] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="line-clamp-1">{p.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <span className="text-[11px] font-semibold text-[#1C1815] pt-2 border-t border-[#DFD5C8]">
                {room.procedures.length} especialidades disponíveis
              </span>
            </div>
          ))}
        </div>

        {/* Inline 3-Step Smart Booking Concierge */}
        <div id="agendamento" className="max-w-4xl mx-auto">
          <BookingBuilderCore
            initialRoomId={selectedRoomId}
            initialProcedures={selectedProcedures}
            isModal={false}
          />
        </div>
      </div>
    </section>
  );
}
