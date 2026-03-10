export interface FAQ {
  q: string;
  a: string;
}

export const faqs: Record<string, FAQ[]> = {
  es: [
    { q: "Trabajan tambien con suelo no finalista o en gestion?", a: "Si. Gestionamos suelo en todas las fases: no finalista, en gestion avanzada y finalista listo para licencia. Cada tipologia tiene su mercado especifico." },
    { q: "Como garantizan la confidencialidad de mi parcela?", a: "Operamos 100% off-market. La informacion solo se comparte con compradores previamente cualificados y tras la firma de un acuerdo de confidencialidad." },
    { q: "Cuanto tiempo suele tardar la venta de una parcela finalista?", a: "En el ciclo actual, entre 2 y 6 meses desde la incorporacion a nuestra cartera hasta el cierre de la operacion, dependiendo del tamano y ubicacion." },
    { q: "Hay algun coste o exclusividad para incluir mi suelo en su cartera?", a: "No existe coste alguno para el propietario. Solo trabajamos en exclusividad para poder controlar el proceso y maximizar el precio." },
    { q: "Operan tambien fuera de la Comunidad de Madrid?", a: "Si. Aunque Madrid concentra el 85% de nuestra cartera, gestionamos activamente suelo residencial y terciario en Andalucia, regiones de interes a las afueras de la Comunidad de Madrid." },
    { q: "Que documentacion necesitan para valorar mi suelo?", a: "Con el plano de situacion, referencia catastral y nota simple ya podemos realizar una primera valoracion gratuita y reservada en 48 horas." },
  ],
  en: [
    { q: "Do you also work with non-final or in-management land?", a: "Yes. We manage land in all phases: non-final, advanced management and final ready for license. Each type has its specific market." },
    { q: "How do you guarantee the confidentiality of my plot?", a: "We operate 100% off-market. Information is only shared with previously qualified buyers after signing a confidentiality agreement." },
    { q: "How long does the sale of a final plot usually take?", a: "In the current cycle, between 2 and 6 months from portfolio incorporation to deal closing, depending on size and location." },
    { q: "Is there any cost or exclusivity to include my land in your portfolio?", a: "There is no cost to the owner. We only work on exclusivity to control the process and maximize price." },
    { q: "Do you also operate outside the Community of Madrid?", a: "Yes. Although Madrid accounts for 85% of our portfolio, we actively manage residential and tertiary land in Andalusia and regions of interest outside Madrid." },
    { q: "What documentation do you need to value my land?", a: "With the location plan, cadastral reference and simple note, we can make a first free and confidential valuation within 48 hours." },
  ],
  fr: [
    { q: "Travaillez-vous aussi avec des terrains non finalises ou en gestion?", a: "Oui. Nous gerons des terrains a toutes les phases: non finalise, en gestion avancee et finalise pret pour la licence." },
    { q: "Comment garantissez-vous la confidentialite de ma parcelle?", a: "Nous operons 100% off-market. L'information n'est partagee qu'avec des acheteurs prealablement qualifies apres signature d'un accord de confidentialite." },
    { q: "Combien de temps prend habituellement la vente d'une parcelle finalisee?", a: "Dans le cycle actuel, entre 2 et 6 mois de l'incorporation au portefeuille a la cloture de l'operation." },
    { q: "Y a-t-il un cout ou exclusivite pour inclure mon terrain?", a: "Aucun cout pour le proprietaire. Nous travaillons uniquement en exclusivite pour controler le processus." },
    { q: "Operez-vous aussi en dehors de la Communaute de Madrid?", a: "Oui. Bien que Madrid represente 85% de notre portefeuille, nous gerons activement des terrains en Andalousie et dans d'autres regions." },
    { q: "Quelle documentation faut-il pour evaluer mon terrain?", a: "Avec le plan de situation, la reference cadastrale et la note simple, nous pouvons faire une premiere evaluation gratuite sous 48 heures." },
  ],
};
