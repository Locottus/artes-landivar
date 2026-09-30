import { AgendaEvent, AgendaTag } from '../models/content';

export const AGENDA_TAGS: readonly AgendaTag[] = ['Exposición', 'Taller', 'Conferencia', 'Visita guiada'];

// Datos de ejemplo: reemplazar por la agenda real (API o JSON).
export const AGENDA_EVENTS: readonly AgendaEvent[] = [
  {
    id: 'evt-1',
    title: 'Inauguración de exposición temporal',
    date: '2026-10-15',
    tag: 'Exposición',
    location: 'Campus Central',
    description: 'Presentación de la nueva muestra del Museo Virtual Landivariano.',
  },
  {
    id: 'evt-2',
    title: 'Taller de conservación preventiva',
    date: '2026-10-22',
    tag: 'Taller',
    location: 'Centro de Artes Landívar',
    description: 'Introducción a buenas prácticas de conservación de bienes culturales.',
  },
  {
    id: 'evt-3',
    title: 'Conversatorio sobre patrimonio inmaterial',
    date: '2026-11-05',
    tag: 'Conferencia',
    location: 'Modalidad virtual',
    description: 'Diálogo sobre tradiciones vivas de Guatemala.',
  },
  {
    id: 'evt-4',
    title: 'Recorrido guiado por la colección',
    date: '2026-11-12',
    tag: 'Visita guiada',
    location: 'Campus Central',
    description: 'Visita guiada por obras destacadas del acervo landivariano.',
  },
];
