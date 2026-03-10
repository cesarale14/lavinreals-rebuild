import { useState, useEffect, useRef, useCallback } from "react";

// ─── TRANSLATIONS ────────────────────────────────────────────
const T = {
  es: {
    nav: { cartera: "Cartera", contacto: "Contacto", acerca: "Acerca", noticias: "Noticias", cta: "Agenda una Consulta Privada", phone: "+34 605 237 593" },
    hero: {
      title: "Cartera de Suelo Estratégico en la Comunidad de Madrid",
      sub: "Residencial, Terciario y Dotacional",
      btn1: "Descubre Nuestra Cartera Exclusiva",
      btn2: "Ponte en contacto con nosotros",
      stat1Label: "en superficie edificable",
      stat1Unit: "m²",
      stat2Label: "viviendas autorizadas",
      stat3Label: "Parcelas Prospectadas",
    },
    benefits: {
      title: "Nuestros Beneficios",
      desc: "Trabajamos con promotores, fondos de inversión, family offices y propietarios particulares. Gracias a nuestra selección rigurosa y profundo conocimiento del mercado de Madrid y áreas prime, ofrecemos una amplia cartera de suelo y con línea directa con el vendedor.",
      b1t: "Análisis técnico",
      b1d: "Toda la información urbanística, edificabilidad y riesgos ya validada antes de presentarla.",
      b2t: "Cartera exclusiva y off-market",
      b2d: "Acceso privilegiado a suelos que no se publicitan en portales ni llegan a competencia.",
      b3t: "Acompañamiento integral",
      b3d: "Desde la identificación de la parcela hasta el cierre de la operación, con máxima discreción y eficiencia.",
    },
    marquee: "Residencial • Terciario • Industrial • Finalista • No Finalista",
    portfolio: {
      title: "Cartera de Suelos para Construir",
      details: "Detalles",
      supDisp: "Superficie Disponible",
      supEdif: "Superficie edificable",
      vivAut: "Viviendas autorizadas",
      viewAll: "Ver Todos",
    },
    regions: {
      title: "Comunidad de Madrid y Áreas Estratégicas",
      desc: "Concentramos nuestra cartera en la Comunidad de Madrid y sus municipios de mayor crecimiento y demanda residencial, ofreciendo suelo finalista y en gestión avanzada en las zonas de mayor interés para promotores e inversores institucionales.",
      madrid: "Madrid",
      otras: "Otras Áreas",
      listings: "Listados",
    },
    whySell: {
      title: "¿Por qué vender o invertir con nosotros ahora?",
      desc: "Conectamos parcelas excepcionales con compradores cualificados a través de nuestra exclusiva red internacional. El mercado español vive el mayor déficit de vivienda en décadas: el momento perfecto para maximizar su suelo",
      p1t: "Distribución internacional selectiva",
      p1d: "Compradores activos en múltiples mercados internacionales",
      p2t: "Posicionamiento en el ciclo actual",
      p2d: "España necesita +150.000 viviendas al año y la oferta de suelo finalista es mínima: máxima revalorización garantizada",
      p3t: "Trato directo y confidencial",
      p3d: "Máxima discreción y control total del proceso por parte del propietario",
      cta: "Hablemos de su próximo proyecto",
      ctaSub: "Respuesta en menos de 24 horas",
      stat1: "edificabilidad en cartera",
      stat2: "Viviendas por construir",
      btnConsulta: "Solicitar consulta privada",
    },
    observatorio: {
      title: "Observatorio del Mercado de Suelo",
      desc: "Noticias en tiempo real de la evolución urbanística, nuevas bolsas de suelo, cambios normativos y tendencias de demanda residencial y terciaria en España.",
      info: "Información estratégica que impacta directamente en el valor de sus activos",
      infoDesc: "Seguimiento semanal de nuevas bolsas de suelo, modificaciones urbanísticas, estadísticas oficiales de demanda residencial, operaciones relevantes y cambios normativos que afectan a la edificabilidad y rentabilidad del suelo en España.",
      btn: "Acceder al Observatorio completo →",
    },
    contactSection: {
      title: "Ponte en Contacto con Nosotros para una Consulta Privada",
      office: "Oficina",
      officeAddr: "C/Gobelas, 35, El Plantío, 28023 Madrid – HQ La Florida",
      consultaPresencial: "Consulta en persona",
      consultasConf: "Consultas confidenciales disponibles",
    },
    form: {
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Número de Teléfono",
      reason: "Razón por tu contacto",
      reasons: ["Consulta sobre una parcela", "Programar visita", "Consulta de Inversión", "Vender mi Propiedad", "Pregunta General"],
      message: "¿Cómo te podemos ayudar?",
      submit: "Enviar Mensaje",
      title: "Solicitar Consulta Privada",
    },
    footer: {
      desc: "Consultora independiente líder en gestión y comercialización discrecional de suelo urbanizable en España.",
      menu: "Menú",
      hablemos: "Hablemos",
      hablemosDesc: "Agenda una consulta privada hoy",
      consultar: "Consultar",
      copy: "© 2024 Lavinreals · NIF B-16449241 · Madrid, España",
      copy2: "Cartera privada de suelo urbanizable exclusivamente para inversores, promotores y particulares.",
      legal: "Legal",
    },
    // Cartera page
    carteraPage: {
      title: "Cartera De Parcelas Disponibles",
      desc: "Listado de edificabilidad total disponible por provincia. Contáctanos para información al detalle de parcelas disponibles.",
      filterCity: "Selecciona Ciudad",
      filterArea: "Filtrar por área:",
      allAreas: "Todas las áreas",
      notFound: "¿No encuentra el área de su interés en nuestra cartera actual?",
      notFoundCta: "Contáctenos para información sobre oportunidades exclusivas y off-market.",
    },
    // About page
    aboutPage: {
      title: "Acerca de Nosotros",
      mision: "Nuestra Misión",
      misionDesc: "Especialistas independientes en gestión y comercialización discrecional de suelo urbanizable.",
      excelencia: "Excelencia Establecida",
      excelenciaP1: "Identificamos, seleccionamos y comercializamos suelo terciario/dotacional y residencial para facilitar la creación de proyectos inmobiliarios que den respuesta a la creciente demanda de vivienda en España.",
      excelenciaP2: "Trabajamos con rigor técnico, transparencia y visión a largo plazo, generando valor sostenible para propietarios, promotores e inversores, y contribuyendo al desarrollo urbanístico que tanto necesitamos.",
      quote: "La misión de Lavin Reals es atajar la crisis de la vivienda, mediante la conquista.",
      quoteBy: "— Pablo Lavin, Fundador y CEO",
      connectDesc: "Conectamos suelo excepcional con los principales actores institucionales del sector, siempre bajo los principios de exclusividad, confidencialidad y máxima profesionalidad.",
      whyTitle: "Por qué trabajar con nosotros",
      whySub: "Tres pilares que nos diferencian en el mercado institucional de suelo",
      p1t: "Red internacional consolidada",
      p1d: "Acceso directo a promotores y fondos de inversión activos en múltiples mercados internacionales.",
      p2t: "Cartera estratégica y seleccionada",
      p2d: "Solo incorporamos suelo con máxima certeza jurídica y potencial de revalorización.",
      p3t: "Confidencialidad y exclusividad total",
      p3d: "Operamos 100% off-market y solo en régimen de exclusividad controlada.",
    },
    // Contact page
    contactPage: {
      title: "Contacto",
      desc: "Estamos a su disposición para estudiar cualquier operación de suelo, tanto si desea incorporar una parcela a nuestra cartera como si busca activos que encajen en su estrategia de inversión.",
      respuesta: "Respuesta personalizada en menos de 24 horas laborables",
      dir: "Dirección",
      dirVal: "C/Gobelas, 35, El Plantío, 28023 Madrid – HQ La Florida",
      horario: "Lunes a Viernes 9AM-6PM",
      citaPrevia: "solo con cita previa",
      agendaCita: "Agenda una Cita",
      llamanos: "Llámanos",
      llamaAhora: "Llama Ahora",
      correo: "Contáctanos por Correo",
      correoExcl: "Consulta exclusiva",
      correoResp: "Respuesta en menos de 2 horas",
      contactanos: "Contáctanos",
      expTitle: "Nuestra experiencia",
      expDesc: "Especializados en gestión y comercialización discrecional de suelo urbanizable. Disponemos de la cartera más amplia y estratégica de España y trabajamos con promotores institucionales, fondos de inversión, particulares y family offices.",
      expQuote: "Queremos ser el socio de referencia en España para promotores y fondos: la empresa que ofrece las mejores oportunidades de suelo, el mayor conocimiento de mercado y un compromiso absoluto con el desarrollo responsable.",
      expQuoteBy: "— Pablo Lavin, Founder & CEO",
      idiomasTitle: "Idiomas que hablamos",
      idiomas: "Inglés • Español • Francés",
      idiomasDesc: "Nuestro equipo atiende en múltiples idiomas. Servimos habitualmente a clientes alrededor del mundo con total comprensión cultural y operativa.",
      faqTitle: "Preguntas frecuentes",
      faqSub: "Resolvemos las dudas más habituales de propietarios e inversores institucionales",
    },
    // News page
    newsPage: {
      title: "Observatorio del Mercado de Suelo",
      sub: "Análisis y actualizaciones del sector inmobiliario en Madrid y España",
      recent: "Artículos Recientes",
      loading: "Cargando noticias en tiempo real...",
      ctaTitle: "Ponte en Contacto con Nosotros Hoy",
      ctaSub: "Disponible de Lunes a Viernes 9am - 4pm",
      liveLabel: "EN VIVO",
      readMore: "Leer más",
    },
  },
  en: {
    nav: { cartera: "Portfolio", contacto: "Contact", acerca: "About", noticias: "News", cta: "Schedule a Private Consultation", phone: "+34 605 237 593" },
    hero: {
      title: "Strategic Land Portfolio in the Community of Madrid",
      sub: "Residential, Tertiary and Dotational",
      btn1: "Discover Our Exclusive Portfolio",
      btn2: "Get in touch with us",
      stat1Label: "in buildable area",
      stat1Unit: "m²",
      stat2Label: "authorized dwellings",
      stat3Label: "Prospected Plots",
    },
    benefits: {
      title: "Our Benefits",
      desc: "We work with developers, investment funds, family offices and private owners. Thanks to our rigorous selection and deep knowledge of the Madrid market and prime areas, we offer an extensive land portfolio with direct line to the seller.",
      b1t: "Technical Analysis",
      b1d: "All urban planning information, buildability and risks validated before presentation.",
      b2t: "Exclusive & Off-market Portfolio",
      b2d: "Privileged access to land not advertised on portals or reaching competition.",
      b3t: "Comprehensive Support",
      b3d: "From plot identification to deal closing, with maximum discretion and efficiency.",
    },
    marquee: "Residential • Tertiary • Industrial • Final • Non-Final",
    portfolio: {
      title: "Land Portfolio for Construction",
      details: "Details",
      supDisp: "Available Area",
      supEdif: "Buildable Area",
      vivAut: "Authorized Dwellings",
      viewAll: "View All",
    },
    regions: {
      title: "Community of Madrid & Strategic Areas",
      desc: "We concentrate our portfolio in the Community of Madrid and its municipalities with the highest growth and residential demand, offering final and advanced management land in the areas of greatest interest for developers and institutional investors.",
      madrid: "Madrid",
      otras: "Other Areas",
      listings: "Listings",
    },
    whySell: {
      title: "Why sell or invest with us now?",
      desc: "We connect exceptional plots with qualified buyers through our exclusive international network. The Spanish market faces the largest housing deficit in decades: the perfect time to maximize your land.",
      p1t: "Selective international distribution",
      p1d: "Active buyers in multiple international markets",
      p2t: "Positioning in the current cycle",
      p2d: "Spain needs +150,000 homes per year and the supply of final land is minimal: maximum guaranteed appreciation",
      p3t: "Direct and confidential treatment",
      p3d: "Maximum discretion and total control of the process by the owner",
      cta: "Let's talk about your next project",
      ctaSub: "Response within 24 hours",
      stat1: "buildability in portfolio",
      stat2: "Dwellings to build",
      btnConsulta: "Request private consultation",
    },
    observatorio: {
      title: "Land Market Observatory",
      desc: "Real-time news on urban development, new land pools, regulatory changes and residential and tertiary demand trends in Spain.",
      info: "Strategic information that directly impacts the value of your assets",
      infoDesc: "Weekly monitoring of new land pools, urban planning modifications, official residential demand statistics, relevant transactions and regulatory changes affecting buildability and land profitability in Spain.",
      btn: "Access the full Observatory →",
    },
    contactSection: {
      title: "Contact Us for a Private Consultation",
      office: "Office",
      officeAddr: "C/Gobelas, 35, El Plantío, 28023 Madrid – HQ La Florida",
      consultaPresencial: "In-person consultation",
      consultasConf: "Confidential consultations available",
    },
    form: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      reason: "Reason for contact",
      reasons: ["Plot inquiry", "Schedule visit", "Investment inquiry", "Sell my property", "General question"],
      message: "How can we help you?",
      submit: "Send Message",
      title: "Request Private Consultation",
    },
    footer: {
      desc: "Independent leading consultant in discreet management and marketing of developable land in Spain.",
      menu: "Menu",
      hablemos: "Let's Talk",
      hablemosDesc: "Schedule a private consultation today",
      consultar: "Inquire",
      copy: "© 2024 Lavinreals · NIF B-16449241 · Madrid, Spain",
      copy2: "Private portfolio of developable land exclusively for investors, developers and individuals.",
      legal: "Legal",
    },
    carteraPage: {
      title: "Available Plot Portfolio",
      desc: "Total buildability listing by province. Contact us for detailed plot information.",
      filterCity: "Select City",
      filterArea: "Filter by area:",
      allAreas: "All areas",
      notFound: "Can't find the area you're looking for in our current portfolio?",
      notFoundCta: "Contact us for exclusive and off-market opportunities.",
    },
    aboutPage: {
      title: "About Us",
      mision: "Our Mission",
      misionDesc: "Independent specialists in discreet management and marketing of developable land.",
      excelencia: "Established Excellence",
      excelenciaP1: "We identify, select and market tertiary/dotational and residential land to facilitate the creation of real estate projects that respond to the growing demand for housing in Spain.",
      excelenciaP2: "We work with technical rigor, transparency and long-term vision, generating sustainable value for owners, developers and investors, and contributing to the urban development we so need.",
      quote: "Lavin Reals' mission is to tackle the housing crisis, through conquest.",
      quoteBy: "— Pablo Lavin, Founder & CEO",
      connectDesc: "We connect exceptional land with the main institutional players in the sector, always under the principles of exclusivity, confidentiality and maximum professionalism.",
      whyTitle: "Why work with us",
      whySub: "Three pillars that differentiate us in the institutional land market",
      p1t: "Consolidated international network",
      p1d: "Direct access to developers and investment funds active in multiple international markets.",
      p2t: "Strategic and selected portfolio",
      p2d: "We only incorporate land with maximum legal certainty and revaluation potential.",
      p3t: "Total confidentiality and exclusivity",
      p3d: "We operate 100% off-market and only under controlled exclusivity.",
    },
    contactPage: {
      title: "Contact",
      desc: "We are at your disposal to study any land transaction, whether you wish to add a plot to our portfolio or you are looking for assets that fit your investment strategy.",
      respuesta: "Personalized response within 24 business hours",
      dir: "Address",
      dirVal: "C/Gobelas, 35, El Plantío, 28023 Madrid – HQ La Florida",
      horario: "Monday to Friday 9AM-6PM",
      citaPrevia: "by appointment only",
      agendaCita: "Schedule an Appointment",
      llamanos: "Call Us",
      llamaAhora: "Call Now",
      correo: "Contact by Email",
      correoExcl: "Exclusive consultation",
      correoResp: "Response within 2 hours",
      contactanos: "Contact Us",
      expTitle: "Our Experience",
      expDesc: "Specialized in discreet management and marketing of developable land. We have the most extensive and strategic portfolio in Spain and work with institutional developers, investment funds, individuals and family offices.",
      expQuote: "We want to be the reference partner in Spain for developers and funds: the company that offers the best land opportunities, the greatest market knowledge and an absolute commitment to responsible development.",
      expQuoteBy: "— Pablo Lavin, Founder & CEO",
      idiomasTitle: "Languages we speak",
      idiomas: "English • Spanish • French",
      idiomasDesc: "Our team serves in multiple languages. We regularly serve clients around the world with full cultural and operational understanding.",
      faqTitle: "FAQ",
      faqSub: "We answer the most common questions from owners and institutional investors",
    },
    newsPage: {
      title: "Land Market Observatory",
      sub: "Analysis and updates on the real estate sector in Madrid and Spain",
      recent: "Recent Articles",
      loading: "Loading real-time news...",
      ctaTitle: "Contact Us Today",
      ctaSub: "Available Monday to Friday 9am - 4pm",
      liveLabel: "LIVE",
      readMore: "Read more",
    },
  },
  fr: {
    nav: { cartera: "Portefeuille", contacto: "Contact", acerca: "À propos", noticias: "Actualités", cta: "Planifier une Consultation Privée", phone: "+34 605 237 593" },
    hero: {
      title: "Portefeuille Foncier Stratégique dans la Communauté de Madrid",
      sub: "Résidentiel, Tertiaire et Dotatif",
      btn1: "Découvrez Notre Portefeuille Exclusif",
      btn2: "Contactez-nous",
      stat1Label: "en surface constructible",
      stat1Unit: "m²",
      stat2Label: "logements autorisés",
      stat3Label: "Parcelles Prospectées",
    },
    benefits: {
      title: "Nos Avantages",
      desc: "Nous travaillons avec des promoteurs, des fonds d'investissement, des family offices et des propriétaires particuliers. Grâce à notre sélection rigoureuse et notre connaissance approfondie du marché de Madrid et des zones prime, nous offrons un large portefeuille foncier avec un lien direct avec le vendeur.",
      b1t: "Analyse technique",
      b1d: "Toutes les informations urbanistiques, la constructibilité et les risques validés avant présentation.",
      b2t: "Portefeuille exclusif et off-market",
      b2d: "Accès privilégié à des terrains non publiés sur les portails ni en concurrence.",
      b3t: "Accompagnement intégral",
      b3d: "De l'identification de la parcelle à la clôture de l'opération, avec discrétion et efficacité maximales.",
    },
    marquee: "Résidentiel • Tertiaire • Industriel • Finalisé • Non Finalisé",
    portfolio: {
      title: "Portefeuille Foncier pour la Construction",
      details: "Détails",
      supDisp: "Surface Disponible",
      supEdif: "Surface Constructible",
      vivAut: "Logements Autorisés",
      viewAll: "Voir Tout",
    },
    regions: {
      title: "Communauté de Madrid et Zones Stratégiques",
      desc: "Nous concentrons notre portefeuille dans la Communauté de Madrid et ses municipalités à plus forte croissance et demande résidentielle.",
      madrid: "Madrid",
      otras: "Autres Zones",
      listings: "Annonces",
    },
    whySell: {
      title: "Pourquoi vendre ou investir avec nous maintenant?",
      desc: "Nous connectons des parcelles exceptionnelles avec des acheteurs qualifiés via notre réseau international exclusif.",
      p1t: "Distribution internationale sélective",
      p1d: "Acheteurs actifs sur plusieurs marchés internationaux",
      p2t: "Positionnement dans le cycle actuel",
      p2d: "L'Espagne a besoin de +150 000 logements/an et l'offre de terrain final est minimale",
      p3t: "Traitement direct et confidentiel",
      p3d: "Discrétion maximale et contrôle total du processus par le propriétaire",
      cta: "Parlons de votre prochain projet",
      ctaSub: "Réponse en moins de 24 heures",
      stat1: "constructibilité en portefeuille",
      stat2: "Logements à construire",
      btnConsulta: "Demander une consultation privée",
    },
    observatorio: {
      title: "Observatoire du Marché Foncier",
      desc: "Actualités en temps réel sur l'évolution urbanistique, les nouvelles réserves foncières et les tendances de la demande en Espagne.",
      info: "Information stratégique impactant directement la valeur de vos actifs",
      infoDesc: "Suivi hebdomadaire des nouvelles réserves foncières, modifications urbanistiques et changements réglementaires affectant la constructibilité en Espagne.",
      btn: "Accéder à l'Observatoire complet →",
    },
    contactSection: {
      title: "Contactez-nous pour une Consultation Privée",
      office: "Bureau",
      officeAddr: "C/Gobelas, 35, El Plantío, 28023 Madrid – HQ La Florida",
      consultaPresencial: "Consultation en personne",
      consultasConf: "Consultations confidentielles disponibles",
    },
    form: {
      name: "Nom Complet",
      email: "Adresse Email",
      phone: "Numéro de Téléphone",
      reason: "Raison du contact",
      reasons: ["Renseignement parcelle", "Planifier visite", "Consultation investissement", "Vendre ma propriété", "Question générale"],
      message: "Comment pouvons-nous vous aider?",
      submit: "Envoyer le Message",
      title: "Demander une Consultation Privée",
    },
    footer: {
      desc: "Cabinet indépendant leader en gestion et commercialisation discrète de terrains urbanisables en Espagne.",
      menu: "Menu",
      hablemos: "Parlons",
      hablemosDesc: "Planifiez une consultation privée aujourd'hui",
      consultar: "Consulter",
      copy: "© 2024 Lavinreals · NIF B-16449241 · Madrid, Espagne",
      copy2: "Portefeuille privé de terrains urbanisables exclusivement pour investisseurs, promoteurs et particuliers.",
      legal: "Mentions légales",
    },
    carteraPage: {
      title: "Portefeuille de Parcelles Disponibles",
      desc: "Liste de constructibilité totale par province. Contactez-nous pour des informations détaillées.",
      filterCity: "Sélectionner Ville",
      filterArea: "Filtrer par zone:",
      allAreas: "Toutes les zones",
      notFound: "Vous ne trouvez pas la zone souhaitée dans notre portefeuille actuel?",
      notFoundCta: "Contactez-nous pour des opportunités exclusives et off-market.",
    },
    aboutPage: {
      title: "À Propos de Nous",
      mision: "Notre Mission",
      misionDesc: "Spécialistes indépendants en gestion et commercialisation discrète de terrains urbanisables.",
      excelencia: "Excellence Établie",
      excelenciaP1: "Nous identifions, sélectionnons et commercialisons des terrains tertiaires/dotatifs et résidentiels pour faciliter la création de projets immobiliers répondant à la demande croissante de logements en Espagne.",
      excelenciaP2: "Nous travaillons avec rigueur technique, transparence et vision à long terme, générant une valeur durable pour les propriétaires, promoteurs et investisseurs.",
      quote: "La mission de Lavin Reals est de s'attaquer à la crise du logement, par la conquête.",
      quoteBy: "— Pablo Lavin, Fondateur et PDG",
      connectDesc: "Nous connectons des terrains exceptionnels avec les principaux acteurs institutionnels du secteur.",
      whyTitle: "Pourquoi travailler avec nous",
      whySub: "Trois piliers qui nous différencient sur le marché foncier institutionnel",
      p1t: "Réseau international consolidé",
      p1d: "Accès direct aux promoteurs et fonds d'investissement actifs sur plusieurs marchés internationaux.",
      p2t: "Portefeuille stratégique et sélectionné",
      p2d: "Nous n'incorporons que des terrains avec certitude juridique maximale et potentiel de revalorisation.",
      p3t: "Confidentialité et exclusivité totales",
      p3d: "Nous opérons 100% off-market et uniquement en exclusivité contrôlée.",
    },
    contactPage: {
      title: "Contact",
      desc: "Nous sommes à votre disposition pour étudier toute opération foncière.",
      respuesta: "Réponse personnalisée sous 24 heures ouvrables",
      dir: "Adresse",
      dirVal: "C/Gobelas, 35, El Plantío, 28023 Madrid – HQ La Florida",
      horario: "Lundi au Vendredi 9h-18h",
      citaPrevia: "sur rendez-vous uniquement",
      agendaCita: "Prendre Rendez-vous",
      llamanos: "Appelez-nous",
      llamaAhora: "Appeler Maintenant",
      correo: "Contactez par Email",
      correoExcl: "Consultation exclusive",
      correoResp: "Réponse sous 2 heures",
      contactanos: "Contactez-nous",
      expTitle: "Notre Expérience",
      expDesc: "Spécialisés dans la gestion et commercialisation discrète de terrains urbanisables.",
      expQuote: "Nous voulons être le partenaire de référence en Espagne pour les promoteurs et les fonds.",
      expQuoteBy: "— Pablo Lavin, Fondateur et PDG",
      idiomasTitle: "Langues parlées",
      idiomas: "Anglais • Espagnol • Français",
      idiomasDesc: "Notre équipe sert en plusieurs langues avec une compréhension culturelle et opérationnelle totale.",
      faqTitle: "FAQ",
      faqSub: "Nous répondons aux questions les plus fréquentes des propriétaires et investisseurs",
    },
    newsPage: {
      title: "Observatoire du Marché Foncier",
      sub: "Analyses et actualités du secteur immobilier à Madrid et en Espagne",
      recent: "Articles Récents",
      loading: "Chargement des actualités en temps réel...",
      ctaTitle: "Contactez-nous Aujourd'hui",
      ctaSub: "Disponible du lundi au vendredi 9h - 16h",
      liveLabel: "EN DIRECT",
      readMore: "Lire la suite",
    },
  },
};

