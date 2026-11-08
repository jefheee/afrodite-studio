import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { BookingProvider } from "@/context/BookingContext";
import { BookingConciergeModal } from "@/components/booking/BookingConcierge";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://studiomicheleafrodite.com.br";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Studio Michele Afrodite | Estética, Beleza, Tricologia, Massoterapia e Tatuagem Paramédica em Palhoça",
    template: "%s | Studio Michele Afrodite",
  },
  description:
    "Studio Michele Afrodite no Pagani, Palhoça - SC (Pme Offices Tower). 4 ambientes exclusivos: Salão de Beleza (Cabelos, Unhas, Sobrancelhas), Tricologia, Massoterapia e Tatuagem Paramédica (Reconstrução de Aréolas, Camuflagem de Cicatrizes, Micropigmentação e Fine Line).",
  keywords: [
    "Studio Michele Afrodite",
    "Tatuagem Paramédica Palhoça",
    "Reconstrução de Aréolas Florianópolis",
    "Camuflagem de Cicatrizes SC",
    "Tatuagem Fine Line Palhoça",
    "Tricologia Palhoça Pagani",
    "Massoterapia Pagani Palhoça",
    "Salão de Beleza Pagani Palhoça",
    "Micropigmentação Palhoça",
    "Pme Offices Tower estética",
  ],
  authors: [{ name: "Michele Afrodite" }],
  creator: "Studio Michele Afrodite",
  publisher: "Studio Michele Afrodite",
  formatDetection: {
    telephone: true,
    email: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Studio Michele Afrodite",
    title:
      "Studio Michele Afrodite | Estética, Beleza, Tricologia, Massoterapia e Tatuagem Paramédica em Palhoça",
    description:
      "Studio Michele Afrodite no Pagani, Palhoça - SC (Pme Offices Tower). 4 ambientes exclusivos: Salão de Beleza (Cabelos, Unhas, Sobrancelhas), Tricologia, Massoterapia e Tatuagem Paramédica (Reconstrução de Aréolas, Camuflagem de Cicatrizes, Micropigmentação e Fine Line).",
    images: [
      {
        url: "/assets/espaco/decoracoesespaco.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Michele Afrodite — Estética, Saúde e Arte Paramédica no Pagani, Palhoça/SC",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Studio Michele Afrodite | Estética, Beleza, Tricologia, Massoterapia e Tatuagem Paramédica em Palhoça",
    description:
      "Studio Michele Afrodite no Pagani, Palhoça - SC (Pme Offices Tower). 4 salas especializadas em Beleza, Tricologia, Massoterapia e Tatuagem Paramédica & Fine Line.",
    images: ["/assets/espaco/decoracoesespaco.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakarta.variable} ${cormorantGaramond.variable}`}
    >
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}

      <body className="bg-[#FAF7F2] text-[#1C1815] antialiased selection:bg-[#C6934B] selection:text-[#12100E]">
        <LocalBusinessSchema />
        <BookingProvider>
          {children}
          <BookingConciergeModal />
        </BookingProvider>

        {META_PIXEL_ID ? (
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
        ) : null}

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
