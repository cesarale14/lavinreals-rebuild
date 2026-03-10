export interface Parcela {
  name: string;
  supDisp: number;
  supEdif: number;
  viv: number | null;
  type: string;
  city: "Madrid" | "Otras Areas";
}

export const parcelas: Parcela[] = [
  { name: "Colmenar Viejo", supDisp: 45200, supEdif: 38700, viv: 320, type: "Residencial", city: "Madrid" },
  { name: "Sanchinarro", supDisp: 12800, supEdif: 11500, viv: null, type: "Terciario", city: "Madrid" },
  { name: "Pozuelo de Alarcon", supDisp: 28400, supEdif: 24100, viv: 185, type: "Residencial", city: "Madrid" },
  { name: "Valdemoro", supDisp: 67300, supEdif: 58200, viv: 490, type: "Residencial", city: "Madrid" },
  { name: "Arroyomolinos", supDisp: 34500, supEdif: 29800, viv: 240, type: "Residencial", city: "Madrid" },
  { name: "Las Rosas", supDisp: 18900, supEdif: 16200, viv: 130, type: "Residencial", city: "Madrid" },
  { name: "Retamar de la Huerta", supDisp: 52100, supEdif: 44800, viv: 380, type: "Residencial", city: "Madrid" },
  { name: "El Escorial", supDisp: 23700, supEdif: 20100, viv: 165, type: "Residencial", city: "Madrid" },
  { name: "Villaviciosa de Odon", supDisp: 31200, supEdif: 26800, viv: 215, type: "Residencial", city: "Madrid" },
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
  { name: "Murcia", supDisp: 72500, supEdif: 62100, viv: 510, type: "Residencial", city: "Otras Areas" },
];

export const TOTAL_EDIF = parcelas.reduce((s, p) => s + p.supEdif, 0);
export const TOTAL_VIV = parcelas.reduce((s, p) => s + (p.viv || 0), 0);
export const TOTAL_PARCELAS = parcelas.length;
