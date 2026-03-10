export interface FAQ {
  q: string;
  a: string;
}

export const faqs: Record<string, FAQ[]> = {
  es: [
    { q: "¿Trabajan también con suelo no finalista o en gestión?", a: "Sí. Gestionamos suelo en todas las fases: no finalista, en gestión avanzada y finalista listo para licencia. Cada tipología tiene su mercado específico." },
    { q: "¿Cómo garantizan la confidencialidad de mi parcela?", a: "Operamos 100% off-market. La información solo se comparte con compradores previamente cualificados y tras la firma de un acuerdo de confidencialidad." },
    { q: "¿Cuánto tiempo suele tardar la venta de una parcela finalista?", a: "En el ciclo actual, entre 2 y 6 meses desde la incorporación a nuestra cartera hasta el cierre de la operación, dependiendo del tamaño y ubicación." },
    { q: "¿Hay algún coste o exclusividad para incluir mi suelo en su cartera?", a: "No existe coste alguno para el propietario. Solo trabajamos en exclusividad para poder controlar el proceso y maximizar el precio." },
    { q: "¿Operan también fuera de la Comunidad de Madrid?", a: "Sí. Aunque Madrid concentra el 85% de nuestra cartera, gestionamos activamente suelo residencial y terciario en Andalucía, regiones de interés a las afueras de la Comunidad de Madrid." },
    { q: "¿Qué documentación necesitan para valorar mi suelo?", a: "Con el plano de situación, referencia catastral y nota simple ya podemos realizar una primera valoración gratuita y reservada en 48 horas." },
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
    { q: "Travaillez-vous aussi avec des terrains non finalisés ou en gestion?", a: "Oui. Nous gérons des terrains à toutes les phases: non finalisé, en gestion avancée et finalisé prêt pour la licence." },
    { q: "Comment garantissez-vous la confidentialité de ma parcelle?", a: "Nous opérons 100% off-market. L'information n'est partagée qu'avec des acheteurs préalablement qualifiés après signature d'un accord de confidentialité." },
    { q: "Combien de temps prend habituellement la vente d'une parcelle finalisée?", a: "Dans le cycle actuel, entre 2 et 6 mois de l'incorporation au portefeuille à la clôture de l'opération." },
    { q: "Y a-t-il un coût ou exclusivité pour inclure mon terrain?", a: "Aucun coût pour le propriétaire. Nous travaillons uniquement en exclusivité pour contrôler le processus." },
    { q: "Opérez-vous aussi en dehors de la Communauté de Madrid?", a: "Oui. Bien que Madrid représente 85% de notre portefeuille, nous gérons activement des terrains en Andalousie et dans d'autres régions." },
    { q: "Quelle documentation faut-il pour évaluer mon terrain?", a: "Avec le plan de situation, la référence cadastrale et la note simple, nous pouvons faire une première évaluation gratuite sous 48 heures." },
  ],
};
