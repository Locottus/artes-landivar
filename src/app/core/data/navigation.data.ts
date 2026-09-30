import { NavNode } from '../models/nav-item';
import { buildNav } from '../navigation/nav-utils';

/**
 * Mapa del sitio (Propuesta 2026). Fuente única de verdad para el menú,
 * las rutas, el breadcrumb, los submenús de sección y el buscador.
 */
const SITE_MAP_CONFIG: readonly NavNode[] = [
  {
    label: 'Museo Virtual Landivariano',
    menuLabel: 'Museo Virtual',
    segment: 'museo-virtual',
    description: 'Obras plásticas, glosario, agenda y exposiciones del Museo Virtual Landivariano.',
    children: [
      {
        label: 'Obras Plásticas',
        segment: 'obras-plasticas',
        description: 'Obras de alto valor, colecciones y autores del acervo landivariano.',
        children: [
          { label: 'Alto valor', segment: 'alto-valor', description: 'Piezas destacadas del acervo.' },
          {
            label: 'Colecciones',
            segment: 'colecciones',
            description: 'Pintura, escultura, murales y fotografía.',
            children: [
              { label: 'Pintura', segment: 'pintura' },
              { label: 'Escultura', segment: 'escultura' },
              { label: 'Murales', segment: 'murales' },
              { label: 'Fotografía', segment: 'fotografia' },
            ],
          },
          { label: 'Autores', segment: 'autores', description: 'Artistas representados en el museo.' },
        ],
      },
      {
        label: 'GlosariArte',
        segment: 'glosariarte',
        kind: 'glossary',
        description: 'Glosario de términos de arte ordenado alfabéticamente.',
      },
      {
        label: 'Agenda del Centro y Sugerencias',
        segment: 'agenda',
        kind: 'agenda',
        description: 'Actividades del Centro y espacio para compartir tus sugerencias.',
      },
      { label: 'Nación de Sueños', segment: 'nacion-de-suenos', description: 'Exposición Nación de Sueños.' },
      {
        label: 'Patrimonio del semestre',
        segment: 'patrimonio-del-semestre',
        description: 'Pieza patrimonial destacada durante el semestre.',
      },
    ],
  },
  {
    label: 'Patrimonio Cultural Guatemalteco',
    menuLabel: 'Patrimonio GT',
    segment: 'patrimonio-guatemalteco',
    description: 'Bienes de Interés Cultural y Patrimonio Cultural Inmaterial de Guatemala.',
    children: [
      {
        label: 'Bien de Interés Cultural (BIC)',
        segment: 'bic',
        description: 'Qué es un BIC, Ermitas de la Antigua Guatemala y tours virtuales 360°.',
        children: [
          { label: 'Ermitas de la Antigua Guatemala', segment: 'ermitas-antigua-guatemala' },
          {
            label: 'Tours virtuales 360°',
            segment: 'tours-360',
            description: 'Recorridos virtuales por las ermitas de la Antigua Guatemala.',
            children: [
              { label: 'Capilla San Jerónimo', segment: 'capilla-san-jeronimo', kind: 'tour' },
              { label: 'Espíritu Santo', segment: 'espiritu-santo', kind: 'tour' },
              { label: 'Manchén', segment: 'manchen', kind: 'tour' },
              {
                label: 'Nuestra Señora de los Dolores del Cerro',
                segment: 'dolores-del-cerro',
                kind: 'tour',
              },
              { label: 'Santa Piedra de la Cruz', segment: 'santa-piedra-de-la-cruz', kind: 'tour' },
              { label: 'San Jerónimo Recolecto', segment: 'san-jeronimo-recolecto', kind: 'tour' },
            ],
          },
        ],
      },
      {
        label: 'Patrimonio Cultural Inmaterial (PCI)',
        segment: 'pci',
        description: 'Tradiciones y saberes vivos de Guatemala.',
        children: [
          { label: 'Barriletes de Santiago Sacatepéquez', segment: 'barriletes-santiago-sacatepequez' },
          { label: 'Cacao', segment: 'cacao' },
        ],
      },
    ],
  },
  {
    label: 'Patrimonio Cultural Landivariano',
    menuLabel: 'Patrimonio URL',
    segment: 'patrimonio-landivariano',
    description: 'Historia, arte y memoria de la Universidad Rafael Landívar.',
    children: [
      {
        label: '60 Aniversario URL',
        segment: '60-aniversario',
        description: 'Seis décadas de historia landivariana.',
        children: [
          {
            label: 'Evolución Histórica y Arquitectónica URL',
            segment: 'evolucion-historica',
            kind: 'timeline',
          },
          { label: 'Momentos Landívar', segment: 'momentos-landivar' },
          { label: 'Capilla Santa Sofía (tour 360°)', segment: 'capilla-santa-sofia', kind: 'tour' },
        ],
      },
      { label: 'Galería Rectores URL', segment: 'galeria-rectores' },
      { label: 'Centro de Artes Landívar', segment: 'centro-de-artes' },
      { label: 'Línea de tiempo MOMENTUM', segment: 'momentum', kind: 'timeline' },
      { label: 'Memorias: Laboratorio Teatral URL', segment: 'memorias-laboratorio-teatral' },
    ],
  },
  {
    label: 'Bicentenario GT',
    menuLabel: 'Bicentenario',
    segment: 'bicentenario',
    description: 'Contenidos conmemorativos del Bicentenario de Guatemala.',
    children: [
      { label: 'Himno Nacional', segment: 'himno-nacional' },
      { label: 'Galería Otto Becker Meyer', segment: 'galeria-otto-becker-meyer' },
    ],
  },
  {
    label: 'Acerca del Museo',
    menuLabel: 'Acerca',
    segment: 'acerca',
    kind: 'about',
    description: 'Misión, visión e historia del Centro Virtual del Patrimonio.',
  },
  {
    label: 'Redes Sociales',
    menuLabel: 'Redes',
    segment: 'redes-sociales',
    kind: 'social',
    description: 'Síguenos en nuestras redes sociales.',
  },
  {
    label: 'Contacto',
    segment: 'contacto',
    kind: 'contact',
    description: 'Correo y extensiones del Centro Virtual del Patrimonio.',
  },
];

export const SITE_MAP = buildNav(SITE_MAP_CONFIG);
