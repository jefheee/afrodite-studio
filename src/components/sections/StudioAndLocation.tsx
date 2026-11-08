"use client";

import { useEffect, useState } from "react";
import {
  MapPin,
  Clock,
  Navigation,
  Phone,
  Building2,
  ShieldCheck,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { STUDIO_INFO } from "@/data/studioData";
import { useBooking } from "@/context/BookingContext";
import { ScrollRevealWrapper } from "@/components/ui/ScrollRevealWrapper";
import { trackCTAClick } from "@/utils/analytics";

interface OpenStatus {
  isOpen: boolean;
  label: string;
  detail: string;
}

function getSaoPauloOpenStatus(): OpenStatus {
  try {
    const now = new Date();
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Sao_Paulo",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    }).formatToParts(now);

    const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
    const hour = parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10);
    const minute = parseInt(parts.find((p) => p.type === "minute")?.value ?? "0", 10);

    const openDays = ["Tue", "Wed", "Thu", "Fri", "Sat"];
    const isWorkingDay = openDays.includes(weekday);
    const totalMinutes = hour * 60 + minute;
    const opensAt = 9 * 60; // 09:00
    const closesAt = 20 * 60; // 20:00

    if (isWorkingDay && totalMinutes >= opensAt && totalMinutes < closesAt) {
      return {
        isOpen: true,
        label: "Aberto Agora no Pagani",
        detail: "Atendimento hoje até às 20h00",
      };
    }

    return {
      isOpen: false,
      label: "Fechado no Momento",
      detail: "Atendimento de Terça a Sábado, das 09h às 20h",
    };
  } catch {
    return {
      isOpen: true,
      label: "Terça a Sábado • 09h às 20h",
      detail: "Agendamentos via WhatsApp",
    };
  }
}

