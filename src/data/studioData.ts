export interface SpecialtyGroup {
  category: string;
  description: string;
  items: string[];
}

export interface StudioRoom {
  id: string;
  number: string;
  shortTitle: string;
  bookingLabel: string;
  fullTitle: string;
  badge: string;
  isCentralHub?: boolean;
  isDarkSignature?: boolean;
  description: string;
  ctaLabel: string;
  instagramHandle: "@studiomicheleafrodite" | "@centrointegradomicheleafrodite";
  instagramUrl: string;
  specs: string[];
  specialties: SpecialtyGroup[];
  procedures: {
    id: string;
    name: string;
    category: string;
    highlight?: string;
    duration?: string;
  }[];
}

export const STUDIO_INFO = {
  name: "Studio Michele Afrodite",
  founder: "Michele Afrodite",
  founderRole: "Artista Paramédica, Micropigmentadora e Tatuadora Fine Line",
  building: "Pme Offices Tower",
  streetAddress: "Rua Joci José Martins, nº 247",
  neighborhood: "Pagani",
  city: "Palhoça",
  state: "SC",
  postalCode: "88132-148",
  region: "Grande Florianópolis",
  fullAddress:
    "Pme Offices Tower — Rua Joci José Martins, nº 247, Bairro Pagani, Palhoça - SC, CEP 88132-148",
  hoursText: "Terça a Sábado, das 09h00 às 20h00",
  closedText: "Domingo e Segunda: Fechado",
  whatsappNumber: "5548984111686",
  whatsappDisplay: "(48) 98411-1686",
  whatsappFullDisplay: "+55 48 98411-1686",
  whatsappBaseUrl: "https://wa.me/5548984111686",
  instagramParamedical: {
    handle: "@studiomicheleafrodite",
    url: "https://www.instagram.com/studiomicheleafrodite/",
    title: "Tatuagem Paramédica, Micro & Fine Line",
    description:
      "Tatuagem Paramédica, Reconstrução de Aréolas, Camuflagem de Cicatrizes, Micropigmentação e Tattoo Fine Line.",
  },
  instagramIntegrated: {
    handle: "@centrointegradomicheleafrodite",
    url: "https://www.instagram.com/centrointegradomicheleafrodite/",
    title: "Estética, Salão, Tricologia & Massoterapia",
    description:
      "Dia a dia das 4 salas: Cabelos, Nails, Sobrancelhas, Facial, Tricologia e Massoterapia.",
  },
  facebook: {
    handle: "/Centrodebelezaafrodite",
    url: "https://www.facebook.com/Centrodebelezaafrodite/",
  },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Pme+Offices+Tower+Rua+Joci+Jose+Martins+247+Pagani+Palhoca+SC+88132-148",
  wazeUrl:
    "https://waze.com/ul?q=Rua%20Joci%20Jos%C3%A9%20Martins%2C%20247%2C%20Pagani%2C%20Palho%C3%A7a%20-%20SC",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=Rua%20Joci%20Jos%C3%A9%20Martins,%20247,%20Pagani,%20Palho%C3%A7a%20-%20SC,%2088132-148&t=&z=16&ie=UTF8&iwloc=&output=embed",
  socialProof: {
    googleRating: "5.0",
    googleReviewsCount: 11,
    approvalRate: "100%",
    portfolioPosts: "+970",
    followersCount: "+4.300",
  },
} as const;

