import { Route, Routes } from '@angular/router';

import { SITE } from '../config/site.config';
import { NavItem, PageKind } from '../models/nav-item';
import { flattenNav } from './nav-utils';

type ComponentLoader = NonNullable<Route['loadComponent']>;

/** Componente (lazy) que renderiza cada tipo de página. */
const PAGE_LOADERS: Record<PageKind, ComponentLoader> = {
  section: () => import('../../pages/section-page/section-page').then((m) => m.SectionPage),
  glossary: () => import('../../pages/glossary-page/glossary-page').then((m) => m.GlossaryPage),
  agenda: () => import('../../pages/agenda-page/agenda-page').then((m) => m.AgendaPage),
  tour: () => import('../../pages/tour-page/tour-page').then((m) => m.TourPage),
  timeline: () => import('../../pages/timeline-page/timeline-page').then((m) => m.TimelinePage),
  about: () => import('../../pages/about-page/about-page').then((m) => m.AboutPage),
  social: () => import('../../pages/social-page/social-page').then((m) => m.SocialPage),
  contact: () => import('../../pages/contact-page/contact-page').then((m) => m.ContactPage),
};

export function pageTitle(label: string): string {
  return `${label} | ${SITE.name}`;
}

/** Genera las rutas a partir del mapa del sitio: agregar un nodo agrega su página. */
export function buildNavRoutes(items: readonly NavItem[]): Routes {
  return flattenNav(items).map((item) => ({
    path: item.path.slice(1),
    title: pageTitle(item.label),
    loadComponent: PAGE_LOADERS[item.kind],
  }));
}
