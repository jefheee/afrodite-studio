"use client";

import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Clock,
  Phone,
  Sparkles,
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { STUDIO_INFO, STUDIO_ROOMS } from "@/data/studioData";
import { useBooking } from "@/context/BookingContext";
import { trackCTAClick } from "@/utils/analytics";

export function Footer() {
  const { openBookingModal } = useBooking();

  return (
    <footer className="w-full bg-[#12100E] text-[#FAF7F2]/85 border-t border-[#C6934B]/30">
      {/* Top Conversion Banner */}
      <div className="border-b border-white/10 py-10 px-5 md:px-[6%] lg:px-[8%] bg-gradient-to-r from-[#12100E] via-[#1C1815] to-[#12100E]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C6934B] mb-1">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              4 Salas Especializadas no Pagani, Palhoça
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#FAF7F2]">
              Pronta para viver a experiência do Studio Michele Afrodite?
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto">
            <button
              type="button"
              onClick={() => {
                trackCTAClick("Footer_BannerAgendar");
                openBookingModal();
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#C6934B] hover:bg-[#d5a35a] text-[#12100E] font-label-sm text-xs uppercase tracking-widest font-bold px-7 py-4 rounded-xl transition-all shadow-lg cursor-pointer"
            >
              <span>Agendar Atendimento Agora</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <a
              href={STUDIO_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick("Footer_WhatsAppDireto")}
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/15 text-[#FAF7F2] border border-[#C6934B]/40 font-label-sm text-xs uppercase tracking-widest font-semibold px-7 py-4 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4 text-[#C6934B]" aria-hidden="true" />
              <span>WhatsApp {STUDIO_INFO.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="py-14 px-5 md:px-[6%] lg:px-[8%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#C6934B]/15 border border-[#C6934B] flex items-center justify-center">
                <span className="font-headline-md text-xl text-[#C6934B] font-bold">
                  MA
                </span>
              </div>
              <div>
                <span className="font-headline-md text-xl text-[#FAF7F2] font-bold block leading-none">
                  Studio Michele Afrodite
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#C6934B] font-semibold mt-1 block">
                  Estética • Saúde • Arte Paramédica
                </span>
              </div>
            </div>

            <p className="text-sm text-[#FAF7F2]/65 leading-relaxed">
              Um estúdio multidisciplinar dividido em 4 Salas Especializadas no
              edifício Pme Offices Tower (Pagani, Palhoça - SC). Do Salão
              Principal de cabelos, unhas e sobrancelhas às salas privativas de
              Tatuagem Paramédica &amp; Fine Line, Tricologia e Massoterapia.
            </p>

            {/* Social Links */}
            <div className="space-y-2 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C6934B] block">
                Canais Digitais Oficiais
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href={STUDIO_INFO.instagramParamedical.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#FAF7F2]/80 hover:text-[#C6934B] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#C6934B]" />
                  <span>
                    <strong>{STUDIO_INFO.instagramParamedical.handle}</strong> (Paramédica &amp; Fine Line)
                  </span>
                </a>
                <a
                  href={STUDIO_INFO.instagramIntegrated.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#FAF7F2]/80 hover:text-[#C6934B] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#A66E4E]" />
                  <span>
                    <strong>{STUDIO_INFO.instagramIntegrated.handle}</strong> (Salão, Tricologia &amp; Masso)
                  </span>
                </a>
                <a
                  href={STUDIO_INFO.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#FAF7F2]/80 hover:text-[#C6934B] transition-colors"
                >
                  <FacebookIcon className="w-4 h-4 text-[#C6934B]" />
                  <span>Facebook: {STUDIO_INFO.facebook.handle}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: As 4 Salas Especializadas (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-label-sm text-xs uppercase tracking-widest text-[#C6934B] font-bold">
              As 4 Salas Especializadas
            </h3>
            <ul className="space-y-2.5">
              {STUDIO_ROOMS.map((room) => (
                <li key={room.id}>
                  <button
                    type="button"
                    onClick={() => openBookingModal({ initialRoomId: room.id })}
                    className="text-left text-xs sm:text-sm text-[#FAF7F2]/70 hover:text-[#C6934B] transition-colors cursor-pointer"
                  >
                    <strong className="text-[#FAF7F2]">{room.number}:</strong>{" "}
                    {room.shortTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navegação Rápida & Legal (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-label-sm text-xs uppercase tracking-widest text-[#C6934B] font-bold">
              Navegação
            </h3>
            <nav aria-label="Links do rodapé" className="flex flex-col gap-2.5 text-sm">
              <Link href="#inicio" className="text-[#FAF7F2]/70 hover:text-[#C6934B] transition-colors">
                Início
              </Link>
              <Link href="#salas" className="text-[#FAF7F2]/70 hover:text-[#C6934B] transition-colors">
                As 4 Salas
              </Link>
              <Link href="#paramedica" className="text-[#FAF7F2]/70 hover:text-[#C6934B] transition-colors">
                Tatuagem Paramédica
              </Link>
              <Link href="#servicos" className="text-[#FAF7F2]/70 hover:text-[#C6934B] transition-colors">
                Agendamento
              </Link>
              <Link href="#avaliacoes" className="text-[#FAF7F2]/70 hover:text-[#C6934B] transition-colors">
                Avaliações (5.0 ★)
              </Link>
              <Link href="#faq" className="text-[#FAF7F2]/70 hover:text-[#C6934B] transition-colors">
                Perguntas Frequentes
              </Link>
              <Link href="/termos-e-condicoes" className="text-xs text-[#FAF7F2]/50 hover:text-[#FAF7F2] transition-colors pt-2">
                Termos e Condições
              </Link>
              <Link href="/politica-de-privacidade" className="text-xs text-[#FAF7F2]/50 hover:text-[#FAF7F2] transition-colors">
                Política de Privacidade
              </Link>
            </nav>
          </div>

          {/* Col 4: Endereço & Horário (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-label-sm text-xs uppercase tracking-widest text-[#C6934B] font-bold">
              Localização &amp; Contato
            </h3>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#C6934B] mt-1 shrink-0" aria-hidden="true" />
              <div className="text-xs sm:text-sm text-[#FAF7F2]/75 leading-relaxed">
                <strong className="text-[#FAF7F2] block">
                  {STUDIO_INFO.building}
                </strong>
                {STUDIO_INFO.streetAddress}
                <br />
                Bairro {STUDIO_INFO.neighborhood}, {STUDIO_INFO.city} -{" "}
                {STUDIO_INFO.state}
                <br />
                CEP {STUDIO_INFO.postalCode}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#C6934B] mt-1 shrink-0" aria-hidden="true" />
              <div className="text-xs sm:text-sm text-[#FAF7F2]/75">
                <strong className="text-[#FAF7F2] block">
                  Horário de Atendimento
                </strong>
                {STUDIO_INFO.hoursText}
                <br />
                <span className="text-xs text-[#FAF7F2]/50">
                  ({STUDIO_INFO.closedText})
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#C6934B] mt-1 shrink-0" aria-hidden="true" />
              <div className="text-xs sm:text-sm text-[#FAF7F2]/75">
                <strong className="text-[#FAF7F2] block">WhatsApp Oficial</strong>
                <a
                  href={STUDIO_INFO.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C6934B] hover:underline font-semibold"
                >
                  {STUDIO_INFO.whatsappFullDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 py-6 px-5 md:px-[6%] lg:px-[8%]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p className="text-xs text-[#FAF7F2]/50">
            © {new Date().getFullYear()} <strong>Studio Michele Afrodite</strong>.
            Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#FAF7F2]/40">
            Pme Offices Tower • Pagani, Palhoça — Santa Catarina, Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
