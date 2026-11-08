"use client";

import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useBooking } from "@/context/BookingContext";
import { trackCTAClick } from "@/utils/analytics";

export function FloatingWhatsApp() {
  const { openBookingModal } = useBooking();

  return (
    <button
      type="button"
      onClick={() => {
        trackCTAClick("FloatingWhatsApp_Concierge");
        openBookingModal();
      }}
      aria-label="Agendar atendimento pelo WhatsApp do Studio Michele Afrodite"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#12100E] hover:bg-[#C6934B] text-[#FAF7F2] hover:text-[#12100E] border border-[#C6934B] px-4 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
      </span>
      <WhatsAppIcon className="w-5 h-5 text-[#C6934B] group-hover:text-[#12100E] transition-colors" />
      <span className="hidden sm:inline font-label-sm text-[11px] uppercase tracking-widest font-bold">
        Agendar Horário
      </span>
    </button>
  );
}
