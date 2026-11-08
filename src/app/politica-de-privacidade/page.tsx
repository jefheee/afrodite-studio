import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioData";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade do Studio Michele Afrodite em Palhoça - SC. Saiba como coletamos, usamos e protegemos seus dados pessoais.",
};

export default function PoliticaDePrivacidade() {
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
                <Shield className="w-6 h-6 text-[#C6934B]" aria-hidden="true" />
              </div>
              <h1 className="font-headline-xl text-3xl md:text-4xl font-bold">
                Política de Privacidade
              </h1>
            </div>
            <p className="text-[#FAF7F2]/60 text-sm">
              Studio Michele Afrodite — Pagani, Palhoça/SC
            </p>
          </div>
        </section>

        <section className="py-16 px-6 md:px-[8%] bg-[#FAF7F2]">
          <div className="max-w-3xl mx-auto space-y-8 text-sm sm:text-base text-[#6E6259] leading-relaxed">
            <p>
              A sua privacidade é fundamental para o{" "}
              <strong className="text-[#1C1815]">Studio Michele Afrodite</strong>.
              Respeitamos o sigilo e a confidencialidade de todas as informações
              fornecidas por nossas clientes em nossa plataforma web e canais de
              atendimento via WhatsApp.
            </p>

            <div>
              <h2 className="font-headline-md text-2xl text-[#1C1815] mb-2">
                1. Coleta e Finalidade das Informações
              </h2>
              <p>
                Solicitamos apenas os dados estritamente necessários (como seu
                nome, procedimentos de interesse e preferência de horário) para
                realizar o pré-agendamento e direcionar seu atendimento à sala
                especializada correspondente.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-2xl text-[#1C1815] mb-2">
                2. Sigilo em Avaliações Paramédicas e Tricológicas
              </h2>
              <p>
                Todas as informações compartilhadas para avaliações de Tatuagem
                Paramédica (Reconstrução de Aréolas e Camuflagem de Cicatrizes)
                e Tricologia são tratadas com absoluto sigilo ético e
                profissional.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-2xl text-[#1C1815] mb-2">
                3. Contato do Controlador
              </h2>
              <p>
                Para dúvidas sobre privacidade ou proteção de dados, fale
                conosco pelo nosso WhatsApp oficial{" "}
                <a
                  href={STUDIO_INFO.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A66E4E] font-semibold underline"
                >
                  {STUDIO_INFO.whatsappFullDisplay}
                </a>{" "}
                ou presencialmente em nosso endereço:{" "}
                <strong className="text-[#1C1815]">
                  {STUDIO_INFO.fullAddress}
                </strong>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
