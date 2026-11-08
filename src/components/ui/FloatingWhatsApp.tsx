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
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#1C1815] hover:bg-[#2A2420] text-[#FAF7F2] border border-[#332D27] px-4 py-3 rounded-full transition-colors duration-200 cursor-pointer shadow-sm group whitespace-nowrap"
    >
      <WhatsAppIcon className="w-4 h-4 text-[#C6934B] transition-colors" />
      <span className="font-label-sm text-xs uppercase tracking-wider font-semibold whitespace-nowrap">
        Agendar Horário
      </span>
    </button>
  );
}
