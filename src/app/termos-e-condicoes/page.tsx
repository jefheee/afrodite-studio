import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioData";

export const metadata: Metadata = {
  title: "Termos e Condições",
  description:
    "Termos e condições de uso e agendamento do Studio Michele Afrodite no Pagani, Palhoça - SC.",
};

export default function TermosECondicoes() {
  return (
    <>
      <Header />
      <main className="w-full mx-auto pt-20 md:pt-24">
        <section className="bg-[#12100E] text-[#FAF7F2] py-16 md:py-20 px-6 md:px-[8%] border-b border-[#C6934B]/20">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs text-[#C6934B] uppercase tracking-widest hover:underline mb-8"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Voltar ao Início
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C6934B]/15 border border-[#C6934B]/40 flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#C6934B]" aria-hidden="true" />
              </div>
              <h1 className="font-headline-xl text-3xl md:text-4xl font-bold">
                Termos e Condições
              </h1>
            </div>
            <p className="text-[#FAF7F2]/60 text-sm">
              Studio Michele Afrodite — Pagani, Palhoça/SC
            </p>
          </div>
        </section>

        <section className="py-16 px-6 md:px-[8%] bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto space-y-8 text-sm sm:text-base text-[#6E6259] leading-relaxed">
            <div>
              <h2 className="font-headline-md text-2xl text-[#1C1815] mb-2">
                1. Agendamentos e Atendimento
              </h2>
              <p>
                Os agendamentos realizados através do Smart Booking Concierge do{" "}
                <strong className="text-[#1C1815]">Studio Michele Afrodite</strong>{" "}
                são confirmados diretamente pela nossa equipe via WhatsApp
                oficial ({STUDIO_INFO.whatsappFullDisplay}), respeitando a
                disponibilidade de agenda de cada uma das nossas 4 Salas
                Especializadas de terça a sábado, das 09h00 às 20h00.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-2xl text-[#1C1815] mb-2">
                2. Avaliações Técnicas
              </h2>
              <p>
                Procedimentos de Tatuagem Paramédica (Reconstrução de Aréolas e
                Camuflagem de Cicatrizes), Micropigmentação e Tricologia passam
                por avaliação prévia para assegurar a integridade da pele, do
                tecido cicatricial e do couro cabeludo.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-2xl text-[#1C1815] mb-2">
                3. Propriedade Intelectual
              </h2>
              <p>
                Todo o conteúdo editorial, identidade visual e fotografias do
                portfólio do Studio Michele Afrodite são protegidos pela
                legislação brasileira de direitos autorais.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
