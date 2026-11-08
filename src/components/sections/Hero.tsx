"use client";

import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Star,
  Clock,
  ShieldCheck,
  Building2,
  ChevronRight,
  Scissors,
  HeartHandshake,
  Microscope,
  Flower2,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STUDIO_INFO } from "@/data/studioData";
import { useBooking } from "@/context/BookingContext";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { trackCTAClick } from "@/utils/analytics";

gsap.registerPlugin(ScrollTrigger);

const TRUST_BAR_ITEMS = [
  {
    icon: Building2,
    label: "4 Salas Especializadas",
    sub: "Estrutura multidisciplinar integrada",
  },
  {
    icon: Clock,
    label: "Terça a Sábado",
    sub: "Atendimento estendido das 09h às 20h",
  },
  {
    icon: ShieldCheck,
    label: "Tatuagem Paramédica & Tattoo",
    sub: "Direção artística Michele Afrodite",
  },
  {
    icon: Star,
    label: "5.0 ★ no Google Reviews",
    sub: "100% de avaliações 5 estrelas",
  },
];

const DIRECTORY_ROOMS = [
  {
    id: "sala-01",
    num: "01",
    title: "Salão Principal",
    subtitle: "Cabelos, Nails & Sobrancelhas • Recepção Central",
    icon: Scissors,
  },
  {
    id: "sala-02",
    num: "02",
    title: "Tatuagem Paramédica & Fine Line",
    subtitle: "Reconstrução de Aréolas, Camuflagem & Tattoo Delicada",
    icon: HeartHandshake,
    badge: "Assinatura Michele Afrodite",
  },
  {
    id: "sala-03",
    num: "03",
    title: "Tricologia Capilar",
    subtitle: "Diagnóstico Clínico & Terapia do Couro Cabeludo",
    icon: Microscope,
  },
  {
    id: "sala-04",
    num: "04",
    title: "Massoterapia",
    subtitle: "Massagem Relaxante, Terapêutica & Drenagem",
    icon: Flower2,
  },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { openBookingModal } = useBooking();

  useGSAP(
    () => {
      if (!sectionRef.current || prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-stagger",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }
      ).fromTo(
        ".hero-directory-card",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.85 },
        "-=0.5"
      );
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] }
  );

  const handlePrimaryCTA = () => {
    trackCTAClick("Hero_AgendarAtendimento");
    openBookingModal();
  };

  const handleDirectoryRoomClick = (roomId: string) => {
    trackCTAClick(`Hero_Directory_${roomId}`);
    openBookingModal({ initialRoomId: roomId });
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      aria-label="Apresentação Studio Michele Afrodite"
      className="relative w-full pt-28 pb-14 md:pt-32 md:pb-18 lg:pt-36 lg:pb-22 px-5 md:px-[6%] lg:px-[8%] bg-[#FAF7F2] border-b border-[#E6DFD5]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Copy & Balanced CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Superior Architectural Badge */}
            <div className="hero-stagger inline-flex flex-wrap items-center gap-2 bg-[#F3ECE3] border border-[#E6DFD5] rounded-full px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1C1815] flex items-center gap-1.5 whitespace-nowrap">
                <MapPin className="w-3.5 h-3.5 text-[#B84A39] shrink-0" aria-hidden="true" />
                Pme Offices Tower • Pagani, Palhoça
              </span>
              <span className="text-[#B84A39] font-bold" aria-hidden="true">
                •
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B84A39] flex items-center gap-1 whitespace-nowrap">
                5.0 ★ no Google Reviews
              </span>
            </div>

            {/* Main Balanced Headline */}
            <h1 className="hero-stagger font-headline-xl text-[clamp(1.9rem,4vw,3.25rem)] text-[#1C1815] leading-[1.14] tracking-tight text-balance">
              Studio Michele Afrodite:{" "}
              <span className="italic font-normal text-[#B84A39] block sm:inline">
                Onde a excelência estética, a saúde e a arte paramédica se encontram.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="hero-stagger font-body-lg text-base sm:text-lg text-[#6E6259] max-w-2xl leading-relaxed">
              Um espaço de saúde e beleza multidisciplinar dividido em{" "}
              <strong className="text-[#1C1815] font-semibold">
                4 salas integradas
              </strong>
              : do Salão Principal de cabelos, unhas e sobrancelhas aos consultórios
              privativos de Tricologia, Massoterapia e Tatuagem Paramédica &amp; Fine Line.
            </p>

            {/* Dual CTA Group — Symmetrical Heights & Single Line */}
            <div className="hero-stagger flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handlePrimaryCTA}
                className="h-12 sm:h-13 px-6 sm:px-8 inline-flex items-center justify-center gap-2.5 bg-[#1C1815] hover:bg-[#2A2420] text-[#FAF7F2] border border-[#26221E] text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-2xl transition-colors cursor-pointer whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#C6934B] shrink-0" />
                <span>Agendar Atendimento</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>

              <Link
                href="#salas"
                onClick={() => trackCTAClick("Hero_ExplorarAs4Salas")}
                className="h-12 sm:h-13 px-6 sm:px-8 inline-flex items-center justify-center gap-2 bg-[#F3ECE3] hover:bg-[#EAE1D5] text-[#1C1815] border border-[#E6DFD5] text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-2xl transition-colors whitespace-nowrap"
              >
                <span>Explorar as 4 Salas</span>
              </Link>
            </div>

            {/* Official Channels */}
            <div className="hero-stagger pt-2 flex flex-wrap items-center gap-4 text-xs text-[#6E6259]">
              <span className="uppercase tracking-wider text-[11px] font-semibold text-[#1C1815] whitespace-nowrap">
                Portfólio Oficial (+970 publicações):
              </span>
              <a
                href={STUDIO_INFO.instagramParamedical.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#1C1815] hover:text-[#B84A39] transition-colors whitespace-nowrap"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#B84A39]" />
                {STUDIO_INFO.instagramParamedical.handle}
              </a>
              <a
                href={STUDIO_INFO.instagramIntegrated.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#1C1815] hover:text-[#B84A39] transition-colors whitespace-nowrap"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#A66E4E]" />
                {STUDIO_INFO.instagramIntegrated.handle}
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Directory Blueprint (Flat & Solid) */}
          <div className="lg:col-span-5">
            <div className="hero-directory-card bg-white border border-[#E6DFD5] rounded-3xl p-6 sm:p-7 shadow-xs">
              {/* Directory Header with Real Logo */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E6DFD5] gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative w-11 h-11 rounded-full bg-white border border-[#E6DFD5] overflow-hidden shrink-0">
                    <Image
                      src="/logoafrodite.jpg"
                      alt="Logo Studio Michele Afrodite"
                      fill
                      sizes="44px"
                      priority
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="font-headline-md text-base sm:text-lg text-[#1C1815] font-semibold block leading-tight whitespace-nowrap">
                      Diretório das 4 Salas
                    </span>
                    <span className="text-[11px] text-[#6E6259] block whitespace-nowrap">
                      Pme Offices Tower • Pagani
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="inline-flex items-center gap-1 bg-[#F3ECE3] border border-[#E6DFD5] text-[#1C1815] text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                    5.0 ★ Google
                  </span>
                </div>
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between py-3 text-xs border-b border-[#E6DFD5] text-[#6E6259]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                  <strong className="text-[#1C1815] font-medium">Terça a Sábado</strong>
                </span>
                <span>09h às 20h</span>
              </div>

              {/* 4 Interactive Room Cards */}
              <div className="space-y-2.5 my-4" role="list" aria-label="Diretório das salas do estúdio">
                {DIRECTORY_ROOMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleDirectoryRoomClick(item.id)}
                      className="w-full text-left p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-[#F3ECE3] border border-[#E6DFD5] transition-colors cursor-pointer flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <span className="font-headline-md text-base font-bold text-[#B84A39] shrink-0 mt-0.5">
                          {item.num}
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs sm:text-sm font-semibold text-[#1C1815] block group-hover:text-[#B84A39] transition-colors">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="text-[9px] font-bold uppercase tracking-wider bg-[#1C1815] text-[#FAF7F2] px-2 py-0.5 rounded-full whitespace-nowrap">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-[#6E6259] block mt-0.5">
                            {item.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-xl bg-white border border-[#E6DFD5] flex items-center justify-center shrink-0 group-hover:bg-[#1C1815] group-hover:text-[#FAF7F2] group-hover:border-[#1C1815] transition-colors">
                        <Icon className="w-4 h-4 text-[#6E6259] group-hover:text-[#FAF7F2]" aria-hidden="true" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Blueprint Footer Action */}
              <div className="pt-3 border-t border-[#E6DFD5] flex items-center justify-between text-xs">
                <span className="text-[#6E6259]">
                  Selecione uma sala para agendamento
                </span>
                <Link
                  href="#salas"
                  className="font-semibold text-[#1C1815] hover:text-[#B84A39] inline-flex items-center gap-1 transition-colors whitespace-nowrap"
                >
                  <span>Ver todas as salas</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar — 4 Clean Columns, Full Text, Uniform Spacing */}
        <div className="hero-stagger mt-12 md:mt-16 pt-8 border-t border-[#E6DFD5]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRUST_BAR_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 bg-white border border-[#E6DFD5] rounded-2xl p-4 shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E6DFD5] text-[#1C1815] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#B84A39]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-headline-md text-sm sm:text-base text-[#1C1815] font-semibold block leading-snug">
                      {item.label}
                    </span>
                    <span className="text-xs text-[#6E6259] block mt-0.5">
                      {item.sub}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
