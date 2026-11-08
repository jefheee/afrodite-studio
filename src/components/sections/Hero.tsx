"use client";

import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Star,
  Sparkles,
  Clock,
  ShieldCheck,
  Building2,
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
    sub: "Estrutura multidisciplinar",
  },
  {
    icon: Clock,
    label: "Terça a Sábado (09h às 20h)",
    sub: "Horário estendido no Pagani",
  },
  {
    icon: ShieldCheck,
    label: "Referência em Tatuagem Paramédica & Fine Line",
    sub: "Comandado por Michele Afrodite",
  },
  {
    icon: Star,
    label: "Avaliação 5.0 ★ Google",
    sub: "100% de aprovação verificada",
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
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.12 }
      ).fromTo(
        ".hero-visual-card",
        { opacity: 0, scale: 0.96, clipPath: "inset(8% 8% 8% 8% round 24px)" },
        {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0% round 24px)",
          duration: 1.1,
          ease: "power2.out",
        },
        "-=0.6"
      );

      gsap.to(".hero-parallax-img", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] }
  );

  const handlePrimaryCTA = () => {
    trackCTAClick("Hero_AgendarAtendimentoPersonalizado");
    openBookingModal();
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      aria-label="Apresentação Studio Michele Afrodite"
      className="relative w-full pt-28 pb-14 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 px-5 md:px-[6%] lg:px-[8%] bg-[#FAF7F2] overflow-hidden border-b border-[#C6934B]/20"
    >
      {/* Subtle Luxury Ambient Glows */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[520px] h-[520px] rounded-full bg-[#C6934B]/12 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-40 w-[440px] h-[440px] rounded-full bg-[#A66E4E]/10 blur-[110px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Superior Badge */}
            <div className="hero-stagger inline-flex flex-wrap items-center gap-2 bg-[#F3ECE3] border border-[#C6934B]/40 rounded-full px-4 py-2 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#1C1815] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C6934B] shrink-0" aria-hidden="true" />
                📍 PME OFFICES TOWER • PAGANI, PALHOÇA
              </span>
              <span className="text-[#C6934B] font-bold" aria-hidden="true">
                |
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#A66E4E] flex items-center gap-1">
                ★ 5.0 NO GOOGLE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-stagger font-headline-xl text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#1C1815] leading-[1.1] tracking-tight">
              Studio Michele Afrodite:{" "}
              <span className="italic font-normal text-[#A66E4E]">
                Onde a excelência estética, a saúde e a arte paramédica se encontram.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="hero-stagger font-body-lg text-base sm:text-lg text-[#6E6259] max-w-2xl leading-relaxed">
              Um espaço moderno e completo dividido em{" "}
              <strong className="text-[#1C1815] font-semibold">
                4 salas exclusivas
              </strong>
              : do salão principal de cabelos, unhas e sobrancelhas às salas
              especializadas em Tricologia, Massoterapia e Tatuagem Paramédica
              &amp; Fine Line.
            </p>

            {/* Dual CTA Group */}
            <div className="hero-stagger flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={handlePrimaryCTA}
                className="inline-flex items-center justify-center gap-2.5 bg-[#12100E] hover:bg-[#C6934B] text-[#FAF7F2] hover:text-[#12100E] border border-[#C6934B] font-label-sm text-xs md:text-sm px-7 py-4 rounded-2xl uppercase tracking-widest font-bold shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer min-h-[54px]"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#C6934B] group-hover:text-[#12100E] transition-colors shrink-0" />
                <span>Agendar Atendimento Personalizado</span>
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0"
                  aria-hidden="true"
                />
              </button>

              <Link
                href="#salas"
                onClick={() => trackCTAClick("Hero_ConhecerAs4Salas")}
                className="inline-flex items-center justify-center gap-2 bg-[#F3ECE3] hover:bg-[#1C1815] text-[#1C1815] hover:text-[#FAF7F2] border border-[#C6934B]/40 font-label-sm text-xs md:text-sm px-7 py-4 rounded-2xl uppercase tracking-widest font-semibold transition-all duration-300 min-h-[54px]"
              >
                <span>Conhecer as 4 Salas</span>
              </Link>
            </div>

            {/* Quick Dual Instagram Strip */}
            <div className="hero-stagger pt-2 flex flex-wrap items-center gap-4 text-xs text-[#6E6259]">
              <span className="uppercase tracking-widest text-[10px] font-bold text-[#1C1815]">
                Portfólios Oficiais (+970 publicações):
              </span>
              <a
                href={STUDIO_INFO.instagramParamedical.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#1C1815] hover:text-[#C6934B] underline underline-offset-4 decoration-[#C6934B]/60 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#C6934B]" />
                {STUDIO_INFO.instagramParamedical.handle}
              </a>
              <a
                href={STUDIO_INFO.instagramIntegrated.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#1C1815] hover:text-[#A66E4E] underline underline-offset-4 decoration-[#A66E4E]/60 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#A66E4E]" />
                {STUDIO_INFO.instagramIntegrated.handle}
              </a>
            </div>
          </div>

          {/* Right Column: Quiet Luxury Bento Showcase */}
          <div className="lg:col-span-5">
            <div className="hero-visual-card relative rounded-3xl overflow-hidden border border-[#C6934B]/35 bg-[#12100E] shadow-2xl aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5]">
              <Image
                src="/assets/espaco/decoracoesespaco.jpg"
                alt="Ambiente interno sofisticado do Studio Michele Afrodite no edifício Pme Offices Tower em Palhoça"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="hero-parallax-img object-cover object-center scale-105 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/35 to-transparent" />

              {/* Top Floating Tag */}
              <div className="absolute top-5 left-5 right-5 flex justify-between items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-[#12100E]/85 backdrop-blur-md border border-[#C6934B]/40 text-[#FAF7F2] text-[11px] font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-[#C6934B]" aria-hidden="true" />
                  Quiet Luxury Boutique Studio
                </span>
                <span className="bg-[#C6934B] text-[#12100E] text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                  5.0 ★ Google
                </span>
              </div>

              {/* Bottom Architectural Summary Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#12100E]/90 backdrop-blur-xl border border-[#C6934B]/30 rounded-2xl p-5 text-[#FAF7F2]">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C6934B] block mb-1">
                  Arquitetura Multidisciplinar • 4 Ambientes
                </span>
                <p className="font-headline-md text-lg sm:text-xl text-[#FAF7F2] leading-snug mb-3">
                  Salão Principal que recepciona e conecta às salas privativas de Tatuagem Paramédica, Tricologia e Massoterapia.
                </p>
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10 text-[11px] text-[#FAF7F2]/80">
                  <div>
                    <strong className="text-[#C6934B] block">Fundadora:</strong>
                    Michele Afrodite
                  </div>
                  <div>
                    <strong className="text-[#C6934B] block">Localização:</strong>
                    Pme Offices Tower, Pagani
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar (Barra de Credibilidade) */}
        <div className="hero-stagger mt-12 md:mt-16 pt-8 border-t border-[#C6934B]/25">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRUST_BAR_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 bg-[#F3ECE3]/90 border border-[#C6934B]/25 rounded-2xl p-4 shadow-2xs"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#12100E] text-[#C6934B] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-headline-md text-base text-[#1C1815] font-bold block leading-tight">
                      {item.label}
                    </span>
                    <span className="text-xs text-[#6E6259] block mt-0.5 truncate">
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
