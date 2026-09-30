/** Tipo de página que se renderiza para una entrada del mapa del sitio. */
export type PageKind =
  | 'section'
  | 'glossary'
  | 'agenda'
  | 'tour'
  | 'timeline'
  | 'about'
  | 'social'
  | 'contact';

/** Nodo de configuración del mapa del sitio (se define por segmento de URL). */
export interface NavNode {
  readonly label: string;
  /** Etiqueta corta para el menú principal. */
  readonly menuLabel?: string;
  readonly segment: string;
  readonly description?: string;
  readonly image?: string;
  readonly kind?: PageKind;
  readonly children?: readonly NavNode[];
}

/** Entrada de navegación resuelta con su ruta absoluta. */
export interface NavItem extends Omit<NavNode, 'segment' | 'children' | 'kind'> {
  readonly path: string;
  readonly kind: PageKind;
  readonly children: readonly NavItem[];
}
