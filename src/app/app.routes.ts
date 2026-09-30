import { Routes } from '@angular/router';

import { SITE } from './core/config/site.config';
import { SITE_MAP } from './core/data/navigation.data';
import { buildNavRoutes, pageTitle } from './core/navigation/nav-routes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: `${SITE.name} | ${SITE.institution}`,
    loadComponent: () => import('./pages/home-page/home-page').then((m) => m.HomePage),
  },
  {
    path: 'buscar',
    title: pageTitle('Buscar'),
    loadComponent: () => import('./pages/search-page/search-page').then((m) => m.SearchPage),
  },
  ...buildNavRoutes(SITE_MAP),
  {
    path: '**',
    title: pageTitle('Página no encontrada'),
    loadComponent: () =>
      import('./pages/not-found-page/not-found-page').then((m) => m.NotFoundPage),
  },
];