export function StudioAndLocation() {
  const [status, setStatus] = useState<OpenStatus>({
    isOpen: true,
    label: "Terça a Sábado • 09h às 20h",
    detail: "Horário de Brasília (America/Sao_Paulo)",
  });
  const { openBookingModal } = useBooking();

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      setStatus(getSaoPauloOpenStatus());
    });
    const interval = setInterval(() => {
      setStatus(getSaoPauloOpenStatus());
    }, 60_000);
    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="localizacao"
      aria-labelledby="localizacao-heading"
      className="py-16 md:py-24 px-5 md:px-[6%] lg:px-[8%] bg-[#F3ECE3]/55 border-b border-[#C6934B]/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollRevealWrapper className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 font-label-sm text-xs text-[#A66E4E] uppercase tracking-[0.2em] font-bold mb-3">
            <MapPin className="w-4 h-4 text-[#C6934B]" aria-hidden="true" />
            Localização Privilegiada • Grande Florianópolis
          </span>
          <h2
            id="localizacao-heading"
            className="font-headline-lg text-3xl sm:text-4xl md:text-[42px] text-[#1C1815] leading-tight mb-4"
          >
            Visite o Studio Michele Afrodite no Pagani
          </h2>
          <p className="font-body-md text-[#6E6259] text-base md:text-lg leading-relaxed">
            Localizado no edifício comercial{" "}
            <strong className="text-[#1C1815]">Pme Offices Tower</strong>, ao
            lado do Shopping ViaCatarina e da Prefeitura de Palhoça, com
            segurança, acessibilidade e conforto para sua experiência nas nossas
            4 salas.
          </p>
        </ScrollRevealWrapper>

        {/* Main Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address Details, Live Status Badge & Direct Route Buttons (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#C6934B]/30 shadow-lg">
            <div className="space-y-6">
              {/* Real-time Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#12100E] text-[#FAF7F2] border border-[#C6934B]/40">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    status.isOpen
                      ? "bg-emerald-400 animate-pulse"
                      : "bg-[#C6934B]"
                  }`}
                  aria-hidden="true"
                />
                <span className="text-xs font-bold uppercase tracking-wider text-[#C6934B]">
                  {status.label}
                </span>
              </div>

              {/* Address Block */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#F3ECE3] border border-[#C6934B]/30 flex items-center justify-center shrink-0 text-[#1C1815]">
                  <Building2 className="w-5 h-5 text-[#C6934B]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-headline-md text-xl text-[#1C1815] font-bold">
                    Endereço Oficial
                  </h3>
                  <address className="not-italic text-sm text-[#6E6259] leading-relaxed mt-1">
                    <strong className="text-[#1C1815] block">
                      {STUDIO_INFO.building}
                    </strong>
                    {STUDIO_INFO.streetAddress}
                    <br />
                    Bairro {STUDIO_INFO.neighborhood}, {STUDIO_INFO.city} -{" "}
                    {STUDIO_INFO.state}
                    <br />
                    CEP: {STUDIO_INFO.postalCode} ({STUDIO_INFO.region})
                  </address>
                </div>
              </div>

              {/* Opening Hours Block */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#F3ECE3] border border-[#C6934B]/30 flex items-center justify-center shrink-0 text-[#1C1815]">
                  <Clock className="w-5 h-5 text-[#C6934B]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-headline-md text-xl text-[#1C1815] font-bold">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-sm text-[#1C1815] font-semibold mt-1">
                    {STUDIO_INFO.hoursText}
                  </p>
                  <p className="text-xs text-[#6E6259] mt-0.5">
                    {STUDIO_INFO.closedText} • {status.detail}
                  </p>
                </div>
              </div>

              {/* Direct Phone / WhatsApp Block */}
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#F3ECE3] border border-[#C6934B]/30 flex items-center justify-center shrink-0 text-[#1C1815]">
                  <Phone className="w-5 h-5 text-[#C6934B]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-headline-md text-xl text-[#1C1815] font-bold">
                    Central de Agendamento
                  </h3>
                  <p className="text-sm text-[#6E6259] mt-1">
                    WhatsApp Oficial:{" "}
                    <a
                      href={STUDIO_INFO.whatsappBaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#1C1815] hover:text-[#C6934B] underline underline-offset-4"
                    >
                      {STUDIO_INFO.whatsappFullDisplay}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* GPS & Booking Action Buttons */}
            <div className="pt-6 border-t border-[#DFD5C8] space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={STUDIO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCTAClick("Location_AbrirGoogleMaps")}
                  className="inline-flex items-center justify-center gap-2 bg-[#12100E] hover:bg-[#C6934B] text-[#FAF7F2] hover:text-[#12100E] font-label-sm text-xs uppercase tracking-widest font-bold py-3.5 px-4 rounded-xl transition-all"
                >
                  <MapPin className="w-4 h-4 text-[#C6934B] group-hover:text-[#12100E]" aria-hidden="true" />
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>

                <a
                  href={STUDIO_INFO.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCTAClick("Location_AbrirWaze")}
                  className="inline-flex items-center justify-center gap-2 bg-[#F3ECE3] hover:bg-[#DFD5C8] text-[#1C1815] border border-[#C6934B]/40 font-label-sm text-xs uppercase tracking-widest font-bold py-3.5 px-4 rounded-xl transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#A66E4E]" aria-hidden="true" />
                  <span>Abrir no Waze</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  trackCTAClick("Location_AgendarVisitar");
                  openBookingModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C6934B] hover:bg-[#b5833d] text-[#12100E] font-label-sm text-xs uppercase tracking-widest font-bold py-4 px-5 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                Agendar Horário no Studio Michele Afrodite
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Map (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex-1 min-h-[380px] md:min-h-[460px] rounded-3xl overflow-hidden border border-[#C6934B]/35 shadow-xl bg-[#12100E] relative">
              <iframe
                src={STUDIO_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de localização do Studio Michele Afrodite no Pme Offices Tower, Pagani, Palhoça - SC"
                className="w-full h-full"
              />
            </div>

            {/* Comfort & Security Highlights Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  title: "Pme Offices Tower",
                  desc: "Edifício comercial moderno com recepção e elevadores.",
                },
                {
                  title: "Acesso Central Sala 01",
                  desc: "O Salão Principal recepciona e conecta às salas privativas.",
                },
                {
                  title: "Coração do Pagani",
                  desc: "Fácil acesso pela BR-101 para toda a Grande Florianópolis.",
                },
              ].map((highlight, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#C6934B]/25 flex items-start gap-2.5"
                >
                  <ShieldCheck
                    className="w-4 h-4 text-[#C6934B] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="text-xs font-bold text-[#1C1815] block">
                      {highlight.title}
                    </span>
                    <span className="text-[11px] text-[#6E6259] block mt-0.5">
                      {highlight.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
