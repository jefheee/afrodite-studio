"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Studio Michele Afrodite Error Boundary]", {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
    });
  }, [error]);

  return (
    <main className="min-h-screen bg-[#12100E] flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        <div className="w-16 h-0.5 bg-[#C6934B] mx-auto mb-10" />

        <h1 className="font-headline-lg text-3xl md:text-4xl text-[#FAF7F2] mb-4">
          Algo deu errado
        </h1>

        <p className="font-body-md text-[#FAF7F2]/70 mb-10 max-w-sm mx-auto leading-relaxed">
          Ocorreu um erro inesperado ao carregar esta página. Tente novamente ou
          volte para a página inicial do Studio Michele Afrodite.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center bg-[#C6934B] text-[#12100E] font-label-sm text-xs px-8 py-4 rounded-xl uppercase tracking-widest font-bold hover:brightness-110 transition-all cursor-pointer"
          >
            Tentar Novamente
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-[#C6934B]/50 text-[#FAF7F2] font-label-sm text-xs px-8 py-4 rounded-xl uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            Voltar ao Início
          </Link>
        </div>

        <div className="mt-16 flex items-center justify-center gap-3 text-[#FAF7F2]/40">
          <div className="w-8 h-px bg-white/20" />
          <span className="font-label-sm text-[10px] uppercase tracking-[0.3em]">
            Studio Michele Afrodite
          </span>
          <div className="w-8 h-px bg-white/20" />
        </div>
      </div>
    </main>
  );
}
