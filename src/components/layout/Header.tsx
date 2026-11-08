"use client";

import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, Sparkles, Calendar } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { STUDIO_INFO } from "@/data/studioData";
import { useBooking } from "@/context/BookingContext";
import { trackCTAClick } from "@/utils/analytics";

const NAV_LINKS = [
  { href: "#salas", label: "As 4 Salas" },
  { href: "#paramedica", label: "Paramédica & Tattoo" },
  { href: "#servicos", label: "Agendamento" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
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
        className="fixed top-0 w-full z-50 bg-[#FAF7F2] border-b border-[#E6DFD5] px-4 sm:px-6 lg:px-10 py-3"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Abrir menu de navegação"
              className="lg:hidden p-2 rounded-xl border border-[#E6DFD5] text-[#1C1815] hover:bg-[#F3ECE3] transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>

            <Link href="#inicio" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-full bg-white border border-[#E6DFD5] overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/logoafrodite.jpg"
                  alt="Logo Studio Michele Afrodite"
                  fill
                  sizes="40px"
                  priority
                  className="object-cover"
                />
              </div>
              <span className="font-headline-md text-lg sm:text-xl text-[#1C1815] leading-none tracking-tight font-semibold whitespace-nowrap">
                Studio Michele Afrodite
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Principal"
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs uppercase tracking-wider font-semibold text-[#1C1815]"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#B84A39] transition-colors py-1 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Direct Action: Minimal Instagram link + Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={STUDIO_INFO.instagramParamedical.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick("Header_InstagramIcon")}
              aria-label="Instagram Oficial Studio Michele Afrodite"
              className="p-2 rounded-full text-[#1C1815] hover:text-[#B84A39] hover:bg-[#F3ECE3] transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => handleOpenBooking("Header_AgendarHorario")}
              className="inline-flex items-center justify-center gap-2 bg-[#1C1815] hover:bg-[#2A2420] text-[#FAF7F2] border border-[#26221E] h-10 px-5 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C6934B]" aria-hidden="true" />
              <span>Agendar Horário</span>
            </button>
          </div>

          {/* Mobile Quick CTA */}
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={() => handleOpenBooking("HeaderMobileQuick_Agendar")}
              className="inline-flex items-center justify-center bg-[#1C1815] text-[#FAF7F2] border border-[#26221E] h-9 px-3.5 text-xs font-semibold uppercase tracking-wider rounded-full cursor-pointer whitespace-nowrap"
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
            <div className="flex justify-between items-center pb-6 border-b border-[#E6DFD5]">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-white border border-[#E6DFD5] overflow-hidden shrink-0">
                  <Image
                    src="/logoafrodite.jpg"
                    alt="Logo Studio Michele Afrodite"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="font-headline-md text-lg text-[#1C1815] block leading-none font-semibold whitespace-nowrap">
                    Studio Michele Afrodite
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#6E6259] font-medium mt-0.5 block">
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
              className="flex flex-col gap-2 py-6 uppercase tracking-wider text-xs font-semibold text-[#1C1815]"
            >
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  href={item.href}
                  className="py-3.5 px-4 rounded-xl hover:bg-[#F3ECE3] transition-colors flex items-center justify-between whitespace-nowrap"
                >
                  <span>{item.label}</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#B84A39]" aria-hidden="true" />
                </Link>
              ))}
            </nav>

            {/* Dual Instagram Hub in Mobile Menu — complete without clipping */}
            <div className="mt-2 pt-6 border-t border-[#E6DFD5] space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6E6259] block">
                Nossos Canais no Instagram
              </span>
              <a
                href={STUDIO_INFO.instagramParamedical.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#1C1815] text-[#FAF7F2] border border-[#26221E]"
              >
                <InstagramIcon className="w-5 h-5 text-[#C6934B] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="text-xs font-bold text-[#C6934B] block">
                    {STUDIO_INFO.instagramParamedical.handle}
                  </span>
                  <span className="text-[11px] text-[#FAF7F2]/75 block mt-0.5">
                    Tatuagem Paramédica, Micro &amp; Fine Line
                  </span>
                </div>
              </a>
              <a
                href={STUDIO_INFO.instagramIntegrated.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F3ECE3] text-[#1C1815] border border-[#E6DFD5]"
              >
                <InstagramIcon className="w-5 h-5 text-[#B84A39] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="text-xs font-bold text-[#1C1815] block">
                    {STUDIO_INFO.instagramIntegrated.handle}
                  </span>
                  <span className="text-[11px] text-[#6E6259] block mt-0.5">
                    Salão Principal, Tricologia &amp; Massoterapia
                  </span>
                </div>
              </a>
            </div>

            <div className="mt-auto pt-6">
              <button
                type="button"
                onClick={() => handleOpenBooking("HeaderMobile_AgendarHorario")}
                className="w-full py-4 rounded-xl bg-[#1C1815] text-[#FAF7F2] border border-[#26221E] text-xs uppercase tracking-wider font-semibold cursor-pointer whitespace-nowrap"
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
