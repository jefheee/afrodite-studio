"use client";

import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import {
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Award,
  Feather,
  Layers,
  HeartPulse,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STUDIO_INFO } from "@/data/studioData";
import { useBooking } from "@/context/BookingContext";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { trackCTAClick } from "@/utils/analytics";

gsap.registerPlugin(ScrollTrigger);

export function ParamedicalSpotlight() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { openBookingModal } = useBooking();

  useGSAP(
    () => {
      if (!sectionRef.current || prefersReducedMotion) return;

      gsap.fromTo(
        ".paramedica-reveal",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] }
  );

  const handleOpenParamedicalBooking = (procedureName?: string) => {
    trackCTAClick("Paramedica_SolicitarAvaliacao");
    openBookingModal({
      initialRoomId: "sala-02",
      initialProcedureId: procedureName,
    });
  };

  return (
    <section
      id="paramedica"
      ref={sectionRef}
      aria-labelledby="paramedica-heading"
      className="relative py-20 md:py-28 px-5 md:px-[6%] lg:px-[8%] bg-[#12100E] text-[#FAF7F2] border-y border-[#26221E]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="paramedica-reveal text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#1C1815] border border-[#26221E] rounded-full px-4 py-1.5 mb-4">
            <Award className="w-4 h-4 text-[#C6934B]" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-wider text-[#C6934B] font-semibold">
              Destaque Autoral • Sala 02 Privativa
            </span>
          </div>

          <h2
            id="paramedica-heading"
            className="font-headline-xl text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] leading-[1.12] mb-5"
          >
            Tatuagem Paramédica, Micropigmentação &amp;{" "}
            <span className="italic font-normal text-[#C6934B]">
              Arte em Fine Line
            </span>
          </h2>

          <p className="font-body-lg text-[#FAF7F2]/75 text-base sm:text-lg leading-relaxed">
            Sob a direção técnica e artística da fundadora{" "}
            <strong className="text-[#FAF7F2]">Michele Afrodite</strong>, unimos
            precisão dermopigmentadora, acolhimento humano e sensibilidade
            estética para restaurar histórias e eternizar traços delicados.
          </p>
        </div>

        {/* Two Technical Editorial Cards (Solid Flat Architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-14">
          {/* Card 01: Reconstrução de Aréolas & Camuflagem */}
          <div className="paramedica-reveal bg-[#181512] border border-[#26221E] rounded-3xl p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#26221E]">
                <div className="flex items-center gap-3">
                  <span className="font-headline-xl text-2xl font-bold text-[#C6934B]">
                    01
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2]">
                    <HeartHandshake className="w-4 h-4 text-[#C6934B]" aria-hidden="true" />
                    Restauração &amp; Autoestima
                  </span>
                </div>
                <span className="text-[11px] uppercase tracking-wider bg-white/5 border border-[#26221E] text-[#C6934B] px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                  Dermopigmentação Clínica
                </span>
              </div>

              <h3 className="font-headline-lg text-2xl sm:text-3xl text-[#FAF7F2] mb-4 leading-snug">
                Reconstrução de Aréolas Mamárias 3D &amp; Camuflagem de Cicatrizes
              </h3>

              <p className="text-sm sm:text-base text-[#FAF7F2]/75 leading-relaxed mb-6">
                Mais do que um procedimento estético, a Tatuagem Paramédica é um
                passo profundo de reconexão com o próprio corpo. Com técnicas de{" "}
                <strong className="text-[#C6934B]">
                  realismo 3D (luz, sombra, textura e colorimetria avançada)
                </strong>
                , devolvemos a naturalidade após mastectomias, cirurgias mamárias ou plásticas.
              </p>

              {/* Technical Specifications */}
              <div className="bg-[#12100E] border border-[#26221E] rounded-2xl p-4 sm:p-5 mb-6 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C6934B] block mb-1">
                  Especificações do Protocolo Paramédico:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#FAF7F2]/80">
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-3.5 h-3.5 text-[#C6934B] shrink-0" />
                    <span>Pigmentos hospitalares estéreis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#C6934B] shrink-0" />
                    <span>Estudo fototipo &amp; colorimetria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C6934B] shrink-0" />
                    <span>Biossegurança hospitalar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#C6934B] shrink-0" />
                    <span>Sala 02 privativa individual</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Reconstrução de Aréolas 3D pós-mastectomia com efeito realista de relevo, papila e cor.",
                  "Camuflagem de cicatrizes cirúrgicas de mamoplastia, abdominoplastia e cesárea.",
                  "Suavização óptica de cicatrizes acidentais e camuflagem avançada de estrias.",
                  "Avaliação individual, acolhedora e 100% reservada com Michele Afrodite.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-xs sm:text-sm text-[#FAF7F2]/85"
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

            <div className="pt-6 border-t border-[#26221E] flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() =>
                  handleOpenParamedicalBooking(
                    "Reconstrução de Aréola Mamária 3D (Paramédica)"
                  )
                }
                className="h-12 px-6 flex-1 inline-flex items-center justify-center gap-2 bg-[#C6934B] hover:bg-[#d4a259] text-[#12100E] text-xs uppercase tracking-wider font-semibold rounded-xl transition-colors cursor-pointer whitespace-nowrap"
              >
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                <span>Agendar Avaliação Paramédica</span>
              </button>

              <a
                href={STUDIO_INFO.instagramParamedical.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-5 inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-[#FAF7F2] border border-[#332D27] text-xs font-semibold rounded-xl transition-colors whitespace-nowrap"
              >
                <InstagramIcon className="w-4 h-4 text-[#C6934B]" />
                <span>Ver casos reais</span>
              </a>
            </div>
          </div>

          {/* Card 02: Micropigmentação & Tattoo Fine Line */}
          <div className="paramedica-reveal bg-[#181512] border border-[#26221E] rounded-3xl p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#26221E]">
                <div className="flex items-center gap-3">
                  <span className="font-headline-xl text-2xl font-bold text-[#C6934B]">
                    02
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2]">
                    <Feather className="w-4 h-4 text-[#C6934B]" aria-hidden="true" />
                    Precisão &amp; Delicadeza
                  </span>
                </div>
                <span className="text-[11px] uppercase tracking-wider bg-white/5 border border-[#26221E] text-[#FAF7F2] px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                  Traço Fino Autoral
                </span>
              </div>

              <h3 className="font-headline-lg text-2xl sm:text-3xl text-[#FAF7F2] mb-4 leading-snug">
                Micropigmentação Estética &amp; Tatuagem Artística Fine Line
              </h3>

              <p className="text-sm sm:text-base text-[#FAF7F2]/75 leading-relaxed mb-6">
                A mesma mão leve e precisão milimétrica da arte paramédica
                aplicada à beleza facial e às tatuagens artísticas em{" "}
                <strong className="text-[#C6934B]">traço fino (Fine Line)</strong>
                . Projetos exclusivos, minimalistas e elegantes desenvolvidos
                sob medida com conforto e máxima higiene.
              </p>

              {/* Technical Specifications */}
              <div className="bg-[#12100E] border border-[#26221E] rounded-2xl p-4 sm:p-5 mb-6 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C6934B] block mb-1">
                  Especificações Artísticas &amp; Estéticas:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#FAF7F2]/80">
                  <div className="flex items-center gap-2">
                    <Feather className="w-3.5 h-3.5 text-[#C6934B] shrink-0" />
                    <span>Traços de 0,15mm a 0,25mm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#C6934B] shrink-0" />
                    <span>Pigmentos veganos de alta fixação</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#C6934B] shrink-0" />
                    <span>Desenhos botânicos autorais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C6934B] shrink-0" />
                    <span>Agulhas descartáveis lacradas</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Tatuagem Artística Fine Line: florais, botânicos, escritas delicadas e mini tattoos autorais.",
                  "Micropigmentação de Sobrancelhas Hiper-realista com caimento e direção natural dos fios.",
                  "Revitalização Labial para devolver cor saudável, definição suave e viço aos lábios.",
                  "Projetos exclusivos desenvolvidos com estudo de simetria anatômica individual.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-xs sm:text-sm text-[#FAF7F2]/85"
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

            <div className="pt-6 border-t border-[#26221E] flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() =>
                  handleOpenParamedicalBooking(
                    "Tatuagem Artística Fine Line (Orçamento Autoral)"
                  )
                }
                className="h-12 px-6 flex-1 inline-flex items-center justify-center gap-2 bg-[#C6934B] hover:bg-[#d4a259] text-[#12100E] text-xs uppercase tracking-wider font-semibold rounded-xl transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Orçar Tattoo Fine Line / Micro</span>
              </button>

              <a
                href={STUDIO_INFO.instagramParamedical.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-5 inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-[#FAF7F2] border border-[#332D27] text-xs font-semibold rounded-xl transition-colors whitespace-nowrap"
              >
                <InstagramIcon className="w-4 h-4 text-[#C6934B]" />
                <span>Ver galeria</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Callout Bar: Solid Architecture */}
        <div className="paramedica-reveal bg-[#181512] border border-[#26221E] rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C6934B] block mb-1.5">
              Atendimento Individualizado com Michele Afrodite
            </span>
            <h3 className="font-headline-md text-2xl sm:text-3xl text-[#FAF7F2] mb-2">
              Deseja conversar sobre o seu caso com total discrição?
            </h3>
            <p className="text-sm text-[#FAF7F2]/70">
              Agende uma avaliação personalizada via WhatsApp ou acompanhe
              centenas de resultados reais no nosso perfil dedicado à arte
              paramédica e fine line.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <button
              type="button"
              onClick={() => handleOpenParamedicalBooking()}
              className="h-12 px-7 inline-flex items-center justify-center gap-2.5 bg-[#FAF7F2] hover:bg-[#F3ECE3] text-[#1C1815] text-xs uppercase tracking-wider font-semibold rounded-2xl transition-colors cursor-pointer whitespace-nowrap"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Agendar Avaliação no WhatsApp</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <a
              href={STUDIO_INFO.instagramParamedical.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick("Paramedica_InstagramLink")}
              className="h-12 px-6 inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-[#FAF7F2] border border-[#332D27] text-xs uppercase tracking-wider font-semibold rounded-2xl transition-colors whitespace-nowrap"
            >
              <InstagramIcon className="w-4 h-4 text-[#C6934B]" />
              <span>{STUDIO_INFO.instagramParamedical.handle}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
