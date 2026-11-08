"use client";

import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/data/studioData";
import { useBooking } from "@/context/BookingContext";
import { trackCTAClick } from "@/utils/analytics";

export function FAQ() {
  const { openBookingModal } = useBooking();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 md:py-24 px-5 md:px-[6%] lg:px-[8%] bg-[#FAF7F2] border-b border-[#C6934B]/20"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 font-label-sm text-xs text-[#A66E4E] uppercase tracking-[0.2em] font-bold mb-3">
            <HelpCircle className="w-4 h-4 text-[#C6934B]" aria-hidden="true" />
            Dúvidas Frequentes
          </span>
          <h2
            id="faq-heading"
            className="font-headline-lg text-3xl sm:text-4xl md:text-[42px] text-[#1C1815] leading-tight mb-4"
          >
            Tudo o Que Você Precisa Saber Antes da Sua Visita
          </h2>
          <p className="font-body-md text-[#6E6259] text-base">
            Respostas diretas sobre nossa estrutura de 4 salas no Pagani, avaliações paramédicas e agendamentos integrados.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_ITEMS.map((faq, index) => (
            <details
              key={index}
              name="faq-studio-michele-afrodite"
              open={index === 0}
              className="group border border-[#C6934B]/30 bg-white rounded-2xl overflow-hidden shadow-2xs transition-all [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer hover:bg-[#F3ECE3]/60 transition-colors list-none">
                <span className="font-headline-md text-lg md:text-xl font-bold text-[#1C1815] leading-snug">
                  {faq.question}
                </span>
                <span className="w-9 h-9 rounded-full bg-[#F3ECE3] flex items-center justify-center shrink-0 text-[#A66E4E] group-open:bg-[#12100E] group-open:text-[#C6934B] transition-colors">
                  <ChevronDown
                    className="w-5 h-5 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 border-t border-[#F3ECE3]">
                <p className="font-body-md text-sm sm:text-base text-[#6E6259] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Bottom Support Prompt */}
        <div className="mt-10 bg-[#F3ECE3] border border-[#C6934B]/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-headline-md text-xl text-[#1C1815] font-bold">
              Ficou com alguma dúvida específica sobre um procedimento?
            </h3>
            <p className="text-xs sm:text-sm text-[#6E6259]">
              Nossa equipe no Pagani está pronta para orientar você pelo WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              trackCTAClick("FAQ_FalarComRecepcao");
              openBookingModal();
            }}
            className="inline-flex items-center gap-2 bg-[#12100E] hover:bg-[#C6934B] text-[#FAF7F2] hover:text-[#12100E] font-label-sm text-xs uppercase tracking-widest font-bold px-6 py-3.5 rounded-xl transition-colors shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#C6934B]" aria-hidden="true" />
            Falar com a Recepção
          </button>
        </div>
      </div>
    </section>
  );
}
