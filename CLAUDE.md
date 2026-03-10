# CLAUDE.md — Lavinreals Website Rebuild

## Project Overview

Rebuild the Lavinreals website (https://lavinreals.softwareforge.tech) as a modern Next.js application. Lavinreals is an independent consultancy specializing in discreet management and marketing of developable land (suelo urbanizable) in Spain, focused on the Community of Madrid. The site targets promoters, investment funds, family offices, and private landowners.

The current site is a WordPress/Elementor build with malware injections (Russian casino spam posts, fake browser update backdoors). This rebuild replaces it entirely with a clean, professional, production-grade codebase.

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS with custom design tokens
- **Icons:** Lucide React (clean, professional line icons)
- **Animations:** Framer Motion for scroll-triggered count-up animations, fade-ins, and hover states
- **Language:** TypeScript
- **Deployment target:** Vercel or static export

---

## Critical Design Rules

1. **NO EMOJIS.** Not in the UI, not in icons, not anywhere. Use Lucide React icons exclusively. The site must look like a high-end institutional real estate consultancy, not a consumer app.
2. The site is in Spanish by default, with a language dropdown (ES / EN / FR) in the navbar.
3. All number displays (m2, viviendas, parcelas count) must have scroll-triggered count-up animations.
4. Follow the official brand book specifications below exactly.

---

## Brand Book Specifications (MANDATORY)

Source: `LAVIN_REALS_BRAND_BOOK.pdf` — November 2025

### Color Palette

From the brand book page 6, these are the four official brand colors:

| Role | Hex | Usage |
|---|---|---|
| Gold (primary accent) | `#d6ab54` | CTAs, highlights, stat numbers, borders, badges, hover states |
| Black | `#000000` | Primary background, text on light surfaces, logo on light bg |
| White | `#FFFFFF` | Text on dark surfaces, logo on dark bg, card backgrounds where needed |
| Warm Beige (neutral) | `#ccbaad` | Secondary backgrounds, subtle section dividers, muted text, hover tints |

For the dark website theme, derive these additional tokens from the brand palette:

```
colors: {
  gold: {
    DEFAULT: '#d6ab54',
    light: '#e0bc6e',
    dark: '#b8923e',
  },
  black: '#000000',
  white: '#FFFFFF',
  beige: {
    DEFAULT: '#ccbaad',
    light: '#ddd0c6',
    dark: '#b8a495',
  },
  // Dark theme surface colors (derived from black)
  surface: {
    DEFAULT: '#0a0a0a',    // Page background
    raised: '#141414',     // Card backgrounds
    elevated: '#1e1e1e',   // Hover states, active cards
    border: '#2a2a2a',     // Subtle borders
  },
}
```

The site uses a dark (black-based) theme, NOT navy. The brand book specifies black (#000000) as a core color. Surface colors should be near-black variants, not navy/blue tones.

### Typography

From the brand book page 4:

- **Headings (titulos):** Times New Roman MT — conveys prestige and solidity
- **Body text (textos):** Futura — adds modernity, clarity, and precision

Web font mapping:
- Times New Roman MT maps to: `"Times New Roman", Times, serif` (system font, no import needed)
- Futura maps to: load `Jost` from Google Fonts as the closest free web equivalent (geometric sans-serif with similar proportions). Alternative: `Nunito Sans` or `Montserrat`. Do NOT use Inter, Roboto, DM Sans, or other generic sans-serifs.

Tailwind config:
```
fontFamily: {
  serif: ['"Times New Roman"', 'Times', 'serif'],
  sans: ['Jost', 'sans-serif'],
},
```

### Logo

The logo consists of:
1. A square border (double-line frame)
2. Overlapping "L" and "R" monogram inside, set in a serif typeface (the R overlaps the L)
3. "LAVIN REALS" in spaced uppercase below the square

The logo appears in two variants:
- **White on black/dark** — for the navbar, footer, and dark sections
- **Black on white/light** — for light sections if any

Implementation: Create an SVG component (`Logo.tsx`) that reproduces the logo mark. The "LR" monogram should use the serif font (Times New Roman). The square frame should have clean, sharp corners with a slight inner border offset (like the brand book shows — a square within a square). Below it, "LAVIN REALS" in the sans font (Jost/Futura), letter-spacing 0.3em, uppercase.

Download the original logo PNG from the WordPress site and place it in `/public/logo.png` as a fallback:
`https://lavinreals.softwareforge.tech/wp-content/uploads/2025/11/LOGOS-LAVIN-REALS-01-e1764126466734.png`

### Mission (from brand book page 2)

"Identificamos, seleccionamos y comercializamos suelo residencial y, de forma complementaria, suelo terciario hotelero para facilitar la creacion de proyectos inmobiliarios que den respuesta real a la creciente demanda de vivienda en Espana.

Trabajamos con rigor tecnico, transparencia y vision a largo plazo, generando valor sostenible para propietarios, promotores e inversores, y contribuyendo al desarrollo ordenado y de calidad de las ciudades donde operamos."

### Vision (from brand book page 3)

"Ser la empresa lider en Espana en gestion y comercializacion de suelo, conformando la cartera mas amplia y estrategica de suelos disponibles para la promocion residencial.

Aspiramos a ser el socio de referencia para promotores, fondos e inversores, reconocidos por nuestra capacidad de acceso a oportunidades unicas, nuestro conocimiento experto del mercado y nuestro compromiso con un crecimiento inmobiliario responsable y de alto valor anadido."

### Brand Marquee Ticker

From the brand book cover: "LANDS . URBANISM & DATA . CONFIDENTIAL . AGILE EXECUTION . LONG TERM RELATIONSHIPS"

Use this as the marquee text instead of the property types marquee, or alternate both.

---

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout with fonts, metadata, navbar, footer
    page.tsx            # Landing page (Home)
    cartera/page.tsx    # Portfolio page
    contacto/page.tsx   # Contact page
    acerca/page.tsx     # About page
    noticias/page.tsx   # News page
    api/
      news/route.ts     # Server-side RSS feed fetcher
  components/
    Navbar.tsx
    Footer.tsx
    Logo.tsx            # SVG logo component matching brand book
    ContactForm.tsx
    ParcelaCard.tsx
    AnimatedCounter.tsx  # Scroll-triggered count-up
    Marquee.tsx          # Horizontal scrolling ticker
    LanguageSwitcher.tsx
    FaqAccordion.tsx
    NewsCard.tsx
    SectionHeading.tsx   # Reusable heading with gold accent line
  lib/
    translations.ts     # All i18n strings (es, en, fr)
    parcelas.ts         # Parcelas data array
    faqs.ts             # FAQ data per language
    constants.ts        # Contact info, phone numbers, emails
    rss-sources.ts      # RSS feed URLs for news
  hooks/
    useCountUp.ts
    useOnScreen.ts      # Intersection observer hook
    useLanguage.ts      # Language context/provider
  types/
    index.ts
public/
  logo.png              # Fallback logo PNG from original site
```

---

## Page Specifications

### Page 1: Landing (Home) — `/`

**Sections in order:**

1. **Hero Section**
   - Full viewport height, background: black (#000) with a very subtle radial gradient to #141414 at edges
   - Subtle grid overlay pattern at very low opacity (~2-3%) using gold lines
   - Small pill badge: "Comunidad de Madrid" — gold text on gold/10% bg, gold border
   - H1: "Cartera de Suelo Estrategico en la Comunidad de Madrid" — Times New Roman, white
   - Subtitle: "Residencial, Terciario y Dotacional" — Jost, beige (#ccbaad), letter-spacing 2px
   - Two CTAs:
     - "Descubre Nuestra Cartera Exclusiva" — gold filled button, black text
     - "Ponte en contacto con nosotros" — gold outline button, gold text
   - Three animated stat counters at bottom:
     - `620,500 m2` — "en superficie edificable"
     - `5,461+` — "viviendas autorizadas"
     - `21+` — "Parcelas Prospectadas"
   - Numbers in gold, labels in beige

2. **Benefits Section** — background: #0a0a0a
   - H2: "Nuestros Beneficios" — Times New Roman, white
   - Intro paragraph — Jost, beige
   - Three cards with Lucide icons (size 32, stroke-width 1.5, gold color):
     - `BarChart3` — "Analisis tecnico" / description
     - `Lock` — "Cartera exclusiva y off-market" / description
     - `Handshake` — "Acompanamiento integral" / description
   - Card style: bg #141414, border 1px #2a2a2a, hover: border #d6ab5440, translateY(-4px), box-shadow with gold tint
   - Icon sits in a 56x56 circle with gold/8% background

3. **Marquee Ticker**
   - Two alternating marquee lines:
     - Line 1: "Residencial . Terciario . Industrial . Finalista . No Finalista"
     - Line 2: "Lands . Urbanism & Data . Confidential . Agile Execution . Long Term Relationships"
   - Gold text on #141414 bg, thin gold/10% borders top and bottom
   - CSS keyframe animation, infinite, 25s

4. **Featured Parcelas** (first 4 from data) — background: #0a0a0a
   - H2: "Cartera de Suelos para Construir"
   - Grid of ParcelaCard components
   - "Ver Todos" outline button linking to /cartera

5. **Regions Section** — background: #000
   - H2: "Comunidad de Madrid y Areas Estrategicas"
   - Description paragraph
   - Two clickable region cards:
     - `Building2` icon — "Madrid" — "20 Listados"
     - `Globe` icon — "Otras Areas" — "1 Listados"

6. **Why Sell / Invest Section** — background: #0a0a0a
   - H2: "Por que vender o invertir con nosotros ahora?"
   - Three value prop cards:
     - `Globe` — "Distribucion internacional selectiva"
     - `TrendingUp` — "Posicionamiento en el ciclo actual"
     - `ShieldCheck` — "Trato directo y confidencial"
   - Gold-bordered CTA box with animated counters and "Solicitar consulta privada" button

7. **Observatorio Section** — background: #000
   - H2: "Observatorio del Mercado de Suelo"
   - Card with strategic information description
   - "Acceder al Observatorio completo" link to /noticias

8. **Contact + Form Section** — background: #0a0a0a
   - Two-column: contact info left, ContactForm right

---

### Page 2: Cartera — `/cartera`

**Header:**
- H1: "Cartera De Parcelas Disponibles"
- Subtitle about total buildability listing
- Two filter dropdowns (gold-accented):
  - City: "Madrid" | "Otras Areas"
  - Area: dynamic list based on city selection

**Grid:**
- All ParcelaCard components for selected filters
- Each card: name, type badge, superficie disponible (animated), superficie edificable (animated), viviendas autorizadas (animated), "Detalles" button

**Bottom CTA:**
- "No encuentra el area de su interes?" prompt
- Phone: +34 605 237 563

---

### Page 3: Contacto — `/contacto`

**Header:**
- H1: "Contacto"
- Description
- Gold badge: "Respuesta personalizada en menos de 24 horas laborables"

**Three info cards** with Lucide icons:
1. `MapPin` — Direccion: address, hours, "solo con cita previa"
2. `Phone` — Llamanos: phone number, tel: link
3. `Mail` — Contactanos por Correo: emails, response time

**Experience section:**
- H2: "Nuestra experiencia"
- Description + blockquote from Pablo Lavin
- Languages badge: "Ingles . Espanol . Frances"

**Contact Form**

**FAQ Accordion** with `ChevronDown` toggle icons

---

### Page 4: Acerca — `/acerca`

**Header:**
- H1: "Acerca de Nosotros"
- "Nuestra Mision" subtitle in gold

**Mission section** — use the brand book mission text (page 2)

**Vision section** — use the brand book vision text (page 3). This is NEW content not on the current site. Add it as a separate section after mission with heading "Nuestra Vision".

**Excellence section:**
- Blockquote from Pablo Lavin
- Connection paragraph

**Three pillars:**
1. `Globe` — "Red internacional consolidada"
2. `Building` — "Cartera estrategica y seleccionada"
3. `Lock` — "Confidencialidad y exclusividad total"

**Stats bar** with animated counters

---

### Page 5: Noticias — `/noticias`

**Header:**
- Pulsing red dot (CSS only, 8px circle, animation: opacity 1->0.3->1 over 2s) + "EN VIVO" text
- H1: "Observatorio del Mercado de Suelo"
- Subtitle

**Live News Feed — RSS-based (NO Anthropic API)**

Create a Next.js API route at `/api/news/route.ts` that:

1. Fetches RSS/Atom feeds from multiple Spanish real estate news sources
2. Parses the XML using a lightweight parser (e.g., `fast-xml-parser` — install via npm)
3. Extracts: title, description/summary, source name, publication date, link
4. Merges all sources, sorts by date descending, returns top 8-10 articles
5. Caches results for 30 minutes (use in-memory cache or Next.js `revalidate`)

**RSS Feed Sources** (in `lib/rss-sources.ts`):

```typescript
export const RSS_SOURCES = [
  {
    name: "idealista/news",
    url: "https://www.idealista.com/news/rss",
    category: "mercado",
  },
  {
    name: "Expansion Inmobiliario",
    url: "https://e00-expansion.uecdn.es/rss/economia/inmobiliario.xml",
    category: "economia",
  },
  {
    name: "El Confidencial - Vivienda",
    url: "https://rss.elconfidencial.com/vivienda/",
    category: "vivienda",
  },
  {
    name: "Cinco Dias - Inmobiliario",
    url: "https://cincodias.elpais.com/seccion/inmobiliario/rss",
    category: "economia",
  },
  {
    name: "Eje Prime",
    url: "https://www.ejeprime.com/rss",
    category: "sector",
  },
];
```

**Important:** Some RSS feeds may be unavailable or return errors. The API route runs server-side so CORS is not an issue. Handle failures gracefully per-source — if one feed fails, skip it and return results from the rest.

**If ALL feeds fail**, fall back to the static articles array (see fallback data below).

**API Route Response Shape:**

```typescript
interface NewsArticle {
  title: string;
  summary: string;
  source: string;
  date: string;       // ISO date string
  url: string | null;
  category: string;
}
```

**Client-side (`noticias/page.tsx`):**
- On mount, fetch `/api/news`
- Show a loading spinner (CSS-only rotating gold circle) while fetching
- Render articles as NewsCard components
- Each card: source badge (gold pill), date, title (Times New Roman), summary (Jost), "Leer mas" link opening in new tab
- If fetch fails client-side, show fallback articles

**Bottom CTA:**
- "Ponte en Contacto con Nosotros Hoy"
- Phone button

---

## Component Specifications

### Logo (`components/Logo.tsx`)

Reproduce the brand book logo as an SVG:
- Outer square border (2px stroke, sharp corners)
- Inner square border offset ~6px inside (1.5px stroke)
- "L" and "R" overlapping monogram centered inside, Times New Roman serif
- The "R" slightly overlaps the "L" — the L's vertical stroke aligns with R's vertical stroke
- Below the square: "LAVIN REALS" in Jost, uppercase, letter-spacing 0.3em, font-weight 400
- Props: `color?: string` (default white), `size?: number` (default 48)
- Include a fallback that renders the PNG from `/logo.png` if SVG rendering is problematic

### AnimatedCounter
- Props: `end: number`, `suffix?: string`, `duration?: number`
- Uses IntersectionObserver — only starts counting when scrolled into view, fires once
- Easing: cubic ease-out
- Format numbers with `toLocaleString('es-ES')` for dot separators
- Font: Jost weight 700, gold color

### ParcelaCard
- Background: #141414, border: 1px #2a2a2a
- Header area: slight gold gradient overlay at 3-5% opacity
- Parcela name: Times New Roman, white
- Type badge: gold/15% bg, gold text, small pill
- Stats: AnimatedCounter components with "m2" suffix in beige
- Viviendas (if present): larger gold number
- "Detalles" button: gold outline default, gold filled on hover
- Hover: translateY(-4px), border shifts to gold/25%, subtle gold box-shadow

### ContactForm
- Dark inputs: bg #141414, border #2a2a2a, gold border on focus
- Labels in beige, input text in white
- Select dropdown with form reasons
- Gold gradient submit button
- Success state: `Check` icon (Lucide) + "Mensaje enviado"

### Marquee
- CSS keyframe translateX(0) -> translateX(-50%), 25s linear infinite
- 6+ repeated text copies for seamless loop
- Gold text, Jost font, letter-spacing 3px, font-weight 300

### FaqAccordion
- `ChevronDown` icon rotates 180deg when open
- Smooth height animation via Framer Motion AnimatePresence
- Divider: 1px border #2a2a2a between items
- Question text: white, Jost weight 500
- Answer text: beige, Jost weight 300

### LanguageSwitcher
- Small select dropdown, gold text, transparent bg, gold/30% border
- Options: ES, EN, FR

---

## Parcelas Data (`lib/parcelas.ts`)

```typescript
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

// Computed totals:
// Total Edificable: 620,500 m2
// Total Viviendas: 5,461
// Total Parcelas: 21
```

---

## FAQ Data (`lib/faqs.ts`)

### Spanish
1. Q: "Trabajan tambien con suelo no finalista o en gestion?" / A: "Si. Gestionamos suelo en todas las fases: no finalista, en gestion avanzada y finalista listo para licencia. Cada tipologia tiene su mercado especifico."
2. Q: "Como garantizan la confidencialidad de mi parcela?" / A: "Operamos 100% off-market. La informacion solo se comparte con compradores previamente cualificados y tras la firma de un acuerdo de confidencialidad."
3. Q: "Cuanto tiempo suele tardar la venta de una parcela finalista?" / A: "En el ciclo actual, entre 2 y 6 meses desde la incorporacion a nuestra cartera hasta el cierre de la operacion, dependiendo del tamano y ubicacion."
4. Q: "Hay algun coste o exclusividad para incluir mi suelo en su cartera?" / A: "No existe coste alguno para el propietario. Solo trabajamos en exclusividad para poder controlar el proceso y maximizar el precio."
5. Q: "Operan tambien fuera de la Comunidad de Madrid?" / A: "Si. Aunque Madrid concentra el 85% de nuestra cartera, gestionamos activamente suelo residencial y terciario en Andalucia, regiones de interes a las afueras de la Comunidad de Madrid."
6. Q: "Que documentacion necesitan para valorar mi suelo?" / A: "Con el plano de situacion, referencia catastral y nota simple ya podemos realizar una primera valoracion gratuita y reservada en 48 horas."

Provide equivalent EN and FR translations. Reference the `lavinreals.jsx` artifact in this repo for the full translation set.

---

## Fallback News Articles (`lib/fallback-news.ts`)

Used when all RSS feeds fail:

```typescript
export const fallbackNews = [
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
```

---

## Contact Information (`lib/constants.ts`)

```typescript
export const CONTACT = {
  pablo: { name: "Pablo Lavin", role: "Fundador y CEO", phone: "+34 (605) 237-563", email: "pablo@lavinreals.com", emailAlt: "pablo@lavinreals.es" },
  luis: { name: "Luis Gonzalez", phone: "+34 (646) 008-767", email: "luis@lavinreals.com", emailAlt: "luis@lavinreals.es" },
  office: { address: "C/Gobelas, 35, El Plantio, 28023 Madrid", area: "HQ La Florida", hours: "Lunes a Viernes 9AM-6PM", note: "solo con cita previa" },
  mainPhone: "+34 605 237 593",
  nif: "B-16449241",
};
```

---

## Translations

Create full ES / EN / FR translation objects covering every string on every page. The `lavinreals.jsx` file in this repo contains complete translations for all three languages — extract and restructure them into a clean TypeScript translations file at `lib/translations.ts`.

---

## Icon Mapping (Lucide React)

| Context | Lucide Icon | Size | Stroke |
|---|---|---|---|
| Analisis tecnico | `BarChart3` | 32 | 1.5 |
| Cartera exclusiva | `Lock` | 32 | 1.5 |
| Acompanamiento integral | `Handshake` | 32 | 1.5 |
| Madrid region | `Building2` | 40 | 1.5 |
| Otras Areas region | `Globe` | 40 | 1.5 |
| Distribucion internacional | `Globe` | 32 | 1.5 |
| Posicionamiento | `TrendingUp` | 32 | 1.5 |
| Trato confidencial | `ShieldCheck` | 32 | 1.5 |
| Address / location | `MapPin` | 28 | 1.5 |
| Phone | `Phone` | 28 | 1.5 |
| Email | `Mail` | 28 | 1.5 |
| FAQ toggle | `ChevronDown` | 20 | 2 |
| Success checkmark | `Check` | 32 | 2 |
| Menu hamburger | `Menu` | 24 | 2 |
| Menu close | `X` | 24 | 2 |
| Red internacional | `Globe` | 32 | 1.5 |
| Cartera estrategica | `Building` | 32 | 1.5 |
| Confidencialidad | `Lock` | 32 | 1.5 |
| External link | `ExternalLink` | 14 | 1.5 |
| Calendar/appointment | `CalendarCheck` | 24 | 1.5 |
| News article | `Newspaper` | 20 | 1.5 |

All icons: gold (#d6ab54) color by default. On cards with hover states, icon color can brighten to gold-light on hover.

---

## Animation Specs

- **Count-up:** IntersectionObserver at 0.3 threshold, 2200ms duration, cubic ease-out, fires once
- **Card hover:** translateY(-4px), box-shadow: 0 12px 40px rgba(214,171,84,0.08), border-color transition
- **Fade-in on scroll:** Framer Motion whileInView, opacity 0->1, y 20->0, 0.6s duration, stagger children by 0.1s
- **Marquee:** CSS keyframe translateX(0) -> translateX(-50%), 25s linear infinite
- **FAQ accordion:** Framer Motion AnimatePresence with height auto animation
- **Navbar:** Background from transparent to #000000ee on scroll (threshold: 40px), backdrop-blur 20px
- **Live dot pulse:** CSS @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} } 2s infinite

---

## SEO / Metadata

```typescript
export const metadata: Metadata = {
  title: "Lavinreals - Cartera de suelo urbanizable en Madrid y Areas Prime",
  description: "Consultora independiente lider en gestion y comercializacion discrecional de suelo urbanizable en Espana. Cartera privada para inversores, promotores y particulares.",
  openGraph: {
    locale: "es_ES",
    siteName: "Lavinreals",
  },
};
```

---

## Build & Run

```bash
npx create-next-app@latest lavinreals --typescript --tailwind --app --src-dir
cd lavinreals
npm install lucide-react framer-motion fast-xml-parser
npm run dev
```

---

## Quality Checklist

- [ ] All 5 pages render correctly with proper routing
- [ ] Language switcher works across all pages (ES/EN/FR)
- [ ] All number displays have scroll-triggered count-up animation
- [ ] Zero emojis anywhere in the rendered output
- [ ] All icons are Lucide React components with proper sizing
- [ ] Colors match brand book: gold #d6ab54, black #000, white #FFF, beige #ccbaad
- [ ] Typography: Times New Roman for headings, Jost (Futura substitute) for body
- [ ] Logo matches brand book: square frame + LR monogram + LAVIN REALS text
- [ ] Dark theme uses true black tones, not navy/blue
- [ ] Mobile responsive: hamburger menu, stacked grids, touch-friendly targets
- [ ] Contact form shows success state on submit
- [ ] FAQ accordion expands/collapses with smooth animation
- [ ] Marquee scrolls infinitely and seamlessly
- [ ] Navbar goes from transparent to solid black on scroll
- [ ] Noticias page fetches RSS feeds server-side and renders articles
- [ ] RSS failures fall back gracefully to static articles
- [ ] All 21 parcela entries render with correct data
- [ ] Filters on /cartera work correctly (city + area)
- [ ] Footer consistent across all pages with logo
- [ ] No malware, no spam content, no casino links
- [ ] Mission and Vision text from brand book used on Acerca page
- [ ] Brand marquee text from cover page included
- [ ] Vision section added to Acerca page (new content from brand book)
