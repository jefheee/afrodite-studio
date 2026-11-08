import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#12100E] flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        <div className="w-16 h-0.5 bg-[#C6934B] mx-auto mb-10" />

        <h1 className="font-headline-xl text-[110px] md:text-[150px] leading-none text-[#C6934B]/15 font-bold select-none">
          404
        </h1>

        <h2 className="font-headline-lg text-3xl text-[#FAF7F2] -mt-4 mb-4">
          Página não encontrada
        </h2>

        <p className="font-body-md text-[#FAF7F2]/70 mb-10 max-w-sm mx-auto leading-relaxed">
          O endereço que você acessou não existe ou foi movido. Volte para a
          página inicial do Studio Michele Afrodite.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center bg-[#C6934B] text-[#12100E] font-label-sm text-xs px-8 py-4 rounded-xl uppercase tracking-widest font-bold hover:brightness-110 transition-all shadow-lg"
        >
          Voltar para o Início
        </Link>

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
