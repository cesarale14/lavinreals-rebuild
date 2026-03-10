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
    title: "Retamar de la Huerta inicia obras de urbanizacion: 3.500 nuevas viviendas en Alcorcon",
    summary: "El desarrollo Retamar de la Huerta en Alcorcon ha arrancado las obras en 114 hectareas, con 3.503 viviendas previstas. Incluye 30 hectareas de zonas verdes y conexion metropolitana.",
    source: "Independiente",
    date: "2025-12-15",
    url: null,
    category: "mercado",
  },
  {
    title: "Brunete levantara 17.500 viviendas con una urbanizacion de lujo como La Finca de Pozuelo",
    summary: "El municipio de Brunete afronta una revolucion urbanistica con Nuevo Brunete, que preve 17.572 viviendas en los proximos 20 anos. Dividido en 11 sectores, incluye urbanizaciones premium.",
    source: "Independiente",
    date: "2025-12-15",
    url: null,
    category: "mercado",
  },
  {
    title: "Alcobendas aprueba el mayor proyecto urbanistico del norte de Madrid: 8.600 viviendas",
    summary: "El Pleno del Ayuntamiento de Alcobendas ha aprobado definitivamente el nuevo Plan Parcial para el sector Los Carriles-Valgrande. Permite la construccion de 8.600 viviendas con inversion de 2.300 millones de euros.",
    source: "Ayuntamiento",
    date: "2025-12-15",
    url: null,
    category: "mercado",
  },
  {
    title: "La demanda de suelo finalista en Madrid alcanza maximos historicos",
    summary: "Los promotores y fondos de inversion intensifican la busqueda de suelo listo para construir en la Comunidad de Madrid. La escasez de oferta impulsa los precios al alza.",
    source: "Expansion",
    date: "2025-12-10",
    url: null,
    category: "economia",
  },
  {
    title: "Nuevos desarrollos residenciales impulsan la oferta de vivienda en el sur de Madrid",
    summary: "Municipios del sur de Madrid anuncian nuevos desarrollos urbanisticos que anadiran miles de viviendas. La inversion en infraestructuras acompana el crecimiento.",
    source: "El Pais",
    date: "2025-12-08",
    url: null,
    category: "vivienda",
  },
  {
    title: "El Gobierno estudia medidas para agilizar la transformacion de suelo urbanizable",
    summary: "El Ministerio de Vivienda trabaja en reformas regulatorias para acelerar los procesos de gestion urbanistica. Se busca reducir los plazos de tramitacion a la mitad.",
    source: "ABC",
    date: "2025-12-05",
    url: null,
    category: "economia",
  },
];
