export interface NewsArticle {
  title: string;
  summary: string;
  source: string;
  date: string;
  url: string | null;
  category: string;
}

export const fallbackNews: NewsArticle[] = [
  {
    title: "Retamar de la Huerta inicia obras de urbanización: 3.500 nuevas viviendas en Alcorcón",
    summary: "El desarrollo Retamar de la Huerta en Alcorcón ha arrancado las obras en 114 hectáreas, con 3.503 viviendas previstas. Incluye 30 hectáreas de zonas verdes y conexión metropolitana.",
    source: "Independiente",
    date: "2025-12-15",
    url: null,
    category: "mercado",
  },
  {
    title: "Brunete levantará 17.500 viviendas con una urbanización de lujo como La Finca de Pozuelo",
    summary: "El municipio de Brunete afronta una revolución urbanística con Nuevo Brunete, que prevé 17.572 viviendas en los próximos 20 años. Dividido en 11 sectores, incluye urbanizaciones premium.",
    source: "Independiente",
    date: "2025-12-15",
    url: null,
    category: "mercado",
  },
  {
    title: "Alcobendas aprueba el mayor proyecto urbanístico del norte de Madrid: 8.600 viviendas",
    summary: "El Pleno del Ayuntamiento de Alcobendas ha aprobado definitivamente el nuevo Plan Parcial para el sector Los Carriles-Valgrande. Permite la construcción de 8.600 viviendas con inversión de 2.300 millones de euros.",
    source: "Ayuntamiento",
    date: "2025-12-15",
    url: null,
    category: "mercado",
  },
  {
    title: "La demanda de suelo finalista en Madrid alcanza máximos históricos",
    summary: "Los promotores y fondos de inversión intensifican la búsqueda de suelo listo para construir en la Comunidad de Madrid. La escasez de oferta impulsa los precios al alza.",
    source: "Expansión",
    date: "2025-12-10",
    url: null,
    category: "economía",
  },
  {
    title: "Nuevos desarrollos residenciales impulsan la oferta de vivienda en el sur de Madrid",
    summary: "Municipios del sur de Madrid anuncian nuevos desarrollos urbanísticos que añadirán miles de viviendas. La inversión en infraestructuras acompaña el crecimiento.",
    source: "El País",
    date: "2025-12-08",
    url: null,
    category: "vivienda",
  },
  {
    title: "El Gobierno estudia medidas para agilizar la transformación de suelo urbanizable",
    summary: "El Ministerio de Vivienda trabaja en reformas regulatorias para acelerar los procesos de gestión urbanística. Se busca reducir los plazos de tramitación a la mitad.",
    source: "ABC",
    date: "2025-12-05",
    url: null,
    category: "economía",
  },
];