export const STUDIO_ROOMS: StudioRoom[] = [
  {
    id: "sala-01",
    number: "SALA 01",
    shortTitle: "Salão Principal",
    bookingLabel: "Salão Principal (Cabelo, Unha de Mão/Pé, Sobrancelhas & Facial)",
    fullTitle: "Salão Principal — Cabelos, Unhas, Sobrancelhas & Estética Facial",
    badge: "Acesso Central & Recepção",
    isCentralHub: true,
    description:
      "O coração vibrante do Studio Michele Afrodite, que recepciona nossas clientes e conecta todo o espaço. Dedicado à beleza completa com técnicas modernas e produtos de alta performance.",
    ctaLabel: "Agendar Cabelo, Unhas ou Sobrancelhas",
    instagramHandle: "@centrointegradomicheleafrodite",
    instagramUrl: "https://www.instagram.com/centrointegradomicheleafrodite/",
    specs: [
      "Acesso central e recepção para clientes",
      "Ambiente climatizado e aconchegante",
      "Linhas profissionais de alta performance",
    ],
    specialties: [
      {
        category: "Cabelos (Hair Design & Colorimetria)",
        description:
          "Cortes femininos personalizados, mechas criativas e iluminadas, coloração global, tratamentos de reconstrução, nutrição, alinhamento capilar e escovas modeladas.",
        items: [
          "Cortes femininos personalizados & Visagismo",
          "Mechas criativas, iluminadas & Loiros de luxo",
          "Coloração global & Tonalização de brilho",
          "Cronograma capilar: Reconstrução, Nutrição e Hidratação profunda",
          "Alinhamento capilar & Escovas modeladas",
        ],
      },
      {
        category: "Unhas (Nails — Mão e Pé)",
        description:
          "Manicure e pedicure tradicional e avançada, esmaltação em gel, alongamento de unhas, blindagem, spa dos pés e nail art delicada.",
        items: [
          "Manicure e Pedicure tradicional e avançada",
          "Alongamento de unhas & Blindagem estrutural",
          "Esmaltação em gel de longa duração",
          "Spa dos Pés relaxante & Nail Art delicada",
        ],
      },
      {
        category: "Sobrancelhas & Facial",
        description:
          "Design de sobrancelhas personalizado com visagismo, limpeza de pele e protocolos faciais revitalizantes.",
        items: [
          "Design de sobrancelhas com mapeamento e visagismo",
          "Limpeza de pele profunda e extração delicada",
          "Protocolos faciais revitalizantes e hidratação luminosa",
        ],
      },
    ],
    procedures: [
      { id: "corte-escova", name: "Corte Feminino Personalizado / Escova Modelada", category: "Cabelos", highlight: "Alta Procura" },
      { id: "mechas-colorimetria", name: "Mechas Criativas / Iluminadas & Colorimetria", category: "Cabelos", highlight: "Especialidade" },
      { id: "tratamento-alinhamento", name: "Reconstrução, Nutrição ou Alinhamento Capilar", category: "Cabelos" },
      { id: "manicure-pedicure", name: "Manicure e Pedicure (Mão e Pé)", category: "Unhas", highlight: "Clássico" },
      { id: "alongamento-gel", name: "Alongamento de Unhas / Esmaltação em Gel / Blindagem", category: "Unhas" },
      { id: "spa-pes", name: "Spa dos Pés & Nail Art Delicada", category: "Unhas" },
      { id: "design-sobrancelhas", name: "Design de Sobrancelhas com Visagismo", category: "Sobrancelhas & Facial" },
      { id: "limpeza-facial", name: "Limpeza de Pele & Protocolo Facial Revitalizante", category: "Sobrancelhas & Facial" },
    ],
  },
  {
    id: "sala-02",
    number: "SALA 02",
    shortTitle: "Tatuagem Paramédica & Fine Line",
    bookingLabel: "Tatuagem Paramédica, Micropigmentação & Tattoo Fine Line",
    fullTitle: "Sala de Tatuagem Paramédica, Micropigmentação & Fine Line",
    badge: "Assinatura Michele Afrodite",
    isDarkSignature: true,
    description:
      "Ambiente privativo, clínico e artístico comandado por Michele Afrodite, dedicado à restauração da autoestima através da dermopigmentação paramédica e tatuagens delicadas.",
    ctaLabel: "Solicitar Avaliação Paramédica / Orçamento de Tattoo",
    instagramHandle: "@studiomicheleafrodite",
    instagramUrl: "https://www.instagram.com/studiomicheleafrodite/",
    specs: [
      "Consultório privativo com biossegurança hospitalar",
      "Pigmentos estéreis e dermógrafos de precisão milimétrica",
      "Atendimento reservado e acolhimento empático com Michele Afrodite",
    ],
    specialties: [
      {
        category: "Reconstrução de Aréolas Mamárias",
        description:
          "Dermopigmentação paramédica realista 3D para mulheres pós-mastectomia ou cirurgias mamárias, redesenhando a aréola com perfeição de cor, textura e profundidade.",
        items: [
          "Técnica realista 3D com estudo individual de fototipo e colorimetria",
          "Atendimento acolhedor pós-mastectomia, reconstrução ou mamoplastia",
          "Redesenho completo de complexo aréolo-mamilar com efeito de relevo natural",
        ],
      },
      {
        category: "Camuflagem de Cicatrizes",
        description:
          "Procedimento paramédico avançado para suavizar e camuflar cicatrizes cirúrgicas (mamoplastia, abdominoplastia, cesárea) ou acidentais e estrias.",
        items: [
          "Suavização óptica de cicatrizes de mamoplastia, abdominoplastia e cesárea",
          "Tratamento e camuflagem de cicatrizes acidentais e estrias",
          "Avaliação criteriosa da maturação tecidual para máxima segurança",
        ],
      },
      {
        category: "Micropigmentação Estética",
        description:
          "Sobrancelhas hiper-realistas e revitalização labial com acabamento natural.",
        items: [
          "Sobrancelhas hiper-realistas fio a fio com leveza e naturalidade",
          "Revitalização e neutralização labial com efeito saudável",
        ],
      },
      {
        category: "Tatuagem Artística Fine Line",
        description:
          "Tatuagens convencionais em traço fino, delicado, minimalista e autoral.",
        items: [
          "Traço fino de alta precisão, botânicos, florais e caligrafia delicada",
          "Designs autorais exclusivos desenvolvidos sob medida para cada cliente",
        ],
      },
    ],
    procedures: [
      { id: "reconstrucao-areola", name: "Reconstrução de Aréola Mamária 3D (Paramédica)", category: "Paramédica", highlight: "Especialidade Assinatura" },
      { id: "camuflagem-cicatrizes", name: "Camuflagem de Cicatrizes (Mamoplastia, Abdominoplastia, Cesárea) ou Estrias", category: "Paramédica", highlight: "Paramédica" },
      { id: "micro-sobrancelhas", name: "Micropigmentação de Sobrancelhas Hiper-realista", category: "Micropigmentação" },
      { id: "micro-labial", name: "Revitalização / Micropigmentação Labial", category: "Micropigmentação" },
      { id: "tattoo-fineline", name: "Tatuagem Artística Fine Line (Orçamento Autoral)", category: "Tattoo Fine Line", highlight: "Traço Fino" },
    ],
  },
  {
    id: "sala-03",
    number: "SALA 03",
    shortTitle: "Tricologia & Terapia Capilar",
    bookingLabel: "Tricologia (Terapia e Saúde Capilar)",
    fullTitle: "Sala de Tricologia & Terapia Capilar",
    badge: "Diagnóstico & Saúde Capilar",
    description:
      "Consultório privativo focado no diagnóstico científico e tratamento das disfunções do couro cabeludo e da haste capilar.",
    ctaLabel: "Agendar Avaliação de Tricologia",
    instagramHandle: "@centrointegradomicheleafrodite",
    instagramUrl: "https://www.instagram.com/centrointegradomicheleafrodite/",
    specs: [
      "Tricoscopia digital de alta precisão",
      "Ambiente clínico silencioso e reservado",
      "Protocolos personalizados para saúde do couro cabeludo",
    ],
    specialties: [
      {
        category: "Diagnóstico & Avaliação Tricológica",
        description:
          "Avaliação tricológica detalhada do couro cabeludo e folículo piloso para identificar a causa raiz de cada disfunção.",
        items: [
          "Anamnese clínica e tricoscopia digital do couro cabeludo",
          "Mapeamento personalizado de saúde folicular e haste capilar",
        ],
      },
      {
        category: "Tratamento de Disfunções Capilares",
        description:
          "Tratamentos para queda capilar (alopecia, eflúvio), dermatite, sensibilidade pós-química, oleosidade excessiva e recuperação de fios fragilizados.",
        items: [
          "Controle de queda capilar (alopecia androgenética, eflúvio telógeno)",
          "Tratamento de dermatite seborreica, descamação e oleosidade excessiva",
          "Recuperação de sensibilidade pós-química e fios severamente fragilizados",
        ],
      },
      {
        category: "Protocolos de Estímulo & Detox",
        description:
          "Protocolos de detox capilar, oxigenação e estímulo ao crescimento saudável.",
        items: [
          "Detox capilar profundo e desobstrução folicular",
          "Oxigenação, fotobiomodulação e estímulo ao crescimento saudável",
        ],
      },
    ],
    procedures: [
      { id: "avaliacao-tricologica", name: "Avaliação Tricológica Detalhada do Couro Cabeludo", category: "Diagnóstico", highlight: "Passo Inicial" },
      { id: "tratamento-queda", name: "Protocolo para Queda Capilar (Alopecia / Eflúvio)", category: "Terapia Capilar" },
      { id: "tratamento-dermatite", name: "Tratamento para Dermatite, Oleosidade ou Sensibilidade Pós-Química", category: "Terapia Capilar" },
      { id: "detox-oxigenacao", name: "Detox Capilar, Oxigenação & Estímulo ao Crescimento", category: "Estímulo" },
    ],
  },
  {
    id: "sala-04",
    number: "SALA 04",
    shortTitle: "Massoterapia & Bem-Estar",
    bookingLabel: "Massoterapia (Relaxante, Terapêutica & Drenagem)",
    fullTitle: "Sala de Massoterapia & Bem-Estar Corporal",
    badge: "Relaxamento & Remodelagem",
    description:
      "Ambiente reservado e acolhedor projetado para o relaxamento profundo, alívio de dores e remodelagem corporal.",
    ctaLabel: "Agendar Sessão de Massoterapia",
    instagramHandle: "@centrointegradomicheleafrodite",
    instagramUrl: "https://www.instagram.com/centrointegradomicheleafrodite/",
    specs: [
      "Maca ergonômica com aquecimento sob medida",
      "Aromaterapia e ambientação sensorial relaxante",
      "Privacidade absoluta para tratamentos corporais",
    ],
    specialties: [
      {
        category: "Massagem Relaxante & Anti-Stress",
        description:
          "Manobras suaves e envolventes em ambiente climatizado com aromaterapia para desacelerar corpo e mente.",
        items: [
          "Massagem Relaxante corporal completa",
          "Protocolo Anti-stress para fadiga física e mental",
        ],
      },
      {
        category: "Massagem Terapêutica",
        description:
          "Massagem Terapêutica para alívio de tensões musculares e dores localizadas.",
        items: [
          "Liberação de nódulos de tensão cervical, lombar e ombros",
          "Alívio direcionado para dores musculares e sobrecarga postural",
        ],
      },
      {
        category: "Drenagem Linfática & Modeladora",
        description:
          "Drenagem Linfática Manual (redução de retenção líquida e cuidado pós-operatório) e Massagem Modeladora.",
        items: [
          "Drenagem Linfática Manual para redução de edema e retenção líquida",
          "Cuidado especializado de drenagem pós-operatória",
          "Massagem Modeladora para contorno e estímulo circulatório",
        ],
      },
    ],
    procedures: [
      { id: "massagem-relaxante", name: "Massagem Relaxante & Anti-stress", category: "Relaxamento", highlight: "Mais Pedida" },
      { id: "massagem-terapeutica", name: "Massagem Terapêutica (Alívio de Dores e Tensões)", category: "Terapêutica" },
      { id: "drenagem-linfatica", name: "Drenagem Linfática Manual / Pós-Operatório", category: "Drenagem" },
      { id: "massagem-modeladora", name: "Massagem Modeladora Corporal", category: "Corporal" },
    ],
  },
];

