export interface GlossaryTerm {
  readonly term: string;
  readonly definition: string;
}

export type AgendaTag = 'Exposición' | 'Taller' | 'Conferencia' | 'Visita guiada';

export interface AgendaEvent {
  readonly id: string;
  readonly title: string;
  /** Fecha ISO 8601 (yyyy-mm-dd). */
  readonly date: string;
  readonly tag: AgendaTag;
  readonly location: string;
  readonly description: string;
}

export interface TimelineEntry {
  readonly year: string;
  readonly title: string;
  readonly description: string;
}

export interface SocialLink {
  readonly label: string;
  readonly url: string;
}

export interface ContactExtension {
  readonly area: string;
  readonly extension: string;
}
