export const site = {
  name: 'Monkey Menorca Jiu-Jitsu',
  shortName: 'Monkey Menorca',
  phone: '+34 600 000 000',
  phoneHref: 'tel:+34600000000',
  email: 'hola@monkeymenorca.com',
  address: 'Avenida Costa del Mirador LC1, Cala Galdana, Menorca',
  instagram: 'https://instagram.com/',
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

export function whatsappUrl(message = 'Hola, me gustaría probar una clase gratis de Jiu-Jitsu en Cala Galdana.') {
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

export const schedules = [
  { days: 'Lunes · Miércoles · Viernes', time: '08:00 — 09:00', type: 'BJJ / Grappling' },
  { days: 'Lunes · Miércoles · Viernes', time: '14:00 — 15:00', type: 'BJJ / Grappling' },
  { days: 'Sábado', time: '14:00 — 15:00', type: 'Open Mat' },
] as const;

export const faqs = [
  {
    q: '¿Necesito experiencia previa?',
    a: 'No. La mayoría empieza desde cero y adaptamos cada ejercicio a tu nivel.',
  },
  {
    q: '¿Cuál es la edad mínima?',
    a: 'Escríbenos con la edad del alumno y te diremos el grupo más adecuado.',
  },
  {
    q: '¿Tengo que estar en forma?',
    a: 'No. La forma física se construye entrenando, a tu ritmo y sin presión.',
  },
  {
    q: '¿Qué ropa llevo?',
    a: 'Camiseta deportiva ajustada y pantalón corto sin bolsillos ni cremalleras.',
  },
  {
    q: '¿Necesito kimono?',
    a: 'No para tu primera clase. Confírmanos por WhatsApp qué modalidad vas a probar.',
  },
  {
    q: '¿La clase de prueba es gratis?',
    a: 'Sí, tu primera clase de prueba es gratuita.',
  },
  {
    q: '¿Hay clases para mujeres?',
    a: 'Sí. El entrenamiento es mixto, inclusivo y se empareja por nivel y tamaño.',
  },
  {
    q: '¿Pueden entrenar niños?',
    a: 'Sí, según edad y disponibilidad del grupo. Consúltanos antes de venir.',
  },
  {
    q: 'Estoy de vacaciones, ¿puedo venir?',
    a: 'Claro. Recibimos visitantes de Menorca y alumnos que pasan unos días en la isla.',
  },
  {
    q: '¿Aceptáis alumnos de otros gimnasios?',
    a: 'Sí. El Open Mat y las sesiones especiales están abiertos con aviso previo.',
  },
] as const;
