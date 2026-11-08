"use client";

import {
  Star,
  CheckCircle2,
  ExternalLink,
  Quote,
  Sparkles,
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { STUDIO_INFO, GOOGLE_REVIEWS } from "@/data/studioData";
import { ScrollRevealWrapper } from "@/components/ui/ScrollRevealWrapper";
import { trackCTAClick } from "@/utils/analytics";

export function SocialProofAndInstagram() {
  return (
    <section
      id="avaliacoes"
      aria-labelledby="avaliacoes-heading"
      className="py-16 md:py-24 px-5 md:px-[6%] lg:px-[8%] bg-[#F3ECE3]/80 border-b border-[#C6934B]/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* PART 1: Google 5.0 ★ Verified Reviews */}
        <div>
          <ScrollRevealWrapper className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-[#FAF7F2] border border-[#C6934B]/40 rounded-full px-4 py-1.5 mb-4 shadow-2xs">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-[#C6934B] fill-[#C6934B]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#1C1815] font-bold">
                Nota Máxima 5.0 ★ no Google Reviews
              </span>
            </div>

            <h2
              id="avaliacoes-heading"
              className="font-headline-lg text-3xl sm:text-4xl md:text-[42px] text-[#1C1815] leading-tight mb-4"
            >
              Excelência Comprovada por Quem Vive a Experiência Afrodite
            </h2>

            <p className="font-body-md text-[#6E6259] text-base md:text-lg leading-relaxed">
              100% de aprovação em avaliações verificadas,{" "}
              <strong className="text-[#1C1815]">
                {STUDIO_INFO.socialProof.portfolioPosts} publicações reais
              </strong>{" "}
              de portfólio e{" "}
              <strong className="text-[#1C1815]">
                {STUDIO_INFO.socialProof.followersCount} seguidores
              </strong>{" "}
              na Grande Florianópolis.
            </p>
          </ScrollRevealWrapper>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              {
                value: "5.0 ★",
                label: "Nota no Google",
                sub: "100% de avaliações 5 estrelas",
              },
              {
                value: "+970",
                label: "Publicações Reais",
                sub: "Portfólio autoral documentado",
              },
              {
                value: "+4.300",
                label: "Seguidores Ativos",
                sub: "Comunidade na Grande Florianópolis",
              },
              {
                value: "4 Salas",
                label: "Cuidado Integrado",
                sub: "Salão, Paramédica, Tricologia & Masso",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#C6934B]/25 text-center shadow-2xs"
              >
                <span className="font-headline-lg text-3xl md:text-4xl text-[#1C1815] font-bold block">
                  {stat.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#A66E4E] block mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-[#6E6259] block mt-0.5">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GOOGLE_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#C6934B]/25 shadow-sm flex flex-col justify-between relative"
              >
                <Quote
                  className="w-8 h-8 text-[#C6934B]/20 absolute top-6 right-6"
                  aria-hidden="true"
                />
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[#C6934B] fill-[#C6934B]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-[#A66E4E] bg-[#F3ECE3] px-2.5 py-0.5 rounded-full">
                      {review.roomTag}
                    </span>
                  </div>

                  <p className="font-body-md text-sm sm:text-base text-[#1C1815] leading-relaxed mb-6 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#DFD5C8]">
                  <div>
                    <span className="font-headline-md text-base font-bold text-[#1C1815] block">
                      {review.author}
                    </span>
                    <span className="text-xs text-[#6E6259] block">
                      {review.role}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                    Verificada
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: Dual Instagram Showcase Hub */}
        <div className="pt-8 border-t border-[#C6934B]/25">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 font-label-sm text-xs text-[#A66E4E] uppercase tracking-[0.2em] font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C6934B]" aria-hidden="true" />
              Ecossistema Digital Oficial
            </span>
            <h3 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#1C1815] mb-3">
              Vitrine Conectada aos 2 Instagrams Oficiais
            </h3>
            <p className="text-sm sm:text-base text-[#6E6259]">
              Acompanhe tanto os resultados artísticos e paramédicos da fundadora Michele Afrodite quanto a rotina completa das nossas 4 salas especializadas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1: @studiomicheleafrodite */}
            <div className="bg-[#12100E] text-[#FAF7F2] rounded-3xl p-7 sm:p-9 border border-[#C6934B]/40 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#C6934B]/20 border border-[#C6934B] flex items-center justify-center text-[#C6934B]">
                      <InstagramIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C6934B] block">
                        Perfil Autoral • Sala 02
                      </span>
                      <h4 className="font-headline-md text-xl sm:text-2xl text-[#FAF7F2] font-bold">
                        {STUDIO_INFO.instagramParamedical.handle}
                      </h4>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold bg-white/10 text-[#C6934B] px-3 py-1 rounded-full">
                    Arte &amp; Paramédica
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed mb-6">
                  {STUDIO_INFO.instagramParamedical.description}
                </p>

                <ul className="space-y-2 mb-8 text-xs sm:text-sm text-[#FAF7F2]/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C6934B] shrink-0" aria-hidden="true" />
                    <span>Casos reais de Reconstrução de Aréolas Mamárias 3D</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C6934B] shrink-0" aria-hidden="true" />
                    <span>Antes e depois de Camuflagem de Cicatrizes e Estrias</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C6934B] shrink-0" aria-hidden="true" />
                    <span>Portfólio autoral de Tatuagens Fine Line &amp; Micropigmentação</span>
                  </li>
                </ul>
              </div>

              <a
                href={STUDIO_INFO.instagramParamedical.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick("SocialHub_InstaParamedica")}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C6934B] hover:bg-[#d5a258] text-[#12100E] font-label-sm text-xs uppercase tracking-widest font-bold py-4 px-6 rounded-2xl transition-all shadow-md"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Seguir {STUDIO_INFO.instagramParamedical.handle}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            {/* Card 2: @centrointegradomicheleafrodite */}
            <div className="bg-[#FAF7F2] text-[#1C1815] rounded-3xl p-7 sm:p-9 border border-[#C6934B]/40 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#F3ECE3] border border-[#A66E4E] flex items-center justify-center text-[#A66E4E]">
                      <InstagramIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A66E4E] block">
                        Perfil Multidisciplinar • 4 Salas
                      </span>
                      <h4 className="font-headline-md text-xl sm:text-2xl text-[#1C1815] font-bold break-all sm:break-normal">
                        {STUDIO_INFO.instagramIntegrated.handle}
                      </h4>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold bg-[#F3ECE3] text-[#A66E4E] px-3 py-1 rounded-full shrink-0">
                    Centro Integrado
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#6E6259] leading-relaxed mb-6">
                  {STUDIO_INFO.instagramIntegrated.description}
                </p>

                <ul className="space-y-2 mb-8 text-xs sm:text-sm text-[#1C1815]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A66E4E] shrink-0" aria-hidden="true" />
                    <span>Transformações capilares, mechas, cortes e alinhamentos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A66E4E] shrink-0" aria-hidden="true" />
                    <span>Unhas em gel, manicure/pedicure, sobrancelhas e estética facial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A66E4E] shrink-0" aria-hidden="true" />
                    <span>Rotina das salas de Tricologia Capilar e Massoterapia</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={STUDIO_INFO.instagramIntegrated.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCTAClick("SocialHub_InstaCentroIntegrado")}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#12100E] hover:bg-[#C6934B] text-[#FAF7F2] hover:text-[#12100E] font-label-sm text-xs uppercase tracking-widest font-bold py-4 px-5 rounded-2xl transition-all shadow-md"
                >
                  <InstagramIcon className="w-4 h-4 text-[#C6934B]" />
                  <span>Seguir {STUDIO_INFO.instagramIntegrated.handle}</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>

                <a
                  href={STUDIO_INFO.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCTAClick("SocialHub_Facebook")}
                  className="inline-flex items-center justify-center gap-2 bg-[#F3ECE3] hover:bg-[#DFD5C8] text-[#1C1815] border border-[#C6934B]/30 font-label-sm text-xs uppercase tracking-widest font-semibold py-4 px-5 rounded-2xl transition-all"
                  aria-label="Página Oficial no Facebook Centro de Beleza Afrodite"
                >
                  <FacebookIcon className="w-4 h-4 text-[#A66E4E]" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
