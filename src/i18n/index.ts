export const locales = ['es', 'ca', 'en'] as const;
export type Locale = (typeof locales)[number];

export const languageNames: Record<Locale, string> = {
  es: 'Castellano',
  ca: 'Català',
  en: 'English',
};

export const ui = {
  es: {
    navLabel: 'Navegación principal',
    mobileNavLabel: 'Navegación móvil',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    skip: 'Saltar al contenido',
    freeClass: 'Clase gratis',
    tryFreeClass: 'Probar una clase gratis',
    contact: 'Contacto',
    explore: 'Explora',
    findUs: 'Encuéntranos',
    language: 'Idioma',
    mapTitle: 'Mapa de Monkey Menorca Jiu-Jitsu en Cala Galdana',
    whatsappLabel: 'Probar una clase gratis por WhatsApp',
    ticker: 'DISCIPLINA · TÉCNICA · RESPETO · COMUNIDAD · CALA GALDANA · MENORCA · DISCIPLINA · TÉCNICA · RESPETO · COMUNIDAD',
    defaultTitle: 'Jiu-Jitsu brasileño en Cala Galdana, Menorca',
    defaultDescription: 'Club cercano y técnico de BJJ, No-Gi y Grappling en Cala Galdana. Empieza desde cero con una clase gratuita.',
    defaultWhatsapp: 'Hola, me gustaría probar una clase gratis de Jiu-Jitsu en Cala Galdana.',
    nav: [
      ['/', 'Inicio'],
      ['/clases', 'Clases'],
      ['/probar-clase', 'Probar clase gratuita'],
      ['/horarios', 'Horarios y ubicación'],
      ['/entrenadores', 'Entrenadores'],
      ['/comunidad', 'Comunidad'],
      ['/contacto', 'Contacto'],
    ],
    schedules: [
      ['Horario de mañana', '08:00 — 09:00', 'Clase por nivel'],
      ['Horario de mediodía', '14:00 — 15:00', 'Clase por nivel'],
      ['Sábado', '14:00 — 15:00', 'Open Mat'],
    ],
  },
  ca: {
    navLabel: 'Navegació principal',
    mobileNavLabel: 'Navegació mòbil',
    openMenu: 'Obrir menú',
    closeMenu: 'Tancar menú',
    skip: 'Saltar al contingut',
    freeClass: 'Classe gratis',
    tryFreeClass: 'Prova una classe gratis',
    contact: 'Contacte',
    explore: 'Explora',
    findUs: 'Troba’ns',
    language: 'Idioma',
    mapTitle: 'Mapa de Monkey Menorca Jiu-Jitsu a Cala Galdana',
    whatsappLabel: 'Provar una classe gratis per WhatsApp',
    ticker: 'DISCIPLINA · TÈCNICA · RESPECTE · COMUNITAT · CALA GALDANA · MENORCA · DISCIPLINA · TÈCNICA · RESPECTE · COMUNITAT',
    defaultTitle: 'Jiu-Jitsu brasiler a Cala Galdana, Menorca',
    defaultDescription: 'Club proper i tècnic de BJJ, No-Gi i Grappling a Cala Galdana. Comença des de zero amb una classe gratuïta.',
    defaultWhatsapp: 'Hola, m’agradaria provar una classe gratis de Jiu-Jitsu a Cala Galdana.',
    nav: [
      ['/', 'Inici'],
      ['/clases', 'Classes'],
      ['/probar-clase', 'Prova una classe gratis'],
      ['/horarios', 'Horaris i ubicació'],
      ['/entrenadores', 'Entrenadors'],
      ['/comunidad', 'Comunitat'],
      ['/contacto', 'Contacte'],
    ],
    schedules: [
      ['Horari de matí', '08:00 — 09:00', 'Classe per nivell'],
      ['Horari de migdia', '14:00 — 15:00', 'Classe per nivell'],
      ['Dissabte', '14:00 — 15:00', 'Open Mat'],
    ],
  },
  en: {
    navLabel: 'Main navigation',
    mobileNavLabel: 'Mobile navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skip: 'Skip to content',
    freeClass: 'Free class',
    tryFreeClass: 'Try a free class',
    contact: 'Contact',
    explore: 'Explore',
    findUs: 'Find us',
    language: 'Language',
    mapTitle: 'Map of Monkey Menorca Jiu-Jitsu in Cala Galdana',
    whatsappLabel: 'Try a free class via WhatsApp',
    ticker: 'DISCIPLINE · TECHNIQUE · RESPECT · COMMUNITY · CALA GALDANA · MENORCA · DISCIPLINE · TECHNIQUE · RESPECT · COMMUNITY',
    defaultTitle: 'Brazilian Jiu-Jitsu in Cala Galdana, Menorca',
    defaultDescription: 'A friendly, technical BJJ, No-Gi and Grappling club in Cala Galdana. Start from scratch with a free class.',
    defaultWhatsapp: 'Hi, I would like to try a free Jiu-Jitsu class in Cala Galdana.',
    nav: [
      ['/', 'Home'],
      ['/clases', 'Classes'],
      ['/probar-clase', 'Free trial class'],
      ['/horarios', 'Schedule and location'],
      ['/entrenadores', 'Coaches'],
      ['/comunidad', 'Community'],
      ['/contacto', 'Contact'],
    ],
    schedules: [
      ['Morning schedule', '08:00 — 09:00', 'Level-based class'],
      ['Midday schedule', '14:00 — 15:00', 'Level-based class'],
      ['Saturday', '14:00 — 15:00', 'Open Mat'],
    ],
  },
} as const;

export function getLocale(url: URL | string): Locale {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  return firstSegment === 'ca' || firstSegment === 'en' ? firstSegment : 'es';
}

export function stripLocale(pathname: string): string {
  const stripped = pathname.replace(/^\/(ca|en)(?=\/|$)/, '');
  return stripped || '/';
}

export function localizedPath(path: string, locale: Locale): string {
  const cleanPath = stripLocale(path);
  if (locale === 'es') return cleanPath;
  return cleanPath === '/' ? `/${locale}/` : `/${locale}${cleanPath}`;
}

export function languageAlternates(pathname: string) {
  return locales.map((locale) => ({
    locale,
    label: languageNames[locale],
    href: localizedPath(pathname, locale),
  }));
}

