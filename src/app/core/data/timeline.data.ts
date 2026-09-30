import { TimelineEntry } from '../models/content';

// Datos de ejemplo por ruta: reemplazar por los hitos oficiales.
export const TIMELINES: Readonly<Record<string, readonly TimelineEntry[]>> = {
  '/patrimonio-landivariano/momentum': [
    { year: '1961', title: 'Fundación', description: 'Inicio de la Universidad Rafael Landívar.' },
    { year: 'Década 1970', title: 'Hito por definir', description: 'Descripción del hito.' },
    { year: 'Década 1990', title: 'Hito por definir', description: 'Descripción del hito.' },
    { year: '2021', title: '60 Aniversario', description: 'Celebración de seis décadas de historia.' },
  ],
  '/patrimonio-landivariano/60-aniversario/evolucion-historica': [
    { year: '1961', title: 'Primeras sedes', description: 'Descripción de la etapa arquitectónica.' },
    { year: 'Década 1970', title: 'Campus Central', description: 'Descripción de la etapa arquitectónica.' },
    { year: '2021', title: 'Campus actual', description: 'Descripción de la etapa arquitectónica.' },
  ],
};