export const GOOGLE_REVIEWS = [
  {
    id: "review-1",
    author: "Fernanda M.",
    role: "Paciente de Tatuagem Paramédica",
    roomTag: "Sala 02 • Tatuagem Paramédica",
    rating: 5,
    date: "Avaliação Verificada no Google",
    text: "A Michele tem mãos de fada e um coração gigante. Fiz a reconstrução de aréola e camuflagem da cicatriz pós-cirúrgica e o resultado ficou tão realista que me devolveu a alegria de me olhar no espelho. Ambiente impecável no Pagani!",
  },
  {
    id: "review-2",
    author: "Carolina S.",
    role: "Cliente Salão Principal & Nails",
    roomTag: "Sala 01 • Cabelo, Unhas & Sobrancelhas",
    rating: 5,
    date: "Avaliação Verificada no Google",
    text: "O melhor estúdio da Grande Florianópolis! Você entra pelo salão principal que é lindo e super aconchegante, faz mechas, pé e mão e design de sobrancelhas no mesmo lugar com profissionais maravilhosas. Nota 1000!",
  },
  {
    id: "review-3",
    author: "Patrícia L.",
    role: "Paciente de Tricologia & Massoterapia",
    roomTag: "Salas 03 & 04 • Tricologia e Massoterapia",
    rating: 5,
    date: "Avaliação Verificada no Google",
    text: "Tratei minha queda capilar pós-química na sala de Tricologia e aproveito sempre para fazer drenagem e massagem relaxante na sala de Massoterapia. Um centro integrado completo, organizado e de altíssimo padrão.",
  },
  {
    id: "review-4",
    author: "Juliana R.",
    role: "Cliente Tattoo Fine Line & Micropigmentação",
    roomTag: "Sala 02 • Fine Line & Micro",
    rating: 5,
    date: "Avaliação Verificada no Google",
    text: "Traço mais fino e delicado que já vi! Fiz minha tatuagem fine line e a micropigmentação labial com a Michele Afrodite. Precisão cirúrgica, higiene impecável e atendimento super atencioso do início ao fim.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Onde fica localizado o Studio Michele Afrodite?",
    answer:
      "Estamos localizados em um edifício comercial de alto padrão no coração do bairro Pagani: Pme Offices Tower — Rua Joci José Martins, nº 247, Bairro Pagani, Palhoça - SC, CEP 88132-148 (Grande Florianópolis). Contamos com fácil acesso, segurança e estacionamento nas proximidades.",
  },
  {
    question:
      "Como funciona a avaliação para Tatuagem Paramédica (Reconstrução de Aréolas e Camuflagem de Cicatrizes)?",
    answer:
      "A avaliação é conduzida de forma 100% privativa, empática e individualizada pela fundadora Michele Afrodite na Sala 02. Analisamos o histórico cirúrgico (mastectomia, mamoplastia, abdominoplastia, cesárea ou cicatrizes acidentais), o tempo de maturação da cicatriz e o fototipo da pele para planejar a técnica realista 3D ou camuflagem ideal. Você pode iniciar o pré-atendimento enviando uma mensagem pelo nosso Concierge no WhatsApp.",
  },
  {
    question: "Como o estúdio é organizado internamente?",
    answer:
      "O Studio Michele Afrodite foi arquitetado em 4 Salas Especializadas integradas: a Sala 01 é o nosso Salão Principal (Cabelos, Unhas de Mão/Pé, Sobrancelhas e Estética Facial), que recepciona nossas clientes com todo conforto e dá acesso direto às outras 3 salas privativas: Sala 02 (Tatuagem Paramédica, Micropigmentação & Fine Line), Sala 03 (Tricologia & Terapia Capilar) e Sala 04 (Massoterapia & Bem-Estar Corporal).",
  },
  {
    question: "Quais são os horários de atendimento?",
    answer:
      "Atendemos de Terça a Sábado, das 09h00 às 20h00 (Domingo e Segunda permanecemos fechados). Recomendamos agendar com antecedência pelo nosso WhatsApp oficial (48) 98411-1686 para garantir os melhores horários na sua agenda.",
  },
  {
    question: "Posso realizar procedimentos em mais de uma sala no mesmo dia?",
    answer:
      "Sim! Essa é uma das maiores vantagens da nossa estrutura multidisciplinar. Você pode combinar, por exemplo, uma sessão de Tricologia ou Massoterapia com escova, mechas, manicure/pedicure e sobrancelhas no Salão Principal em um único dia de cuidado integrado. Basta selecionar os procedimentos desejados no nosso Construtor de Agendamento.",
  },
];

export const BOOKING_DAYS = [
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Qualquer dia disponível (Terça a Sábado)",
];

export const BOOKING_PERIODS = [
  { id: "manha", label: "Manhã (09h - 12h)" },
  { id: "tarde", label: "Tarde (12h - 17h)" },
  { id: "noite", label: "Noite (17h - 20h)" },
];

export function buildWhatsAppBookingUrl(params: {
  name: string;
  roomLabel: string;
  procedures: string[];
  day: string;
  period: string;
}): string {
  const cleanName = params.name.trim() || "Cliente";
  const proceduresList =
    params.procedures.length > 0
      ? params.procedures.join(", ")
      : "Avaliação / Orientação Personalizada";
  const schedulePref = `${params.day} / ${params.period}`;

  const message = `Olá! Vim pelo site oficial do Studio Michele Afrodite. Meu nome é ${cleanName}. Gostaria de agendar/receber informações sobre: • Sala: ${params.roomLabel} • Procedimento(s): ${proceduresList} • Preferência de horário: ${schedulePref}.`;

  return `${STUDIO_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}
