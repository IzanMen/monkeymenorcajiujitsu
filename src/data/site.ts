import type { Locale } from '../i18n';
import { ui } from '../i18n';

export const site = {
  name: 'Monkeymenorcajiujitsu',
  displayName: 'Monkey Menorca Jiu-Jitsu',
  shortName: 'Monkey Menorca',
  legalName: 'Monkeyboatsantader',
  taxId: 'B44735066',
  phone: '+34 662 435 842',
  phoneHref: 'tel:+34662435842',
  whatsappNumber: '34662435842',
  email: 'Salvadorpinto1978@gmail.com',
  address: 'Avenida Costa del Mirador LC1, Cala Galdana, Menorca',
  legalAddress: 'Calle Alta 49, Santander',
  privacyEmail: 'Salvadorpinto1978@gma.com',
  instagram:
    'https://www.instagram.com/monkeymenorcajiujitsu?igsh=MW93dngwamcybnR4ZA%3D%3D&utm_source=qr',
  serviceLanguages: ['Castellano', 'Catalán', 'Inglés'],
  websiteLanguages: ['Castellano', 'Inglés'],
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=Avenida+Costa+del+Mirador+LC1%2C+Cala+Galdana%2C+Menorca',
  mapEmbed:
    'https://www.google.com/maps?q=Avenida%20Costa%20del%20Mirador%20LC1%2C%20Cala%20Galdana%2C%20Menorca&output=embed',
} as const;

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/clases', label: 'Clases' },
  { href: '/probar-clase', label: 'Probar clase gratuita' },
  { href: '/horarios', label: 'Horarios y ubicación' },
  { href: '/entrenadores', label: 'Entrenadores' },
  { href: '/comunidad', label: 'Comunidad' },
  { href: '/contacto', label: 'Contacto' },
] as const;

export function whatsappUrl(message?: string, locale: Locale = 'es') {
  const text = message ?? ui[locale].defaultWhatsapp;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const schedules = [
  { days: 'Horario de mañana', time: '08:00 — 09:00', type: 'Clase por nivel' },
  { days: 'Horario de mediodía', time: '14:00 — 15:00', type: 'Clase por nivel' },
  { days: 'Sábado', time: '14:00 — 15:00', type: 'Open Mat' },
] as const;

export const faqs = [
  {
    q: '¿Puedo empezar sin experiencia?',
    a: 'Sí. No es necesario tener experiencia previa: puedes empezar desde cero.',
  },
  {
    q: '¿Hay una edad mínima?',
    a: 'No hay una edad mínima establecida. Los grupos se organizan por nivel.',
  },
  {
    q: '¿Necesito estar en buena forma?',
    a: 'No. El objetivo es que cualquier persona pueda dar el primer paso sin miedo en un ambiente cercano, seguro y acogedor.',
  },
  {
    q: '¿Qué ropa tengo que llevar?',
    a: 'Trae chanclas, ropa limpia para entrenar y ven aseado, con uñas cortas, sin heridas abiertas, síntomas contagiosos, piercings, joyas o accesorios.',
  },
  {
    q: '¿Puedo probar una clase?',
    a: 'Sí. La clase de prueba es gratuita y no tiene condiciones.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'Los precios no se publican en la web. Contacta por WhatsApp o por teléfono para recibir información.',
  },
  {
    q: '¿Necesito comprar un kimono?',
    a: 'El préstamo de kimono o material para la primera clase depende de la disponibilidad. Consúltalo antes de venir.',
  },
  {
    q: '¿Hay clases para niños?',
    a: 'Monkey Menorca Jiu-Jitsu recibe a niños y adolescentes. Los grupos se organizan por nivel.',
  },
  {
    q: '¿Hay clases para mujeres?',
    a: 'Sí. El gimnasio se dirige al público general y quiere acercar el Jiu-Jitsu a todas las personas.',
  },
  {
    q: '¿Puedo entrenar durante mis vacaciones?',
    a: 'Sí. Los visitantes y turistas forman parte del público al que se dirige el gimnasio.',
  },
  {
    q: '¿Puedo asistir si entreno en otro gimnasio?',
    a: 'Consulta por WhatsApp o por teléfono antes de venir, especialmente si quieres asistir al Open Mat.',
  },
] as const;
