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
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import Image from "next/image";
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
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
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
      className="relative py-20 md:py-28 px-5 md:px-[6%] lg:px-[8%] bg-[#12100E] text-[#FAF7F2] overflow-hidden border-y border-[#C6934B]/30"
    >
      {/* Ambient Gold Luxury Radial Glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[780px] h-[380px] rounded-full bg-[#C6934B]/12 blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="paramedica-reveal text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#C6934B]/15 border border-[#C6934B]/40 rounded-full px-4 py-1.5 mb-4">
            <Award className="w-4 h-4 text-[#C6934B]" aria-hidden="true" />
            <span className="font-label-sm text-[11px] uppercase tracking-[0.22em] text-[#C6934B] font-bold">
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

        {/* Two Signature Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-14">
          {/* Bloco 1: Reconstrução de Aréolas & Camuflagem de Cicatrizes */}
          <div className="paramedica-reveal bg-white/[0.04] backdrop-blur-md border border-[#C6934B]/30 rounded-3xl p-7 sm:p-9 flex flex-col justify-between hover:border-[#C6934B]/60 transition-colors">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C6934B]">
                  <HeartHandshake className="w-4 h-4" aria-hidden="true" />
                  Bloco 01 • Restauração &amp; Autoestima
                </span>
                <span className="text-[11px] uppercase tracking-wider bg-[#C6934B]/20 text-[#C6934B] px-3 py-1 rounded-full font-semibold">
                  Dermopigmentação Clínica
                </span>
              </div>

              <h3 className="font-headline-lg text-2xl sm:text-3xl text-[#FAF7F2] mb-4 leading-snug">
                Reconstrução de Aréolas Mamárias &amp; Camuflagem de Cicatrizes
              </h3>

              <p className="text-sm sm:text-base text-[#FAF7F2]/75 leading-relaxed mb-6">
                Mais do que um procedimento estético, a Tatuagem Paramédica é um
                passo profundo de reconexão com o próprio corpo. Com técnicas de{" "}
                <strong className="text-[#C6934B]">
                  realismo 3D (luz, sombra, textura e colorimetria avançada)
                </strong>
                , devolvemos a naturalidade após mastectomias, reconstruções
                mamárias ou cirurgias plásticas.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Reconstrução de Aréolas 3D pós-mastectomia ou cirurgias mamárias com efeito hiper-realista de relevo e cor.",
                  "Camuflagem paramédica de cicatrizes cirúrgicas (mamoplastia, abdominoplastia, lifting e cesárea).",
                  "Suavização de cicatrizes acidentais e camuflagem avançada de estrias.",
                  "Atendimento 100% reservado, acolhedor e com rigorosa biossegurança na Sala 02.",
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

            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() =>
                  handleOpenParamedicalBooking(
                    "Reconstrução de Aréola Mamária 3D (Paramédica)"
                  )
                }
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#C6934B] hover:bg-[#d4a259] text-[#12100E] font-label-sm text-xs uppercase tracking-widest font-bold py-4 px-5 rounded-xl transition-all cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                Agendar Avaliação Paramédica
              </button>
            </div>
          </div>

          {/* Bloco 2: Micropigmentação & Tatuagem Fine Line */}
          <div className="paramedica-reveal bg-white/[0.04] backdrop-blur-md border border-[#A66E4E]/40 rounded-3xl p-7 sm:p-9 flex flex-col justify-between hover:border-[#C6934B]/60 transition-colors">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C6934B]">
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                  Bloco 02 • Precisão &amp; Delicadeza
                </span>
                <span className="text-[11px] uppercase tracking-wider bg-[#A66E4E]/25 text-[#FAF7F2] px-3 py-1 rounded-full font-semibold">
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
                . Criamos projetos exclusivos, minimalistas e elegantes que
                respeitam a anatomia e a identidade de cada cliente.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="relative h-36 rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/assets/modelos_clientes/micropigmentacao_fio_a_fio/micropigmentacao_fio_a_fio (1).jpeg"
                    alt="Micropigmentação de Sobrancelhas Fio a Fio realista no Studio Michele Afrodite"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] font-semibold text-white">
                      Sobrancelhas Realistas
                    </span>
                  </div>
                </div>
                <div className="relative h-36 rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/assets/modelos_clientes/micropigmentacao_labial/micropigmentacao_labial_depois.jpeg"
                    alt="Revitalização e Micropigmentação Labial natural no Studio Michele Afrodite"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] font-semibold text-white">
                      Revitalização Labial
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 mb-8">
                {[
                  "Tatuagem Artística Fine Line: florais, botânicos, escritas finas, símbolos e artes minimalistas sob medida.",
                  "Micropigmentação de Sobrancelhas Hiper-realistas com caimento natural dos fios.",
                  "Revitalização Labial para devolver cor saudável, definição suave e viço aos lábios.",
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

            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() =>
                  handleOpenParamedicalBooking(
                    "Tatuagem Artística Fine Line (Orçamento Autoral)"
                  )
                }
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-[#C6934B] text-[#FAF7F2] hover:text-[#12100E] border border-[#C6934B]/40 font-label-sm text-xs uppercase tracking-widest font-bold py-4 px-5 rounded-xl transition-all cursor-pointer"
              >
                Orçar Tattoo Fine Line / Micro
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Callout Bar: WhatsApp Evaluation + @studiomicheleafrodite */}
        <div className="paramedica-reveal bg-gradient-to-r from-[#1C1815] via-[#241E19] to-[#1C1815] border border-[#C6934B]/40 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C6934B] block mb-1.5">
              Atendimento Individualizado com Michele Afrodite
            </span>
            <h3 className="font-headline-md text-2xl sm:text-3xl text-[#FAF7F2] mb-2">
              Deseja conversar sobre o seu caso com total descrição?
            </h3>
            <p className="text-sm text-[#FAF7F2]/70">
              Agende uma avaliação personalizada via WhatsApp ou acompanhe
              centenas de resultados reais no nosso perfil dedicado à arte
              paramédica e fine line.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full lg:w-auto shrink-0">
            <button
              type="button"
              onClick={() => handleOpenParamedicalBooking()}
              className="inline-flex items-center justify-center gap-2.5 bg-[#C6934B] hover:bg-[#d6a35a] text-[#12100E] font-label-sm text-xs uppercase tracking-widest font-bold px-7 py-4 rounded-2xl shadow-lg transition-all cursor-pointer min-h-[52px]"
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
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/15 text-[#FAF7F2] border border-[#C6934B]/40 font-label-sm text-xs uppercase tracking-widest font-semibold px-6 py-4 rounded-2xl transition-all min-h-[52px]"
            >
              <InstagramIcon className="w-4 h-4 text-[#C6934B]" />
              <span>Explorar {STUDIO_INFO.instagramParamedical.handle}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
