import Script from "next/script";

export function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["HealthAndBeautyBusiness", "BeautySalon"],
    name: "Studio Michele Afrodite",
    alternateName: "Centro Integrado Michele Afrodite",
    description:
      "Studio Michele Afrodite no Pagani, Palhoça - SC (Pme Offices Tower). 4 ambientes exclusivos: Salão de Beleza (Cabelos, Unhas, Sobrancelhas), Tricologia, Massoterapia e Tatuagem Paramédica (Reconstrução de Aréolas, Camuflagem de Cicatrizes, Micropigmentação e Fine Line).",
    url: "https://studiomicheleafrodite.com.br",
    telephone: "+55-48-98411-1686",
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: "PIX, Cartão de Crédito, Cartão de Débito, Dinheiro",
    image: "https://studiomicheleafrodite.com.br/assets/espaco/decoracoesespaco.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Joci José Martins, 247, Pme Offices Tower, Pagani",
      addressLocality: "Palhoça",
      addressRegion: "SC",
      postalCode: "88132-148",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.6431,
      longitude: -48.6695,
    },
    openingHours: "Tu-Sa 09:00-20:00",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "11",
      reviewCount: "11",
    },
    founder: {
      "@type": "Person",
      name: "Michele Afrodite",
      jobTitle: "Artista Paramédica, Micropigmentadora e Tatuadora Fine Line",
    },
    sameAs: [
      "https://www.instagram.com/studiomicheleafrodite/",
      "https://www.instagram.com/centrointegradomicheleafrodite/",
      "https://www.facebook.com/Centrodebelezaafrodite/",
    ],
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
