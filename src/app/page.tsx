import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FourRoomsSection } from "@/components/sections/FourRoomsSection";
import { ParamedicalSpotlight } from "@/components/sections/ParamedicalSpotlight";
import { Services } from "@/components/sections/Services";
import { SocialProofAndInstagram } from "@/components/sections/SocialProofAndInstagram";
import { FAQ } from "@/components/sections/FAQ";
import { StudioAndLocation } from "@/components/sections/StudioAndLocation";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { FAQ_ITEMS } from "@/data/studioData";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Header />
      <main id="conteudo-principal" className="w-full mx-auto">
        <Hero />
        <FourRoomsSection />
        <ParamedicalSpotlight />
        <Services />
        <SocialProofAndInstagram />
        <FAQ />
        <StudioAndLocation />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
