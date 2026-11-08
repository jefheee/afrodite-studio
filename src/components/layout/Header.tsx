"use client";

import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, Sparkles, Calendar } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import Link from "next/link";
import { useState, useRef } from "react";
import { STUDIO_INFO } from "@/data/studioData";
import { useBooking } from "@/context/BookingContext";
import { trackCTAClick } from "@/utils/analytics";

const NAV_LINKS = [
  { href: "#salas", label: "As 4 Salas" },
  { href: "#paramedica", label: "Tatuagem Paramédica & Tattoo" },
  { href: "#servicos", label: "Serviços" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização (Pagani)" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const { openBookingModal } = useBooking();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY.current;
    if (diff > 6 && latest > 120) {
      setIsHidden(true);
    } else if (diff < -6) {
      setIsHidden(false);
    }
    lastScrollY.current = latest;
  });

  const handleOpenBooking = (source: string) => {
    trackCTAClick(source);
    setIsMobileMenuOpen(false);
    openBookingModal();
  };

  return (
    <>
      <a
        href="#inicio"
        className="visually-hidden focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#12100E] focus:text-[#C6934B] focus:rounded-lg"
      >
        Pular para o conteúdo principal
      </a>

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: isHidden ? -110 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 w-full z-50 bg-[#FAF7F2]/90 backdrop-blur-xl shadow-xs border-b border-[#C6934B]/20 px-4 sm:px-6 lg:px-10 py-3.5"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Abrir menu de navegação"
              className="lg:hidden p-2 rounded-xl border border-[#C6934B]/30 text-[#1C1815] hover:bg-[#F3ECE3] transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>

            <Link href="#inicio" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-[#12100E] border border-[#C6934B] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <span className="font-headline-md text-lg text-[#C6934B] tracking-tighter font-bold">
                  MA
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-lg sm:text-xl text-[#1C1815] leading-none tracking-tight font-semibold">
                  Studio Michele Afrodite
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#A66E4E] font-semibold mt-0.5">
                  Estética • Saúde • Arte Paramédica
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Principal"
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] uppercase tracking-[0.14em] font-semibold text-[#1C1815]"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#C6934B] transition-colors py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Dual Instagram Shortcuts + Primary CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <div className="hidden xl:flex items-center gap-1.5 bg-[#F3ECE3] border border-[#C6934B]/25 rounded-full p-1">
              <a
                href={STUDIO_INFO.instagramParamedical.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick("Header_InstaParamedica")}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold text-[#1C1815] hover:bg-[#12100E] hover:text-[#C6934B] transition-colors"
                aria-label="Instagram Tatuagem Paramédica e Fine Line @studiomicheleafrodite"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#C6934B]" />
                <span>@studiomicheleafrodite</span>
              </a>
              <a
                href={STUDIO_INFO.instagramIntegrated.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick("Header_InstaCentroIntegrado")}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold text-[#1C1815] hover:bg-[#12100E] hover:text-[#C6934B] transition-colors"
                aria-label="Instagram Centro Integrado @centrointegradomicheleafrodite"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#A66E4E]" />
                <span>@centrointegradomicheleafrodite</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => handleOpenBooking("Header_AgendarHorario")}
              className="inline-flex items-center gap-2 bg-[#12100E] hover:bg-[#C6934B] text-[#FAF7F2] hover:text-[#12100E] border border-[#C6934B]/40 font-label-sm text-[11px] px-5 py-2.5 rounded-full uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer min-h-[42px]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C6934B] group-hover:text-[#12100E]" aria-hidden="true" />
              Agendar Horário
            </button>
          </div>

          {/* Mobile Quick CTA */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => handleOpenBooking("HeaderMobileQuick_Agendar")}
              className="inline-flex items-center gap-1.5 bg-[#12100E] text-[#C6934B] border border-[#C6934B]/40 text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-full cursor-pointer min-h-[38px]"
            >
              Agendar
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 220 }}
            className="fixed inset-0 z-[60] bg-[#FAF7F2] flex flex-col p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação móvel"
          >
            <div className="flex justify-between items-center pb-6 border-b border-[#C6934B]/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#12100E] border border-[#C6934B] flex items-center justify-center">
                  <span className="font-headline-md text-lg text-[#C6934B] font-bold">
                    MA
                  </span>
                </div>
                <div>
                  <span className="font-headline-md text-lg text-[#1C1815] block leading-none font-semibold">
                    Studio Michele Afrodite
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#A66E4E] font-semibold">
                    Pagani • Palhoça/SC
                  </span>
                </div>
              </div>
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 bg-[#F3ECE3] rounded-full text-[#1C1815] cursor-pointer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <nav
              aria-label="Menu Móvel"
              className="flex flex-col gap-2 py-6 uppercase tracking-widest text-xs font-semibold text-[#1C1815]"
            >
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  href={item.href}
                  className="py-3.5 px-4 rounded-xl hover:bg-[#F3ECE3] transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#C6934B]" aria-hidden="true" />
                </Link>
              ))}
            </nav>

            {/* Dual Instagram Hub in Mobile Menu */}
            <div className="mt-2 pt-6 border-t border-[#C6934B]/20 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#6E6259] block">
                Nossos Canais no Instagram
              </span>
              <a
                href={STUDIO_INFO.instagramParamedical.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#12100E] text-[#FAF7F2] border border-[#C6934B]/30"
              >
                <InstagramIcon className="w-5 h-5 text-[#C6934B] shrink-0" />
                <div className="min-w-0">
                  <span className="text-xs font-bold text-[#C6934B] block truncate">
                    {STUDIO_INFO.instagramParamedical.handle}
                  </span>
                  <span className="text-[11px] text-[#FAF7F2]/70 block truncate">
                    Tatuagem Paramédica, Micro & Fine Line
                  </span>
                </div>
              </a>
              <a
                href={STUDIO_INFO.instagramIntegrated.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F3ECE3] text-[#1C1815] border border-[#C6934B]/30"
              >
                <InstagramIcon className="w-5 h-5 text-[#A66E4E] shrink-0" />
                <div className="min-w-0">
                  <span className="text-xs font-bold text-[#1C1815] block truncate">
                    {STUDIO_INFO.instagramIntegrated.handle}
                  </span>
                  <span className="text-[11px] text-[#6E6259] block truncate">
                    Salão, Unhas, Tricologia & Massoterapia
                  </span>
                </div>
              </a>
            </div>

            <div className="mt-auto pt-6">
              <button
                type="button"
                onClick={() => handleOpenBooking("HeaderMobile_AgendarHorario")}
                className="w-full py-4 rounded-xl bg-[#C6934B] text-[#12100E] font-label-sm text-xs uppercase tracking-widest font-bold shadow-lg cursor-pointer"
              >
                Agendar Horário Personalizado
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
