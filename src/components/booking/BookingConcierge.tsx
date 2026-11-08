"use client";

import React, { useState, useEffect, useRef, useId } from "react";
import {
  Check,
  Sparkles,
  Calendar,
  Clock,
  User,
  ArrowRight,
  ArrowLeft,
  X,
  Scissors,
  HeartHandshake,
  Microscope,
  Flower2,
  CheckCircle2,
} from "lucide-react";
import {
  STUDIO_ROOMS,
  BOOKING_DAYS,
  BOOKING_PERIODS,
  buildWhatsAppBookingUrl,
} from "@/data/studioData";
import { useBooking } from "@/context/BookingContext";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { trackCTAClick } from "@/utils/analytics";

const ROOM_ICONS: Record<string, React.ElementType> = {
  "sala-01": Scissors,
  "sala-02": HeartHandshake,
  "sala-03": Microscope,
  "sala-04": Flower2,
};

interface BookingBuilderCoreProps {
  initialRoomId?: string;
  initialProcedures?: string[];
  isModal?: boolean;
  onClose?: () => void;
}

export function BookingBuilderCore({
  initialRoomId = "sala-01",
  initialProcedures = [],
  isModal = false,
  onClose,
}: BookingBuilderCoreProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedRoomIds, setSelectedRoomIds] = useState<string[]>([initialRoomId]);
  const [activeRoomFilter, setActiveRoomFilter] = useState<string>(initialRoomId);
  const [selectedProcedures, setSelectedProcedures] = useState<string[]>(initialProcedures);
  const [clientName, setClientName] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<string>(BOOKING_DAYS[0]);
  const [selectedPeriod, setSelectedPeriod] = useState<string>(BOOKING_PERIODS[1].label);

  const nameInputId = useId();
  const daySelectId = useId();

  const handleSelectRoom = (roomId: string) => {
    setActiveRoomFilter(roomId);
    setSelectedRoomIds((prev) => {
      if (prev.includes(roomId)) {
        return prev;
      }
      return [...prev, roomId];
    });
  };

  const toggleRoomSelection = (roomId: string) => {
    setActiveRoomFilter(roomId);
    setSelectedRoomIds((prev) => {
      if (prev.includes(roomId) && prev.length > 1) {
        return prev.filter((id) => id !== roomId);
      }
      if (!prev.includes(roomId)) {
        return [...prev, roomId];
      }
      return prev;
    });
  };

  const toggleProcedure = (procName: string, roomId: string) => {
    setSelectedProcedures((prev) =>
      prev.includes(procName)
        ? prev.filter((item) => item !== procName)
        : [...prev, procName]
    );
    if (!selectedRoomIds.includes(roomId)) {
      setSelectedRoomIds((prev) => [...prev, roomId]);
    }
  };

  const selectedRoomsObjects = STUDIO_ROOMS.filter((r) =>
    selectedRoomIds.includes(r.id)
  );

  const combinedRoomLabel =
    selectedRoomsObjects.length > 0
      ? selectedRoomsObjects.map((r) => r.bookingLabel).join(" + ")
      : STUDIO_ROOMS[0].bookingLabel;

  const currentRoomObj =
    STUDIO_ROOMS.find((r) => r.id === activeRoomFilter) ?? STUDIO_ROOMS[0];

  const whatsappHref = buildWhatsAppBookingUrl({
    name: clientName,
    roomLabel: combinedRoomLabel,
    procedures: selectedProcedures,
    day: selectedDay,
    period: selectedPeriod,
  });

  const handleDispatchWhatsApp = () => {
    trackCTAClick(
      isModal ? "ModalConcierge_DisparoWhatsApp" : "InlineConcierge_DisparoWhatsApp"
    );
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
    if (onClose) onClose();
  };

  return (
    <div className="w-full bg-[#FAF7F2] text-[#1C1815] rounded-3xl border border-[#C6934B]/25 shadow-2xl overflow-hidden">
      {/* Top Progress Header */}
      <div className="bg-[#12100E] text-[#FAF7F2] px-6 py-5 md:px-8 md:py-6 border-b border-[#C6934B]/20">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-[#C6934B] font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              Smart Booking Concierge • Studio Michele Afrodite
            </span>
            <h3 className="font-headline-md text-xl md:text-2xl text-[#FAF7F2]">
              Agendamento Personalizado em 3 Passos
            </h3>
          </div>
          {isModal && onClose ? (
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar janela de agendamento"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          ) : null}
        </div>

        {/* Stepper Bar */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 mt-5 pt-4 border-t border-white/10">
          {[
            { num: 1, title: "1. Sala / Área" },
            { num: 2, title: "2. Procedimento(s)" },
            { num: 3, title: "3. Seu Horário" },
          ].map((s) => {
            const isActive = step === s.num;
            const isDone = step > s.num;
            return (
              <button
                key={s.num}
                type="button"
                onClick={() => setStep(s.num as 1 | 2 | 3)}
                className={`flex items-center gap-2.5 text-left py-2 px-3 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#C6934B] text-[#12100E] font-semibold shadow-sm"
                    : isDone
                    ? "bg-white/10 text-[#C6934B]"
                    : "bg-white/5 text-white/50 hover:bg-white/10"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold shrink-0 ${
                    isActive
                      ? "bg-[#12100E] text-[#C6934B]"
                      : isDone
                      ? "bg-[#C6934B]/20 text-[#C6934B]"
                      : "bg-white/10 text-white/60"
                  }`}
                >
                  {isDone ? <Check className="w-3.5 h-3.5" aria-hidden="true" /> : s.num}
                </span>
                <span className="text-xs md:text-sm whitespace-nowrap">{s.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="p-6 md:p-8">
        {step === 1 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-headline-md text-xl md:text-2xl text-[#1C1815]">
                  Passo 1: Escolha a Sala / Área de Atendimento
                </h4>
                <p className="text-sm text-[#6E6259] mt-1">
                  Selecione a sala desejada (você também pode combinar procedimentos de mais de uma sala).
                </p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A66E4E] bg-[#F3ECE3] px-3 py-1.5 rounded-full self-start sm:self-auto">
                {selectedRoomIds.length} sala(s) ativa(s)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {STUDIO_ROOMS.map((room) => {
                const Icon = ROOM_ICONS[room.id] || Sparkles;
                const isSelected = selectedRoomIds.includes(room.id);
                return (
                  <div
                    key={room.id}
                    onClick={() => toggleRoomSelection(room.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleRoomSelection(room.id);
                      }
                    }}
                    aria-pressed={isSelected}
                    className={`p-4 md:p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                      isSelected
                        ? "bg-[#F3ECE3] border-[#C6934B] shadow-md ring-1 ring-[#C6934B]"
                        : "bg-white border-[#DFD5C8] hover:border-[#C6934B]/60"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                            isSelected
                              ? "bg-[#12100E] text-[#C6934B]"
                              : "bg-[#F3ECE3] text-[#6E6259]"
                          }`}
                        >
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#A66E4E] block">
                            {room.number} • {room.badge}
                          </span>
                          <h5 className="font-headline-md text-lg text-[#1C1815] leading-snug">
                            {room.bookingLabel}
                          </h5>
                        </div>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-1 ${
                          isSelected
                            ? "bg-[#C6934B] border-[#C6934B] text-[#12100E]"
                            : "border-[#6E6259]/40"
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />}
                      </div>
                    </div>
                    <p className="text-xs text-[#6E6259] leading-relaxed">
                      {room.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C6934B] hover:bg-[#b5833d] text-[#12100E] font-label-sm text-xs md:text-sm uppercase tracking-widest font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer min-h-[48px]"
              >
                Avançar para Procedimentos
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-headline-md text-xl md:text-2xl text-[#1C1815]">
                  Passo 2: Escolha o(s) Procedimento(s)
                </h4>
                <p className="text-sm text-[#6E6259] mt-1">
                  Marque um ou mais procedimentos que deseja realizar ou orçar.
                </p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#12100E] bg-[#C6934B]/25 px-3 py-1.5 rounded-full self-start sm:self-auto">
                {selectedProcedures.length} selecionado(s)
              </span>
            </div>

            {/* Room Filter Pills */}
            <div className="flex flex-wrap gap-2 pb-2 border-b border-[#DFD5C8]">
              {STUDIO_ROOMS.map((room) => {
                const isActive = activeRoomFilter === room.id;
                return (
                  <button
                    key={room.id}
                    type="button"
                    onClick={() => handleSelectRoom(room.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#12100E] text-[#C6934B] shadow-sm"
                        : "bg-[#F3ECE3] text-[#6E6259] hover:text-[#1C1815]"
                    }`}
                  >
                    {room.number}: {room.shortTitle}
                  </button>
                );
              })}
            </div>

            {/* Checkboxes for current room */}
            <div
              role="group"
              aria-label={`Procedimentos de ${currentRoomObj.shortTitle}`}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {currentRoomObj.procedures.map((proc) => {
                const isChecked = selectedProcedures.includes(proc.name);
                return (
                  <label
                    key={proc.id}
                    htmlFor={`proc-${proc.id}-${isModal ? "modal" : "inline"}`}
                    className={`flex items-start gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all ${
                      isChecked
                        ? "bg-[#F3ECE3] border-[#C6934B] shadow-sm"
                        : "bg-white border-[#DFD5C8] hover:border-[#C6934B]/50"
                    }`}
                  >
                    <input
                      id={`proc-${proc.id}-${isModal ? "modal" : "inline"}`}
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleProcedure(proc.name, currentRoomObj.id)}
                      className="mt-1 w-4 h-4 accent-[#C6934B] rounded cursor-pointer shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#A66E4E]">
                          {proc.category}
                        </span>
                        {proc.highlight && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#C6934B]/20 text-[#1C1815]">
                            {proc.highlight}
                          </span>
                        )}
                      </div>
                      <span className="font-medium text-sm text-[#1C1815] block mt-0.5 leading-snug">
                        {proc.name}
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>

            {/* Selected Summary Pills */}
            {selectedProcedures.length > 0 && (
              <div className="bg-[#F3ECE3]/80 rounded-2xl p-4 border border-[#C6934B]/30">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6E6259] block mb-2">
                  Procedimentos selecionados ({selectedProcedures.length}):
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProcedures.map((proc) => (
                    <span
                      key={proc}
                      className="inline-flex items-center gap-1.5 text-xs bg-white text-[#1C1815] border border-[#C6934B]/40 px-3 py-1 rounded-full font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C6934B]" aria-hidden="true" />
                      {proc}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center justify-center gap-2 border border-[#DFD5C8] bg-white hover:bg-[#F3ECE3] text-[#1C1815] font-label-sm text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-xl transition-colors cursor-pointer min-h-[48px]"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Voltar às Salas
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="inline-flex items-center justify-center gap-2 bg-[#C6934B] hover:bg-[#b5833d] text-[#12100E] font-label-sm text-xs md:text-sm uppercase tracking-widest font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer min-h-[48px]"
              >
                Escolher Dia e Período
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h4 className="font-headline-md text-xl md:text-2xl text-[#1C1815]">
                Passo 3: Seu Nome e Preferência de Horário
              </h4>
              <p className="text-sm text-[#6E6259] mt-1">
                Atendemos de Terça a Sábado, das 09h00 às 20h00, no Pme Offices Tower (Pagani).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name Input */}
              <div>
                <label
                  htmlFor={nameInputId}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1C1815] mb-2"
                >
                  <User className="w-4 h-4 text-[#C6934B]" aria-hidden="true" />
                  Seu Nome Completo ou Como Prefere Ser Chamada
                </label>
                <input
                  id={nameInputId}
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Ex.: Mariana Silva"
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#DFD5C8] text-[#1C1815] placeholder:text-[#6E6259]/60 focus:border-[#C6934B] transition-colors text-sm"
                />
              </div>

              {/* Day Selection */}
              <div>
                <label
                  htmlFor={daySelectId}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1C1815] mb-2"
                >
                  <Calendar className="w-4 h-4 text-[#C6934B]" aria-hidden="true" />
                  Dia de Preferência (Terça a Sábado)
                </label>
                <select
                  id={daySelectId}
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#DFD5C8] text-[#1C1815] focus:border-[#C6934B] transition-colors text-sm cursor-pointer"
                >
                  {BOOKING_DAYS.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Period Selection */}
            <div>
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1C1815] mb-2.5">
                <Clock className="w-4 h-4 text-[#C6934B]" aria-hidden="true" />
                Período de Preferência
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="radiogroup" aria-label="Período de preferência">
                {BOOKING_PERIODS.map((period) => {
                  const isSelected = selectedPeriod === period.label;
                  return (
                    <button
                      key={period.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setSelectedPeriod(period.label)}
                      className={`py-3.5 px-4 rounded-xl border text-xs md:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        isSelected
                          ? "bg-[#12100E] text-[#C6934B] border-[#12100E] shadow-sm"
                          : "bg-white text-[#1C1815] border-[#DFD5C8] hover:border-[#C6934B]"
                      }`}
                    >
                      {isSelected && <Check className="w-4 h-4" aria-hidden="true" />}
                      {period.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message Preview Card */}
            <div className="bg-[#F3ECE3] border border-[#C6934B]/40 rounded-2xl p-4 md:p-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#A66E4E] block mb-1.5">
                Resumo da Solicitação para o WhatsApp Oficial
              </span>
              <p className="text-xs md:text-sm text-[#1C1815] leading-relaxed italic">
                &ldquo;Olá! Vim pelo site oficial do Studio Michele Afrodite. Meu nome é{" "}
                <strong>{clientName.trim() || "[Seu Nome]"}</strong>. Gostaria de agendar/receber informações sobre: • Sala:{" "}
                <strong>{combinedRoomLabel}</strong> • Procedimento(s):{" "}
                <strong>
                  {selectedProcedures.length > 0
                    ? selectedProcedures.join(", ")
                    : "Avaliação / Orientação Personalizada"}
                </strong>{" "}
                • Preferência de horário:{" "}
                <strong>
                  {selectedDay} / {selectedPeriod}
                </strong>
                .&rdquo;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center justify-center gap-2 border border-[#DFD5C8] bg-white hover:bg-[#F3ECE3] text-[#1C1815] font-label-sm text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-xl transition-colors cursor-pointer min-h-[48px]"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Voltar aos Procedimentos
              </button>
              <button
                type="button"
                onClick={handleDispatchWhatsApp}
                className="inline-flex items-center justify-center gap-2.5 bg-[#C6934B] hover:bg-[#b5833d] text-[#12100E] font-label-sm text-xs md:text-sm uppercase tracking-widest font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer min-h-[52px]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Confirmar e Enviar no WhatsApp
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Native <dialog> Modal wrapper connected to BookingContext
 */
export function BookingConciergeModal() {
  const { isOpen, selectedRoomId, selectedProcedures, closeBookingModal } = useBooking();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleNativeClose = () => {
      closeBookingModal();
    };
    dialog.addEventListener("close", handleNativeClose);
    return () => dialog.removeEventListener("close", handleNativeClose);
  }, [closeBookingModal]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      closeBookingModal();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      aria-label="Agendamento Inteligente Studio Michele Afrodite"
      className="w-[95vw] max-w-3xl rounded-3xl p-0 bg-transparent border-0 shadow-2xl m-auto backdrop:bg-black/80"
    >
      {isOpen && (
        <BookingBuilderCore
          key={`${selectedRoomId}-${selectedProcedures.join(",")}`}
          initialRoomId={selectedRoomId}
          initialProcedures={selectedProcedures}
          isModal={true}
          onClose={closeBookingModal}
        />
      )}
    </dialog>
  );
}