// ─── PARCELAS DATA ───────────────────────────────────────────
const PARCELAS_MADRID = [
  { name: "Colmenar Viejo", supDisp: 45200, supEdif: 38700, viv: 320, type: "Residencial", city: "Madrid" },
  { name: "Sanchinarro", supDisp: 12800, supEdif: 11500, viv: null, type: "Terciario", city: "Madrid" },
  { name: "Pozuelo de Alarcón", supDisp: 28400, supEdif: 24100, viv: 185, type: "Residencial", city: "Madrid" },
  { name: "Valdemoro", supDisp: 67300, supEdif: 58200, viv: 490, type: "Residencial", city: "Madrid" },
  { name: "Arroyomolinos", supDisp: 34500, supEdif: 29800, viv: 240, type: "Residencial", city: "Madrid" },
  { name: "Las Rosas", supDisp: 18900, supEdif: 16200, viv: 130, type: "Residencial", city: "Madrid" },
  { name: "Retamar de la Huerta", supDisp: 52100, supEdif: 44800, viv: 380, type: "Residencial", city: "Madrid" },
  { name: "El Escorial", supDisp: 23700, supEdif: 20100, viv: 165, type: "Residencial", city: "Madrid" },
  { name: "Villaviciosa de Odón", supDisp: 31200, supEdif: 26800, viv: 215, type: "Residencial", city: "Madrid" },
  { name: "Villafranca del Pardillo", supDisp: 19600, supEdif: 16900, viv: 140, type: "Residencial", city: "Madrid" },
  { name: "Boadilla del Monte", supDisp: 41800, supEdif: 35600, viv: 290, type: "Residencial", city: "Madrid" },
  { name: "Loeches", supDisp: 27400, supEdif: 23500, viv: 195, type: "Residencial", city: "Madrid" },
  { name: "Daganzo", supDisp: 38900, supEdif: 33400, viv: 275, type: "Residencial", city: "Madrid" },
  { name: "Algete", supDisp: 22100, supEdif: 18900, viv: 155, type: "Residencial", city: "Madrid" },
  { name: "Navalcarnero", supDisp: 44600, supEdif: 38200, viv: 315, type: "Residencial", city: "Madrid" },
  { name: "Alcobendas Valgrande", supDisp: 86400, supEdif: 74200, viv: 610, type: "Residencial", city: "Madrid" },
  { name: "Aravaca", supDisp: 15300, supEdif: 13100, viv: 108, type: "Residencial", city: "Madrid" },
  { name: "Ensanche de Vallecas", supDisp: 49800, supEdif: 42700, viv: 350, type: "Residencial", city: "Madrid" },
  { name: "Torrelodones", supDisp: 20500, supEdif: 17600, viv: 145, type: "Residencial", city: "Madrid" },
  { name: "Colmenarejo", supDisp: 16800, supEdif: 14400, viv: 118, type: "Residencial", city: "Madrid" },
];

const PARCELAS_OTRAS = [
  { name: "Murcia", supDisp: 72500, supEdif: 62100, viv: 510, type: "Residencial", city: "Otras Áreas" },
];

const ALL_PARCELAS = [...PARCELAS_MADRID, ...PARCELAS_OTRAS];

const TOTAL_EDIF = ALL_PARCELAS.reduce((s, p) => s + p.supEdif, 0);
const TOTAL_VIV = ALL_PARCELAS.reduce((s, p) => s + (p.viv || 0), 0);
const TOTAL_PARCELAS = ALL_PARCELAS.length;

// ─── FAQ DATA ────────────────────────────────────────────────
const FAQS_ES = [
  { q: "¿Trabajan también con suelo no finalista o en gestión?", a: "Sí. Gestionamos suelo en todas las fases: no finalista, en gestión avanzada y finalista listo para licencia. Cada tipología tiene su mercado específico." },
  { q: "¿Cómo garantizan la confidencialidad de mi parcela?", a: "Operamos 100% off-market. La información solo se comparte con compradores previamente cualificados y tras la firma de un acuerdo de confidencialidad." },
  { q: "¿Cuánto tiempo suele tardar la venta de una parcela finalista?", a: "En el ciclo actual, entre 2 y 6 meses desde la incorporación a nuestra cartera hasta el cierre de la operación, dependiendo del tamaño y ubicación." },
  { q: "¿Hay algún coste o exclusividad para incluir mi suelo en su cartera?", a: "No existe coste alguno para el propietario. Solo trabajamos en exclusividad para poder controlar el proceso y maximizar el precio." },
  { q: "¿Operan también fuera de la Comunidad de Madrid?", a: "Sí. Aunque Madrid concentra el 85% de nuestra cartera, gestionamos activamente suelo residencial y terciario en Andalucía, regiones de interés a las afueras de la Comunidad de Madrid." },
  { q: "¿Qué documentación necesitan para valorar mi suelo?", a: "Con el plano de situación, referencia catastral y nota simple ya podemos realizar una primera valoración gratuita y reservada en 48 horas." },
];
const FAQS_EN = [
  { q: "Do you also work with non-final or in-management land?", a: "Yes. We manage land in all phases: non-final, advanced management and final ready for license. Each type has its specific market." },
  { q: "How do you guarantee the confidentiality of my plot?", a: "We operate 100% off-market. Information is only shared with previously qualified buyers after signing a confidentiality agreement." },
  { q: "How long does the sale of a final plot usually take?", a: "In the current cycle, between 2 and 6 months from portfolio incorporation to deal closing, depending on size and location." },
  { q: "Is there any cost or exclusivity to include my land in your portfolio?", a: "There is no cost to the owner. We only work on exclusivity to control the process and maximize price." },
  { q: "Do you also operate outside the Community of Madrid?", a: "Yes. Although Madrid accounts for 85% of our portfolio, we actively manage residential and tertiary land in Andalusia and regions of interest outside Madrid." },
  { q: "What documentation do you need to value my land?", a: "With the location plan, cadastral reference and simple note, we can make a first free and confidential valuation within 48 hours." },
];
const FAQS_FR = [
  { q: "Travaillez-vous aussi avec des terrains non finalisés ou en gestion?", a: "Oui. Nous gérons des terrains à toutes les phases: non finalisé, en gestion avancée et finalisé prêt pour la licence." },
  { q: "Comment garantissez-vous la confidentialité de ma parcelle?", a: "Nous opérons 100% off-market. L'information n'est partagée qu'avec des acheteurs préalablement qualifiés après signature d'un accord de confidentialité." },
  { q: "Combien de temps prend habituellement la vente d'une parcelle finalisée?", a: "Dans le cycle actuel, entre 2 et 6 mois de l'incorporation au portefeuille à la clôture de l'opération." },
  { q: "Y a-t-il un coût ou exclusivité pour inclure mon terrain?", a: "Aucun coût pour le propriétaire. Nous travaillons uniquement en exclusivité pour contrôler le processus." },
  { q: "Opérez-vous aussi en dehors de la Communauté de Madrid?", a: "Oui. Bien que Madrid représente 85% de notre portefeuille, nous gérons activement des terrains en Andalousie et dans d'autres régions." },
  { q: "Quelle documentation faut-il pour évaluer mon terrain?", a: "Avec le plan de situation, la référence cadastrale et la note simple, nous pouvons faire une première évaluation gratuite sous 48 heures." },
];

// ─── COLORS / THEME ──────────────────────────────────────────
const C = {
  gold: "#C8A45C",
  goldLight: "#D4B574",
  goldDark: "#A68A3E",
  navy: "#0A1628",
  navyLight: "#101E36",
  navyMid: "#162844",
  dark: "#060E1A",
  white: "#FFFFFF",
  gray: "#8A96A8",
  grayLight: "#B8C1CE",
  grayDark: "#4A5568",
  bgSection: "#0C1A2E",
};

// ─── COUNT-UP HOOK ───────────────────────────────────────────
function useCountUp(end, duration = 2000, trigger = true) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * end));
      if (progress < 1) ref.current = requestAnimationFrame(step);
    };
    ref.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(ref.current);
  }, [end, duration, trigger]);
  return val;
}

// ─── INTERSECTION OBSERVER HOOK ──────────────────────────────
function useOnScreen(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ─── ANIMATED COUNTER COMPONENT ──────────────────────────────
function AnimCount({ end, suffix = "", prefix = "", duration = 2200 }) {
  const [ref, visible] = useOnScreen(0.3);
  const val = useCountUp(end, duration, visible);
  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}{val.toLocaleString("es-ES")}{suffix}
    </span>
  );
}

// ─── SVG LOGO (reconstructed from brand) ─────────────────────
function Logo({ size = 48 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{
        width: size, height: size, borderRadius: 8,
        background: `linear-gradient(135deg, ${C.gold} 0%, ${C.goldDark} 100%)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: size * 0.5,
        color: C.navy, letterSpacing: -1,
      }}>LR</div>
      <div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: C.white, letterSpacing: 2, lineHeight: 1 }}>LAVINREALS</div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, color: C.gold, letterSpacing: 3, textTransform: "uppercase", marginTop: 2 }}>Suelo Urbanizable</div>
      </div>
    </div>
  );
}

// ─── NAVBAR ──────────────────────────────────────────────────
function Navbar({ page, setPage, lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const linkStyle = (p) => ({
    color: page === p ? C.gold : C.grayLight,
    textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
    letterSpacing: 0.5, cursor: "pointer", transition: "color 0.3s",
    borderBottom: page === p ? `2px solid ${C.gold}` : "2px solid transparent",
    paddingBottom: 4,
  });
  const langs = ["es", "en", "fr"];
  const langLabels = { es: "ES 🇪🇸", en: "EN 🇬🇧", fr: "FR 🇫🇷" };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(10,22,40,0.97)" : "rgba(10,22,40,0.7)",
      backdropFilter: "blur(20px)", borderBottom: `1px solid rgba(200,164,92,${scrolled ? 0.2 : 0.05})`,
      transition: "all 0.4s ease", padding: "0 40px",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <div onClick={() => { setPage("home"); window.scrollTo(0, 0); }} style={{ cursor: "pointer" }}><Logo size={40} /></div>
        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="nav-desktop">
          <a style={linkStyle("cartera")} onClick={() => { setPage("cartera"); window.scrollTo(0, 0); }}>{t.nav.cartera}</a>
          <a style={linkStyle("contacto")} onClick={() => { setPage("contacto"); window.scrollTo(0, 0); }}>{t.nav.contacto}</a>
          <a style={linkStyle("acerca")} onClick={() => { setPage("acerca"); window.scrollTo(0, 0); }}>{t.nav.acerca}</a>
          <a style={linkStyle("noticias")} onClick={() => { setPage("noticias"); window.scrollTo(0, 0); }}>{t.nav.noticias}</a>
          <select value={lang} onChange={e => setLang(e.target.value)} style={{
            background: "rgba(200,164,92,0.12)", border: `1px solid ${C.gold}33`, color: C.gold,
            padding: "6px 12px", borderRadius: 6, fontSize: 12, fontFamily: "'DM Sans', sans-serif",
            cursor: "pointer", outline: "none",
          }}>
            {langs.map(l => <option key={l} value={l} style={{ background: C.navy }}>{langLabels[l]}</option>)}
          </select>
          <a href="tel:+34605237593" style={{ color: C.gold, textDecoration: "none", fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
            {t.nav.phone}
          </a>
          <button onClick={() => { setPage("contacto"); window.scrollTo(0, 0); }} style={{
            background: `linear-gradient(135deg, ${C.gold}, ${C.goldDark})`, color: C.navy,
            border: "none", padding: "10px 22px", borderRadius: 6, fontSize: 13,
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, cursor: "pointer",
            letterSpacing: 0.3, transition: "transform 0.2s, box-shadow 0.2s",
          }}>{t.nav.cta}</button>
        </div>
        {/* Mobile hamburger */}
        <div className="nav-mobile" style={{ display: "none" }}>
          <select value={lang} onChange={e => setLang(e.target.value)} style={{
            background: "transparent", border: `1px solid ${C.gold}33`, color: C.gold,
            padding: "4px 8px", borderRadius: 4, fontSize: 11, marginRight: 12,
          }}>
            {langs.map(l => <option key={l} value={l} style={{ background: C.navy }}>{langLabels[l]}</option>)}
          </select>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: "none", border: "none", color: C.gold, fontSize: 28, cursor: "pointer", padding: 4,
          }}>{menuOpen ? "✕" : "☰"}</button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: C.navy, padding: "20px 40px", display: "flex", flexDirection: "column", gap: 16,
          borderTop: `1px solid ${C.gold}22`,
        }}>
          {["cartera", "contacto", "acerca", "noticias"].map(p => (
            <a key={p} style={{ ...linkStyle(p), fontSize: 16, padding: "8px 0" }}
              onClick={() => { setPage(p); setMenuOpen(false); window.scrollTo(0, 0); }}>{t.nav[p]}</a>
          ))}
        </div>
      )}
      <style>{`
        @media(max-width:900px) {
          .nav-desktop { display:none!important; }
          .nav-mobile { display:flex!important; align-items:center; }
        }
      `}</style>
    </nav>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────
function Footer({ setPage, t }) {
  return (
    <footer style={{ background: C.dark, borderTop: `1px solid ${C.gold}15`, padding: "60px 40px 30px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 40 }}>
        <div>
          <Logo size={36} />
          <p style={{ color: C.gray, fontSize: 14, lineHeight: 1.7, marginTop: 16, fontFamily: "'DM Sans', sans-serif" }}>{t.footer.desc}</p>
          <a href="tel:+34605237593" style={{ color: C.gold, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, display: "block", marginTop: 12 }}>{t.nav.phone}</a>
          <p style={{ color: C.gray, fontSize: 13, marginTop: 8, fontFamily: "'DM Sans', sans-serif" }}>Oficina: C/Gobelas, 35, El Plantío, 28023 Madrid – HQ La Florida</p>
        </div>
        <div>
          <h4 style={{ color: C.gold, fontFamily: "'Playfair Display', serif", fontSize: 16, marginBottom: 16 }}>{t.footer.menu}</h4>
          {["cartera", "contacto", "acerca", "noticias"].map(p => (
            <a key={p} onClick={() => { setPage(p); window.scrollTo(0, 0); }} style={{
              display: "block", color: C.grayLight, textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
              fontSize: 14, padding: "6px 0", cursor: "pointer", transition: "color 0.3s",
            }}>{t.nav[p]}</a>
          ))}
        </div>
        <div>
          <h4 style={{ color: C.gold, fontFamily: "'Playfair Display', serif", fontSize: 16, marginBottom: 16 }}>{t.footer.hablemos}</h4>
          <p style={{ color: C.gray, fontSize: 14, fontFamily: "'DM Sans', sans-serif", marginBottom: 16 }}>{t.footer.hablemosDesc}</p>
          <button onClick={() => { setPage("contacto"); window.scrollTo(0, 0); }} style={{
            background: `linear-gradient(135deg, ${C.gold}, ${C.goldDark})`, color: C.navy,
            border: "none", padding: "12px 28px", borderRadius: 6, fontSize: 14,
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, cursor: "pointer",
          }}>{t.footer.consultar}</button>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "40px auto 0", borderTop: `1px solid ${C.gold}10`, paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div>
          <p style={{ color: C.grayDark, fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>{t.footer.copy}</p>
          <p style={{ color: C.grayDark, fontSize: 11, fontFamily: "'DM Sans', sans-serif", marginTop: 4 }}>{t.footer.copy2}</p>
        </div>
        <a style={{ color: C.grayDark, fontSize: 12, textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>{t.footer.legal}</a>
      </div>
    </footer>
  );
}

// ─── MARQUEE ─────────────────────────────────────────────────
function Marquee({ text }) {
  return (
    <div style={{ overflow: "hidden", background: C.navyMid, padding: "14px 0", borderTop: `1px solid ${C.gold}10`, borderBottom: `1px solid ${C.gold}10` }}>
      <div style={{
        display: "flex", animation: "marquee 25s linear infinite", whiteSpace: "nowrap",
      }}>
        {[...Array(6)].map((_, i) => (
          <span key={i} style={{ color: C.gold, fontFamily: "'DM Sans', sans-serif", fontSize: 14, letterSpacing: 3, marginRight: 80, fontWeight: 500 }}>
            {text}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
    </div>
  );
}

// ─── PARCELA CARD ────────────────────────────────────────────
function ParcelaCard({ p, t, expanded, onToggle }) {
  return (
    <div style={{
      background: `linear-gradient(145deg, ${C.navyLight}, ${C.navyMid})`,
      border: `1px solid ${C.gold}18`, borderRadius: 12, overflow: "hidden",
      transition: "transform 0.3s, box-shadow 0.3s",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 40px rgba(200,164,92,0.1)`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{ background: `linear-gradient(135deg, ${C.gold}15, transparent)`, padding: "24px 28px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ color: C.white, fontFamily: "'Playfair Display', serif", fontSize: 20, margin: 0 }}>{p.name}</h3>
          <span style={{ background: `${C.gold}20`, color: C.gold, padding: "4px 12px", borderRadius: 20, fontSize: 11, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{p.type}</span>
        </div>
      </div>
      <div style={{ padding: "20px 28px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div>
            <div style={{ color: C.gray, fontSize: 11, fontFamily: "'DM Sans', sans-serif", letterSpacing: 0.5, marginBottom: 4 }}>{t.portfolio.supDisp}</div>
            <div style={{ color: C.white, fontSize: 22, fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
              <AnimCount end={p.supDisp} /><span style={{ fontSize: 13, color: C.grayLight, marginLeft: 4 }}>m²</span>
            </div>
          </div>
          <div>
            <div style={{ color: C.gray, fontSize: 11, fontFamily: "'DM Sans', sans-serif", letterSpacing: 0.5, marginBottom: 4 }}>{t.portfolio.supEdif}</div>
            <div style={{ color: C.white, fontSize: 22, fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
              <AnimCount end={p.supEdif} /><span style={{ fontSize: 13, color: C.grayLight, marginLeft: 4 }}>m²</span>
            </div>
          </div>
        </div>
        {p.viv && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ color: C.gray, fontSize: 11, fontFamily: "'DM Sans', sans-serif", letterSpacing: 0.5, marginBottom: 4 }}>{t.portfolio.vivAut}</div>
            <div style={{ color: C.gold, fontSize: 28, fontFamily: "'DM Sans', sans-serif", fontWeight: 800 }}><AnimCount end={p.viv} /></div>
          </div>
        )}
        <button onClick={onToggle} style={{
          width: "100%", background: expanded ? C.gold : "transparent",
          color: expanded ? C.navy : C.gold,
          border: `1px solid ${C.gold}`,
          padding: "10px 0", borderRadius: 6, fontSize: 13,
          fontFamily: "'DM Sans', sans-serif", fontWeight: 600, cursor: "pointer",
          transition: "all 0.3s",
        }}>{t.portfolio.details}</button>
      </div>
    </div>
  );
}

// ─── CONTACT FORM ────────────────────────────────────────────
function ContactForm({ t }) {
  const [sent, setSent] = useState(false);
  return (
    <div style={{ background: `linear-gradient(145deg, ${C.navyLight}, ${C.navyMid})`, border: `1px solid ${C.gold}18`, borderRadius: 12, padding: 36 }}>
      <h3 style={{ color: C.white, fontFamily: "'Playfair Display', serif", fontSize: 22, marginBottom: 24 }}>{t.form.title}</h3>
      {sent ? (
        <div style={{ textAlign: "center", padding: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
          <p style={{ color: C.gold, fontFamily: "'DM Sans', sans-serif", fontSize: 16 }}>¡Mensaje enviado!</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[{ ph: t.form.name, type: "text" }, { ph: t.form.email, type: "email" }, { ph: t.form.phone, type: "tel" }].map((f, i) => (
            <input key={i} placeholder={f.ph} type={f.type} style={{
              background: "rgba(255,255,255,0.04)", border: `1px solid ${C.gold}20`, borderRadius: 8,
              padding: "14px 16px", color: C.white, fontSize: 14, fontFamily: "'DM Sans', sans-serif",
              outline: "none", transition: "border-color 0.3s",
            }} onFocus={e => e.target.style.borderColor = C.gold} onBlur={e => e.target.style.borderColor = `${C.gold}20`} />
          ))}
          <select style={{
            background: "rgba(255,255,255,0.04)", border: `1px solid ${C.gold}20`, borderRadius: 8,
            padding: "14px 16px", color: C.gray, fontSize: 14, fontFamily: "'DM Sans', sans-serif",
            outline: "none", appearance: "none",
          }}>
            <option value="">{t.form.reason}</option>
            {t.form.reasons.map((r, i) => <option key={i} value={r} style={{ background: C.navy }}>{r}</option>)}
          </select>
          <textarea placeholder={t.form.message} rows={4} style={{
            background: "rgba(255,255,255,0.04)", border: `1px solid ${C.gold}20`, borderRadius: 8,
            padding: "14px 16px", color: C.white, fontSize: 14, fontFamily: "'DM Sans', sans-serif",
            outline: "none", resize: "vertical",
          }} />
          <button onClick={() => setSent(true)} style={{
            background: `linear-gradient(135deg, ${C.gold}, ${C.goldDark})`, color: C.navy,
            border: "none", padding: "14px 0", borderRadius: 8, fontSize: 15,
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, cursor: "pointer",
            letterSpacing: 0.5, transition: "transform 0.2s",
          }}>{t.form.submit}</button>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PAGE: HOME (Landing)
// ═══════════════════════════════════════════════════════════
function HomePage({ setPage, t }) {
  const featuredParcelas = ALL_PARCELAS.slice(0, 4);
  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        background: `radial-gradient(ellipse at 30% 20%, ${C.navyMid} 0%, ${C.navy} 50%, ${C.dark} 100%)`,
        position: "relative", overflow: "hidden", padding: "120px 40px 80px",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, ${C.gold} 60px, ${C.gold} 61px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, ${C.gold} 60px, ${C.gold} 61px)`,
        }} />
        <div style={{ position: "relative", maxWidth: 900, textAlign: "center", animation: "fadeUp 1s ease" }}>
          <div style={{ display: "inline-block", background: `${C.gold}15`, border: `1px solid ${C.gold}30`, borderRadius: 30, padding: "6px 20px", marginBottom: 28 }}>
            <span style={{ color: C.gold, fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600 }}>Comunidad de Madrid</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 56px)", color: C.white, lineHeight: 1.15, fontWeight: 700, marginBottom: 20 }}>
            {t.hero.title}
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: C.grayLight, marginBottom: 40, letterSpacing: 2, fontWeight: 300 }}>
            {t.hero.sub}
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 60 }}>
            <button onClick={() => { setPage("cartera"); window.scrollTo(0, 0); }} style={{
              background: `linear-gradient(135deg, ${C.gold}, ${C.goldDark})`, color: C.navy,
              border: "none", padding: "16px 36px", borderRadius: 8, fontSize: 15,
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700, cursor: "pointer",
              letterSpacing: 0.3,
            }}>{t.hero.btn1}</button>
            <button onClick={() => { setPage("contacto"); window.scrollTo(0, 0); }} style={{
              background: "transparent", color: C.gold, border: `1px solid ${C.gold}`,
              padding: "16px 36px", borderRadius: 8, fontSize: 15,
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600, cursor: "pointer",
            }}>{t.hero.btn2}</button>
          </div>
          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32 }}>
            {[
              { val: TOTAL_EDIF, label: t.hero.stat1Label, suffix: " m²" },
              { val: TOTAL_VIV, label: t.hero.stat2Label, suffix: "+" },
              { val: TOTAL_PARCELAS, label: t.hero.stat3Label, suffix: "+" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ color: C.gold, fontFamily: "'DM Sans', sans-serif", fontSize: 36, fontWeight: 800 }}>
                  <AnimCount end={s.val} duration={2500} />{s.suffix && <span style={{ fontSize: 18 }}>{s.suffix.trim()}</span>}
                </div>
                <div style={{ color: C.gray, fontFamily: "'DM Sans', sans-serif", fontSize: 13, marginTop: 4, letterSpacing: 0.5 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }`}</style>
      </section>

      {/* BENEFITS */}
      <section style={{ background: C.navy, padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: C.white, textAlign: "center", marginBottom: 12 }}>{t.benefits.title}</h2>
          <p style={{ color: C.gray, fontFamily: "'DM Sans', sans-serif", fontSize: 15, textAlign: "center", maxWidth: 700, margin: "0 auto 60px", lineHeight: 1.7 }}>{t.benefits.desc}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              { icon: "📊", t: t.benefits.b1t, d: t.benefits.b1d },
              { icon: "🔒", t: t.benefits.b2t, d: t.benefits.b2d },
              { icon: "🤝", t: t.benefits.b3t, d: t.benefits.b3d },
            ].map((b, i) => (
              <div key={i} style={{
                background: `linear-gradient(145deg, ${C.navyLight}, ${C.navyMid})`,
                border: `1px solid ${C.gold}12`, borderRadius: 12, padding: 36,
                transition: "transform 0.3s, border-color 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = `${C.gold}40`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = `${C.gold}12`; }}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{b.icon}</div>
                <h3 style={{ color: C.gold, fontFamily: "'Playfair Display', serif", fontSize: 20, marginBottom: 12 }}>{b.t}</h3>
                <p style={{ color: C.grayLight, fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7 }}>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee text={t.marquee} />

      {/* FEATURED PARCELAS */}
      <section style={{ background: C.bgSection, padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: C.white, textAlign: "center", marginBottom: 60 }}>{t.portfolio.title}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
            {featuredParcelas.map((p, i) => <ParcelaCard key={i} p={p} t={t} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button onClick={() => { setPage("cartera"); window.scrollTo(0, 0); }} style={{
              background: "transparent", color: C.gold, border: `1px solid ${C.gold}`,
              padding: "14px 40px", borderRadius: 8, fontSize: 15,
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600, cursor: "pointer",
            }}>{t.portfolio.viewAll}</button>
          </div>
        </div>
      </section>

      {/* REGIONS */}
      <section style={{ background: C.navy, padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: C.white, marginBottom: 16 }}>{t.regions.title}</h2>
          <p style={{ color: C.gray, fontFamily: "'DM Sans', sans-serif", fontSize: 15, maxWidth: 700, margin: "0 auto 50px", lineHeight: 1.7 }}>{t.regions.desc}</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 600, margin: "0 auto" }}>
            {[{ name: t.regions.madrid, count: PARCELAS_MADRID.length }, { name: t.regions.otras, count: PARCELAS_OTRAS.length }].map((r, i) => (
              <div key={i} onClick={() => { setPage("cartera"); window.scrollTo(0, 0); }} style={{
                background: `linear-gradient(145deg, ${C.navyMid}, ${C.navyLight})`,
                border: `1px solid ${C.gold}20`, borderRadius: 12, padding: "40px 24px",
                cursor: "pointer", transition: "all 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.transform = "scale(1.03)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = `${C.gold}20`; e.currentTarget.style.transform = "scale(1)"; }}
              >
                <div style={{ fontSize: 40, marginBottom: 12 }}>{i === 0 ? "🏙️" : "🌍"}</div>
                <h3 style={{ color: C.white, fontFamily: "'Playfair Display', serif", fontSize: 22, marginBottom: 8 }}>{r.name}</h3>
                <span style={{ color: C.gold, fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>{r.count} {t.regions.listings}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SELL */}
      <section style={{ background: C.bgSection, padding: "100px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: C.white, textAlign: "center", marginBottom: 16 }}>{t.whySell.title}</h2>
          <p style={{ color: C.gray, fontFamily: "'DM Sans', sans-serif", fontSize: 15, textAlign: "center", maxWidth: 700, margin: "0 auto 50px", lineHeight: 1.7 }}>{t.whySell.desc}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 60 }}>
            {[
              { icon: "🌐", t: t.whySell.p1t, d: t.whySell.p1d },
              { icon: "📈", t: t.whySell.p2t, d: t.whySell.p2d },
              { icon: "🤫", t: t.whySell.p3t, d: t.whySell.p3d },
            ].map((p, i) => (
              <div key={i} style={{
                background: `linear-gradient(145deg, ${C.navyLight}, ${C.navyMid})`,
                border: `1px solid ${C.gold}15`, borderRadius: 12, padding: 32,
              }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{p.icon}</div>
                <h4 style={{ color: C.gold, fontFamily: "'Playfair Display', serif", fontSize: 18, marginBottom: 8 }}>{p.t}</h4>
                <p style={{ color: C.grayLight, fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7 }}>{p.d}</p>
              </div>
            ))}
          </div>
          <div style={{
            background: `linear-gradient(135deg, ${C.gold}10, ${C.gold}05)`,
            border: `1px solid ${C.gold}25`, borderRadius: 16, padding: 48, textAlign: "center",
          }}>
            <h3 style={{ color: C.gold, fontFamily: "'Playfair Display', serif", fontSize: 24, marginBottom: 8 }}>{t.whySell.cta}</h3>
            <p style={{ color: C.gray, fontFamily: "'DM Sans', sans-serif", fontSize: 14, marginBottom: 32 }}>{t.whySell.ctaSub}</p>
            <div style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap", marginBottom: 32 }}>
              <div>
                <div style={{ color: C.white, fontFamily: "'DM Sans', sans-serif", fontSize: 36, fontWeight: 800 }}><AnimCount end={TOTAL_EDIF} /> <span style={{ fontSize: 16 }}>m²</span></div>
                <div style={{ color: C.gray, fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>{t.whySell.stat1}</div>
              </div>
              <div>
                <div style={{ color: C.white, fontFamily: "'DM Sans', sans-serif", fontSize: 36, fontWeight: 800 }}><AnimCount end={TOTAL_VIV} /></div>
                <div style={{ color: C.gray, fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>{t.whySell.stat2}</div>
              </div>
            </div>
            <button onClick={() => { setPage("contacto"); window.scrollTo(0, 0); }} style={{
              background: `linear-gradient(135deg, ${C.gold}, ${C.goldDark})`, color: C.navy,
              border: "none", padding: "16px 40px", borderRadius: 8, fontSize: 15,
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700, cursor: "pointer",
            }}>{t.whySell.btnConsulta}</button>
          </div>
        </div>
      </section>

      {/* OBSERVATORIO */}
      <section style={{ background: C.navy, padding: "100px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: C.white, marginBottom: 12 }}>{t.observatorio.title}</h2>
          <p style={{ color: C.gray, fontFamily: "'DM Sans', sans-serif", fontSize: 15, maxWidth: 700, margin: "0 auto 40px", lineHeight: 1.7 }}>{t.observatorio.desc}</p>
          <div style={{
            background: `linear-gradient(145deg, ${C.navyMid}, ${C.navyLight})`,
            border: `1px solid ${C.gold}15`, borderRadius: 12, padding: 40, textAlign: "left",
          }}>
            <h3 style={{ color: C.gold, fontFamily: "'Playfair Display', serif", fontSize: 20, marginBottom: 12 }}>{t.observatorio.info}</h3>
            <p style={{ color: C.grayLight, fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>{t.observatorio.infoDesc}</p>
            <a onClick={() => { setPage("noticias"); window.scrollTo(0, 0); }} style={{
              color: C.gold, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600,
              cursor: "pointer", textDecoration: "none",
            }}>{t.observatorio.btn}</a>
          </div>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section style={{ background: C.bgSection, padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: C.white, textAlign: "center", marginBottom: 60 }}>{t.contactSection.title}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 40 }}>
            <div>
              <div style={{ marginBottom: 32 }}>
                <h4 style={{ color: C.gold, fontFamily: "'Playfair Display', serif", fontSize: 18, marginBottom: 8 }}>{t.contactSection.office}</h4>
                <p style={{ color: C.grayLight, fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7 }}>
                  Pablo Lavin – +34 (605) 237-563<br />Luis Gonzalez – +34 (646) 008-767
                </p>
              </div>
              <div style={{ marginBottom: 32 }}>
                <h4 style={{ color: C.gold, fontFamily: "'Playfair Display', serif", fontSize: 18, marginBottom: 8 }}>{t.contactSection.consultaPresencial}</h4>
                <p style={{ color: C.grayLight, fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7 }}>
                  {t.contactSection.officeAddr}<br /><br />
                  pablo@lavinreals.com<br />luis@lavinreals.com
                </p>
              </div>
              <p style={{ color: C.gold, fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontStyle: "italic" }}>{t.contactSection.consultasConf}</p>
            </div>
            <ContactForm t={t} />
          </div>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PAGE: CARTERA
// ═══════════════════════════════════════════════════════════
function CarteraPage({ t }) {
  const [city, setCity] = useState("Madrid");
  const [area, setArea] = useState("all");
  const parcelas = city === "Madrid" ? PARCELAS_MADRID : PARCELAS_OTRAS;
  const filtered = area === "all" ? parcelas : parcelas.filter(p => p.name === area);
  const areas = parcelas.map(p => p.name);

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{
        background: `radial-gradient(ellipse at 50% 0%, ${C.navyMid} 0%, ${C.navy} 100%)`,
        padding: "80px 40px 60px", textAlign: "center",
      }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", color: C.white, marginBottom: 16 }}>{t.carteraPage.title}</h1>
        <p style={{ color: C.gray, fontFamily: "'DM Sans', sans-serif", fontSize: 15, maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.7 }}>{t.carteraPage.desc}</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <select value={city} onChange={e => { setCity(e.target.value); setArea("all"); }} style={{
            background: "rgba(255,255,255,0.06)", border: `1px solid ${C.gold}30`, borderRadius: 8,
            padding: "12px 20px", color: C.gold, fontSize: 14, fontFamily: "'DM Sans', sans-serif",
          }}>
            <option value="Madrid" style={{ background: C.navy }}>Madrid</option>
            <option value="Otras" style={{ background: C.navy }}>{t.regions.otras}</option>
          </select>
          <select value={area} onChange={e => setArea(e.target.value)} style={{
            background: "rgba(255,255,255,0.06)", border: `1px solid ${C.gold}30`, borderRadius: 8,
            padding: "12px 20px", color: C.grayLight, fontSize: 14, fontFamily: "'DM Sans', sans-serif",
          }}>
            <option value="all" style={{ background: C.navy }}>{t.carteraPage.allAreas}</option>
            {areas.map(a => <option key={a} value={a} style={{ background: C.navy }}>{a}</option>)}
          </select>
        </div>
      </section>

      <section style={{ background: C.bgSection, padding: "60px 40px 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {filtered.map((p, i) => <ParcelaCard key={i} p={p} t={t} />)}
          </div>
          <div style={{
            marginTop: 60, textAlign: "center",
            background: `linear-gradient(135deg, ${C.gold}08, ${C.gold}04)`,
            border: `1px solid ${C.gold}15`, borderRadius: 12, padding: "40px 24px",
          }}>
            <p style={{ color: C.grayLight, fontFamily: "'DM Sans', sans-serif", fontSize: 15, marginBottom: 12 }}>{t.carteraPage.notFound}</p>
            <p style={{ color: C.gray, fontFamily: "'DM Sans', sans-serif", fontSize: 14, marginBottom: 20 }}>{t.carteraPage.notFoundCta}</p>
            <a href="tel:+34605237563" style={{ color: C.gold, fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 700, textDecoration: "none" }}>+34 605 237 563</a>
          </div>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PAGE: ACERCA (About)
// ═══════════════════════════════════════════════════════════
function AcercaPage({ setPage, t }) {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{
        background: `radial-gradient(ellipse at 50% 0%, ${C.navyMid} 0%, ${C.navy} 100%)`,
        padding: "80px 40px 60px", textAlign: "center",
      }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", color: C.white, marginBottom: 12 }}>{t.aboutPage.title}</h1>
        <p style={{ color: C.gold, fontFamily: "'DM Sans', sans-serif", fontSize: 16, letterSpacing: 1 }}>{t.aboutPage.mision}</p>
        <p style={{ color: C.gray, fontFamily: "'DM Sans', sans-serif", fontSize: 15, maxWidth: 600, margin: "12px auto 0", lineHeight: 1.7 }}>{t.aboutPage.misionDesc}</p>
      </section>

      <section style={{ background: C.bgSection, padding: "80px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, color: C.white, marginBottom: 20 }}>{t.aboutPage.excelencia}</h2>
          <p style={{ color: C.grayLight, fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>{t.aboutPage.excelenciaP1}</p>
          <p style={{ color: C.grayLight, fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8, marginBottom: 40 }}>{t.aboutPage.excelenciaP2}</p>
          <blockquote style={{
            borderLeft: `4px solid ${C.gold}`, paddingLeft: 24, margin: "40px 0",
          }}>
            <p style={{ color: C.white, fontFamily: "'Playfair Display', serif", fontSize: 20, fontStyle: "italic", lineHeight: 1.6 }}>"{t.aboutPage.quote}"</p>
            <p style={{ color: C.gold, fontFamily: "'DM Sans', sans-serif", fontSize: 14, marginTop: 12 }}>{t.aboutPage.quoteBy}</p>
          </blockquote>
          <p style={{ color: C.grayLight, fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8 }}>{t.aboutPage.connectDesc}</p>
        </div>
      </section>

      <section style={{ background: C.navy, padding: "80px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, color: C.white, marginBottom: 8 }}>{t.aboutPage.whyTitle}</h2>
          <p style={{ color: C.gray, fontFamily: "'DM Sans', sans-serif", fontSize: 15, marginBottom: 50 }}>{t.aboutPage.whySub}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              { icon: "🌐", t: t.aboutPage.p1t, d: t.aboutPage.p1d },
              { icon: "🏗️", t: t.aboutPage.p2t, d: t.aboutPage.p2d },
              { icon: "🔐", t: t.aboutPage.p3t, d: t.aboutPage.p3d },
            ].map((p, i) => (
              <div key={i} style={{
                background: `linear-gradient(145deg, ${C.navyLight}, ${C.navyMid})`,
                border: `1px solid ${C.gold}15`, borderRadius: 12, padding: 36, textAlign: "left",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${C.gold}40`; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = `${C.gold}15`; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{p.icon}</div>
                <h3 style={{ color: C.gold, fontFamily: "'Playfair Display', serif", fontSize: 20, marginBottom: 10 }}>{p.t}</h3>
                <p style={{ color: C.grayLight, fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: C.bgSection, padding: "60px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, textAlign: "center" }}>
          {[
            { val: TOTAL_EDIF, label: t.hero.stat1Label, suffix: " m²" },
            { val: TOTAL_VIV, label: t.hero.stat2Label, suffix: "+" },
            { val: TOTAL_PARCELAS, label: t.hero.stat3Label, suffix: "+" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ color: C.gold, fontFamily: "'DM Sans', sans-serif", fontSize: 32, fontWeight: 800 }}>
                <AnimCount end={s.val} />{s.suffix && <span style={{ fontSize: 16 }}>{s.suffix.trim()}</span>}
              </div>
              <div style={{ color: C.gray, fontFamily: "'DM Sans', sans-serif", fontSize: 13, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PAGE: CONTACTO
// ═══════════════════════════════════════════════════════════
function ContactoPage({ t, lang }) {
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = lang === "en" ? FAQS_EN : lang === "fr" ? FAQS_FR : FAQS_ES;

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{
        background: `radial-gradient(ellipse at 50% 0%, ${C.navyMid} 0%, ${C.navy} 100%)`,
        padding: "80px 40px 60px", textAlign: "center",
      }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", color: C.white, marginBottom: 12 }}>{t.contactPage.title}</h1>
        <p style={{ color: C.gray, fontFamily: "'DM Sans', sans-serif", fontSize: 15, maxWidth: 650, margin: "0 auto 16px", lineHeight: 1.7 }}>{t.contactPage.desc}</p>
        <span style={{ color: C.gold, fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>{t.contactPage.respuesta}</span>
      </section>

      {/* Contact cards */}
      <section style={{ background: C.bgSection, padding: "60px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {[
            { icon: "📍", title: t.contactPage.dir, main: t.contactPage.dirVal, sub: t.contactPage.horario, sub2: t.contactPage.citaPrevia, btn: t.contactPage.agendaCita },
            { icon: "📞", title: t.contactPage.llamanos, main: "+34 (605) 237-563", sub: t.contactPage.horario, btn: t.contactPage.llamaAhora, href: "tel:+34605237563" },
            { icon: "✉️", title: t.contactPage.correo, main: "pablo@lavinreals.es\nluis@lavinreals.es", sub: t.contactPage.correoExcl, sub2: t.contactPage.correoResp, btn: t.contactPage.contactanos },
          ].map((c, i) => (
            <div key={i} style={{
              background: `linear-gradient(145deg, ${C.navyLight}, ${C.navyMid})`,
              border: `1px solid ${C.gold}15`, borderRadius: 12, padding: 32, textAlign: "center",
              transition: "border-color 0.3s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${C.gold}40`}
              onMouseLeave={e => e.currentTarget.style.borderColor = `${C.gold}15`}
            >
              <div style={{ fontSize: 36, marginBottom: 12 }}>{c.icon}</div>
              <h3 style={{ color: C.gold, fontFamily: "'Playfair Display', serif", fontSize: 20, marginBottom: 12 }}>{c.title}</h3>
              <p style={{ color: C.grayLight, fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, whiteSpace: "pre-line", marginBottom: 8 }}>{c.main}</p>
              <p style={{ color: C.gray, fontFamily: "'DM Sans', sans-serif", fontSize: 13, marginBottom: 4 }}>{c.sub}</p>
              {c.sub2 && <p style={{ color: C.gray, fontFamily: "'DM Sans', sans-serif", fontSize: 12 }}>{c.sub2}</p>}
              <button style={{
                marginTop: 16, background: `${C.gold}15`, color: C.gold,
                border: `1px solid ${C.gold}30`, padding: "10px 24px", borderRadius: 6,
                fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, cursor: "pointer",
              }}>{c.btn}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Experience + Quote */}
      <section style={{ background: C.navy, padding: "80px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: C.white, marginBottom: 16 }}>{t.contactPage.expTitle}</h2>
          <p style={{ color: C.grayLight, fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>{t.contactPage.expDesc}</p>
          <blockquote style={{ borderLeft: `4px solid ${C.gold}`, paddingLeft: 24, margin: "0 0 40px" }}>
            <p style={{ color: C.white, fontFamily: "'Playfair Display', serif", fontSize: 18, fontStyle: "italic", lineHeight: 1.6 }}>"{t.contactPage.expQuote}"</p>
            <p style={{ color: C.gold, fontFamily: "'DM Sans', sans-serif", fontSize: 14, marginTop: 12 }}>{t.contactPage.expQuoteBy}</p>
          </blockquote>
          <p style={{ color: C.grayLight, fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>{t.contactPage.idiomasDesc}</p>
          <div style={{ display: "inline-block", background: `${C.gold}15`, border: `1px solid ${C.gold}30`, borderRadius: 8, padding: "12px 24px", marginTop: 12 }}>
            <span style={{ color: C.gold, fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600 }}>{t.contactPage.idiomas}</span>
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{ background: C.bgSection, padding: "80px 40px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <ContactForm t={t} />
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: C.navy, padding: "80px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: C.white, textAlign: "center", marginBottom: 8 }}>{t.contactPage.faqTitle}</h2>
          <p style={{ color: C.gray, fontFamily: "'DM Sans', sans-serif", fontSize: 14, textAlign: "center", marginBottom: 40 }}>{t.contactPage.faqSub}</p>
          {faqs.map((f, i) => (
            <div key={i} style={{
              borderBottom: `1px solid ${C.gold}10`, marginBottom: 0,
            }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                width: "100%", background: "none", border: "none", padding: "20px 0",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                cursor: "pointer", textAlign: "left",
              }}>
                <span style={{ color: C.white, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, flex: 1, paddingRight: 16 }}>{f.q}</span>
                <span style={{ color: C.gold, fontSize: 20, transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>+</span>
              </button>
              {openFaq === i && (
                <div style={{ padding: "0 0 20px", animation: "fadeUp 0.3s ease" }}>
                  <p style={{ color: C.grayLight, fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7 }}>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PAGE: NOTICIAS (with real-time API news)
// ═══════════════════════════════════════════════════════════
function NoticiasPage({ t }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 1000,
            tools: [{ type: "web_search_20250305", name: "web_search" }],
            messages: [{
              role: "user",
              content: "Search for the latest 6 news articles about real estate market and land parcels (parcelas, suelo urbanizable) in Spain and Madrid from the past month. Return ONLY a JSON array (no markdown, no backticks) with objects having: title (in Spanish), summary (2 sentences in Spanish), source (publication name), date (YYYY-MM-DD), url. Return ONLY the JSON array, nothing else."
            }],
          }),
        });
        const data = await res.json();
        const textBlocks = data.content?.filter(b => b.type === "text").map(b => b.text).join("");
        if (textBlocks) {
          try {
            const clean = textBlocks.replace(/```json|```/g, "").trim();
            const parsed = JSON.parse(clean);
            if (Array.isArray(parsed)) setNews(parsed.slice(0, 6));
          } catch { setNews(getFallbackNews()); }
        } else { setNews(getFallbackNews()); }
      } catch { setNews(getFallbackNews()); }
      setLoading(false);
    }
    fetchNews();
  }, []);

  function getFallbackNews() {
    return [
      { title: "Retamar de la Huerta inicia obras de urbanización: 3.500 nuevas viviendas en Alcorcón", summary: "El desarrollo Retamar de la Huerta en Alcorcón ha arrancado las obras en 114 hectáreas, con 3.503 viviendas previstas. Incluye 30 hectáreas de zonas verdes y conexión metropolitana.", source: "Independiente", date: "2025-12-15", url: "#" },
      { title: "Brunete levantará 17.500 viviendas con una urbanización de lujo como La Finca de Pozuelo", summary: "El municipio de Brunete afronta una revolución urbanística con 'Nuevo Brunete', que prevé 17.572 viviendas en los próximos 20 años. Dividido en 11 sectores, incluye urbanizaciones premium.", source: "Independiente", date: "2025-12-15", url: "#" },
      { title: "Alcobendas aprueba el mayor proyecto urbanístico del norte de Madrid: 8.600 viviendas en Los Carriles-Valgrande", summary: "El Pleno del Ayuntamiento de Alcobendas ha aprobado definitivamente el nuevo Plan Parcial para el sector Los Carriles-Valgrande. Permite la construcción de 8.600 viviendas con inversión de 2.300 millones de euros.", source: "Ayuntamiento", date: "2025-12-15", url: "#" },
      { title: "La demanda de suelo finalista en Madrid alcanza máximos históricos", summary: "Los promotores y fondos de inversión intensifican la búsqueda de suelo listo para construir en la Comunidad de Madrid. La escasez de oferta impulsa los precios al alza.", source: "Expansión", date: "2025-12-10", url: "#" },
      { title: "Nuevos desarrollos residenciales impulsan la oferta de vivienda en el sur de Madrid", summary: "Municipios del sur de Madrid anuncian nuevos desarrollos urbanísticos que añadirán miles de viviendas. La inversión en infraestructuras acompaña el crecimiento.", source: "El País", date: "2025-12-08", url: "#" },
      { title: "El Gobierno estudia medidas para agilizar la transformación de suelo urbanizable", summary: "El Ministerio de Vivienda trabaja en reformas regulatorias para acelerar los procesos de gestión urbanística. Se busca reducir los plazos de tramitación a la mitad.", source: "ABC", date: "2025-12-05", url: "#" },
    ];
  }

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{
        background: `radial-gradient(ellipse at 50% 0%, ${C.navyMid} 0%, ${C.navy} 100%)`,
        padding: "80px 40px 60px", textAlign: "center",
      }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(220,38,38,0.15)", border: "1px solid rgba(220,38,38,0.3)", borderRadius: 20, padding: "6px 16px", marginBottom: 20 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#dc2626", animation: "pulse 2s infinite" }} />
          <span style={{ color: "#f87171", fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: 1 }}>{t.newsPage.liveLabel}</span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", color: C.white, marginBottom: 12 }}>{t.newsPage.title}</h1>
        <p style={{ color: C.gray, fontFamily: "'DM Sans', sans-serif", fontSize: 15, maxWidth: 600, margin: "0 auto" }}>{t.newsPage.sub}</p>
        <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
      </section>

      <section style={{ background: C.bgSection, padding: "60px 40px 100px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {loading ? (
            <div style={{ textAlign: "center", padding: 60 }}>
              <div style={{
                width: 40, height: 40, border: `3px solid ${C.gold}30`, borderTop: `3px solid ${C.gold}`,
                borderRadius: "50%", animation: "spin 1s linear infinite", margin: "0 auto 20px",
              }} />
              <p style={{ color: C.gray, fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>{t.newsPage.loading}</p>
              <style>{`@keyframes spin { to{transform:rotate(360deg)} }`}</style>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {news.map((n, i) => (
                <article key={i} style={{
                  background: `linear-gradient(145deg, ${C.navyLight}, ${C.navyMid})`,
                  border: `1px solid ${C.gold}12`, borderRadius: 12, padding: 32,
                  transition: "all 0.3s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${C.gold}35`; e.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = `${C.gold}12`; e.currentTarget.style.transform = "translateX(0)"; }}
                >
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                    <span style={{ background: `${C.gold}18`, color: C.gold, padding: "3px 10px", borderRadius: 4, fontSize: 11, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{n.source}</span>
                    <span style={{ color: C.grayDark, fontFamily: "'DM Sans', sans-serif", fontSize: 12 }}>{n.date}</span>
                  </div>
                  <h3 style={{ color: C.white, fontFamily: "'Playfair Display', serif", fontSize: 20, marginBottom: 10, lineHeight: 1.4 }}>{n.title}</h3>
                  <p style={{ color: C.grayLight, fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>{n.summary}</p>
                  {n.url && n.url !== "#" && (
                    <a href={n.url} target="_blank" rel="noopener noreferrer" style={{ color: C.gold, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>{t.newsPage.readMore} →</a>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: C.navy, padding: "60px 40px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: C.white, marginBottom: 8 }}>{t.newsPage.ctaTitle}</h2>
        <p style={{ color: C.gray, fontFamily: "'DM Sans', sans-serif", fontSize: 14, marginBottom: 24 }}>{t.newsPage.ctaSub}</p>
        <a href="tel:+34605237563" style={{
          display: "inline-block", background: `linear-gradient(135deg, ${C.gold}, ${C.goldDark})`,
          color: C.navy, padding: "14px 36px", borderRadius: 8, fontSize: 16,
          fontFamily: "'DM Sans', sans-serif", fontWeight: 700, textDecoration: "none",
        }}>+34 605 237 563</a>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("es");
  const t = T[lang];

  return (
    <div style={{ background: C.navy, minHeight: "100vh", margin: 0 }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; }
        body { background:${C.navy}; overflow-x:hidden; }
        ::-webkit-scrollbar { width:8px; }
        ::-webkit-scrollbar-track { background:${C.dark}; }
        ::-webkit-scrollbar-thumb { background:${C.gold}40; border-radius:4px; }
        ::selection { background:${C.gold}40; color:${C.white}; }
        select option { background:${C.navy}; }
      `}</style>
      <Navbar page={page} setPage={setPage} lang={lang} setLang={setLang} t={t} />
      {page === "home" && <HomePage setPage={setPage} t={t} />}
      {page === "cartera" && <CarteraPage t={t} />}
      {page === "acerca" && <AcercaPage setPage={setPage} t={t} />}
      {page === "contacto" && <ContactoPage t={t} lang={lang} />}
      {page === "noticias" && <NoticiasPage t={t} />}
      <Footer setPage={setPage} t={t} />
    </div>
  );
}
